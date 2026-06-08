"use client";
import React, { useState } from "react";
import { useTina } from "tinacms/dist/react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProgramsPage(props: any) {
  const [selectedDept, setSelectedDept] = useState<any>(null);
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.pages;
  const departments = page.departments || [];
  const strategic_programs = page.strategic_programs || [];

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
            <h2 data-tina-field={tinaField(page, "programs_hero_title")}>{page.programs_hero_title}</h2>
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
            {departments.map((dept: any, index: number) => (
              <ScrollReveal key={dept.id || index} delay={(index + 1) * 100}>
                <div className="dept-card" style={{ padding: "3rem 2rem", textAlign: "center" }} data-tina-field={tinaField(dept, "title")}>
                  <i className={dept.icon || "fas fa-users"} style={{ fontSize: "2.5rem", color: "var(--primary-green)", marginBottom: "1.5rem" }} data-tina-field={tinaField(dept, "icon")}></i>
                  <h3 data-tina-field={tinaField(dept, "title")}>{dept.title}</h3>
                  <p data-tina-field={tinaField(dept, "short")}>{dept.short}</p>
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
                <i className={selectedDept.icon || "fas fa-users"} style={{ fontSize: "3rem", color: "var(--primary-green)", marginBottom: "1rem" }}></i>
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
            {strategic_programs.map((prog: any, index: number) => (
              <ScrollReveal delay={(index + 1) * 100} key={index}>
                <div className="prog-corporate-card" style={{ padding: "3rem 2rem" }} data-tina-field={tinaField(prog, "title")}>
                  <div className="prog-header">
                    <h4 data-tina-field={tinaField(prog, "title")}>{prog.title}</h4>
                    <span className="prog-tag" data-tina-field={tinaField(prog, "tag")}>{prog.tag}</span>
                  </div>
                  <p className="mt-3" data-tina-field={tinaField(prog, "desc")}>{prog.desc}</p>
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
