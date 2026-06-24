import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ settings }: { settings: any }) {
  return (
    <footer className="corporate-footer">
      <div className="footer-top">
        <div className="container row">
          <div className="col-5">
            <p className="mb-4" style={{ fontSize: "1.2rem", fontWeight: "600", color: "var(--accent-cream)", lineHeight: "1.6", marginTop: "1rem" }}>
              Generating, Packaging, and Sharing Knowledge for Transformation
            </p>
          </div>
          
          <div className="col-7 row">
            <div className="col-6 footer-links">
              <h4 style={{ color: "var(--accent-red)" }}>Quick Links</h4>
              <ul className="mb-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/programs">Programs</Link></li>
                <li><Link href="/courses">Course Offerings</Link></li>
              </ul>
              
              {/* Social Media Icons moved to middle part */}
              <div className="flex gap-4" style={{ justifyContent: "flex-start", marginTop: "1.5rem" }}>
                <a href="#" className="header-social-link" style={{ fontSize: "1.5rem" }}><i className="fab fa-whatsapp"></i></a>
                <a href="#" className="header-social-link" style={{ fontSize: "1.5rem" }}><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="header-social-link" style={{ fontSize: "1.5rem" }}><i className="fab fa-twitter"></i></a>
                <a href="#" className="header-social-link" style={{ fontSize: "1.5rem" }}><i className="fab fa-facebook-f"></i></a>
              </div>
            </div>
            
            <div className="col-6 footer-contact-info">
              <h4 style={{ color: "var(--accent-red)" }}>Contact Us</h4>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt f-icon"></i>
                  <span>{settings.address}</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt f-icon"></i>
                  <a href={`tel:${settings.phone.replace(/\s+/g, '')}`}>{settings.phone}</a>
                </li>
                <li>
                  <i className="fas fa-envelope f-icon"></i>
                  <a href={`mailto:${settings.email}`}>{settings.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Vook Voice International. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
