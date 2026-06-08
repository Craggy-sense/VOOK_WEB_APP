"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ settings }: { settings: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (e: React.MouseEvent, menu: string) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  return (
    <header className={`modern-header ${isScrolled ? "fixed-header" : ""}`}>
      {/* Top Bar */}
      <div className="header-top-bar">
        <div className="container header-top-container">
          <div className="header-top-left">
            <a href={`mailto:${settings.email}`} className="header-top-item">
              <i className="fas fa-envelope icon"></i> {settings.email}
            </a>
            <span className="header-top-item">
              <i className="fas fa-map-marker-alt icon"></i> {settings.address}
            </span>
          </div>
          <div className="header-top-right">
            <span className="header-top-item">Follow Us:</span>
            <a href="#" className="header-social-link" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="header-social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="header-social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="header-social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="header-main-nav">
        <div className="container header-nav-container">
          <Link href="/" className="header-logo">
            <Image src="/Vook logo new.jpg" alt="Vook Voice International" width={150} height={50} priority style={{ height: "50px", width: "auto" }} />
          </Link>

          <nav className={`nav-wrapper ${isMobileMenuOpen ? "active" : ""}`}>
            <ul className="header-nav-menu">
              <li className="header-nav-item">
                <Link href="/" className="header-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              
              <li className={`header-nav-item has-dropdown ${activeDropdown === "about" ? "active" : ""}`}>
                <Link href="/about" className="header-nav-link" onClick={(e) => toggleDropdown(e, "about")}>
                  About Us <i className="fas fa-chevron-down dropdown-arrow"></i>
                </Link>
                <ul className="header-dropdown-menu">
                  <li className="header-dropdown-item">
                    <Link href="/about#profile" className="header-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Founder's Profile</Link>
                  </li>
                  <li className="header-dropdown-item">
                    <Link href="/about#team" className="header-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Core Team</Link>
                  </li>
                  <li className="header-dropdown-item">
                    <Link href="/about#partners" className="header-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Our Partners</Link>
                  </li>
                </ul>
              </li>

              <li className="header-nav-item">
                <Link href="/programs" className="header-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  Departments
                </Link>
              </li>

              <li className="header-nav-item">
                <Link href="/courses" className="header-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  Courses 2026
                </Link>
              </li>
            </ul>

            {/* Mobile Only Contact Block */}
            <div className="mobile-only-contact">
              <a href={`tel:${settings.phone.replace(/\s+/g, '')}`} className="btn-corporate-primary" style={{ display: 'block', textAlign: 'center', marginBottom: '1rem' }}>
                <i className="fas fa-phone-alt" style={{ marginRight: '8px' }}></i> Call Us
              </a>
              <a href={`mailto:${settings.email}`} style={{ display: 'block', textAlign: 'center', color: 'var(--text-gray)' }}>
                <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i> {settings.email}
              </a>
            </div>
          </nav>

          <button className="header-phone-btn pulse-icon" onClick={() => document.dispatchEvent(new CustomEvent('openModal', {detail: 'Contact'}))}>
            <i className="fas fa-phone-alt"></i> Contact Us
          </button>

          <button 
            className={`header-mobile-toggle ${isMobileMenuOpen ? "active" : ""}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
