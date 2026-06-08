"use client";
import React from "react";
import { useTina } from "tinacms/dist/react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.pages;

  return (
    <>
      {/* Premium Page Header */}
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-title light text-center mb-0">
            <span className="subtitle">About Us</span>
            <h2>Who We Are</h2>
            <div className="title-underline center"></div>
          </div>
        </div>
      </section>

      {/* Founder Section - Zig Zag Layout */}
      <section id="profile" className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5" style={{ position: "relative" }}>
              <ScrollReveal>
                <div className="premium-image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={page.founder_image} alt={page.founder_name} style={{ width: "100%", height: "500px", objectFit: "cover" }} data-tina-field={tinaField(page, "founder_image")} />
                </div>
              </ScrollReveal>
            </div>
            <div className="col-md-7" style={{ paddingLeft: "2rem" }}>
              <ScrollReveal delay={200}>
                <div className="section-title">
                  <span className="subtitle">Founder's Profile</span>
                  <h2 data-tina-field={tinaField(page, "founder_name")}>{page.founder_name}</h2>
                  <div className="title-underline"></div>
                </div>
                <p className="lead-text mt-4" data-tina-field={tinaField(page, "founder_title")}>{page.founder_title}</p>
                <p className="text-muted mt-3 mb-4" data-tina-field={tinaField(page, "founder_bio")}>
                  {page.founder_bio}
                </p>
                <blockquote style={{ borderLeft: "4px solid var(--primary-green)", paddingLeft: "1.5rem", fontStyle: "italic", margin: "2rem 0", color: "var(--navy-dark)", fontSize: "1.1rem" }} data-tina-field={tinaField(page, "founder_quote")}>
                  {page.founder_quote}
                </blockquote>
              </ScrollReveal>
            </div>
          </div>

          <div className="row align-items-center" style={{ marginTop: "6rem" }}>
            <div className="col-md-7 order-2 order-md-1" style={{ paddingRight: "2rem" }}>
              <ScrollReveal delay={200}>
                <div className="section-title">
                  <span className="subtitle">Leadership Scholar</span>
                  <h2 data-tina-field={tinaField(page, "moses_name")}>{page.moses_name}</h2>
                  <div className="title-underline"></div>
                </div>
                <p className="lead-text mt-4" data-tina-field={tinaField(page, "moses_title")}>{page.moses_title}</p>
                <p className="text-muted mt-3 mb-4" data-tina-field={tinaField(page, "moses_bio")}>
                  {page.moses_bio}
                </p>
              </ScrollReveal>
            </div>
            <div className="col-md-5 order-1 order-md-2" style={{ position: "relative" }}>
              <ScrollReveal>
                <div className="premium-image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={page.moses_image} alt={page.moses_name} style={{ width: "100%", height: "500px", objectFit: "cover" }} data-tina-field={tinaField(page, "moses_image")} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section - Executive Cards */}
      <section id="team" className="section-padding bg-gray">
        <div className="container">
          <ScrollReveal>
            <div className="section-title text-center">
              <span className="subtitle">The Leadership</span>
              <h2>Our Core Team</h2>
              <div className="title-underline center"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid-3 mt-5">
            {page.core_team && page.core_team.map((member: any, index: number) => (
              <ScrollReveal delay={(index + 1) * 100} key={index}>
                <div className="premium-executive-card" data-tina-field={tinaField(member, "name")}>
                  <div className="premium-avatar" data-tina-field={tinaField(member, "initials")}>{member.initials}</div>
                  <div>
                    <h4 style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }} data-tina-field={tinaField(member, "name")}>{member.name}</h4>
                    <span className="text-muted" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--primary-green)" }} data-tina-field={tinaField(member, "title")}>{member.title}</span>
                    {member.country && <div style={{ fontSize: "0.8rem", color: "var(--text-light)" }} data-tina-field={tinaField(member, "country")}>{member.country}</div>}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Collaborations Section */}
      <section id="partners" className="section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="section-title text-center">
              <span className="subtitle">Our Network</span>
              <h2>Partners & Collaborations</h2>
              <div className="title-underline center"></div>
              <p className="text-muted mt-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
                Vook Voice International partners with a wide range of experts, organizations, and institutions to create, package, and share impactful knowledge across different sectors.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid-3 mt-5">
            {page.partnerships && page.partnerships.map((partner: any, index: number) => (
              <ScrollReveal delay={(index + 1) * 100} key={index}>
                <div className="premium-executive-card" style={{ flexDirection: "column", alignItems: "flex-start", gap: "1rem" }} data-tina-field={tinaField(partner, "title")}>
                  <i className={partner.icon || "fas fa-star"} style={{ fontSize: "2rem", color: "var(--primary-green)" }} data-tina-field={tinaField(partner, "icon")}></i>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0" }} data-tina-field={tinaField(partner, "title")}>{partner.title}</h4>
                  <p className="text-muted" style={{ fontSize: "0.95rem" }} data-tina-field={tinaField(partner, "desc")}>{partner.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Helper for Tina visual editing attributes
const tinaField = (obj: any, field: string) => {
  return obj?._tina_metadata?.fields?.[field] || undefined;
};
