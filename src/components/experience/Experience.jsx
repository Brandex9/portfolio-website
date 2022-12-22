import React from "react";
import "./experience.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I use</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__detail-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__detail-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__detail-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__detail-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__detail-icon" />
              <div>
                <h4>Redux</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backeend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__detail-icon" />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__detail-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__detail-icon" />
              <div>
                <h4>PostgresSQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__detail-icon" />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__detail-icon" />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
          </div>
          <div className="experience__content">
            <article className="experience__details"></article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
