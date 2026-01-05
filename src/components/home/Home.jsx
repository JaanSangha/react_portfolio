import React, { useEffect, useState } from "react";
import RS from "../img/annaThumbedit.png";
import SF from "../img/simayathumb.png";
import SB from "../img/sanghabrosthumb.jpg";
import WW from "../img/WWThumb.jpg";
import YR from "../img/YRHousesThumb.jpg";
import PetsThumb from "../img/petsgram.png";
import CoachThumb from "../img/coachk.png";
import ResumeThumb from "../img/resumegenie.png";
import TwitterThumb from "../img/twitterbots.png";
import CardemonThumb from "../img/CardemonThumbRounded.PNG";
import RolyThumb from "../img/RCThumbRounded.jpg";
import CarBattleThumb from "../img/CarGamePic.PNG";
import FloodedFoxThumb from "../img/FFThumbNailRounded.PNG";
import RaceThumb from "../img/RaceThumbnail.png";
import "./Home.css";

function Home() {
  const [filter, setFilter] = useState("applications");
  const [formStatus, setFormStatus] = useState("");
  const [navElevated, setNavElevated] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // ensure split is visible by default
  }, []);

  useEffect(() => {
    const onScroll = () => setNavElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "1f3ce5f7-be1d-495d-90f3-78628dac51d7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setFormStatus("Thanks! I’ll get back to you soon.");
        event.target.reset();
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setFormStatus("Network error. Please try again.");
    }
  };
  const projects = [
    { title: "Petsgram", role: "Applications", img: PetsThumb, link: "/projects-petstagram", category: "applications" },
    { title: "CoachK", role: "Applications", img: CoachThumb, link: "/projects-coachk", category: "applications" },
    { title: "ResumeGenie", role: "Applications", img: ResumeThumb, link: "/projects-resumegenie", category: "applications" },
    { title: "Twitter API Bots", role: "Applications", img: TwitterThumb, link: "/projects-twitterapibots", category: "applications" },
    { title: "We Liberate the World", role: "Web Design, Development", img: WW, link: "https://weliberatetheworld.com/", category: "websites" },
    { title: "York Region Houses", role: "Web Design, Development", img: YR, link: "https://www.yorkregionhousesforsale.com/", category: "websites" },
    { title: "Sangha Brothers", role: "Web Design, Development", img: SB, link: "https://sanghabrothers.com/", category: "websites" },
    { title: "Simaya Foundation", role: "Web Design, Development", img: SF, link: "https://simayafoundation.org/", category: "websites" },
    { title: "Rumours of Stevie", role: "Web Design, Development", img: RS, link: "https://rumoursofstevie.com/", category: "websites" },
    { title: "Cardemon", role: "Games", img: CardemonThumb, link: "/projects-cardemon", category: "games" },
    { title: "Roly Controly", role: "Games", img: RolyThumb, link: "/projects-rolycontroly", category: "games" },
    { title: "Flooded Fox", role: "Games", img: FloodedFoxThumb, link: "/projects-floodedfox", category: "games" },
    { title: "Car Battle", role: "Games", img: CarBattleThumb, link: "/projects-carbattle", category: "games" },
    { title: "Reckless Rubber", role: "Games", img: RaceThumb, link: "/projects-recklessrubber", category: "games" },
  ];
  const filteredProjects = projects.filter((p) => (filter === "all" ? true : p.category === filter));

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);

  // Hover tilt removed for perf; kept supportsHover for future use if needed.

  return (
    <div className="temp-home">
      <div className={`temp-home__nav ${navElevated ? "is-elevated" : ""} ${navOpen ? "is-open" : ""}`} role="banner">
        <div className="temp-home__brand">
          <span className="temp-home__brand-name" data-custom-cursor>
            Jaan Sangha
          </span>
          <span className="temp-home__brand-role">Software Engineer, Developer</span>
        </div>
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
          <a href="#about" data-custom-cursor onClick={closeNav}>
            about
          </a>
          <a href="#projects" data-custom-cursor onClick={closeNav}>
            works
          </a>
          <a href="#contact" data-custom-cursor onClick={closeNav}>
            contact
          </a>
          <a href="https://drive.google.com/file/d/1TT2_T6IgKwuOHmvSte3_Kp0-gqbJWmSx/view?usp=sharing" data-custom-cursor target="_blank" rel="noreferrer">
            resume
          </a>
        </div>
      </div>

      <div className="temp-home__grid">
        <div className="temp-home__hero-modern">
          <h1>Designer &amp; Developer</h1>
          <p>
          I’m a software engineer and product-focused developer based in Canada.
I build digital products, tools, and systems from idea to execution.
I care about clarity, performance, and thoughtful design.
I enjoy building things that actually get used.
          </p>
        </div>
        <a className="temp-home__cta" href="mailto:jaansangha10@gmail.com">
          <span className="temp-home__cta-track">
            <span className="temp-home__cta-text" data-echo="Contact Me">Contact Me</span>
            <span className="temp-home__cta-text" data-echo="Contact Me">Contact Me</span>
          </span>
        </a>
      </div>

      <section
        className="temp-home__split"
        id="about"
      >
        <div className="temp-home__split-text">
          <h2>Hello. I am Jaan</h2>
          <p className="temp-home__split-body">
          I’m a software engineer with a strong product mindset, driven by building things that make work easier and experiences better.
        I’ve led and contributed to projects spanning web applications, internal tools, automation systems, and digital platforms. Working with startups, organizations, and my own ventures. I’m comfortable moving from idea to execution, handling design decisions, technical trade-offs, and real-world constraints along the way.
      I enjoy solving messy problems, simplifying complex systems, and turning concepts into reliable products.
          </p>
        </div>
        <div className="temp-home__split-figure" aria-hidden="true">
          <div className="temp-home__split-image" />
        </div>
      </section>

      <section className="temp-home__projects" id="projects">
        <div className="temp-home__projects-header">
          <span className="temp-home__projects-icon" aria-hidden="true">✶</span>
          <h3>Selected Works</h3>
          <div className="temp-home__projects-filters" role="group" aria-label="Filter projects">
            {[
              { key: "applications", label: "Applications" },
              { key: "websites", label: "Websites" },
              { key: "games", label: "Games" },
            ].map((option) => (
              <button
                key={option.key}
                type="button"
                className={`temp-home__filter-btn ${filter === option.key ? "is-active" : ""}`}
                onClick={() => setFilter(option.key)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.map((proj, idx) => (
          // Control layout per index: 3rd row (idx 2) image left, 4th row (idx 3) image right
          <a
            key={proj.title}
            className={`temp-home__project-row ${
              idx === 2
                ? "temp-home__project-row--alt"
                : idx === 3
                ? "temp-home__project-row--nudge-right"
                : idx % 2
                ? "temp-home__project-row--alt"
                : ""
            } ${
              idx % 3 === 0 ? "temp-home__project-row--wide" : ""
            }`}
            href={proj.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="temp-home__project-info">
              <div className="temp-home__project-name">{proj.title}</div>
              <div className="temp-home__project-role">{proj.role}</div>
            </div>
            <div
              className="temp-home__project-thumb"
              aria-hidden="true"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.25)), url(${proj.img})` }}
            />
          </a>
        ))}
      </section>

      <section className="temp-home__contact" id="contact">
        <div className="temp-home__contact-header">
          <span className="temp-home__projects-icon" aria-hidden="true">✶</span>
          <h3>Let’s Connect</h3>
        </div>
        <p className="temp-home__contact-blurb">
          Tell me a bit about what you’re building and how I can help.
        </p>
        <form className="temp-home__contact-form" onSubmit={handleContactSubmit}>
          <div className="temp-home__contact-row">
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </div>
          <label>
            Project / Message
            <textarea name="message" rows="4" required />
          </label>
          <button type="submit" className="temp-home__contact-btn">
            <span className="temp-home__contact-track">
              <span className="temp-home__contact-text">Send Message</span>
              <span className="temp-home__contact-text">Send Message</span>
            </span>
          </button>
          {formStatus && <span className="temp-home__contact-status">{formStatus}</span>}
        </form>
      </section>

      <footer className="temp-home__footer">
        <div className="temp-home__footer-links">
          <a href="https://www.linkedin.com/in/jaansangha" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/jaansangha" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:jaansangha10@gmail.com" target="_blank" rel="noreferrer">Email</a>
          <a href="https://www.etsy.com/ca/shop/SanghaDesignHub" target="_blank" rel="noreferrer">Etsy</a>
        </div>
        <div className="temp-home__footer-meta">
          <span>© Jaan Sangha {currentYear}</span>
        </div>
      </footer>

    </div>
  );
}

export default Home;