import React, { useEffect, useState } from "react";

function CarBattle() {
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
    "Custom vehicle physics in Unreal (no presets)",
    "Turret combat loop across a stylized map",
    "Level design with ramps, elevation, and themed props",
  ];

  const techStack = ["Unreal Engine 4", "C++", "Custom physics", "Gameplay tags/triggers", "Level streaming assets"];

  const highlights = [
    "Coded car handling from scratch instead of using built-in physics",
    "Turrets as primary enemies; defeat them to clear the map",
    "Ramps and varied terrain for jumps and traversal challenge",
    "Bright, toy-room aesthetic with curated assets",
    "Built collaboratively as a class project",
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
            <div className="project-hero__eyebrow">Case Study · Gameplay Programming</div>
            <div className="project-hero__badge-row">
              <span>Game</span>
              <span aria-hidden="true">•</span>
              <span>Unreal</span>
            </div>
            <h1>Car Battle</h1>
            <p className="project-hero__lede">
              A bright, toy-room themed car combat game in Unreal Engine 4 — custom vehicle physics, turret battles, and jumpy terrain built without preset
              systems.
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
              <a className="project-btn project-btn--solid" href="https://www.youtube.com/watch?v=qXkuGn6fQIs" target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </div>
          <div className="project-overview">
            <h3>Overview</h3>
            <p>
              Car Battle was built with a partner in Unreal Engine 4. We wrote our own car physics and combat loop to satisfy class constraints and leaned on
              bright, playful level design for the theme.
            </p>
            <h4>Challenge</h4>
            <p>Build vehicle handling and combat without Unreal’s preset physics while keeping gameplay fun and readable.</p>
            <h4>Solution</h4>
            <p>
              Hand-rolled car movement, turret enemies to drive combat objectives, and ramps/terrain for traversal. A toy-room aesthetic keeps the experience
              light and inviting.
            </p>
            <h4>Key Outcomes</h4>
            <p>Custom physics that feel responsive, simple combat goals, and a cohesive visual theme that supports all ages.</p>
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

export default CarBattle;