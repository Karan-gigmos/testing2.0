import React from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <section id="pricing" className="ud-pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title mx-auto text-center">
              <span>Pricing</span>
              <h2>Our Pricing Plans</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-0 align-items-center justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing first-item wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="ud-pricing-header">
                <h3>STARTER</h3>
                <h4>$ 10/mo</h4>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  <li>AskAI: 10 chats/day per agent</li>
                  <li>Intelli-Search: 2 regenerates/day per agent</li>
                  <li>Agents Limit: 10</li>
                  <li>Historical Ticket Ingestion: 5000</li>
                  <li>Analytics Dashboard: Past 3 weeks</li>
                  <li>TopCX Surveys: 50 /Month</li>
                  <li>Smart AI Response: 10 Response/day per agent</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                {/* <Link className="ud-main-btn ud-border-btn">Purchase Now</Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing active wow fadeInUp"
              data-wow-delay=".1s"
            >
              <span className="ud-popular-tag">POPULAR</span>
              <div className="ud-pricing-header">
                <h3>STANDARD</h3>
                <h4>$ 15/mo</h4>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  <li>AskAI: 30 chats/day per agent</li>
                  <li>Intelli-Search: 5 regenerates/day per agent</li>
                  <li>Agents Limit: 50</li>
                  <li>Historical Ticket Ingestion: 15000</li>
                  <li>Analytics Dashboard: Past 1 Year</li>
                  <li>TopCX Surveys: Unlimited</li>
                  <li>Smart AI Response: 20 Response/day per agent</li>
                  <li>Topic Analysis</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                {/* <Link className="ud-main-btn ud-white-btn">Purchase Now</Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing last-item wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="ud-pricing-header">
                <h3>Enterprise</h3>
                <h4>Contact us</h4>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  {/* <li>AskAI: Custom chats/day per agent</li>
                  <li>Intelli-Search: Custom regenerates/day per agent</li>
                  <li>Agents Limit: Custom</li>
                  <li>Historical Ticket Ingestion: Custom</li>
                  <li>Analytics Dashboard: Past 1 Year</li>
                  <li>TopCX Surveys: Unlimited</li>
                  <li>Smart AI Response: Custom Response/day per agent</li>
                  <li>Topic Analysis</li> */}
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                {/* <Link className="ud-main-btn ud-border-btn">Purchase Now</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
