import React, { useState, useEffect } from "react";
import Logo from "../img/j.png";

function Navbar(props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-md navbar-dark fixed-top px-2 ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand px-4" href="#top">
          <img src={Logo} alt="The Letter J" width="40" height="40" data-custom-cursor/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 px-2 mb-md-0">
            <li className="nav-item px-2">
              <a
                className="nav-link"
                aria-current="page"
                href="https://drive.google.com/file/d/147E3q8wPDad45lwNeqZE5vz-LOYZ_IvC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                data-custom-cursor
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

