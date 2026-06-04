import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export default function Programs() {
  const [selectedDept, setSelectedDept] = useState<any>(null);

  const departments = [
    {
      id: "women",
      title: "Women Empowerment",
      icon: "fas fa-female",
      short: "Equipping women with tools to thrive in corporate and entrepreneurial landscapes.",
      details: "Our Women Empowerment initiative is deeply rooted in the Women of Da'at (Knowledge) Program. We focus on equipping women with self-leadership, resilience, and essential life skills. Through guided learning and practical experiences, participants build the confidence, adaptability, and creativity needed to navigate challenges, embrace change, and unlock their full potential in their families, communities, and spheres of influence."
    },
    {
      id: "men",
      title: "Men of Integrity",
      icon: "fas fa-user-tie",
      short: "Fostering accountability and strategic leadership among men.",
      details: "The Men of Integrity department is dedicated to fostering accountability, strategic leadership, and spiritual maturity among men. We organize specialized masterclasses and conferences that bring professionals together to share experiences, creating a brotherhood of like-minded individuals focused on growth, collaboration, and excellence in every area of service."
    },
    {
      id: "youth",
      title: "Youth Mentorship",
      icon: "fas fa-users",
      short: "Guiding the next generation into professional and spiritual maturity.",
      details: "Driven by our 'Young & Resilient Program', this department empowers youth to thrive through change and rise beyond limits. We equip young people with self-leadership, resilience, and essential life skills necessary to navigate the complexities of the modern world, ensuring they are prepared for both corporate and ministry leadership."
    },
    {
      id: "boys",
      title: "The Boys Child",
      icon: "fas fa-child",
      short: "Specialized early interventions and leadership building for young boys.",
      details: "Focusing heavily on early interventions, The Boys Child department provides tailored mentorship and life-skills coaching for young boys. We believe in building a strong foundation of emotional intelligence, respect, and visionary leadership from an early age, mitigating societal challenges and raising responsible future leaders."
    },
    {
      id: "girls",
      title: "The Girl Child",
      icon: "fas fa-child",
      short: "Advocacy, protection, and skill-building for young girls.",
      details: "This department is committed to the advocacy, protection, and holistic development of young girls. Through structured mentorship, academic support, and spiritual guidance, we provide a safe space for girls to discover their purpose, build their self-esteem, and acquire the knowledge needed to excel in all spheres of life."
    }
  ];

  const closeModal = () => {
    setSelectedDept(null);
  };

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
            {departments.map((dept, index) => (
              <ScrollReveal key={dept.id} delay={(index + 1) * 100}>
                <div className="dept-card" style={{ padding: "3rem 2rem", textAlign: "center" }}>
                  <i className={dept.icon} style={{ fontSize: "2.5rem", color: "var(--primary-green)", marginBottom: "1.5rem" }}></i>
                  <h3>{dept.title}</h3>
                  <p>{dept.short}</p>
                  <button 
                    className="dept-link" 
                    style={{ background: "none", border: "none", padding: 0, cursor: "pointer", justifyContent: "center", width: "100%", fontSize: "0.9rem" }}
                    onClick={() => setSelectedDept(dept)}
                  >
                    Learn More <span className="fas fa-arrow-right"></span>
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Department Detail Modal */}
      <div className={`modal-overlay ${selectedDept ? "active" : ""}`} onClick={closeModal} style={{ zIndex: 3000 }}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "600px" }}>
          <button className="modal-close" onClick={closeModal} aria-label="Close Modal">
            <i className="fas fa-times"></i>
          </button>
          
          {selectedDept && (
            <>
              <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                <i className={selectedDept.icon} style={{ fontSize: "3rem", color: "var(--primary-green)", marginBottom: "1rem" }}></i>
                <h2 className="modal-title" style={{ marginBottom: "0.5rem" }}>{selectedDept.title}</h2>
                <div className="title-underline center"></div>
              </div>
              
              <div style={{ fontSize: "1.05rem", color: "var(--text-main)", lineHeight: "1.8" }}>
                <p>{selectedDept.details}</p>
              </div>
              
              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <button 
                  className="btn-corporate-primary" 
                  onClick={() => {
                    closeModal();
                    setTimeout(() => {
                      document.dispatchEvent(new CustomEvent('openModal', {detail: 'Contact'}));
                    }, 300);
                  }}
                >
                  Contact Department
                </button>
              </div>
            </>
          )}
        </div>
      </div>

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
