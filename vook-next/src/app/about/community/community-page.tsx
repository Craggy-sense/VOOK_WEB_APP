"use client";
import React from "react";
import { useTina } from "tinacms/dist/react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CommunityPage(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.pages;

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: "url('/uploads/happy_community.png')" }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-title light text-center mb-0">
            <span className="subtitle">Our Network</span>
            <h2 style={{ color: "#F8F1AE" }}>Our Community</h2>
            <div className="title-underline center"></div>
          </div>
        </div>
      </section>

      <section id="community" className="section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="section-title text-center">
              <span className="subtitle">Together We Grow</span>
              <h2>Building the Future</h2>
              <div className="title-underline center"></div>
              <p className="text-muted mt-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
                Vook Voice International partners with a wide range of experts, organizations, and individuals to create, package, and share impactful knowledge across different sectors.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid-3 mt-5">
            {page.community_groups && page.community_groups.map((group: any, index: number) => (
              <ScrollReveal delay={(index + 1) * 100} key={index}>
                <div className="premium-executive-card" style={{ flexDirection: "column", alignItems: "flex-start", gap: "1rem", height: "100%" }} data-tina-field={tinaField(group, "title")}>
                  <i className={group.icon || "fas fa-users"} style={{ fontSize: "2rem", color: "var(--primary-green)" }} data-tina-field={tinaField(group, "icon")}></i>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "0" }} data-tina-field={tinaField(group, "title")}>{group.title}</h4>
                  <p className="text-muted" style={{ fontSize: "0.95rem" }} data-tina-field={tinaField(group, "desc")}>{group.desc}</p>
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
