"use client";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Courses() {
  const triggerRegister = () => {
    document.dispatchEvent(new CustomEvent('openModal', {detail: 'Register'}));
  };

  const courses = [
    {
      title: "Corporate Leadership",
      desc: "Master the art of leading high-performance teams and driving organizational success.",
      icon: "fas fa-chess-king"
    },
    {
      title: "Conflict Management & Dynamics",
      desc: "Learn strategic frameworks to resolve workplace disputes and foster collaboration.",
      icon: "fas fa-handshake"
    },
    {
      title: "Emotional Intelligence",
      desc: "Develop the self-awareness and empathy needed for transformational leadership.",
      icon: "fas fa-brain"
    },
    {
      title: "Public Speaking & Communication",
      desc: "Build confidence and deliver impactful messages to any audience.",
      icon: "fas fa-microphone-alt"
    },
    {
      title: "Mentorship Program",
      desc: "Guidance and accountability for emerging leaders navigating their careers.",
      icon: "fas fa-route"
    },
    {
      title: "Strategic Project Management",
      desc: "Execute complex initiatives on time, on budget, and with precision.",
      icon: "fas fa-project-diagram"
    }
  ];

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-title light text-center mb-0">
            <span className="subtitle">Education</span>
            <h2>Course Offering June to September 2026</h2>
            <div className="title-underline center"></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray">
        <div className="container">
          <div className="grid-3">
            {courses.map((course, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="premium-course-card">
                  <div>
                    <i className={`${course.icon} premium-course-icon`}></i>
                    <h3>{course.title}</h3>
                    <p>{course.desc}</p>
                  </div>
                  <button 
                    onClick={triggerRegister} 
                    className="btn-corporate-primary"
                    style={{ width: '100%', marginTop: '1rem' }}
                  >
                    Register Here <i className="fas fa-arrow-right" style={{ marginLeft: "8px" }}></i>
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
