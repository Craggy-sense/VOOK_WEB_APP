"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSlider({ data }: { data: any }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="slider-container" aria-label="Hero Slider">
      <div className="slider">
        <div className={`slide slide-1 ${activeSlide === 0 ? "active-slide" : ""}`} style={{backgroundImage: `url('${data.slide1_image}')`}}>
          <div className="slide-overlay"></div>
          <div className="container" style={{position: 'relative', height: '100%', display: 'flex', alignItems: 'center'}}>
            <div className="slide-content">
              {/* Note: In a real app we might parse HTML, but for now we just render the string or use a simple replace if we want highlight */}
              <h1 className="main-title">{data.slide1_title}</h1>
              <h2 className="main-subtitle">{data.slide1_subtitle}</h2>
              <div className="slide-text">
                <p>{data.slide1_text}</p>
              </div>
              <div className="slide-actions">
                <Link href="/about" className="btn-corporate-primary">Discover More</Link>
                <Link href="/courses" className="btn-corporate-secondary">View Courses</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`slide slide-2 ${activeSlide === 1 ? "active-slide" : ""}`} style={{backgroundImage: `url('${data.slide2_image}')`}}>
          <div className="slide-overlay"></div>
          <div className="container" style={{position: 'relative', height: '100%', display: 'flex', alignItems: 'center'}}>
            <div className="slide-content">
              <h1 className="main-title">{data.slide2_title}</h1>
              <h2 className="main-subtitle">{data.slide2_subtitle}</h2>
              <div className="slide-text">
                <p>{data.slide2_text}</p>
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
  );
}
