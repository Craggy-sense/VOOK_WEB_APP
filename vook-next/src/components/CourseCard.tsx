"use client";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CourseCard({ course, index }: { course: any, index: number }) {
  const triggerRegister = () => {
    document.dispatchEvent(new CustomEvent('openModal', {detail: 'Register'}));
  };

  return (
    <ScrollReveal delay={index * 100}>
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
  );
}
