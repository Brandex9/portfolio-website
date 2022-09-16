import React from "react";
import "./nav.css";
import { BiHome } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
      <a href="#about">
        <BiUserCircle />
      </a>
      <a href="#experience">
        <RiContactsBook2Fill />
      </a>
      <a href="#portfolio">
        <AiOutlineProject />
      </a>
      <a href="#contact">
        <BiMessageDetail />
      </a>
      <a href="#">
        <BiHome />
      </a>
    </nav>
  );
};

export default Nav;
