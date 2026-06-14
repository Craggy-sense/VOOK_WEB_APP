import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ settings }: { settings: any }) {
  return (
    <footer className="corporate-footer">
      <div className="footer-top">
        <div className="container row">
          <div className="col-5">
            <div style={{ 
              backgroundColor: 'var(--accent-cream)', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              display: 'inline-block', 
              marginBottom: '1.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <Image 
                src="/Vook logo new.jpg" 
                alt="Vook Voice International Logo" 
                width={180} 
                height={54} 
                style={{ display: 'block', objectFit: 'contain' }}
              />
            </div>
            <p className="mb-4">
              Availing Knowledge to the People. A registered NGO in Kenya dedicated to empowerment, leadership training, and spiritual growth.
            </p>
            {/* Social Media Icons moved to left side under description */}
            <div className="flex gap-4" style={{ justifyContent: "flex-start", marginTop: "1.5rem" }}>
              <a href="#" className="header-social-link" style={{ fontSize: "1.5rem" }}><i className="fab fa-whatsapp"></i></a>
              <a href="#" className="header-social-link" style={{ fontSize: "1.5rem" }}><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="header-social-link" style={{ fontSize: "1.5rem" }}><i className="fab fa-twitter"></i></a>
              <a href="#" className="header-social-link" style={{ fontSize: "1.5rem" }}><i className="fab fa-facebook-f"></i></a>
            </div>
          </div>
          
          <div className="col-7 row">
            <div className="col-6 footer-links">
              <h4 style={{ color: "var(--accent-red)" }}>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/programs">Programs</Link></li>
                <li><Link href="/courses">Course Offerings</Link></li>
              </ul>
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
