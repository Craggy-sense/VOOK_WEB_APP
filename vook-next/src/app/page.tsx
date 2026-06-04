"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <section className="slider-container" aria-label="Hero Slider">
        <div className="slider">
          <div className={`slide slide-1 ${activeSlide === 0 ? "active-slide" : ""}`} style={{backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')"}}>
            <div className="slide-overlay"></div>
            <div className="container" style={{position: 'relative', height: '100%', display: 'flex', alignItems: 'center'}}>
              <div className="slide-content">
                <h1 className="main-title">Professional <span className="highlight">Leadership</span></h1>
                <h2 className="main-subtitle">Empowering Minds Since 2017</h2>
                <div className="slide-text">
                  <p>Vook Voice International is a registered Non-Governmental Organization in Kenya, dedicated to fostering visionary leadership, conflict management, and emotional intelligence.</p>
                </div>
                <div className="slide-actions">
                  <Link href="/about" className="btn-corporate-primary">Discover More</Link>
                  <Link href="/courses" className="btn-corporate-secondary">View Courses</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`slide slide-2 ${activeSlide === 1 ? "active-slide" : ""}`} style={{backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop')"}}>
            <div className="slide-overlay"></div>
            <div className="container" style={{position: 'relative', height: '100%', display: 'flex', alignItems: 'center'}}>
              <div className="slide-content">
                <h1 className="main-title">Excellence in <br />Training</h1>
                <h2 className="main-subtitle">Availing Knowledge to the People</h2>
                <div className="slide-text">
                  <p>Join our comprehensive programs designed for modern professionals, focusing on strategic management and communication.</p>
                </div>
                <div className="slide-actions">
                  <button className="btn-corporate-primary" onClick={() => document.dispatchEvent(new CustomEvent('openModal', {detail: 'Register'}))}>Register Now</button>
                  <Link href="/programs" className="btn-corporate-secondary">Our Programs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="slider-btn prev" onClick={() => setActiveSlide(activeSlide === 0 ? 1 : 0)} aria-label="Previous Slide">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slider-btn next" onClick={() => setActiveSlide(activeSlide === 1 ? 0 : 1)} aria-label="Next Slide">
          <i className="fas fa-chevron-right"></i>
        </button>
        
        <div className="slider-dots">
          <div className={`dot ${activeSlide === 0 ? "active" : ""}`} onClick={() => setActiveSlide(0)}></div>
          <div className={`dot ${activeSlide === 1 ? "active" : ""}`} onClick={() => setActiveSlide(1)}></div>
        </div>
      </section>

      <section className="section-padding bg-panel">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <ScrollReveal>
                <div className="section-title">
                  <span className="subtitle">Welcome to Vook Voice</span>
                  <h2>A Vision for Empowerment</h2>
                  <div className="title-underline"></div>
                </div>
                <p className="lead-text mt-4">We are committed to delivering high-impact training and knowledge transfer.</p>
                <p className="text-muted mt-3 mb-4">Founded in 2017, Vook Voice International stands as a beacon of professional and spiritual empowerment in Nairobi, Kenya. Our meticulously designed programs target both emerging and seasoned leaders.</p>
                
                <Link href="/about" className="btn-corporate-primary">Read Full Profile</Link>
              </ScrollReveal>
            </div>
            
            <div className="col-7">
              <div className="grid-2" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                <ScrollReveal delay={100}>
                  <div className="feature-box">
                    <i className="fas fa-bullseye feature-icon"></i>
                    <div className="feature-text">
                      <h4>Our Vision</h4>
                      <p>To be the premier knowledge hub for transformational leadership in Africa.</p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="feature-box">
                    <i className="fas fa-hands-helping feature-icon"></i>
                    <div className="feature-text">
                      <h4>Our Mission</h4>
                      <p>Equipping individuals with the emotional and strategic tools to succeed.</p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <div className="feature-box">
                    <i className="fas fa-book-open feature-icon"></i>
                    <div className="feature-text">
                      <h4>The Book</h4>
                      <p>"Understanding your Assignment before Marriage" by Pastor Susan Kibii.</p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <div className="feature-box">
                    <i className="fas fa-certificate feature-icon"></i>
                    <div className="feature-text">
                      <h4>Certification</h4>
                      <p>Rigorous, internationally recognized training modules.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
