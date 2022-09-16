import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com">
        <BsLinkedin />
      </a>
      <a href="https://github.com">
        <BsGithub />
      </a>
      <a href="https://stackoverflow.com/">
        <BsStackOverflow />
      </a>
    </div>
  );
};

export default HeaderSocials;
