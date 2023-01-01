import React from "react";
import "./about.css";
import AboutImg from "../../assets/images/preview.jpg";
import Info from "./Info";
import MyResume from "../../assets/Myresume.pdf";

const About = () => {
  return (
    <>
    <section className="about section" id="#about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="AboutImg" className="about__img" />
        <div className="about__data">
        <Info />

        <p className="about__description">
          A full-stack Developer. I create web pages with UI/UX user interface.
          I have years of experience and many clients are happy with the
          projects carried out.
        </p>
        <a download="" href={MyResume} className="button button--flex">
          Download Resume 📄
        </a>

      </div>
      </div>
    </section>
    </>
  );
};

export default About;
