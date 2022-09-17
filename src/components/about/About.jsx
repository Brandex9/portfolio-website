import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaMedal } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaMedal className="about__icon" />
              <h5>Experience</h5>
              <small>placeholder years</small>
            </article>
            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects</h5>
              <small>6</small>
            </article>
            <article className="about__card">
              <FaMedal className="about__icon" />
              <h5>Experience</h5>
              <small>placeholder years</small>
            </article>
          </div>

          <p>
            Software developer passionate about exploring ways technology can
            provide practical solutions to everyday problems. Here I explore
            different programming languages and utilize the knowledge gained to
            make simple projects.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
