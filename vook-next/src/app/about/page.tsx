import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vook Voice International",
};

export default function About() {
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
            <div className="col-5" style={{ position: "relative" }}>
              <ScrollReveal>
                <div className="premium-image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop" alt="Pastor Susan Kibii" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
                </div>
              </ScrollReveal>
            </div>
            <div className="col-7" style={{ paddingLeft: "2rem" }}>
              <ScrollReveal delay={200}>
                <div className="section-title">
                  <span className="subtitle">Founder's Profile</span>
                  <h2>Pastor Susan Kibii</h2>
                  <div className="title-underline"></div>
                </div>
                <p className="lead-text mt-4">Founder & Executive Director</p>
                <p className="text-muted mt-3 mb-4">
                  Pastor Susan Kibii is a visionary leader dedicated to spiritual and professional empowerment. 
                  She established Vook Voice International in 2017 to bridge the gap in emotional intelligence 
                  and corporate leadership training.
                </p>
                <blockquote style={{ borderLeft: "4px solid var(--primary-green)", paddingLeft: "1.5rem", fontStyle: "italic", margin: "2rem 0", color: "var(--navy-dark)", fontSize: "1.1rem" }}>
                  "Leadership is not just about strategic management; it's about emotional intelligence and understanding your core assignment in life."
                </blockquote>
                <p className="text-muted mb-4">
                  She is also the acclaimed author of the book <strong>"Understanding your Assignment before Marriage"</strong>, 
                  which has transformed countless lives through its insightful guidance.
                </p>
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
            <ScrollReveal delay={100}>
              <div className="premium-executive-card">
                <div className="premium-avatar">SK</div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }}>Pastor Susan Kibii</h4>
                  <span className="text-muted" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--primary-green)" }}>Founder & Executive Director</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="premium-executive-card">
                <div className="premium-avatar">MO</div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }}>Moses Osagiede</h4>
                  <span className="text-muted" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--primary-green)" }}>Associate Trainer & Leadership Scholar</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
