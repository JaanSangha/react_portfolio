import React, { useEffect, useState, useCallback } from "react";
import Trailblazer1 from "../img/Trailblazer/trailblazer-1.png";
import Trailblazer2 from "../img/Trailblazer/trailblazer-2.png";
import Trailblazer3 from "../img/Trailblazer/trailblazer-3.png";
import Trailblazer4 from "../img/Trailblazer/trailblazer-4.png";
import Trailblazer5 from "../img/Trailblazer/trailblazer-5.png";
import Trailblazer6 from "../img/Trailblazer/trailblazer-6.png";
import Trailblazer7 from "../img/Trailblazer/trailblazer-7.png";
import Trailblazer8 from "../img/Trailblazer/trailblazer-8.png";
import Trailblazer9 from "../img/Trailblazer/trailblazer-9.png";
import Trailblazer10 from "../img/Trailblazer/trailblazer-10.png";
import Trailblazer11 from "../img/Trailblazer/trailblazer-11.png";
import Trailblazer12 from "../img/Trailblazer/trailblazer-12.png";

function Trailblazer() {
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
    "Road trip discovery, routes, and campsite planning",
    "Community feed + public trip sharing",
    "Map-first POI search, filters, and clustering",
  ];

  const techStack = [
    "React Native 0.81",
    "React 19",
    "Expo SDK 54",
    "TypeScript",
    "@rnmapbox/maps",
    "Mapbox Directions API",
    "Supabase (Postgres, Auth, Storage, RLS)",
    "Vercel (share pages + serverless)",
    "Resend (auth emails)",
  ];

  const gallery = [
    { title: "Trailblazer Screen 1", src: Trailblazer1 },
    { title: "Trailblazer Screen 2", src: Trailblazer2 },
    { title: "Trailblazer Screen 3", src: Trailblazer3 },
    { title: "Trailblazer Screen 4", src: Trailblazer4 },
    { title: "Trailblazer Screen 5", src: Trailblazer5 },
    { title: "Trailblazer Screen 6", src: Trailblazer6 },
    { title: "Trailblazer Screen 7", src: Trailblazer7 },
    { title: "Trailblazer Screen 8", src: Trailblazer8 },
    { title: "Trailblazer Screen 9", src: Trailblazer9 },
    { title: "Trailblazer Screen 10", src: Trailblazer10 },
    { title: "Trailblazer Screen 11", src: Trailblazer11 },
    { title: "Trailblazer Screen 12", src: Trailblazer12 },
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
            href="https://drive.google.com/file/d/1gmOIDLsD6UvjMiZdZTyuYz8KJ1cHE2Sh/view?usp=sharing"
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
            <div className="project-hero__eyebrow">Project · Trailblazr iOS App</div>
            <div className="project-hero__badge-row">
              <span>React Native Mobile App</span>
              <span aria-hidden="true">•</span>
              <span>2025-2026</span>
            </div>
            <h1>Trailblazer</h1>
            <p className="project-hero__lede">
              Discover campsites and stops on the map, plan trips, and share adventures with a community of road trippers.
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
              <a
                className="project-btn project-btn--solid"
                href="https://apps.apple.com/app/trailblazr/id6752621816"
                target="_blank"
                rel="noreferrer"
              >
                App Store
              </a>
            </div>
          </div>
          <div className="project-overview">
            <h3>Overview</h3>
            <p>
              A road-trip app where shared trips inspire routes and community-added POIs make the map actually usable.
            </p>
            <p>
              Trailblazer (App Store listing name: Trailblazr) is a mobile road-trip planning and discovery app for travelers who want to find routes,
              campsites, and points of interest, build their own trips, and share them publicly.
            </p>
            <p>
              Users browse a community feed (recent, popular, recommended), explore a Mapbox-powered map with POI clustering and filters, and create
              multi-stop trips with route previews, photos, and published share links that work without the app installed.
            </p>
            <p>
              The experience includes saved trips and POI lists, check-ins, profile stats, and “My Rigs” vehicle profiles. Trips can be drafted, published,
              and shared publicly with rich trip detail pages that highlight stops, photos, maps, and location labels.
            </p>
            <p>
              Authentication supports Sign in with Apple or email/password, with onboarding gates for profile completion and legal acceptance, plus a web
              password reset flow that keeps sessions secure.
            </p>
            <h4>The Problem</h4>
            <p>
              Trip apps often show routes without enough real-world stops. An empty map kills trust on first open. Trailblazer needed discovery (trips) and
              supply (POIs) to work together.
            </p>
            <h4>The Product</h4>
            <ul className="project-overview-list">
              <li>Feed: browse, like, and save community trips (recent / popular / recommended)</li>
              <li>Map: explore public POIs; add stops you’ve used (long-press or coordinate search)</li>
              <li>Creator: build multi-stop trips, route preview, photos, rigs, publish + share link</li>
              <li>Web: public trip pages with map preview + App Store install CTA</li>
            </ul>
            <h4>Why Community POIs Matter</h4>
            <p>
              The app is designed so every POI a traveler adds improves the map for everyone. Trips provide narrative; POIs provide utility. Onboarding
              guides new users to add their first stop so the network effect can start.
            </p>
            <h4>Additional Highlights</h4>
            <ul className="project-overview-list">
              <li>Community feed with recent, popular, and recommended trips</li>
              <li>Trip creation with multi-stop routing and Mapbox Directions</li>
              <li>Public share URLs with OG previews for social/iMessage</li>
              <li>Profile stats, saved trips, and vehicle rigs management</li>
              <li>Supabase RLS hardening + account deletion cleanup</li>
              <li>Auth flows: Apple sign-in, email, and web password reset</li>
            </ul>
            <h4>Performance & Engineering</h4>
            <ul className="project-overview-list">
              <li>
                Implemented viewport-bounded, debounced POI loading with paginated Supabase queries and in-memory cache (cap 1k POIs/viewport) instead of
                loading the global POI table.
              </li>
              <li>
                Built stale-while-revalidate feed caching across filter tabs with 2-minute TTL, silent background refresh, and cross-tab prefetch to
                eliminate repeated loading spinners.
              </li>
              <li>Added LRU snapshot cache for View Trip (12 entries) for instant re-navigation while refreshing data silently.</li>
              <li>
                Standardized image pipeline: resize to 1600px max edge, JPEG 0.2, expo-image-manipulator — fixing multi-select picker uploading full-resolution
                originals.
              </li>
              <li>Chunked Mapbox Directions requests for 25+ stop routes using overlapping waypoint segments.</li>
              <li>Batched analytics with InteractionManager-deferred flush and impression deduplication to keep gestures smooth.</li>
              <li>
                Hardened Supabase views (security_invoker, grant tightening) and RPC-based feeds/search to reduce client payload and enforce visibility
                server-side.
              </li>
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
          <span>Jaan Sangha</span>
          <span>{currentYear}</span>
        </div>
      </footer>
    </div>
  );
}

export default Trailblazer;
