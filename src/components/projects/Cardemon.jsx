import React, { useEffect, useState } from "react";

function Cardemon() {
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
    "Turn-based monster battles with type, status, and priority systems",
    "Open-world streaming via additive scene loading",
    "Quests, mounts, and save systems that deepen progression",
  ];

  const techStack = ["Unity 3D", "C#", "Scriptable Objects", "Cinemachine", "Timeline", "JSON save system"];

  const highlights = [
    "Type effectiveness, status effects, criticals, and move metadata per skill",
    "Additive scenes stream only nearby areas for seamless exploration",
    "Quest framework built with OOP for configurable rewards and requirements",
    "Rideable mounts with rules for indoor/outdoor and flight/walk states",
    "Cardex collection tracks captured monsters with card-style entries",
    "Day/night and seasonal weather synced to a calendar system",
    "Save/load pipeline to persist items, monsters, and achievements",
    "Dungeons with enemies, bosses, and planned puzzle variety",
    "Early melee AI: aggro detection, strafe, attack/retreat, and block stun",
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
            <div className="project-hero__eyebrow">Case Study · Game Development</div>
            <div className="project-hero__badge-row">
              <span>Game</span>
              <span aria-hidden="true">•</span>
              <span>In Development</span>
            </div>
            <h1>Cardemon</h1>
            <p className="project-hero__lede">
              A turn-based monster-catching RPG built in Unity — seamless open-world exploration, deep battle systems, quests, mounts, and persistent saves.
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
              <a className="project-btn project-btn--solid" href="https://www.youtube.com/watch?v=QwF3tM-Efs4" target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </div>
          <div className="project-overview">
            <h3>Overview</h3>
            <p>
              Cardemon blends monster collecting with classic RPG combat, open-world exploration, and progression systems. Everything is engineered in Unity with
              OOP-driven components so mechanics, moves, and quests are easy to extend.
            </p>
            <h4>Challenge</h4>
            <p>Deliver a seamless, feature-rich monster RPG without load breaks, while keeping systems modular for rapid iteration.</p>
            <h4>Solution</h4>
            <p>
              Additive scene streaming for world traversal, battle systems modeled with Scriptable Objects, and configurable quests/mount rules. A save pipeline
              persists player state, monsters, and inventory.
            </p>
            <h4>Key Outcomes</h4>
            <p>Seamless traversal, robust battle logic, and flexible progression systems that support future content drops.</p>
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

export default Cardemon;