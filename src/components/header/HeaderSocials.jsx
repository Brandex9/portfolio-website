import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/extrab9/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Culossus">
        <BsGithub />
      </a>
      <a href="https://stackoverflow.com/users/11912065/brandex">
        <BsStackOverflow />
      </a>
    </div>
  );
};

export default HeaderSocials;
