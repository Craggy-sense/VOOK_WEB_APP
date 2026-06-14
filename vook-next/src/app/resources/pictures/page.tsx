"use client";
import React, { useState } from "react";
import { galleryData, GalleryItem } from "@/data/resources";

export default function PicturesPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "community" | "seminars" | "training" | "leadership">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryData.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  const openLightbox = (id: string) => {
    const index = galleryData.findIndex((item) => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? galleryData.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === galleryData.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <div className="bg-gray min-h-screen" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <style dangerouslySetInnerHTML={{__html: `
        .gallery-item-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-item-card:hover img {
          transform: scale(1.06) !important;
        }
        .vlog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
        }
        .resource-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
        }
      `}} />
      <div className="container">

        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="section-title">
            <span className="subtitle">Gallery</span>
            <h2>Pictures & Moments</h2>
            <div className="title-underline center" style={{ margin: "0 auto" }}></div>
          </div>
          <p className="text-muted mt-3" style={{ maxWidth: "600px", margin: "1.5rem auto 0" }}>
            A visual journey showcasing our training workshops, community peace dialogues, and empowerment programs in action.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex-tabs" style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
          {[
            { id: "all", label: "All Photos" },
            { id: "community", label: "Community Outreach" },
            { id: "seminars", label: "Seminars & Events" },
            { id: "training", label: "Training Sessions" },
            { id: "leadership", label: "Leadership Programs" }
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => setActiveFilter(pill.id as any)}
              className={`btn-tab ${activeFilter === pill.id ? "active" : ""}`}
              style={tabButtonStyle(activeFilter === pill.id)}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item-card"
              style={cardStyle}
              onClick={() => openLightbox(item.id)}
            >
              <img src={item.image} alt={item.title} style={imageStyle} />
              
              {/* Overlay on hover */}
              <div className="gallery-overlay" style={overlayStyle}>
                <div style={{ transform: "translateY(10px)", transition: "all 0.3s ease", textAlign: "center", padding: "15px" }}>
                  <i className="fas fa-search-plus" style={searchIconStyle}></i>
                  <h4 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "700", marginTop: "10px", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>{item.title}</h4>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.8rem", textTransform: "uppercase", fontWeight: "600" }}>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" style={lightboxOverlayStyle} onClick={() => setLightboxIndex(null)}>
          {/* Close button */}
          <button onClick={() => setLightboxIndex(null)} style={closeButtonStyle} aria-label="Close lightbox">
            <i className="fas fa-times"></i>
          </button>

          {/* Left Arrow */}
          <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} style={leftArrowStyle} aria-label="Previous image">
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Lightbox Content Container */}
          <div style={lightboxContentStyle} onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryData[lightboxIndex].image}
              alt={galleryData[lightboxIndex].title}
              style={lightboxImageStyle}
            />
            <div style={lightboxDescPanelStyle}>
              <h3 style={{ margin: 0, fontSize: "1.25rem", color: "var(--navy-dark)" }}>{galleryData[lightboxIndex].title}</h3>
              {galleryData[lightboxIndex].desc && <p style={{ margin: "5px 0 0 0", color: "var(--text-muted)", fontSize: "0.9rem" }}>{galleryData[lightboxIndex].desc}</p>}
            </div>
          </div>

          {/* Right Arrow */}
          <button onClick={(e) => { e.stopPropagation(); handleNext(); }} style={rightArrowStyle} aria-label="Next image">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}

const tabButtonStyle = (isActive: boolean) => ({
  padding: "10px 24px",
  borderRadius: "30px",
  fontSize: "0.95rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
  border: isActive ? "2px solid var(--primary-green)" : "2px solid transparent",
  backgroundColor: isActive ? "var(--primary-green)" : "var(--bg-white)",
  color: isActive ? "var(--bg-white)" : "var(--navy-dark)",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
});

const cardStyle: React.CSSProperties = {
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  height: "250px",
  cursor: "pointer",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s ease",
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(16, 102, 27, 0.8)", // Semi-transparent brand green
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
};

// We can add interactive hover CSS effects via a simple inline stylesheet injection or generic class rules
// Let's create style element inside return or just keep clean styling. We can hover using standard CSS (since overlayStyle opacity becomes 1 on hover in globals or similar, but here we can define simple custom styles).
// Let's inject a style block inside the page to handle hover states gracefully!

const searchIconStyle: React.CSSProperties = {
  fontSize: "2rem",
  color: "#fff",
};

const lightboxOverlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(12, 21, 39, 0.95)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1200,
};

const closeButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "30px",
  right: "30px",
  border: "none",
  background: "none",
  fontSize: "2rem",
  color: "#fff",
  cursor: "pointer",
  padding: "5px",
};

const leftArrowStyle: React.CSSProperties = {
  position: "absolute",
  left: "30px",
  border: "none",
  background: "rgba(255,255,255,0.1)",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  fontSize: "1.5rem",
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.3s ease",
};

const rightArrowStyle: React.CSSProperties = {
  position: "absolute",
  right: "30px",
  border: "none",
  background: "rgba(255,255,255,0.1)",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  fontSize: "1.5rem",
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.3s ease",
};

const lightboxContentStyle: React.CSSProperties = {
  maxWidth: "80%",
  maxHeight: "80vh",
  backgroundColor: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  display: "flex",
  flexDirection: "column",
};

const lightboxImageStyle: React.CSSProperties = {
  maxWidth: "100%",
  maxHeight: "65vh",
  objectFit: "contain",
};

const lightboxDescPanelStyle: React.CSSProperties = {
  padding: "20px",
  backgroundColor: "#fff",
};
