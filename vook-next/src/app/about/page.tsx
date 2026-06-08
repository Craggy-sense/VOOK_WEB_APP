import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vook Voice International",
};

export default function About() {
  const filePath = path.join(process.cwd(), "src/content/pages/about.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

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
                  <img src={data.founder_image} alt="Pastor Susan Kibii" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
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
                  {data.founder_bio}
                </p>
                <blockquote style={{ borderLeft: "4px solid var(--primary-green)", paddingLeft: "1.5rem", fontStyle: "italic", margin: "2rem 0", color: "var(--navy-dark)", fontSize: "1.1rem" }}>
                  {data.founder_quote}
                </blockquote>
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
                  {data.moses_bio}
                </p>
              </ScrollReveal>
            </div>
            <div className="col-5" style={{ position: "relative" }}>
              <ScrollReveal>
                <div className="premium-image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={data.moses_image} alt="Moses Osagiede" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
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
      <section id="partners" className="section-padding">
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
