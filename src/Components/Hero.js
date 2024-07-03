import React from "react";
import { Link } from "react-router-dom";
import brand from "../images/hero/brand.svg";
import shape from "../images/hero/dotted-shape.svg";
import hero from "../images/hero/Dashboard.png";

export default function Hero() {
  return (
    <section className="ud-hero" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
              <h2 className="ud-hero-title">
                Transform Your Customer Support with TopCx.ai — Elevate Your
                Zendesk with Smart AI Solutions!
              </h2>
              <p className="ud-hero-desc">
                TopCx.ai harnesses cutting-edge AI to optimize Zendesk
                operations, enabling support agents to resolve queries faster
                and more efficiently. Experience a significant boost in customer
                satisfaction and team productivity.
              </p>
              {/* <ul className="ud-hero-buttons">
                <li>
                  <Link
                    href="https://links.uideck.com/play-bootstrap-download"
                    rel="nofollow noopener"
                    target="_blank"
                    className="ud-main-btn ud-white-btn"
                  >
                    Download Now
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/uideck/play-bootstrap"
                    rel="nofollow noopener"
                    target="_blank"
                    className="ud-main-btn ud-link-btn"
                  >
                    Learn More <i className="lni lni-arrow-right"></i>
                  </Link>
                </li>
              </ul> */}
            </div>
            {/* <div
              className="ud-hero-brands-wrapper wow fadeInUp"
              data-wow-delay=".3s"
            >
              <img src={brand} alt="brand" />
            </div> */}
            <div className="ud-hero-image wow fadeInUp" data-wow-delay=".25s">
              <img src={hero} alt="hero" />
              <img src={shape} alt="shape" className="shape shape-1" />
              <img src={shape} alt="shape" className="shape shape-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
