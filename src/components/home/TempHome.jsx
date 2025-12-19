import React from "react";
import CustomCursor from "../common/CustomCursor";
import "./tempHome.css";

function TempHome() {
  return (
    <div className="temp-home">
      <div className="temp-home__nav" role="banner">
        <div className="temp-home__brand">
          <span className="temp-home__brand-name" data-custom-cursor>
            Jaan Sangha
          </span>
          <span className="temp-home__brand-line" aria-hidden="true" />
          <span className="temp-home__brand-role">Software Engineer, Developer</span>
        </div>
        <div className="temp-home__links">
          <a href="/" data-custom-cursor>
            works
          </a>
          <a href="/#about" data-custom-cursor>
            about
          </a>
          <a href="mailto:jaansangha10@gmail.com" data-custom-cursor>
            contact
          </a>
        </div>
      </div>

      <div className="temp-home__grid">
        <div className="temp-home__hero" aria-label="Creative designer and developer">
          <span className="temp-home__tag">creative</span>
          <div className="temp-home__title">
            <span>DESIGNER</span>
            <span className="temp-home__ampersand">&</span>
            <span>DEVELOPER</span>
          </div>
        </div>

        <div className="temp-home__statement">
          <p>
            I’m Jaan Sangha, a developer and UX/UI designer based in Toronto. I build intuitive
            front-end experiences paired with clean, efficient backends, and I’m driven by minimal
            and brutalist design. I love nature, pizza, and art.
          </p>
        </div>
      </div>

      <a className="temp-home__cta" href="mailto:jaansangha10@gmail.com" data-custom-cursor>
        <span className="temp-home__cta-track">
          <span className="temp-home__cta-text">Contact Me</span>
          <span className="temp-home__cta-text">Contact Me</span>
        </span>
      </a>
      <CustomCursor />
    </div>
  );
}

export default TempHome;

