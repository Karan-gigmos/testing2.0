import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Page404() {
  return (
    <>
      <Navbar />
      <section className="ud-page-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-banner-content">
                <h1>404 Page</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ud-404">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-404-wrapper">
                <div className="ud-404-content">
                  <h2 className="ud-404-title">
                    404 - We couldn't find that page.
                  </h2>
                  <h5 className="ud-404-subtitle">
                    Maybe you can find what you need here?
                  </h5>
                  <ul className="ud-404-links">
                    <li>
                      <Link>Home</Link>
                    </li>
                    <li>
                      <Link>Support</Link>
                    </li>
                    <li>
                      <Link>Latest News</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
