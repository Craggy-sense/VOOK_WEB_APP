import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import CourseCard from "@/components/CourseCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function Courses() {
  const coursesDir = path.join(process.cwd(), "src/content/courses");
  const files = fs.readdirSync(coursesDir);
  const courses = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(coursesDir, filename), "utf-8");
    const { data } = matter(fileContent);
    return data;
  });

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-title light text-center mb-0">
            <span className="subtitle">Education</span>
            <h2>Course Offering June to September 2026</h2>
            <div className="title-underline center"></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray">
        <div className="container">
          <div className="grid-3">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Target Beneficiaries Banner */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal>
            <div style={{
              background: "var(--primary-green)",
              color: "white",
              padding: "4rem 2rem",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 15px 35px rgba(26, 150, 43, 0.25)",
              marginTop: "1rem"
            }}>
              <h2 style={{ color: "white", marginBottom: "1rem", fontSize: "2rem" }}>Target Beneficiaries</h2>
              <p style={{ fontSize: "1.2rem", fontWeight: 500, opacity: 0.95, margin: 0 }}>
                Individuals, Corporates, Churches, Academic Institutions & Communities.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
