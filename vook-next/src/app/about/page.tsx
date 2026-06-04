import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vook Voice International",
};

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-white" style={{ padding: "8rem 0 4rem", position: "relative" }}>
        <div className="container">
          <div className="section-title light text-center">
            <span className="subtitle">About Us</span>
            <h2>Who We Are</h2>
            <div className="title-underline center"></div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="profile" className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <ScrollReveal>
                {/* Replace placeholder with real image if available */}
                <div style={{ backgroundColor: "#e2e8f0", width: "100%", height: "500px", borderRadius: "4px" }}></div>
              </ScrollReveal>
            </div>
            <div className="col-7">
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
                <p className="text-muted mb-4">
                  She is also the acclaimed author of the book <strong>"Understanding your Assignment before Marriage"</strong>, 
                  which has transformed countless lives through its insightful guidance.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section id="team" className="section-padding bg-gray">
        <div className="container">
          <ScrollReveal>
            <div className="section-title text-center">
              <span className="subtitle">The Leadership</span>
              <h2>Our Core Team</h2>
              <div className="title-underline center"></div>
            </div>
          </ScrollReveal>
          
          <div className="row mt-5" style={{ justifyContent: "center" }}>
            <div className="col-7">
              <ScrollReveal delay={200}>
                <div className="about-team bg-white">
                  <div className="team-list-corporate">
                    <div className="team-member">
                      <div className="member-avatar">SK</div>
                      <div className="member-info">
                        <h4>Pastor Susan Kibii</h4>
                        <span>Founder & Executive Director</span>
                      </div>
                    </div>
                    
                    <div className="team-member">
                      <div className="member-avatar">MO</div>
                      <div className="member-info">
                        <h4>Moses Osagiede</h4>
                        <span>Associate Trainer & Leadership Scholar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
