import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Brandon Extra
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://stackoverflow.com/users/11912065/brandex">
          Stack Overflow
        </a>
        <a href="https://www.linkedin.com/in/extrab9/">LinkedIn</a>
        <a href="https://github.com/Brandex9">Github</a>
      </div>

      <div className="footer__copyright">
        <small>&copy; </small>
      </div>
    </footer>
  );
};

export default Footer;
