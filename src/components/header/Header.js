import React, { useState } from "react";
import "./Header.css";
import Logo from "../../images/logo (1).png";
import bars from "../../images/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;

  const [menu, setMenu] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />

      {menu === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenu(true)}
        >
          <img
            src={bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenu(false)}>
            <Link
              onClick={() => setMenu(false)}
              to="home"
              span="true"
              smooth={true}
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link
              onClick={() => setMenu(false)}
              to="programs"
              span="true"
              smooth={true}
            >
              Program
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link
              onClick={() => setMenu(false)}
              to="reasons"
              span="true"
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link
              onClick={() => setMenu(false)}
              to="plans"
              span="true"
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link
              onClick={() => setMenu(false)}
              to="testimonials"
              span="true"
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link
              onClick={() => setMenu(false)}
              to="join-us"
              span="true"
              smooth={true}
            >
              contact us
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
