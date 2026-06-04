"use client";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Courses() {
  const triggerRegister = () => {
    document.dispatchEvent(new CustomEvent('openModal', {detail: 'Register'}));
  };

  const courses = [
    "Corporate Leadership",
    "Conflict Management & Dynamics",
    "Emotional Intelligence",
    "Public Speaking & Communication",
    "Mentorship Program",
    "Strategic Project Management"
  ];

  return (
    <>
      <section className="bg-dark text-white" style={{ padding: "8rem 0 4rem", position: "relative" }}>
        <div className="container">
          <div className="section-title light text-center">
            <span className="subtitle">Education</span>
            <h2>Course Offering June to September 2026</h2>
            <div className="title-underline center"></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-dark">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-7">
              <div className="course-list-corporate">
                {courses.map((course, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="course-item">
                      <h5>{course}</h5>
                      <button 
                        onClick={triggerRegister} 
                        className="course-register-link"
                        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                      >
                        Register Here <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
