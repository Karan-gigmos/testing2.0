import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.fullName) errors.fullName = "Full Name is required";
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.phone) errors.phone = "Phone is required";
    if (!values.message) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "https://ft1.cxchatgpt.ai/api/email/contact_us",
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }
        );
        alert("Message Sent!");
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } catch (error) {
        console.error("Sending message failed:", error);
        alert("Failed to send message!");
      }
    }
  };
  return (
    <>
      <Navbar />
      <section id="contact" className="ud-contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-7">
              <div className="ud-contact-content-wrapper">
                <div className="ud-contact-title">
                  <span>CONTACT US</span>
                  <h2>
                    Let’s talk about <br />
                    Love to hear from you!
                  </h2>
                </div>
                <div className="ud-contact-info-wrapper">
                  <div className="ud-single-info">
                    <div className="ud-info-icon">
                      <i className="lni lni-map-marker"></i>
                    </div>
                    <div className="ud-info-meta">
                      <h5>Our Location</h5>
                      <p>
                        Pytron Inc. 447 Sutter St Ste 405 #671 San Francisco, CA
                        94108
                      </p>
                    </div>
                  </div>
                  <div className="ud-single-info">
                    <div className="ud-info-icon">
                      <i className="lni lni-envelope"></i>
                    </div>
                    <div className="ud-info-meta">
                      <h5>How Can We Help?</h5>
                      <p>support@topcx.ai</p>
                      <p>sales@topcx.ai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div
                className="ud-contact-form-wrapper wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h3 className="ud-contact-form-title">Send us a Message</h3>
                <form className="ud-contact-form" onSubmit={handleSubmit}>
                  <div className="ud-form-group">
                    <label htmlFor="fullName">Full Name*</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                    />
                    {errors.fullName && <p>{errors.fullName}</p>}
                  </div>
                  <div className="ud-form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@yourmail.com"
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </div>
                  <div className="ud-form-group">
                    <label htmlFor="phone">Phone*</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+885 1254 5211 552"
                    />
                    {errors.phone && <p>{errors.phone}</p>}
                  </div>
                  <div className="ud-form-group">
                    <label htmlFor="message">Message*</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here"
                    ></textarea>
                    {errors.message && <p>{errors.message}</p>}
                  </div>
                  <div className="ud-form-group mb-0">
                    <button type="submit" className="ud-main-btn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
