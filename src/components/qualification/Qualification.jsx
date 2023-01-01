import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              ToggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick = {()=> toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              ToggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            } 
            onClick = {()=> toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              ToggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineering</h3>
                <span className="qualification__subtitle">Moringa-School</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Security Intelligence Analyst Certification
                </h3>
                <span className="qualification__subtitle">IBM</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Diploma in Information Technology
                </h3>
                <span className="qualification__subtitle">
                  Jomo Kenyatta University of Science & Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2016 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Kenya Certificate of Secondary Education
                </h3>
                <span className="qualification__subtitle">
                  Kairi Boys' High School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2009 - 2012
                </div>
              </div>
            </div>
          </div>

          {/* ================= Experience SECTION =========== */}

          <div  className={
              ToggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  IT support Techncian Intern
                </h3>
                <span className="qualification__subtitle">
                  National Hospital Insurance Fund
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Unipolar Insurance Brokers Limited</h3>
                <span className="qualification__subtitle">Office Assistant</span>
                <div className="qualification__calender"><i className="uil uil-calendar-alt"></i>2015</div>
              </div>

             


            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Diploma in Information Technology</h3>
                <span className="qualification__subtitle">Jomo Kenyatta University of Science & Technology</span>
                <div className="qualification__calender"><i className="uil uil-calendar-alt"></i>2016 - 2019</div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>


            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
