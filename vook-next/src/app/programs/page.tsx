import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departments & Programs | Vook Voice International",
};

export default function Programs() {
  return (
    <>
      <section className="bg-dark text-white" style={{ padding: "8rem 0 4rem", position: "relative" }}>
        <div className="container">
          <div className="section-title light text-center">
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
              <div className="dept-card">
                <h3>Women Empowerment</h3>
                <p>Equipping women with tools to thrive in corporate and entrepreneurial landscapes.</p>
                <a href="#" className="dept-link">Learn More <span className="fas fa-arrow-right"></span></a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="dept-card">
                <h3>Men of Integrity</h3>
                <p>Fostering accountability and strategic leadership among men.</p>
                <a href="#" className="dept-link">Learn More <span className="fas fa-arrow-right"></span></a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="dept-card">
                <h3>Youth Mentorship</h3>
                <p>Guiding the next generation into professional and spiritual maturity.</p>
                <a href="#" className="dept-link">Learn More <span className="fas fa-arrow-right"></span></a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="dept-card">
                <h3>The Boys Child</h3>
                <p>Specialized early interventions and leadership building for young boys.</p>
                <a href="#" className="dept-link">Learn More <span className="fas fa-arrow-right"></span></a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <div className="dept-card">
                <h3>The Girl Child</h3>
                <p>Advocacy, protection, and skill-building for young girls.</p>
                <a href="#" className="dept-link">Learn More <span className="fas fa-arrow-right"></span></a>
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
              <div className="prog-corporate-card">
                <div className="prog-header">
                  <h4>Prison Ministry</h4>
                  <span className="prog-tag">Outreach</span>
                </div>
                <p>Rehabilitation and reintegration strategies through guided counseling.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="prog-corporate-card">
                <div className="prog-header">
                  <h4>Counselling</h4>
                  <span className="prog-tag">Support</span>
                </div>
                <p>Professional therapy and emotional support systems for individuals and families.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="prog-corporate-card">
                <div className="prog-header">
                  <h4>Vook Radio (Sauti Vook)</h4>
                  <span className="prog-tag">Media</span>
                </div>
                <p>Our broadcasting arm reaching the masses with transformational content.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
