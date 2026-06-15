"use client";
import React, { useState } from "react";
import { useTina } from "tinacms/dist/react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CoreTeamPage(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.pages;
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const openModal = (member: any) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: "url('/uploads/unity_core_team.png')" }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-title light text-center mb-0">
            <span className="subtitle">About Us</span>
            <h2>Our Core Team</h2>
            <div className="title-underline center"></div>
          </div>
        </div>
      </section>

      <section id="team" className="section-padding bg-gray">
        <div className="container">
          <ScrollReveal>
            <div className="section-title text-center">
              <h2>Meet <span style={{ color: "var(--accent-red)" }}>Our Team</span></h2>
              <div className="title-underline center"></div>
              <p className="text-muted mt-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
                Click on any team member to view their full profile.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid-3 mt-5">
            {page.core_team && page.core_team.map((member: any, index: number) => (
              <ScrollReveal delay={(index + 1) * 100} key={index} style={{ height: "100%" }}>
                <div className="premium-executive-card clickable-card" onClick={() => openModal(member)} data-tina-field={tinaField(member, "name")} style={{ cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease", height: "100%" }}>
                  {member.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={member.image} alt={member.name} style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "3px solid var(--primary-green)" }} />
                  ) : (
                    <div className="premium-avatar" style={{ width: "150px", height: "150px", fontSize: "3rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} data-tina-field={tinaField(member, "initials")}>{member.initials}</div>
                  )}
                  <div>
                    <h4 style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }} data-tina-field={tinaField(member, "name")}>{member.name}</h4>
                    <span className="text-muted" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--primary-green)" }} data-tina-field={tinaField(member, "title")}>{member.title}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="team-modal-overlay" onClick={closeModal}>
          <div className="team-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="team-modal-close" onClick={closeModal} aria-label="Close modal">
              <i className="fas fa-times"></i>
            </button>
            <div className="team-modal-body">
              <div className="team-modal-image-area" style={{ background: "var(--primary-dark)", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                {selectedMember.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={selectedMember.image} alt={selectedMember.name} style={{ width: "320px", height: "320px", borderRadius: "50%", objectFit: "cover", border: "5px solid #F8F1AE", marginBottom: "1.5rem" }} />
                ) : (
                  <div className="premium-avatar" style={{ width: "200px", height: "200px", fontSize: "4rem", marginBottom: "1.5rem", border: "5px solid #F8F1AE" }}>{selectedMember.initials}</div>
                )}
                <h3 style={{ color: "var(--bg-white)", marginBottom: "0.5rem" }}>{selectedMember.name}</h3>
                <div style={{ color: "var(--accent-red)", fontWeight: "600", fontSize: "1.1rem" }}>{selectedMember.title}</div>
              </div>
              <div className="team-modal-content-area">

                <div className="team-modal-bio">
                  <p style={{ whiteSpace: "pre-wrap" }}>{selectedMember.bio || "Biography details coming soon."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Helper for Tina visual editing attributes
const tinaField = (obj: any, field: string) => {
  return obj?._tina_metadata?.fields?.[field] || undefined;
};
