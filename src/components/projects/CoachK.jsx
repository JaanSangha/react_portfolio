import React, { useEffect, useState, useCallback } from "react";
import Coachk1 from "../img/galleries/coachk/coachk-1.png";
import Coachk2 from "../img/galleries/coachk/coachk-2.png";
import Coachk3 from "../img/galleries/coachk/coachk-3.png";
import Coachk4 from "../img/galleries/coachk/coachk-4.png";

function CoachK() {
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
    "AI-powered training recommendations",
    "Strava OAuth + real-time sync",
    "Secure, scalable Next.js 14 app",
  ];

  const techStack = [
    "Next.js 14",
    "TypeScript",
    "Tailwind CSS",
    "Supabase + Postgres",
    "OpenAI API",
    "Strava API",
    "Vercel",
    "RLS security",
  ];

  const gallery = [
    { title: "Coach K Gallery 1", src: Coachk1 },
    { title: "Coach K Gallery 2", src: Coachk2 },
    { title: "Coach K Gallery 3", src: Coachk3 },
    { title: "Coach K Gallery 4", src: Coachk4 },
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
            <div className="project-hero__eyebrow">Case Study · AI Fitness Coaching</div>
            <div className="project-hero__badge-row">
              <span>Web Application</span>
              <span aria-hidden="true">•</span>
              <span>2024</span>
            </div>
            <h1>Coach K</h1>
            <p className="project-hero__lede">
              Coach K blends Strava integration with OpenAI-driven coaching to deliver tailored, real-time training guidance for every athlete.
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
              <a className="project-btn project-btn--solid" href="https://coachk-chi.vercel.app" target="_blank" rel="noreferrer">
                Live Site
              </a>
            </div>
          </div>
          <div className="project-overview">
            <h3>Overview</h3>
            <p>
              Coach K is a full-stack web application designed to revolutionize personal fitness coaching. By combining seamless Strava integration with the
              analytical power of OpenAI, the app delivers tailored training recommendations and interactive coaching in real time. Whether you&apos;re a
              recreational runner or a competitive athlete, Coach K adapts to your goals and workout history. Check out the app{" "}
              <a href="https://coachk-chi.vercel.app" target="_blank" rel="noreferrer" data-custom-cursor>
                here
              </a>
              .
            </p>
            <p>
              The platform is built with a strong focus on personalization, security, and scalability, ensuring that each user&apos;s journey is both unique
              and protected.
            </p>
            <h4>The Challenge</h4>
            <p>Deliver fast, reliable coaching that personalizes to every athlete&apos;s evolving data while keeping sensitive fitness information secure.</p>
            <h4>The Solution</h4>
            <p>
              The frontend runs on Next.js 14 with the App Router, TypeScript, and Tailwind CSS for a responsive, accessible UI. Supabase powers auth and data
              with RLS-secured Postgres, while server-side API routes handle Strava and OpenAI integrations to keep secrets off the client. Deployment via
              Vercel provides CI/CD, edge caching, and analytics.
            </p>
            <p>
              AI coaching uses OpenAI to analyze synced Strava workouts, surface trends like overtraining or recovery needs, and power a persistent chat
              interface that retains context.
            </p>
            <h4>Key Outcomes</h4>
            <p>
              Real-time Strava sync, adaptive AI guidance, and rich dashboards give athletes clear visibility into progress while maintaining privacy and
              reliability across devices.
            </p>
            <h4>Additional Highlights</h4>
            <ul className="project-overview-list">
              <li>OAuth2 Strava connection with automatic 24-hour activity refresh</li>
              <li>Activity dashboard with weekly mileage, intensity, and goal tracking</li>
              <li>Dark-mode default, semantic HTML, ARIA labels, and full keyboard navigation</li>
              <li>RLS-enforced data access and server-side secret handling for security</li>
              <li>Monorepo structure with shared logic ready for future mobile expansion</li>
              <li>Vercel-backed deployment with monitoring and smooth loading states</li>
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

export default CoachK;