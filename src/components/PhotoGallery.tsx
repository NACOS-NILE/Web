"use client";

import { useState, useCallback } from "react";

const GALLERY_ITEMS = [
  { src: "/assets/excos-pics/president.jpg", alt: "NACOS Nile President", category: "Leadership" },
  { src: "/assets/excos-pics/sg.jpg", alt: "Secretary General", category: "Leadership" },
  { src: "/assets/excos-pics/vp.jpg", alt: "Vice President", category: "Leadership" },
  { src: "/assets/excos-pics/fc.jpg", alt: "Financial Secretary", category: "Leadership" },
  { src: "/assets/excos-pics/pro.jpg", alt: "Public Relations Officer", category: "Leadership" },
  { src: "/assets/excos-pics/dtd.jpg", alt: "Director of Training & Development", category: "Leadership" },
  { src: "/assets/excos-pics/provost.jpg", alt: "Provost", category: "Leadership" },
  { src: "/assets/excos-pics/socials.jpg", alt: "Director of Socials", category: "Leadership" },
  { src: "/assets/excos-pics/welfare.jpg", alt: "Director of Welfare", category: "Leadership" },
];

const CATEGORIES = ["All", "Leadership", "Events", "Community"];

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const navigate = useCallback(
    (dir: number) => {
      if (lightboxIndex === null) return;
      const next = (lightboxIndex + dir + filtered.length) % filtered.length;
      setLightboxIndex(next);
    },
    [lightboxIndex, filtered.length]
  );

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-header reveal">
          <div className="section-label">Our Moments</div>
          <h2 className="gallery-title">NACOS Nile Gallery</h2>
          <p className="gallery-subtitle">
            Snapshots of leadership, events and community — the people who make NACOS Nile happen.
          </p>
        </div>

        <div className="gallery-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-scroll-frame">
          <div className="gallery-scroll-viewport">
            <div className="gallery-grid">
              {filtered.map((item, i) => (
                <div
                  key={item.src + i}
                  className="gallery-item"
                  onClick={() => openLightbox(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="gallery-overlay">
                    <span className="gallery-overlay-text">{item.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={() => navigate(-1)} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="lightbox-img"
            />
            <button className="lightbox-nav lightbox-next" onClick={() => navigate(1)} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
            <div className="lightbox-caption">{filtered[lightboxIndex].alt}</div>
          </div>
        </div>
      )}

    </section>
  );
}
