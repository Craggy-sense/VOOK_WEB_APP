import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vook Voice International",
};

export default function About() {
  return (
    <>
      {/* Premium Page Header */}
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-title light text-center mb-0">
            <span className="subtitle">About Us</span>
            <h2>Who We Are</h2>
            <div className="title-underline center"></div>
          </div>
        </div>
      </section>

      {/* Founder Section - Zig Zag Layout */}
      <section id="profile" className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5" style={{ position: "relative" }}>
              <ScrollReveal>
                <div className="premium-image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop" alt="Pastor Susan Kibii" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
                </div>
              </ScrollReveal>
            </div>
            <div className="col-7" style={{ paddingLeft: "2rem" }}>
              <ScrollReveal delay={200}>
                <div className="section-title">
                  <span className="subtitle">Founder's Profile</span>
                  <h2>Pastor Susan Kibii</h2>
                  <div className="title-underline"></div>
                </div>
                <p className="lead-text mt-4">Founder & Executive Director</p>
                <p className="text-muted mt-3 mb-4">
                  Pastor Susan Kibii is a visionary leader dedicated to spiritual and professional empowerment. 
                  She established Vook Voice International in 2017 to bridge the gap in emotional intelligence 
                  and corporate leadership training.
                </p>
                <blockquote style={{ borderLeft: "4px solid var(--primary-green)", paddingLeft: "1.5rem", fontStyle: "italic", margin: "2rem 0", color: "var(--navy-dark)", fontSize: "1.1rem" }}>
                  "Leadership is not just about strategic management; it's about emotional intelligence and understanding your core assignment in life."
                </blockquote>
                <p className="text-muted mb-4">
                  She is also the acclaimed author of the book <strong>"Understanding your Assignment before Marriage"</strong>, 
                  which has transformed countless lives through its insightful guidance.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <div className="row align-items-center" style={{ marginTop: "6rem" }}>
            <div className="col-7" style={{ paddingRight: "2rem" }}>
              <ScrollReveal delay={200}>
                <div className="section-title">
                  <span className="subtitle">Leadership Scholar</span>
                  <h2>Moses Osagiede</h2>
                  <div className="title-underline"></div>
                </div>
                <p className="lead-text mt-4">Associate Trainer</p>
                <p className="text-muted mt-3 mb-4">
                  Moses Osagiede is an Associate Trainer at Vook Voice International and a leadership scholar, educator, and transformational development practitioner with extensive experience in mentoring, coaching, teaching, and organizational leadership across diverse sectors of society. With a strong background in planning and transformational leadership, he is passionate about developing individuals and institutions for sustainable growth and positive impact.
                </p>
                <p className="text-muted mb-4">
                  In addition to his training role at Vook Voice International, Moses Osagiede serves as a faculty member in Leadership and Organizational Culture at International Leadership University, where he contributes to leadership development and capacity building through teaching, research, and mentorship. His work is driven by a commitment to empowering people, strengthening organizations, and fostering values-based leadership in Africa and beyond.
                </p>
                <p className="text-muted mb-4">
                  He is a graduate of Obafemi Awolowo University, Nigeria, and the International Graduate School of Leadership. Currently, he is pursuing doctoral research focused on leadership adaptability, organizational culture, and government policies affecting younger employees in Kenya’s banking sector.
                </p>
              </ScrollReveal>
            </div>
            <div className="col-5" style={{ position: "relative" }}>
              <ScrollReveal>
                <div className="premium-image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop" alt="Moses Osagiede" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section - Executive Cards */}
      <section id="team" className="section-padding bg-gray">
        <div className="container">
          <ScrollReveal>
            <div className="section-title text-center">
              <span className="subtitle">The Leadership</span>
              <h2>Our Core Team</h2>
              <div className="title-underline center"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid-3 mt-5">
            <ScrollReveal delay={100}>
              <div className="premium-executive-card">
                <div className="premium-avatar">SK</div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }}>Pastor Susan Kibii</h4>
                  <span className="text-muted" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--primary-green)" }}>Founder & Executive Director</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="premium-executive-card">
                <div className="premium-avatar">MO</div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }}>Moses Osagiede</h4>
                  <span className="text-muted" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--primary-green)" }}>Associate Trainer & Leadership Scholar</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="premium-executive-card">
                <div className="premium-avatar">JM</div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }}>Dr. Jacqualine Mutua</h4>
                  <span className="text-muted" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--primary-green)" }}>Kenya</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="premium-executive-card">
                <div className="premium-avatar">JK</div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }}>Jini Kingsley</h4>
                  <span className="text-muted" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--primary-green)" }}>PhD Candidate - Ghana</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="premium-executive-card">
                <div className="premium-avatar">MT</div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }}>Mubarak Thiep</h4>
                  <span className="text-muted" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--primary-green)" }}>PhD Student - South Sudan</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="premium-executive-card">
                <div className="premium-avatar">RW</div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }}>Dr. Ruth Waweru</h4>
                  <span className="text-muted" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--primary-green)" }}>Kenya</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partners & Collaborations Section */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="section-title text-center">
              <span className="subtitle">Our Network</span>
              <h2>Partners & Collaborations</h2>
              <div className="title-underline center"></div>
              <p className="text-muted mt-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
                Vook Voice International partners with a wide range of experts, organizations, and institutions to create, package, and share impactful knowledge across different sectors.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid-3 mt-5">
            <ScrollReveal delay={100}>
              <div className="premium-executive-card" style={{ flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
                <i className="fas fa-building" style={{ fontSize: "2rem", color: "var(--primary-green)" }}></i>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0" }}>Corporate Partnerships</h4>
                <p className="text-muted" style={{ fontSize: "0.95rem" }}>Working with organizations to deliver leadership development, professional training, and knowledge-sharing initiatives.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="premium-executive-card" style={{ flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
                <i className="fas fa-church" style={{ fontSize: "2rem", color: "var(--primary-green)" }}></i>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0" }}>Faith-Based Institutions</h4>
                <p className="text-muted" style={{ fontSize: "0.95rem" }}>Partnering to promote spiritual growth, leadership development, and practical life skills within faith communities.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="premium-executive-card" style={{ flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
                <i className="fas fa-university" style={{ fontSize: "2rem", color: "var(--primary-green)" }}></i>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0" }}>Academic Institutions</h4>
                <p className="text-muted" style={{ fontSize: "0.95rem" }}>Partnering with universities and colleges for research, workshops, seminars, and capacity-building programs.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="premium-executive-card" style={{ flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
                <i className="fas fa-user-tie" style={{ fontSize: "2rem", color: "var(--primary-green)" }}></i>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0" }}>Industry Experts</h4>
                <p className="text-muted" style={{ fontSize: "0.95rem" }}>Engaging professionals and practitioners to share insights through webinars, talks, masterclasses, and conferences.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="premium-executive-card" style={{ flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
                <i className="fas fa-book-open" style={{ fontSize: "2rem", color: "var(--primary-green)" }}></i>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0" }}>Publishers & Media</h4>
                <p className="text-muted" style={{ fontSize: "0.95rem" }}>Collaborating to produce and distribute books, vooks (video books), podcasts, magazines, and other multimedia content.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="premium-executive-card" style={{ flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
                <i className="fas fa-hands-helping" style={{ fontSize: "2rem", color: "var(--primary-green)" }}></i>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0" }}>Community Organizations</h4>
                <p className="text-muted" style={{ fontSize: "0.95rem" }}>Supporting community development through educational resources, skills training, and empowerment programs.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
