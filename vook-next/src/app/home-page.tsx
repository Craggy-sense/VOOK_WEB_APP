"use client";
import React from "react";
import { useTina } from "tinacms/dist/react";
import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.pages;

  return (
    <>
      <HeroSlider data={page} />


      {/* Featured Courses Section */}
      <section className="section-padding bg-gray">
        <div className="container">
          <ScrollReveal>
            <div className="section-title text-center">
              <span className="subtitle">July – September 2026</span>
              <h2>Ongoing Courses</h2>
              <div className="title-underline center"></div>
              <p className="text-muted mt-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
                Explore our signature programs designed to elevate your professional trajectory and empower your organizational leadership.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid-3 mt-5">
            <ScrollReveal delay={100}>
              <div className="premium-course-card">
                <i className="fas fa-star premium-course-icon"></i>
                <h3>Level 1: Foundations of Leadership & Personal Development</h3>
                <p>Detailed curriculum and course outline coming soon.</p>
                <Link href="/courses" className="btn-corporate-primary" style={{ padding: "0.6rem 1.2rem", fontSize: "0.9rem" }}>Learn More</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="premium-course-card">
                <i className="fas fa-handshake premium-course-icon"></i>
                <h3>Level 1: Foundations of Conflict Resolution</h3>
                <p>Detailed curriculum and course outline coming soon.</p>
                <Link href="/courses" className="btn-corporate-primary" style={{ padding: "0.6rem 1.2rem", fontSize: "0.9rem" }}>Learn More</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="premium-course-card">
                <i className="fas fa-landmark premium-course-icon"></i>
                <h3>Level 1: Foundations Of Board Governance</h3>
                <p>Detailed curriculum and course outline coming soon.</p>
                <Link href="/courses" className="btn-corporate-primary" style={{ padding: "0.6rem 1.2rem", fontSize: "0.9rem" }}>Learn More</Link>
              </div>
            </ScrollReveal>
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
