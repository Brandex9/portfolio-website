import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/me-about.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="minesweeper" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Minesweeper</h3>
            <a
              href="https://github.com/Culossus/Minesweeper"
              className="btn"
              target="_blank"
            >
              Github link
            </a>
            <a
              href="https://culossus.github.io/Minesweeper/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
