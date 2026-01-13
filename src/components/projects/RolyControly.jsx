import React, { useEffect, useState } from "react";

function RolyControly() {
  const [navOpen, setNavOpen] = useState(false);
  const [navElevated, setNavElevated] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setNavElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);

  const focusAreas = [
    "Mobile tilt controls with one-tap jumps",
    "Interactive level select as a playable space",
    "Chapter progression gated by star collection",
  ];

  const techStack = ["Unity 3D", "C#", "Mobile tilt/gyro input", "Cinemachine", "Scriptable Objects"];

  const highlights = [
    "Pick-up-and-play mechanics with depth for advanced level design",
    "Device tilt drives movement; single tap handles jump timing",
    "Level select hub shows objectives as you explore it",
    "Chapters unlock via stars, giving clear progression goals",
    "Built for Play Store release with approachable difficulty ramp",
  ];

  return (
    <div className="project-page">
      <div className={`temp-home__nav ${navElevated ? "is-elevated" : ""} ${navOpen ? "is-open" : ""}`} role="banner">
        <a className="temp-home__brand temp-home__brand-link" href="/" data-custom-cursor onClick={closeNav}>
          <span className="temp-home__brand-name" data-custom-cursor>
            Jaan Sangha
          </span>
          <span className="temp-home__brand-role">Software Engineer, Developer</span>
        </a>
        <button
          type="button"
          className="temp-home__menu-toggle"
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="temp-home__links">
          <a href="/" data-custom-cursor onClick={closeNav}>
            home
          </a>
          <a href="/#about" data-custom-cursor onClick={closeNav}>
            about
          </a>
          <a href="/#projects" data-custom-cursor onClick={closeNav}>
            works
          </a>
          <a href="/#contact" data-custom-cursor onClick={closeNav}>
            contact
          </a>
          <a
            href="https://drive.google.com/file/d/1TT2_T6IgKwuOHmvSte3_Kp0-gqbJWmSx/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            data-custom-cursor
            onClick={closeNav}
          >
            resume
          </a>
        </div>
      </div>

      <main className="project-main">
        <section className="project-hero">
          <div className="project-hero__content">
            <div className="project-hero__eyebrow">Case Study · Mobile Game</div>
            <div className="project-hero__badge-row">
              <span>Game</span>
              <span aria-hidden="true">•</span>
              <span>In Development</span>
            </div>
            <h1>Roly Controly</h1>
            <p className="project-hero__lede">
              A tilt-controlled mobile platformer built in Unity — simple inputs, challenging levels, and a playful level-select hub with chapter progression.
            </p>
          </div>
        </section>

        <section className="project-summary">
          <div className="project-details-card">
            <div className="project-details-card__eyebrow">Project Details</div>
            <div className="project-details-card__row">
              <span>Focus Areas</span>
              <ul className="project-details-card__list">
                {focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="project-details-card__row">
              <span>Stack</span>
              <div className="project-details-card__pills">
                {techStack.map((pill) => (
                  <span key={pill}>{pill}</span>
                ))}
              </div>
            </div>
            <div className="project-details-card__actions">
              <a className="project-btn project-btn--solid" href="https://www.youtube.com/watch?v=dArwUA-roxw" target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </div>
          <div className="project-overview">
            <h3>Overview</h3>
            <p>
              Roly Controly is a mobile tilt-control platformer with one-tap jumps. Built in Unity with C#, it focuses on approachable mechanics that still
              allow rich level variety and progression.
            </p>
            <h4>Challenge</h4>
            <p>Create a mobile game that feels intuitive for casual players while leaving room for creative, challenging level design.</p>
            <h4>Solution</h4>
            <p>
              Keep inputs minimal (tilt + tap), design a level-select hub that doubles as a playable space, and gate chapters behind star goals to reward skill
              and replayability.
            </p>
            <h4>Key Outcomes</h4>
            <p>Simple controls, deeper level variety, and clear progression that encourages players to master levels and unlock new chapters.</p>
            <h4>Additional Highlights</h4>
            <ul className="project-overview-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="temp-home__footer">
        <div className="temp-home__footer-links">
          <a href="https://www.linkedin.com/in/jaansangha" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/jaansangha" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:jaansangha10@gmail.com" target="_blank" rel="noreferrer">
            Email
          </a>
          <a href="https://www.etsy.com/ca/shop/SanghaDesignHub" target="_blank" rel="noreferrer">
            Etsy
          </a>
        </div>
        <div className="temp-home__footer-meta">
          <span>© Jaan Sangha {currentYear}</span>
        </div>
      </footer>
    </div>
  );
}

export default RolyControly;