import React from "react";
import team1 from "../images/team/team-01.png";
import team2 from "../images/team/team-02.png";
import team3 from "../images/team/team-03.png";
import team4 from "../images/team/team-04.png";
import shape from "../images/team/shape-2.svg";
import dotted from "../images/team/dotted-shape.svg";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <section id="team" className="ud-team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title mx-auto text-center">
              <span>Our Team</span>
              <h2>Meet The Team</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".1s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src={team1} alt="team" />
                </div>

                <img src={dotted} alt="shape" className="shape shape-1" />
                <img src={shape} alt="shape" className="shape shape-2" />
              </div>
              <div className="ud-team-info">
                <h5>Puneet Narang </h5>
                <h6>Co-founder</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".15s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src={team2} alt="team" />
                </div>

                <img src={dotted} alt="shape" className="shape shape-1" />
                <img src={shape} alt="shape" className="shape shape-2" />
              </div>
              <div className="ud-team-info">
                <h5>Rohit Thakur</h5>
                <h6>Co-founder</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".2s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src={team3} alt="team" />
                </div>
                <img src={dotted} alt="shape" className="shape shape-1" />
                <img src={shape} alt="shape" className="shape shape-2" />
              </div>
              <div className="ud-team-info">
                <h5>Akash Yadav</h5>
                <h6>Python Developer</h6>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".15s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src={team2} alt="team" />
                </div>

                <img src={dotted} alt="shape" className="shape shape-1" />
                <img src={shape} alt="shape" className="shape shape-2" />
              </div>
              <div className="ud-team-info">
                <h5>Jai Sehgal</h5>
                <h6>Fron-End Developer</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".1s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src={team1} alt="team" />
                </div>

                <img src={dotted} alt="shape" className="shape shape-1" />
                <img src={shape} alt="shape" className="shape shape-2" />
              </div>
              <div className="ud-team-info">
                <h5>Karan Yadav</h5>
                <h6>Front-End Developer</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".25s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src={team4} alt="team" />
                </div>

                <img src={dotted} alt="shape" className="shape shape-1" />
                <img src={shape} alt="shape" className="shape shape-2" />
              </div>
              <div className="ud-team-info">
                <h5>Aviraj Batan</h5>
                <h6>Python Developer</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".25s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src={team4} alt="team" />
                </div>

                <img src={dotted} alt="shape" className="shape shape-1" />
                <img src={shape} alt="shape" className="shape shape-2" />
              </div>
              <div className="ud-team-info">
                <h5>Chitransh tersoliya</h5>
                <h6>Python Developer</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".25s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src={team4} alt="team" />
                </div>

                <img src={dotted} alt="shape" className="shape shape-1" />
                <img src={shape} alt="shape" className="shape shape-2" />
              </div>
              <div className="ud-team-info">
                <h5>Sanju Kumar</h5>
                <h6>Python Developer</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".25s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src={team4} alt="team" />
                </div>

                <img src={dotted} alt="shape" className="shape shape-1" />
                <img src={shape} alt="shape" className="shape shape-2" />
              </div>
              <div className="ud-team-info">
                <h5>Loveneesh Bhatnagar</h5>
                <h6>Python Developer</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".25s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src={team4} alt="team" />
                </div>

                <img src={dotted} alt="shape" className="shape shape-1" />
                <img src={shape} alt="shape" className="shape shape-2" />
              </div>
              <div className="ud-team-info">
                <h5>Asrh jethi</h5>
                <h6>Devops Engineer</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".25s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src={team4} alt="team" />
                </div>

                <img src={dotted} alt="shape" className="shape shape-1" />
                <img src={shape} alt="shape" className="shape shape-2" />
              </div>
              <div className="ud-team-info">
                <h5>Shivanshu Rai</h5>
                <h6>Python Developer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
