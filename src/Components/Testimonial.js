import React, { useState, useEffect } from "react";
import axios from "axios";

const YOUR_SITE_KEY = "6Ler7topAAAAAA5HtYLaNaWcm0ZkwKFjHv1ZW1Gg";

export default function Testimonial() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState("");

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

  useEffect(() => {
    const loadRecaptcha = async () => {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadRecaptcha();

    return () => {
      const script = document.querySelector('script[src="https://www.google.com/recaptcha/api.js?render=explicit"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recaptchaToken = await window.grecaptcha.execute(YOUR_SITE_KEY, {
      action: "submit",
    });

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
            recaptchaToken: recaptchaToken,
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
  const handleRecaptchaVerify = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <section id="testimonials" className="ud-testimonials">
      <div className="container" style={{ marginBottom: "1rem" }}>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title">
                <h2>
                  Book a demo <br />
                  Love to hear from you!
                </h2>
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
  );
}
