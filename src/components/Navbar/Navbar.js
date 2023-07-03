import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import { Col } from "react-bootstrap";

function Navbar() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000000" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <Col className="nav-title">
                Flavor<span>Fusion</span>
              </Col>
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  className="nav-links"
                  onClick={() => scrollToSection("home")}
                >
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-links"
                  onClick={() => scrollToSection("menu")}
                >
                  MENU
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-links"
                  onClick={() => scrollToSection("reviews")}
                >
                  REVIEWS
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-links"
                  onClick={() => scrollToSection("contact")}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
