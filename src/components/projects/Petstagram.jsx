import React, { useEffect, useState, useCallback } from "react";
import PetGallery1 from "../img/galleries/petsgram/petsgram-1.png";
import PetGallery2 from "../img/galleries/petsgram/petsgram-2.png";
import PetGallery3 from "../img/galleries/petsgram/petsgram-3.png";
import PetGallery4 from "../img/galleries/petsgram/petsgram-4.png";

function Petstagram() {
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

  const features = [
    "Pet profiles, follows, feeds, likes, comments, bookmarks",
    "Real-time notifications and session sync across devices",
    "AI-flagged NSFW/spam detection with user-friendly guidance",
    "Dark/light theming, accessibility, and PWA support",
    "Performance-focused: edge rendering, code splitting, lazy loading",
  ];

  const focusAreas = features.slice(0, 2);
  const extraHighlights = features.slice(2);
  const techStack = ["Next.js 15", "React Native + Expo", "TypeScript", "Tailwind", "Supabase", "Postgres", "RLS"];

  const gallery = [
    { title: "Feed View", note: "Desktop", src: PetGallery1 },
    { title: "Profile", note: "Desktop", src: PetGallery2 },
    { title: "Create Post", note: "Desktop", src: PetGallery3 },
    { title: "Mobile UI", note: "Mobile", src: PetGallery4 },
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
        <section
          className="project-hero"
        >
          <div className="project-hero__content">
            <div className="project-hero__eyebrow">Case Study · Social Platform</div>
            <div className="project-hero__badge-row">
              <span>Web Application</span>
              <span aria-hidden="true">•</span>
              <span>2024</span>
            </div>
            <h1>Petsgram</h1>
            <p className="project-hero__lede">
              A cross-platform social network for pets and their people — fast, friendly, and moderated for a healthy community.
            </p>
          </div>
        </section>

        <section className="project-summary">
          <div className="project-details-card">
            <div className="project-details-card__eyebrow">Project Details</div>
            <div className="project-details-card__row">
              <span>Role</span>
              <strong>Lead Developer</strong>
            </div>
            <div className="project-details-card__row">
              <span>Year</span>
              <strong>2024</strong>
            </div>
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
              <a className="project-btn project-btn--solid" href="https://petsgram.ca" target="_blank" rel="noreferrer">Live Site</a>
              <a className="project-btn project-btn--ghost" href="https://www.youtube.com/watch?v=scTLfKa0E7g" target="_blank" rel="noreferrer">Demo</a>
            </div>
          </div>
          <div className="project-overview">
            <h3>Overview</h3>
            <p>
              Petsgram is a full-stack social platform built for pet owners. The shared monorepo powers both the web app and React Native mobile app,
              backed by Supabase for auth, storage, and real-time data. Moderation, performance, and accessibility were top priorities from day one.
            </p>
            <h4>The Challenge</h4>
            <p>Pet communities need healthy, fast interactions without spam, toxic content, or sluggish cross-device experiences.</p>
            <h4>The Solution</h4>
            <p>Shared monorepo for web and mobile, Supabase auth/storage with RLS, real-time feeds, and AI-assisted moderation keep experiences quick and safe.</p>
            <h4>Key Outcomes</h4>
            <p>Responsive web/mobile parity, stronger community signals, and confident content safety with faster releases.</p>
            <h4>Additional Highlights</h4>
            <ul className="project-overview-list">
              {extraHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>Magic link auth, RLS-secured data</li>
              <li>Optimistic UI + real-time feeds</li>
              <li>Image pipeline (crop, convert, HEIC support)</li>
              <li>Accessibility + PWA + dark/light modes</li>
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
            <button className="project-lightbox__close" onClick={closeLightbox} aria-label="Close gallery">×</button>
            <button className="project-lightbox__nav project-lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); prevLightbox(); }} aria-label="Previous image">‹</button>
            <img src={gallery[lightboxIndex].src} alt="Gallery item" />
            <button className="project-lightbox__nav project-lightbox__nav--next" onClick={(e) => { e.stopPropagation(); nextLightbox(); }} aria-label="Next image">›</button>
          </div>
        )}
      </main>

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

export default Petstagram;