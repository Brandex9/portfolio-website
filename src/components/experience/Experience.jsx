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
              <AiOutlineCheckCircle />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>Redux</h4>
            </article>
          </div>
        </div>
        <div className="experience__backeend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>Node JS</h4>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>PostgresSQL</h4>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>MySQL</h4>
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
