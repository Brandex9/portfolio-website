import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pngwing.com.png";
import IMG2 from "../../assets/s-o-c-i-a-l-c-u-t-hwy3W3qFjgM-unsplash.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Minesweeper",
    github: "https://github.com/Brandex9/Minesweeper",
    demo: "https://Brandex9.github.io/Minesweeper/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Recipe App",
    github: "https://github.com/Culossus/MERN-Stack-FrontEnd",
    demo: "https://mern-recipe.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github link
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
