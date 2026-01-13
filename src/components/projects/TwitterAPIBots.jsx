import React, { useEffect, useState, useCallback } from "react";
import TwitterBots1 from "../img/galleries/twitterbots/twitterbots-1.png";
import TwitterBots2 from "../img/galleries/twitterbots/twitterbots-2.png";

function TwitterAPIBots() {
  const [navOpen, setNavOpen] = useState(false);
  const [navElevated, setNavElevated] = useState(false);
  const currentYear = new Date().getFullYear();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    const onScroll = () => setNavElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);

  const focusAreas = [
    "Automated Twitter posting with GPT-4 Vision captions",
    "Personality-driven bot behavior with prompt engineering",
    "Zero-hosting-cost scheduling via GitHub Actions cron",
  ];

  const techStack = [
    "Node.js",
    "Twitter API v2",
    "OpenAI GPT-4 Vision",
    "Unsplash API",
    "GitHub Actions",
    "Cron scheduling",
    "GitHub Secrets",
  ];

  const highlights = [
    "Unsplash image curation with duplicate tracking",
    "Fallback captions and retry logic for reliability",
    "Time-of-day aware scheduling for engagement",
    "Compliance with Twitter guidelines and media rules",
    "JSON mini-store to avoid reposting the same images",
    "Two bots: nature imagery + human-mimic personality",
  ];

  const gallery = [
    { title: "Nature Bot feed", src: TwitterBots1 },
    { title: "Persona Bot feed", src: TwitterBots2 },
  ];

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const nextLightbox = useCallback(
    () => setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % gallery.length)),
    [gallery.length]
  );
  const prevLightbox = useCallback(
    () => setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + gallery.length) % gallery.length)),
    [gallery.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, nextLightbox, prevLightbox]);

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
            <div className="project-hero__eyebrow">Case Study · AI + Automation</div>
            <div className="project-hero__badge-row">
              <span>Automation</span>
              <span aria-hidden="true">•</span>
              <span>2024</span>
            </div>
            <h1>Twitter API Bots</h1>
            <p className="project-hero__lede">
              Two autonomous Twitter bots: one curates nature photos with GPT-4 Vision captions, the other mimics human voices with time-aware posting and
              prompt-engineered personalities.
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
              <a className="project-btn project-btn--solid" href="https://x.com/naturepictos" target="_blank" rel="noreferrer">
                Live Bot
              </a>
              <a className="project-btn project-btn--ghost" href="https://www.youtube.com/watch?v=E8Q2xREdCjE" target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </div>
          <div className="project-overview">
            <h3>Overview</h3>
            <p>
              Two bots automate Twitter content end-to-end: a nature-photo bot that generates captions with GPT-4 Vision and a personality bot that tweets
              like a real person. Both run entirely on GitHub Actions for zero hosting cost.
            </p>
            <h4>Challenge</h4>
            <p>Ship reliable, human-like Twitter automation without paying for hosting, while keeping content safe and on-brand.</p>
            <h4>Solution</h4>
            <p>
              Node.js workers triggered by cron in GitHub Actions, GPT-4 Vision for contextual captions, Twitter API v2 for posting, and secure secrets for
              keys. Prompts guide tone and behavior; cron timing targets peak engagement.
            </p>
            <h4>Key Outcomes</h4>
            <p>Consistent multi-post-per-day cadence, realistic persona tweets, zero infra costs, and resilient fallbacks that keep posts flowing.</p>
            <h4>Additional Highlights</h4>
            <ul className="project-overview-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="project-section project-section--gallery">
          <h3>Gallery</h3>
          <div className="project-gallery">
            {gallery.map((item, idx) => (
              <div className="project-gallery__item" key={item.title}>
                <div
                  className="project-gallery__thumb"
                  style={{ backgroundImage: `url(${item.src})` }}
                  aria-hidden="true"
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openLightbox(idx);
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {lightboxIndex !== null && (
          <div
            className="project-lightbox"
            role="dialog"
            aria-modal="true"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
            onTouchStart={(e) => setTouchStartX(e.changedTouches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX === null) return;
              const delta = e.changedTouches[0].clientX - touchStartX;
              if (delta > 30) prevLightbox();
              if (delta < -30) nextLightbox();
              setTouchStartX(null);
            }}
          >
            <button className="project-lightbox__close" onClick={closeLightbox} aria-label="Close gallery">
              ×
            </button>
            <button
              className="project-lightbox__nav project-lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <img src={gallery[lightboxIndex].src} alt="Gallery item" />
            <button
              className="project-lightbox__nav project-lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        )}
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

export default TwitterAPIBots;