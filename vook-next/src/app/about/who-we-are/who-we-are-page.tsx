"use client";
import React from "react";
import { useTina } from "tinacms/dist/react";
import ScrollReveal from "@/components/ScrollReveal";

export default function WhoWeArePage(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.pages;

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: "url('/uploads/black_people_working.png')" }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-title light text-center mb-0">
            <span className="subtitle">About Us</span>
            <h2 style={{ color: "#F8F1AE" }}>Who We Are</h2>
            <div className="title-underline center"></div>
          </div>
        </div>
      </section>

      <section id="who-we-are" className="section-padding">
        <div className="container">
          {/* Vision, Mission & Values */}
          <div className="grid-3 mb-5">
            <ScrollReveal style={{ height: "100%" }}>
              <div className="premium-executive-card" style={{ height: "100%", flexDirection: "column", alignItems: "flex-start" }}>
                <i className="fas fa-eye" style={{ fontSize: "2rem", color: "var(--primary-green)", marginBottom: "1rem" }}></i>
                <h3 style={{ marginBottom: "1rem", color: "var(--accent-red)" }}>Our Vision</h3>
                <p className="text-muted" data-tina-field={tinaField(page, "vision")}>{page.vision}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100} style={{ height: "100%" }}>
              <div className="premium-executive-card" style={{ height: "100%", flexDirection: "column", alignItems: "flex-start" }}>
                <i className="fas fa-bullseye" style={{ fontSize: "2rem", color: "var(--primary-green)", marginBottom: "1rem" }}></i>
                <h3 style={{ marginBottom: "1rem", color: "var(--accent-red)" }}>Our Mission</h3>
                <p className="text-muted" data-tina-field={tinaField(page, "mission")}>{page.mission}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} style={{ height: "100%" }}>
              <div className="premium-executive-card" style={{ height: "100%", flexDirection: "column", alignItems: "flex-start" }}>
                <i className="fas fa-star" style={{ fontSize: "2rem", color: "var(--primary-green)", marginBottom: "1rem" }}></i>
                <h3 style={{ marginBottom: "1rem", color: "var(--accent-red)" }}>Our Values</h3>
                <p className="text-muted" data-tina-field={tinaField(page, "values")} style={{ whiteSpace: "pre-wrap" }}>{page.values}</p>
              </div>
            </ScrollReveal>
          </div>

          {/* What We Do & Company Profile */}
          <div className="grid-2 mb-5" style={{ marginTop: "4rem" }}>
            <ScrollReveal style={{ height: "100%" }}>
              <div className="premium-executive-card" style={{ height: "100%", flexDirection: "column", alignItems: "flex-start" }}>
                <h3 style={{ marginBottom: "1rem", color: "var(--accent-red)" }}>What We Do</h3>
                <p className="text-muted" data-tina-field={tinaField(page, "what_we_do")} style={{ whiteSpace: "pre-wrap" }}>{page.what_we_do}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100} style={{ height: "100%" }}>
              <div className="premium-executive-card" style={{ height: "100%", flexDirection: "column", alignItems: "flex-start" }}>
                <h3 style={{ marginBottom: "1rem", color: "var(--accent-red)" }}>Company Profile</h3>
                <p className="text-muted" data-tina-field={tinaField(page, "company_profile")} style={{ whiteSpace: "pre-wrap" }}>
                  {page.company_profile}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Our Impact */}
          <div className="row mb-5 align-items-center">
            <div className="col-12">
              <ScrollReveal>
                <div className="premium-executive-card" style={{ flexDirection: "column", alignItems: "flex-start", background: "var(--primary-dark)", color: "var(--bg-white)" }}>
                  <i className="fas fa-globe-africa" style={{ fontSize: "2rem", color: "#F8F1AE", marginBottom: "1rem" }}></i>
                  <h3 style={{ marginBottom: "1rem", color: "var(--bg-white)" }}>Our Impact</h3>
                  <p className="lead-text" data-tina-field={tinaField(page, "our_impact")} style={{ whiteSpace: "pre-wrap", color: "rgba(255,255,255,0.8)" }}>{page.our_impact}</p>
                </div>
              </ScrollReveal>
            </div>
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
