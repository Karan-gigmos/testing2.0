import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import PricingPage from "./Components/PricingPage";
import Page404 from "./Components/Page404";
import UserRegister from "./Components/UserRegister";
import Faq from "./Components/Faq";
import TandC from "./Components/TandC";
import Policy from "./Components/Privecy";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/error" element={<Page404 />} />
        <Route path="/userregister" element={<UserRegister />} />
        <Route path="/support" element={<Faq />} />
        <Route path="/TermsAndConditions" element={<TandC />} />
        <Route path="/Policy" element={<Policy />} />
      </Routes>
    </>
  );
}
