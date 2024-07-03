import React from "react";
import shape from "../images/faq/shape.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Faq() {
  return (
    <>
      <>
        <Navbar />
      </>
      <section id="faq" className="ud-faq">
        <div className="shape">
          <img src={shape} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-section-title text-center mx-auto">
                <span>FAQ</span>
                <h2>Any Questions? Answered</h2>
                <p>
                  At TopCX.ai, we strive to answer all your queries and provide
                  detailed information about our modules and features. Explore
                  our frequently asked questions to learn more about how
                  TopCX.ai can enhance your support operations and improve
                  customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
                <div className="accordion">
                  <button
                    className="ud-faq-btn collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>
                      What is the TopAgent Module and how does it help support
                      agents?
                    </span>
                  </button>
                  <div id="collapseOne" className="accordion-collapse collapse">
                    <div className="ud-faq-body">
                      The TopAgent Module is a core component of TopCX.ai
                      designed to assist support agents in resolving tickets
                      efficiently. It offers automatic resolution suggestions by
                      analyzing historical ticket data and matching current
                      issues with past resolutions. Additionally, agents can
                      manually search historical tickets for similar issues and
                      use the TopAskAI feature to ask questions and get
                      contextually relevant answers from the company’s knowledge
                      base.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
                <div className="accordion">
                  <button
                    className="ud-faq-btn collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>
                      How does the TopSmartResponse Module enhance
                      agent-customer communication?
                    </span>
                  </button>
                  <div id="collapseTwo" className="accordion-collapse collapse">
                    <div className="ud-faq-body">
                      The TopSmartResponse Module helps agents quickly form
                      email responses to customers by leveraging the context of
                      the current ticket and information provided by the
                      TopAgent Module. It generates accurate and relevant email
                      drafts, ensuring timely and consistent communication with
                      customers.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
                <div className="accordion">
                  <button
                    className="ud-faq-btn collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>What is the purpose of the TopSurvey Module?</span>
                  </button>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="ud-faq-body">
                      The TopSurvey Module focuses on capturing customer
                      feedback after ticket resolution. This feedback helps
                      evaluate and improve support performance by assessing the
                      effectiveness and efficiency of the support provided,
                      identifying areas for improvement, and enhancing overall
                      customer satisfaction.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
                <div className="accordion">
                  <button
                    className="ud-faq-btn collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                  >
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>
                      How can the advanced analytics dashboard benefit support
                      leaders?
                    </span>
                  </button>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                  >
                    <div className="ud-faq-body">
                      The advanced analytics dashboard provides support leaders
                      with actionable insights and detailed analysis of support
                      operations. It offers comprehensive data on various
                      metrics, enabling leaders to identify trends, pinpoint
                      areas for improvement, and make data-driven decisions. The
                      dashboard also helps analyze the performance of individual
                      agents and the support team, recognizing top performers,
                      addressing training needs, and optimizing resource
                      allocation.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
                <div className="accordion">
                  <button
                    className="ud-faq-btn collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                  >
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>
                      What is the TopAskAI feature and how does it work?
                    </span>
                  </button>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                  >
                    <div className="ud-faq-body">
                      The TopAskAI feature allows agents to ask questions
                      directly related to their current tickets. Using
                      generative AI, TopAskAI processes the company’s knowledge
                      base—including PDF/Word documents, text files, websites,
                      and other document forms—to provide accurate and
                      contextually relevant answers. This ensures agents have
                      access to comprehensive information, improving the quality
                      of their responses.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <>
        <Footer />
      </>
    </>
  );
}
