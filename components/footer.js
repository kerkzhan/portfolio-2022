import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <nav className="kp-layout-footer kp-footer">
      <a
        href={"https://github.com/kerkzhan"}
        target="_blank"
        rel="noopener noreferrer"
        className="kp-stack-12 "
      >
        <FiGithub />
      </a>

      <a
        href={"https://www.linkedin.com/in/kerkzhan/"}
        target="_blank"
        rel="noopener noreferrer"
        className="kp-stack-12  "
      >
        <FiLinkedin />
      </a>

      <div className="kp-layout-line">
        <div className="kp-line"></div>
      </div>
    </nav>
  );
};

export default Footer;
