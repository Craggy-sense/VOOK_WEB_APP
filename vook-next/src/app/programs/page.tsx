import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departments & Programs | Vook Voice International",
};

export default function Programs() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074&auto=format&fit=crop')" }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-title light text-center mb-0">
            <span className="subtitle">Operations</span>
            <h2>Departments & Programs</h2>
            <div className="title-underline center"></div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="section-title text-center">
              <span className="subtitle">Our Structure</span>
              <h2>Operational Departments</h2>
              <div className="title-underline center"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid-3 mt-5">
            <ScrollReveal delay={100}>
              <div className="dept-card" style={{ padding: "3rem 2rem", textAlign: "center" }}>
                <i className="fas fa-female" style={{ fontSize: "2.5rem", color: "var(--primary-green)", marginBottom: "1.5rem" }}></i>
                <h3>Women Empowerment</h3>
                <p>Equipping women with tools to thrive in corporate and entrepreneurial landscapes.</p>
                <a href="#" className="dept-link" style={{ justifyContent: "center", width: "100%" }}>Learn More <span className="fas fa-arrow-right"></span></a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="dept-card" style={{ padding: "3rem 2rem", textAlign: "center" }}>
                <i className="fas fa-user-tie" style={{ fontSize: "2.5rem", color: "var(--primary-green)", marginBottom: "1.5rem" }}></i>
                <h3>Men of Integrity</h3>
                <p>Fostering accountability and strategic leadership among men.</p>
                <a href="#" className="dept-link" style={{ justifyContent: "center", width: "100%" }}>Learn More <span className="fas fa-arrow-right"></span></a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="dept-card" style={{ padding: "3rem 2rem", textAlign: "center" }}>
                <i className="fas fa-users" style={{ fontSize: "2.5rem", color: "var(--primary-green)", marginBottom: "1.5rem" }}></i>
                <h3>Youth Mentorship</h3>
                <p>Guiding the next generation into professional and spiritual maturity.</p>
                <a href="#" className="dept-link" style={{ justifyContent: "center", width: "100%" }}>Learn More <span className="fas fa-arrow-right"></span></a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="dept-card" style={{ padding: "3rem 2rem", textAlign: "center" }}>
                <i className="fas fa-child" style={{ fontSize: "2.5rem", color: "var(--primary-green)", marginBottom: "1.5rem" }}></i>
                <h3>The Boys Child</h3>
                <p>Specialized early interventions and leadership building for young boys.</p>
                <a href="#" className="dept-link" style={{ justifyContent: "center", width: "100%" }}>Learn More <span className="fas fa-arrow-right"></span></a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <div className="dept-card" style={{ padding: "3rem 2rem", textAlign: "center" }}>
                <i className="fas fa-child" style={{ fontSize: "2.5rem", color: "var(--primary-green)", marginBottom: "1.5rem" }}></i>
                <h3>The Girl Child</h3>
                <p>Advocacy, protection, and skill-building for young girls.</p>
                <a href="#" className="dept-link" style={{ justifyContent: "center", width: "100%" }}>Learn More <span className="fas fa-arrow-right"></span></a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray">
        <div className="container">
          <ScrollReveal>
            <div className="section-title text-center">
              <span className="subtitle">Initiatives</span>
              <h2>Strategic Programs</h2>
              <div className="title-underline center"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid-3 mt-5">
            <ScrollReveal delay={100}>
              <div className="prog-corporate-card" style={{ padding: "3rem 2rem" }}>
                <div className="prog-header">
                  <h4>Prison Ministry</h4>
                  <span className="prog-tag">Outreach</span>
                </div>
                <p className="mt-3">Rehabilitation and reintegration strategies through guided counseling and community support systems.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="prog-corporate-card" style={{ padding: "3rem 2rem" }}>
                <div className="prog-header">
                  <h4>Counselling</h4>
                  <span className="prog-tag">Support</span>
                </div>
                <p className="mt-3">Professional therapy and emotional support systems for individuals and families dealing with modern complexities.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="prog-corporate-card" style={{ padding: "3rem 2rem" }}>
                <div className="prog-header">
                  <h4>Vook Radio (Sauti Vook)</h4>
                  <span className="prog-tag">Media</span>
                </div>
                <p className="mt-3">Our broadcasting arm reaching the masses with transformational content, leadership tips, and spiritual guidance.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
