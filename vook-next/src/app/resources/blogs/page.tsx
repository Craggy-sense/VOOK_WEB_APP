"use client";
import React, { useState } from "react";
import { blogsData, BlogItem } from "@/data/resources";

export default function BlogsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "blog" | "book" | "resource">("all");
  const [selectedArticle, setSelectedArticle] = useState<BlogItem | null>(null);

  const filteredItems = blogsData.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  return (
    <div className="bg-gray min-h-screen" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <style dangerouslySetInnerHTML={{__html: `
        .resource-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
        }
      `}} />
      <div className="container">

        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="section-title">
            <span className="subtitle">Knowledge Hub</span>
            <h2>Blogs, Books & Learning Resources</h2>
            <div className="title-underline center" style={{ margin: "0 auto" }}></div>
          </div>
          <p className="text-muted mt-3" style={{ maxWidth: "600px", margin: "1.5rem auto 0" }}>
            Explore our curated collection of educational books, toolkits, and insightful articles written by Pastor Sue and our leading experts.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex-tabs" style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
          <button
            onClick={() => setActiveTab("all")}
            className={`btn-tab ${activeTab === "all" ? "active" : ""}`}
            style={tabButtonStyle(activeTab === "all")}
          >
            All Resources
          </button>
          <button
            onClick={() => setActiveTab("blog")}
            className={`btn-tab ${activeTab === "blog" ? "active" : ""}`}
            style={tabButtonStyle(activeTab === "blog")}
          >
            Articles & Blogs
          </button>
          <button
            onClick={() => setActiveTab("book")}
            className={`btn-tab ${activeTab === "book" ? "active" : ""}`}
            style={tabButtonStyle(activeTab === "book")}
          >
            E-Books
          </button>
          <button
            onClick={() => setActiveTab("resource")}
            className={`btn-tab ${activeTab === "resource" ? "active" : ""}`}
            style={tabButtonStyle(activeTab === "resource")}
          >
            Toolkits & Downloads
          </button>
        </div>

        {/* Grid Display */}
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "30px" }}>
          {filteredItems.map((item) => (
            <div key={item.id} className="resource-card" style={cardStyle}>
              {/* Card Thumbnail */}
              <div style={thumbnailContainerStyle}>
                <img src={item.image} alt={item.title} style={thumbnailStyle} />
                <span style={categoryBadgeStyle(item.category)}>
                  {item.category === "blog" ? "Article" : item.category === "book" ? "Book" : item.resourceType || "Resource"}
                </span>
              </div>

              {/* Card Body */}
              <div style={cardBodyStyle}>
                <div style={metaStyle}>
                  <span>By {item.author}</span>
                  {item.category === "blog" && <span style={{ marginLeft: "auto" }}>{item.date}</span>}
                </div>
                <h3 style={cardTitleStyle}>{item.title}</h3>
                <p style={cardDescStyle}>{item.excerpt}</p>
              </div>

              {/* Card Footer */}
              <div style={cardFooterStyle}>
                {item.category === "blog" ? (
                  <button
                    onClick={() => setSelectedArticle(item)}
                    className="btn-read-more"
                    style={primaryButtonStyle}
                  >
                    Read Article <i className="fas fa-arrow-right" style={{ marginLeft: "8px" }}></i>
                  </button>
                ) : (
                  <a
                    href={item.downloadUrl || "#"}
                    className="btn-download"
                    style={secondaryButtonStyle}
                    onClick={(e) => {
                      if (item.downloadUrl === "#") {
                        e.preventDefault();
                        alert("This resource is currently being finalized and will be available for download soon!");
                      }
                    }}
                  >
                    <i className="fas fa-download" style={{ marginRight: "8px" }}></i> Download Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Reading Full Blog */}
      {selectedArticle && (
        <div className="modal-overlay" style={modalOverlayStyle}>
          <div className="modal-content" style={modalContentStyle}>
            <button onClick={() => setSelectedArticle(null)} style={closeButtonStyle} aria-label="Close modal">
              <i className="fas fa-times"></i>
            </button>
            <div style={{ padding: "30px" }}>
              <span style={categoryBadgeStyle("blog")}>Article</span>
              <h2 style={{ fontSize: "2rem", marginTop: "15px", color: "var(--navy-dark)" }}>{selectedArticle.title}</h2>
              <div style={{ ...metaStyle, margin: "15px 0 25px 0", borderBottom: "1px solid var(--border-color)", paddingBottom: "15px" }}>
                <span>Written by: <strong>{selectedArticle.author}</strong></span>
                <span style={{ marginLeft: "30px" }}><i className="far fa-calendar-alt"></i> {selectedArticle.date}</span>
              </div>
              <img src={selectedArticle.image} alt={selectedArticle.title} style={modalImageStyle} />
              <div style={modalBodyStyle}>
                <p>{selectedArticle.content}</p>
              </div>
            </div>
          </div>
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
  backgroundColor: "var(--bg-white)",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const thumbnailContainerStyle: React.CSSProperties = {
  position: "relative",
  height: "200px",
  width: "100%",
  overflow: "hidden",
};

const thumbnailStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const categoryBadgeStyle = (category: string): React.CSSProperties => ({
  position: "absolute",
  top: "15px",
  left: "15px",
  backgroundColor: category === "blog" ? "var(--primary-green)" : category === "book" ? "var(--accent-red)" : "var(--navy-dark)",
  color: "#fff",
  padding: "5px 12px",
  borderRadius: "20px",
  fontSize: "0.75rem",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
});

const cardBodyStyle: React.CSSProperties = {
  padding: "20px",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
};

const metaStyle: React.CSSProperties = {
  display: "flex",
  fontSize: "0.85rem",
  color: "var(--text-muted)",
  marginBottom: "10px",
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: "1.25rem",
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

const cardFooterStyle: React.CSSProperties = {
  padding: "0 20px 20px 20px",
  backgroundColor: "var(--bg-white)",
};

const primaryButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 20px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "var(--primary-green)",
  color: "#fff",
  fontWeight: "600",
  fontSize: "0.95rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  textAlign: "center",
};

const secondaryButtonStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "12px 20px",
  borderRadius: "8px",
  border: "2px solid var(--navy-dark)",
  backgroundColor: "transparent",
  color: "var(--navy-dark)",
  fontWeight: "600",
  fontSize: "0.95rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  textAlign: "center",
};

const modalOverlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(12, 21, 39, 0.85)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1100,
  padding: "20px",
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  borderRadius: "16px",
  width: "100%",
  maxWidth: "800px",
  maxHeight: "90vh",
  overflowY: "auto",
  position: "relative",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
};

const closeButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "20px",
  right: "20px",
  border: "none",
  background: "none",
  fontSize: "1.5rem",
  color: "var(--navy-dark)",
  cursor: "pointer",
  padding: "5px",
};

const modalImageStyle: React.CSSProperties = {
  width: "100%",
  maxHeight: "350px",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "20px",
};

const modalBodyStyle: React.CSSProperties = {
  fontSize: "1.05rem",
  lineHeight: "1.8",
  color: "var(--text-main)",
};
