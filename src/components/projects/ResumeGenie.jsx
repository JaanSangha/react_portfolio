import React, { useEffect, useState, useCallback } from "react";
import ResumeGenie1 from "../img/galleries/resumegenie/resumegenie-1.png";
import ResumeGenie2 from "../img/galleries/resumegenie/resumegenie-2.png";
import ResumeGenie3 from "../img/galleries/resumegenie/resumegenie-3.png";
import ResumeGenie4 from "../img/galleries/resumegenie/resumegenie-4.png";

function ResumeGenie() {
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
    "AI resume feedback tuned to each job posting",
    "Secure PDF upload + Supabase storage",
    "React + Flask full-stack delivery",
  ];

  const techStack = [
    "React",
    "Flask",
    "Python",
    "JavaScript",
    "OpenAI API (GPT-4o)",
    "Supabase Storage",
    "PostgreSQL",
    "Netlify",
    "Heroku",
    "PyMuPDF",
  ];

  const gallery = [
    { title: "Resume Genie UI", src: ResumeGenie1 },
    { title: "Resume Genie Detail", src: ResumeGenie2 },
    { title: "Resume Genie Feedback", src: ResumeGenie3 },
    { title: "Resume Genie Upload", src: ResumeGenie4 },
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
            <div className="project-hero__eyebrow">Case Study · AI Resume Coach</div>
            <div className="project-hero__badge-row">
              <span>Web Application</span>
              <span aria-hidden="true">•</span>
              <span>2024</span>
            </div>
            <h1>Resume Genie</h1>
            <p className="project-hero__lede">
              An AI-powered resume coach that compares your resume to any job posting and returns tailored, actionable feedback in seconds.
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
              <a className="project-btn project-btn--solid" href="https://resumegeniemac.netlify.app/" target="_blank" rel="noreferrer">
                Live Site
              </a>
            </div>
          </div>
          <div className="project-overview">
            <h3>Overview</h3>
            <p>
              Resume Genie is a full-stack web app that helps job seekers instantly assess and improve their resumes against specific job postings. Users upload
              a PDF, paste a job description, and get structured, AI-generated feedback on strengths, gaps, and next steps—all within seconds.
            </p>
            <p>
              It blends document processing, AI analysis, and cloud storage into a clean experience so candidates can tailor resumes quickly and confidently.
              Try it{" "}
              <a href="https://resumegeniemac.netlify.app/" target="_blank" rel="noreferrer" data-custom-cursor>
                here
              </a>
              .
            </p>
            <h4>The Challenge</h4>
            <p>Tailoring a resume to every posting is slow and error-prone, and people often miss critical keywords and alignment cues.</p>
            <h4>The Solution</h4>
            <p>
              Upload a PDF, paste the job posting, and let GPT-4o analyze the match. Feedback highlights strengths, gaps, and improvements. Supabase stores
              resumes securely; Flask handles uploads, AI calls, and persistence; React keeps the UI simple and fast.
            </p>
            <h4>Key Outcomes</h4>
            <p>Faster resume tailoring, clearer alignment to each role, and actionable edits delivered in seconds instead of hours.</p>
            <h4>Additional Highlights</h4>
            <ul className="project-overview-list">
              <li>PDF upload with Supabase Storage and public URL generation</li>
              <li>PostgreSQL + Supabase for storing analyses and resume links</li>
              <li>Flask API with CORS, handling file parsing and AI requests</li>
              <li>React frontend deployed on Netlify; backend on Heroku</li>
              <li>PyMuPDF adapter for reliable PDF text extraction</li>
              <li>Design patterns: Facade for upload flow, Singleton clients for Supabase/OpenAI</li>
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

export default ResumeGenie;