import React from "react";
import Logo from "./img/j.png";
import "../styles.css";

function SmallHeader(props) {
    return (  
        <nav className="smallnav navbar-expand-md navbar-dark px-2">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a className="navbar-brand px-4" href="/">
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
                  href="https://drive.google.com/file/d/1lomHyh0YdDq-agguoIkI6t9Fo1NCVH_0/view?usp=sharing"
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

export default SmallHeader;