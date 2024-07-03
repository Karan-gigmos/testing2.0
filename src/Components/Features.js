import React from "react";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <section id="features" className="ud-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title">
              <span>Features</span>
              <h2>Main Features of TopCx.ai</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="feature-flex" >
          <div className="col-xl-2 col-lg-2 col-sm-6">
            <div
              className="ud-single-feature wow fadeInUp"
              data-wow-delay=".1s"
            >
              <div className="ud-feature-icon">
                <i className="lni lni-gift"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">
                  Advanced AI Historical Ticket Search
                </h3>
                <p className="ud-feature-desc">
                  TopCx.ai offers a state-of-the-art historical ticket search
                  that automatically identifies the closest match to the ticket
                  an agent is currently handling and suggests potential
                  resolutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-6">
            <div
              className="ud-single-feature wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="ud-feature-icon">
                <i className="lni lni-move"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">InteliSearch</h3>
                <p className="ud-feature-desc">
                  InteliSearch empowers agents with the capability to perform
                  keyword searches on historical tickets, which are meticulously
                  indexed and structured using advanced AI-based techniques.
                  This tool enhances the accessibility and usability of
                  historical data, facilitating quicker and more effective
                  problem-solving.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-6">
            <div
              className="ud-single-feature wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="ud-feature-icon">
                <i className="lni lni-layout"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">AskAI</h3>
                <p className="ud-feature-desc">
                  AskAI AskAI allows agents to query your company's knowledge
                  base, regardless of the format—be it Word, PDF files, internal
                  or external websites. This feature ensures that agents have
                  immediate access to the information needed to answer customer
                  inquiries effectively, enhancing service quality and response
                  time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-6">
            <div
              className="ud-single-feature wow fadeInUp"
              data-wow-delay=".25s"
            >
              <div className="ud-feature-icon">
                <i className="lni lni-layers"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">
                  Advanced Actionable Insights
                </h3>
                <p className="ud-feature-desc">
                  TopCx.ai delivers advanced actionable insights by meticulously
                  analyzing customer interaction patterns and support
                  performance. This feature equips agents with strategic,
                  data-driven recommendations, enabling them to refine their
                  response methods and significantly enhance customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-6">
            <div
              className="ud-single-feature wow fadeInUp"
              data-wow-delay=".25s"
            >
              <div className="ud-feature-icon">
                <i className="lni lni-layers"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">Surveys</h3>
                <p className="ud-feature-desc">
                  TopCx.ai's Surveys feature automatically sends customizable
                  surveys to customers upon ticket resolution, allowing them to
                  provide feedback using a 5-star or 10-star rating system. This
                  tool helps gather valuable insights directly from customers,
                  enabling continuous improvement in service quality and
                  customer experience.
                </p>
                <Link className="ud-feature-link">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
