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
              <span className="subtitle">Premium Learning</span>
              <h2>Featured Courses</h2>
              <div className="title-underline center"></div>
              <p className="text-muted mt-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
                Explore our signature programs designed to elevate your professional trajectory and empower your organizational leadership.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid-3 mt-5">
            <ScrollReveal delay={100}>
              <div className="premium-course-card">
                <i className="fas fa-chart-line premium-course-icon"></i>
                <h3>Strategic Project Management</h3>
                <p>Master the frameworks and methodologies to deliver complex projects on time and align them with broader organizational strategies.</p>
                <Link href="/courses" className="btn-corporate-primary" style={{ padding: "0.6rem 1.2rem", fontSize: "0.9rem" }}>Learn More</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="premium-course-card">
                <i className="fas fa-users premium-course-icon"></i>
                <h3>Corporate Leadership Dynamics</h3>
                <p>Develop executive presence, emotional intelligence, and the strategic vision necessary to lead cross-functional teams successfully.</p>
                <Link href="/courses" className="btn-corporate-primary" style={{ padding: "0.6rem 1.2rem", fontSize: "0.9rem" }}>Learn More</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="premium-course-card">
                <i className="fas fa-balance-scale premium-course-icon"></i>
                <h3>Board Governance & Ethics</h3>
                <p>Equip yourself with advanced corporate governance frameworks to drive ethical decision-making and sustainable business growth.</p>
                <Link href="/courses" className="btn-corporate-primary" style={{ padding: "0.6rem 1.2rem", fontSize: "0.9rem" }}>Learn More</Link>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="/courses" className="btn-corporate-secondary" style={{ color: "var(--navy-dark)", borderColor: "var(--navy-dark)" }}>View All Courses</Link>
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
