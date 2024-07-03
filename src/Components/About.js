import React from "react";
import about from "../images/about/about-image.svg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="ud-about">
      <div className="container">
        <div className="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
          <div className="ud-about-content-wrapper">
            <div className="ud-about-content">
              <span className="tag">About Us</span>
              <h2>Brilliant Toolkit to Build Nextgen Website Faster.</h2>
              <p>
                The main ‘thrust’ is to focus on educating attendees on how to
                best protect highly vulnerable business applications with
                interactive panel discussions and roundtables led by subject
                matter experts.
              </p>

              <p>
                The main ‘thrust’ is to focus on educating attendees on how to
                best protect highly vulnerable business applications with
                interactive panel.
              </p>
              <Link className="ud-main-btn">Learn More</Link>
            </div>
          </div>
          <div className="ud-about-image">
            <img src={about} alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
}
