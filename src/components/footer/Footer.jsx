import React from "react";
import "./Footer.css";
import git from "../../images/github (1).png";
import instagram from "../../images/instagram (1).png";
import linkedln from "../../images/linkedin.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={git} alt="git" />
          <img src={instagram} alt="instagram" />
          <img src={linkedln} alt="linkedln" />
        </div>

        <div className="logo-f">
          <span>Built and deployed by ifeanyi</span>
        </div>
      </div>

      <div className="blur blur-footer1"></div>
      <div className="blur blur-footer2"></div>
    </div>
  );
};

export default Footer;
