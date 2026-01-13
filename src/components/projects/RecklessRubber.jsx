import React, { useEffect, useState } from "react";

function RecklessRubber() {
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
    "Game jam build around a 10-second checkpoint loop",
    "Enter/exit vehicle flow with dual control schemes",
    "Fueling and prep interactions before racing",
  ];

  const techStack = ["Unity 3D", "C#", "New Input System", "Triggers & state machines", "Mixamo animations"];

  const highlights = [
    "Theme: “10 Seconds” — each checkpoint must be hit within the timer",
    "Player can walk, interact, and fuel up before racing",
    "Seamless swap between character control and driving UI",
    "Replayable loop to chase better times after the final checkpoint",
    "Built during a jam with lightweight assets and animations",
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
            <div className="project-hero__eyebrow">Case Study · Game Jam</div>
            <div className="project-hero__badge-row">
              <span>Game</span>
              <span aria-hidden="true">•</span>
              <span>10-Second Theme</span>
            </div>
            <h1>Reckless Rubber</h1>
            <p className="project-hero__lede">
              A jam-built racing experience where every checkpoint is on a 10-second clock. Prep your car, fuel up, then swap into driving mode to beat the
              timer.
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
              <a className="project-btn project-btn--solid" href="https://www.youtube.com/watch?v=oO6GE1D-9zs" target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </div>
          <div className="project-overview">
            <h3>Overview</h3>
            <p>
              Reckless Rubber was built for a “10 Seconds” jam. Players prep their car, fuel it, then hit a series of checkpoints before the 10-second timer
              expires.
            </p>
            <h4>Challenge</h4>
            <p>Deliver tension and replayability within the jam’s time constraints and theme.</p>
            <h4>Solution</h4>
            <p>
              Dual-mode controls (on-foot + driving), fueling interactions, and tight checkpoint timers create urgency. A final prompt lets players loop or wrap
              the run.
            </p>
            <h4>Key Outcomes</h4>
            <p>Fast-paced runs, clear failure states, and quick replays to improve times.</p>
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

export default RecklessRubber;