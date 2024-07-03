import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../images/logo/logo-2.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showpass, setShowPass] = useState(false);

  const [isLoadingOTP, setIsLoadingOTP] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleOtp = async (e) => {
    setIsLoadingOTP(true);
    e.preventDefault();
    try {
      // Make an API call to your login endpoint with email and password
      const response = await axios.post(
        "https://topcx.ai/api/backend/auth/forgotSendOtp",
        {
          email: email,
        }
      );
      console.log(response);
      setShowPass(true);
    } catch (error) {
      console.error("Authentication Error:", error);
      navigate("/error");
    } finally {
      setIsLoadingOTP(false);
    }
  };
  const handleSubmit = async (e) => {
    setIsLoadingSubmit(true);
    e.preventDefault();
    try {
      // Make an API call to your login endpoint with email and password
      const response = await axios.post(
        "http://172.16.1.85:8000/forgotpassword",
        {
          email: email,
          newPassword: password,
          otp: otp,
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Authentication Error:", error);
      navigate("/error");
    } finally {
      setIsLoadingSubmit(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="ud-page-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-banner-content">
                <h1>Forgot Password Page</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ud-login">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-login-wrapper">
                <div className="ud-login-logo">
                  <img src={logo} alt="logo" />
                </div>
                <form className="ud-login-form" onSubmit={handleOtp}>
                  <div className="ud-form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                  {!showpass && (
                    <div className="ud-form-group">
                      <button
                        type="submit"
                        className="ud-main-btn w-100"
                        disabled={isLoadingOTP}
                      >
                        {isLoadingOTP ? "Sending..." : "Send OTP"}
                      </button>
                    </div>
                  )}
                </form>
                {showpass && (
                  <form className="ud-login-form" onSubmit={handleSubmit}>
                    <div className="ud-form-group">
                      <input
                        type="number"
                        name="otp"
                        placeholder="OTP"
                        value={otp}
                        onChange={handleOtpChange}
                        required
                      />
                    </div>
                    <div className="ud-form-group">
                      <input
                        type="password"
                        name="password"
                        placeholder="*********"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                    <div className="ud-form-group">
                      <button
                        type="submit"
                        className="ud-main-btn w-100"
                        disabled={isLoadingSubmit}
                      >
                        {isLoadingSubmit ? "Updating..." : "Update"}
                      </button>
                    </div>
                  </form>
                )}
                <p className="signup-option">
                  Already a member <Link to="/signin">Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
