import React from "react";
import { Link } from "react-router-dom";
import shape1 from "../images/footer/shape-1.svg";
import shape2 from "../images/footer/shape-2.svg";
import shape3 from "../images/footer/shape-3.svg";
import logo from "../images/logo/logo.png";
import ayroui from "../images/brands/ayroui.svg";
import ecommerce from "../images/brands/ecommerce-html.svg";
import graygrids from "../images/brands/graygrids.svg";
import lineicons from "../images/brands/lineicons.svg";
import uideck from "../images/brands/uideck.svg";
import tailwindtemplates from "../images/brands/tailwindtemplates.svg";

export default function Footer() {
  return (
    <footer className={`ud-footer wow fadeInUp `} data-wow-delay=".15s">
      <div className="shape shape-1">
        <img src={shape1} alt="shape" />
      </div>
      <div className="shape shape-2">
        <img src={shape2} alt="shape" />
      </div>
      <div className="shape shape-3">
        <img src={shape3} alt="shape" />
      </div>
      <div className="ud-footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="ud-widget">
                <Link className="ud-footer-logo">
                  <img src={logo} alt="logo" />
                </Link>
                <p className="ud-widget-desc">
                  We create digital experiences for brands and companies by
                  using technology.
                </p>
                <ul className="ud-widget-socials oll">
                  <li>
                    <Link>
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="bi bi-twitter-x"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="ud-widget">
                <h5 className="ud-widget-title">About Us</h5>
                <ul className="ud-widget-links oll">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/pricing"}>Pricing</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"/TermsAndConditions"}>Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to={"/Policy"}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div className="ud-widget">
                <h5 className="ud-widget-title">Features</h5>
                <ul className="ud-widget-links oll">
                  <li>
                    <Link>Advanced Automated AI Historical Ticket Search</Link>
                  </li>
                  <li>
                    <Link>InteliSearch</Link>
                  </li>
                  <li>
                    <Link>AskAI</Link>
                  </li>
                  <li>
                    <Link>Advanced Actionable Insights</Link>
                  </li>
                  <li>
                    <Link>Surveys</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-8 col-sm-10">
              <div className="ud-widget">
                <h5 className="ud-widget-title">Contact us</h5>
                <ul className="ud-widget-links oll">
                  <li>
                    <p style={{ color: "white" }}>
                      Pytron Inc. 447 Sutter St Ste 405 #671 San Francisco, CA
                      94108
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
