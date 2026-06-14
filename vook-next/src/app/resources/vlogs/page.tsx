"use client";
import React, { useState } from "react";
import { vlogsData, VlogItem } from "@/data/resources";

export default function VlogsPage() {
  const [activeVideo, setActiveVideo] = useState<VlogItem | null>(null);

  return (
    <div className="bg-gray min-h-screen" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <style dangerouslySetInnerHTML={{__html: `
        .vlog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
        }
      `}} />
      <div className="container">

        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="section-title">
            <span className="subtitle">Video Hub</span>
            <h2>Vlogs & Virtual Sessions</h2>
            <div className="title-underline center" style={{ margin: "0 auto" }}></div>
          </div>
          <p className="text-muted mt-3" style={{ maxWidth: "600px", margin: "1.5rem auto 0" }}>
            Watch highlights from our seminars, panel discussions, and motivational insights from Pastor Sue Kibii.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "30px" }}>
          {vlogsData.map((video) => (
            <div
              key={video.id}
              className="vlog-card"
              style={cardStyle}
              onClick={() => setActiveVideo(video)}
            >
              {/* Video Thumbnail (Using standard high-quality placeholders for youtube, or nice styling) */}
              <div style={thumbnailContainerStyle}>
                {/* Standard Youtube Thumbnail Placeholder style */}
                <div style={placeholderThumbnailStyle}>
                  <i className="fas fa-play" style={playIconStyle}></i>
                  <span style={durationBadgeStyle}>{video.duration}</span>
                </div>
              </div>

              {/* Vlog Body */}
              <div style={cardBodyStyle}>
                <div style={metaStyle}>
                  <span><i className="far fa-calendar-alt" style={{ marginRight: "6px" }}></i> {video.date}</span>
                </div>
                <h3 style={cardTitleStyle}>{video.title}</h3>
                <p style={cardDescStyle}>{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="modal-overlay" style={modalOverlayStyle} onClick={() => setActiveVideo(null)}>
          <div className="modal-content" style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} style={closeButtonStyle} aria-label="Close video player">
              <i className="fas fa-times"></i>
            </button>
            <div style={videoWrapperStyle}>
              <iframe
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={iframeStyle}
              ></iframe>
            </div>
            <div style={{ padding: "24px", backgroundColor: "#fff" }}>
              <h3 style={{ fontSize: "1.5rem", color: "var(--navy-dark)", marginBottom: "8px" }}>{activeVideo.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{activeVideo.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  backgroundColor: "var(--bg-white)",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const thumbnailContainerStyle: React.CSSProperties = {
  position: "relative",
  height: "210px",
  width: "100%",
  backgroundColor: "var(--navy-dark)",
};

const placeholderThumbnailStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy-light) 100%)",
  position: "relative",
};

const playIconStyle: React.CSSProperties = {
  fontSize: "3rem",
  color: "#fff",
  backgroundColor: "var(--primary-green)",
  padding: "20px 24px",
  borderRadius: "50%",
  boxShadow: "0 4px 15px rgba(26, 150, 43, 0.4)",
  transition: "transform 0.3s ease",
};

const durationBadgeStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "15px",
  right: "15px",
  backgroundColor: "rgba(0,0,0,0.8)",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: "4px",
  fontSize: "0.75rem",
  fontWeight: "600",
};

const cardBodyStyle: React.CSSProperties = {
  padding: "20px",
  flexGrow: 1,
};

const metaStyle: React.CSSProperties = {
  fontSize: "0.85rem",
  color: "var(--text-muted)",
  marginBottom: "10px",
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: "700",
  lineHeight: "1.4",
  marginBottom: "10px",
  color: "var(--navy-dark)",
};

const cardDescStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  color: "var(--text-muted)",
  lineHeight: "1.6",
};

const modalOverlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(12, 21, 39, 0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1100,
  padding: "20px",
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: "#000",
  borderRadius: "16px",
  width: "100%",
  maxWidth: "900px",
  overflow: "hidden",
  position: "relative",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
};

const closeButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "15px",
  right: "15px",
  border: "none",
  background: "rgba(255,255,255,0.2)",
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  fontSize: "1.2rem",
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
  transition: "background 0.3s ease",
};

const videoWrapperStyle: React.CSSProperties = {
  position: "relative",
  paddingBottom: "56.25%", // 16:9 ratio
  height: 0,
  overflow: "hidden",
};

const iframeStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};
