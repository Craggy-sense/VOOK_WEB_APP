"use client";
import React, { useState, useEffect } from "react";

export default function RegistrationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("Register"); // "Register" or "Contact"

  useEffect(() => {
    const handleOpenModal = (e: any) => {
      if (e.detail) {
        setModalType(e.detail);
      } else {
        setModalType("Register");
      }
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };

    document.addEventListener("openModal", handleOpenModal);
    return () => document.removeEventListener("openModal", handleOpenModal);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`} onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal} aria-label="Close Modal">
          <i className="fas fa-times"></i>
        </button>
        <h2 className="modal-title">{modalType === "Register" ? "Course Registration" : "Contact Us"}</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("Form submitted successfully!"); closeModal(); }}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" required placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" required placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="+254 700 000 000" />
          </div>
          
          {modalType === "Register" && (
            <div className="form-group">
              <label htmlFor="course">Select Course *</label>
              <select id="course" required>
                <option value="">-- Choose a Course --</option>
                <option value="corporate-leadership">Corporate Leadership</option>
                <option value="conflict-management">Conflict Management & Dynamics</option>
                <option value="emotional-intelligence">Emotional Intelligence</option>
                <option value="public-speaking">Public Speaking & Communication</option>
                <option value="mentorship">Mentorship Program</option>
                <option value="project-management">Strategic Project Management</option>
              </select>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={4} placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" className="btn-corporate-primary modal-submit">
            {modalType === "Register" ? "Submit Registration" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
