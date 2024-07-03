import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Country, State, City } from "country-state-city";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "./UserRegister.css";

export default function TicketIngestionStatus() {
  const api = "https://topcx.ai/api/backend/auth/";

  const [activeTab, setActiveTab] = useState("user");
  const [visitedTabs, setVisitedTabs] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    emailOtp: "",
    phone: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    companyPhone: "",
    companyAddress: "",
    companyZendeskSubdomain: "",
    companyCountry: "",
    companyState: "",
    companyCity: "",
    companyZipCode: "",
    acceptPolicy: false,
  });

  const REGEX = {
    NAME: /^[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)?$/,
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    PASSWORD: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    COMPANY_NAME: /^[a-zA-Z0-9 .,'&-]+$/,
    ZENDESK_SUBDOMAIN: /^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$/,
    ADDRESS: /^[a-zA-Z0-9 .,'&-]+$/,
    ZIP_CODE: /^[a-zA-Z0-9 ]{3,10}$/,
    EMAIL_OTP: /^\d{6}$/,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone: phone });
  };
  const handlePhoneChangeCP = (phone) => {
    setFormData({ ...formData, companyPhone: phone });
  };

  const handleTabClick = (newTab) => {
    setActiveTab(newTab);
    if (!visitedTabs.includes(newTab)) {
      setVisitedTabs([...visitedTabs, newTab]);
    }
  };

  //User Details
  const handleUserDetails = (e) => {
    e.preventDefault();

    if (!REGEX.NAME.test(formData.firstName)) {
      alert("Please enter a valid Name.");
      return;
    }
    if (!REGEX.NAME.test(formData.lastName)) {
      alert("Please enter a valid Name.");
      return;
    }
    if (!REGEX.EMAIL.test(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (!REGEX.PASSWORD.test(formData.password)) {
      alert(
        "Password must have at least 8 characters, 1 capital letter, 1 number, and 1 special character."
      );
      return;
    }
    if (!REGEX.PASSWORD.test(formData.confirmPassword)) {
      alert(
        "Password must have at least 8 characters, 1 capital letter, 1 number, and 1 special character."
      );
      return;
    }
    if (formData.phone.trim().length <= 5 || formData.phone === "") {
      alert("Please enter valid Phone No.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    handleTabClick("company");
  };

  //Company Details

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCountries(Country.getAllCountries());
    setVisitedTabs(["user"]);
  }, []);

  const handleCountryChange = (event) => {
    setFormData({
      ...formData,
      companyCountry: event.target.value,
    });
    setStates(State.getStatesOfCountry(event.target.value));
    setCities([]);
  };

  const handleStateChange = (event) => {
    setFormData({
      ...formData,
      companyState: event.target.value,
    });
    setCities(
      City.getCitiesOfState(formData.companyCountry, event.target.value)
    );
  };

  const handleCityChange = (event) => {
    setFormData({
      ...formData,
      companyCity: event.target.value,
    });
  };

  const handleCompanyDetails = (e) => {
    e.preventDefault();

    if (!REGEX.COMPANY_NAME.test(formData.firstName)) {
      alert("Please enter a valid Company Name.");
      return;
    }
    if (!REGEX.ZENDESK_SUBDOMAIN.test(formData.companyZendeskSubdomain)) {
      alert("Please enter a valid Subdomain.");
      return;
    }
    if (!REGEX.ZIP_CODE.test(formData.companyZipCode)) {
      alert("Please enter a valid ZipCode.");
      return;
    }
    if (
      formData.companyPhone.trim().length <= 5 ||
      formData.companyPhone === ""
    ) {
      alert("Please enter valid Phone No.");
      return;
    }

    handleTabClick("acceptTnc");
  };

  //Accept Terms and Condition

  const [showModal, setShowModal] = useState(false);
  const [isLoadingOTP, setIsLoadingOTP] = useState(false);
  const [isLoadingRegistration, setIsLoadingRegistration] = useState(false);

  const dummyDataPolicyContent = `

#### Introduction

At [Your Company Name], we are committed to safeguarding the privacy and security of your data. This Data Policy outlines how we collect, use, protect, and manage your data when you interact with our services, websites, and applications.

#### Data Collection and Sources

We may collect data from various sources, including:

- **Information You Provide:** When you sign up for our services, we may collect personal information such as your name, email address, and contact details.

- **Automated Data:** We collect data automatically through cookies, log files, and other technologies when you use our websites and applications. This data may include your IP address, device information, and browsing history.

- **Third-party Sources:** We may obtain data from third-party sources, including business partners and public databases, to enhance our services and verify your identity.

#### Purpose of Data Usage

We use your data for the following purposes:

- **Service Provision:** To provide and maintain our services, process transactions, and respond to your requests.

- **Personalization:** To tailor our services to your preferences, improve user experience, and display relevant content and advertisements.

- **Analytics:** To analyze user behavior, track website and application performance, and make data-driven improvements.

- **Communication:** To send you updates, notifications, and marketing materials related to our services, with the option to opt out at any time.

#### Data Protection and Security

We take data protection seriously and implement rigorous security measures to safeguard your data from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, access controls, regular security assessments, and employee training.

#### Data Retention

We retain your data only for as long as necessary to fulfill the purposes outlined in this policy. When data is no longer needed, it is securely deleted or anonymized to prevent misuse.

#### Sharing and Third Parties

We do not sell your data to third parties. However, we may share your data with trusted partners and service providers for the following purposes:

- **Service Delivery:** To assist in delivering our services, including payment processing, customer support, and data analysis.

- **Legal Compliance:** To comply with legal obligations, respond to requests from law enforcement, and protect our rights and safety.

- **Business Transactions:** In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity.

#### Compliance and Updates

We are committed to complying with applicable data protection laws and regulations. Our Data Protection Officer (DPO) ensures ongoing compliance and is available for any data-related inquiries.

This Data Policy may be updated periodically to reflect changes in our data practices, technology, and legal requirements. We encourage you to review this policy regularly to stay informed.

#### Your Rights

You have certain rights regarding your data, including:

- **Access:** You can request access to the data we hold about you.

- **Correction:** You can request corrections to inaccurate or incomplete data.

- **Deletion:** You can request the deletion of your data under certain circumstances.

- **Objection:** You can object to the processing of your data for specific purposes.

- **Data Portability:** You can request a copy of your data in a structured, machine-readable format.

To exercise your rights or make inquiries about your data, please contact our Data Protection Officer at [DPO Email].

#### Conclusion

By using our services, you consent to the data practices described in this policy. We strive to maintain the highest standards of data privacy and security to protect both our customers and their data.

If you have any questions or concerns about this Data Policy or our data practices, please contact us. Your privacy matters to us, and we are committed to ensuring the transparency and security of your data.

`;

  const handleCheckboxChangeConfirm = (e) => {
    setFormData({
      ...formData,
      acceptPolicy: true,
    });
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    setIsLoadingOTP(true);
    try {
      // Make an API call to send OTP
      await axios.post(`${api}/sendOtp`, {
        email: formData.email,
        subdomain: formData.companyZendeskSubdomain,
      });
      setShowModal(true);
    } catch (error) {
      toast.error(error.response?.data?.detail);
    } finally {
      setIsLoadingOTP(false);
    }
  };

  const handleRegistration = async (e) => {
    setIsLoadingRegistration(true);
    e.preventDefault();
    try {
      // Make an API call to send OTP
      await axios.post(`${api}/verifyotp_setup`, {
        email: formData.email,
        otp: formData.emailOtp,
        subdomain: formData.companyZendeskSubdomain,
        FirstName: formData.firstName,
        LastName: formData.lastName,
        password: formData.password,
        companyName: formData.companyName,
        phoneNo: formData.phone,
        orgAddress: formData.companyAddress,
        orgCity: formData.companyCity,
        orgCountry: formData.companyCountry,
        orgState: formData.companyState,
        orgPhone: formData.companyPhone,
        orgZIP: formData.companyZipCode,
        add_user: false,
      });
      setActiveTab("thankyou");
      setShowModal(false);
    } catch (error) {
      toast.error(error.response?.data?.detail);
    } finally {
      setIsLoadingRegistration(false);
    }
  };

  //Thank You

  const thankyou = `Thank you for your registration! 

To complete the process, please follow the steps outlined below. Your journey towards accessing our services is just a few clicks away. Navigate through the provided links and fill in the necessary information as prompted. This will ensure a smooth and efficient completion of your registration. We appreciate your effort in joining us and look forward to providing you with the best experience possible.
`;

  //All

  const openSameTab = (url) => {
    window.open(url, "_self", "noreferrer");
  };

  document
    ?.querySelector(".react-international-phone-input")
    ?.classList.add("w-100");
  return (
    <>
      <Navbar />
      <div className="container p-3 card my-5 register-card">
        <ul className="nav nav-justified my-3 ">
          <li className="nav-item d-flex justify-content-center connected">
            <Link
              className={`nav-link rounded-circle register-nav z-2 ${
                activeTab === "user"
                  ? "active-tab"
                  : visitedTabs.includes("user")
                  ? "visited-tab"
                  : "register-nav-default"
              }`}
            >
              <i className="bi bi-person-vcard-fill"></i>
            </Link>
          </li>
          <li className="nav-item d-flex justify-content-center connected">
            <Link
              className={`nav-link d-flex rounded-circle register-nav z-2 ${
                activeTab === "company"
                  ? "active-tab"
                  : visitedTabs.includes("company")
                  ? "visited-tab"
                  : "register-nav-default"
              } `}
            >
              <i className="bi bi-building-fill-gear"></i>
            </Link>
          </li>
          <li className="nav-item d-flex justify-content-center connected">
            <Link
              className={`nav-link d-flex rounded-circle register-nav z-2 ${
                activeTab === "acceptTnc"
                  ? "active-tab"
                  : visitedTabs.includes("acceptTnc")
                  ? "visited-tab"
                  : "register-nav-default"
              } `}
            >
              <i className="bi bi-file-earmark-text"></i>
            </Link>
          </li>
          <li className="nav-item d-flex justify-content-center">
            <Link
              className={`nav-link d-flex rounded-circle register-nav z-2 ${
                activeTab === "thankyou"
                  ? "active-tab"
                  : visitedTabs.includes("thankyou")
                  ? "visited-tab"
                  : "register-nav-default"
              } `}
            >
              <i className="bi bi-check2-circle"></i>
            </Link>
          </li>
        </ul>
        <section>
          {activeTab === "user" && (
            <div className="card my-3">
              <div className="card-header">User Details</div>
              <div className="card-body">
                <form onSubmit={handleUserDetails}>
                  <div className="container">
                    <div className="row">
                      <div className="mb-3 col-6">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          First Name
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-person"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 col-6">
                        <label for="exampleInputEmail1" className="form-label">
                          Last Name
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-person"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-3 col-6">
                        <label for="exampleInputEmail1" className="form-label">
                          Email
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-envelope-at"></i>
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 col-6">
                        <label for="exampleInputEmail1" className="form-label">
                          Phone
                        </label>

                        <PhoneInput
                          name="phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-3 col-6">
                        <label for="exampleInputEmail1" className="form-label">
                          Password
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-key"></i>
                          </span>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 col-6">
                        <label for="exampleInputEmail1" className="form-label">
                          Confirm Password
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-key"></i>
                          </span>
                          <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="btn-group mx-auto d-flex justify-content-center w-75 mt-4 mb-3"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button type="submit" className="btn btn-success">
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {activeTab === "company" && (
            <div className="card my-3">
              <div className="card-header">Company Details</div>
              <div className="card-body">
                <form onSubmit={handleCompanyDetails}>
                  <div className="container">
                    <div className="row">
                      <div className="mb-3 col-4">
                        <label for="exampleInputEmail1" className="form-label">
                          Company Name
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-building"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="companyName"
                            placeholder="Company Name"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 col-4">
                        <label for="CompanyPhone" className="form-label">
                          Phone
                        </label>

                        <PhoneInput
                          name="phone"
                          placeholder="Company Phone"
                          value={formData.companyPhone}
                          onChange={handlePhoneChangeCP}
                          required
                        />
                      </div>
                      <div className="mb-3 col-4">
                        <label for="exampleInputEmail1" className="form-label">
                          Company Zendesk Subdomain
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-globe"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="companyZendeskSubdomain"
                            placeholder="Company Zendesk Subdomain"
                            value={formData.companyZendeskSubdomain}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-3 col-12">
                        <label for="exampleInputEmail1" className="form-label">
                          Company Address
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-geo-alt"></i>
                          </span>
                          <textarea
                            className="form-control"
                            name="companyAddress"
                            placeholder="Company Address"
                            value={formData.companyAddress}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-3 col-3">
                        <label for="exampleInputEmail1" className="form-label">
                          Country
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-pin-map"></i>
                          </span>
                          <select
                            className="form-select"
                            name="companyCountry"
                            placeholder="Company Country"
                            value={formData.companyCountry}
                            onChange={handleCountryChange}
                            required
                          >
                            <option selected>Select Country</option>
                            {countries.map((country) => (
                              <option
                                key={country.isoCode}
                                value={country.isoCode}
                              >
                                {country.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 col-3">
                        <label for="exampleInputEmail1" className="form-label">
                          State
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-pin-map"></i>
                          </span>
                          <select
                            className="form-select"
                            name="companyState"
                            placeholder="Company State"
                            value={formData.companyState}
                            onChange={handleStateChange}
                            disabled={!formData.companyCountry}
                            required
                          >
                            <option value="">Select State</option>
                            {states.map((state) => (
                              <option key={state.isoCode} value={state.isoCode}>
                                {state.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 col-3">
                        <label for="exampleInputEmail1" className="form-label">
                          City
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-pin-map"></i>
                          </span>
                          <select
                            className="form-select"
                            name="companyCity"
                            placeholder="Company City"
                            value={formData.companyCity}
                            onChange={handleCityChange}
                            disabled={!formData.companyState}
                            required
                          >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                              <option key={city.name} value={city.name}>
                                {city.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 col-3">
                        <label for="exampleInputEmail1" className="form-label">
                          ZIP
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-pin-map"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="companyZipCode"
                            placeholder="Company ZIP"
                            value={formData.companyZipCode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="btn-group mx-auto d-flex justify-content-center w-75 mt-4 mb-3"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button type="submit" className="btn btn-success">
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {activeTab === "acceptTnc" && (
            <div className="card my-3">
              <div className="card-header">Confirm</div>
              <div className="card-body">
                <div className="container">
                  <h1 className="text-center">Confirm</h1>
                  <ReactMarkdown>{dummyDataPolicyContent}</ReactMarkdown>
                  <form onSubmit={handleOtp}>
                    <div className="form-check mt-3 d-flex justify-content-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={formData.checked}
                        onChange={handleCheckboxChangeConfirm}
                        required
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        &nbsp; &nbsp;Terms and Condition
                      </label>
                    </div>
                    <div
                      className="btn-group mx-auto d-flex justify-content-center w-75 mt-4 mb-3"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <button
                        type="submit"
                        className="btn btn-success"
                        disabled={isLoadingOTP}
                      >
                        {isLoadingOTP ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Modal */}
              {showModal && (
                <>
                  {/* Backdrop */}
                  <div className="modal-backdrop fade show"></div>
                  {/* Modal */}
                  <div
                    className="modal fade show"
                    tabindex="-1"
                    style={{ display: "block" }}
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="d-flex justify-content-end mb-2">
                            <button
                              type="button"
                              className="btn-close"
                              onClick={() => setShowModal(false)}
                            ></button>
                          </div>
                          <section className="container">
                            <form onSubmit={handleRegistration}>
                              <div className="mb-3">
                                <label
                                  for="exampleInputEmail1"
                                  className="form-label"
                                >
                                  Email OTP
                                </label>
                                <div className="input-group">
                                  <span className="input-group-text">
                                    <i className="bi bi-envelope-at"></i>
                                  </span>
                                  <input
                                    type="number"
                                    className="form-control"
                                    name="emailOtp"
                                    placeholder="Email OTP"
                                    value={formData.emailOtp}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                              </div>
                              <div
                                className="btn-group mx-auto d-flex justify-content-center w-75 mt-4 mb-3"
                                role="group"
                                aria-label="Basic mixed styles example"
                              >
                                <button
                                  className="btn btn-warning w-75"
                                  type="submit"
                                  disabled={isLoadingOTP}
                                  onClick={(e) => handleOtp(e)}
                                >
                                  {isLoadingOTP ? "Sending..." : "Re-send OTP"}
                                </button>
                                <button
                                  className="btn btn-success w-75"
                                  type="submit"
                                  disabled={isLoadingRegistration}
                                >
                                  {isLoadingRegistration
                                    ? "Submitting..."
                                    : "Submit"}
                                </button>
                              </div>
                            </form>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          {activeTab === "thankyou" && (
            <div className="card my-3">
              <div className="card-header">Company Details</div>
              <div className="card-body">
                <div className="container">
                  <section className="mt-3">
                    <ReactMarkdown>{thankyou}</ReactMarkdown>

                    <div
                      className="btn-group mx-auto d-flex justify-content-center w-75 mt-4 mb-3"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <Link
                        className="ud-main-btn ud-login-btn form-control mt-3"
                        style={{ width: "75%" }}
                        onClick={() => openSameTab("https://topcx.ai/admin")}
                      >
                        Login
                      </Link>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
