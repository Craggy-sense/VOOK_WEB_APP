"use client";
import React from "react";
import { useTina } from "tinacms/dist/react";
import CourseCard from "@/components/CourseCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function CoursesPage(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.pages;
  const { courses } = props;

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-title light text-center mb-0">
            <span className="subtitle">Education</span>
            <h2 data-tina-field={tinaField(page, "courses_hero_title")}>{page.courses_hero_title}</h2>
            <div className="title-underline center"></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray">
        <div className="container">
          <div className="grid-3">
            {courses.map((course: any, index: number) => (
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
              <h2 style={{ color: "white", marginBottom: "1rem", fontSize: "2rem" }} data-tina-field={tinaField(page, "beneficiaries_title")}>{page.beneficiaries_title}</h2>
              <p style={{ fontSize: "1.2rem", fontWeight: 500, opacity: 0.95, margin: 0 }} data-tina-field={tinaField(page, "beneficiaries_text")}>
                {page.beneficiaries_text}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

// Helper for Tina visual editing attributes
const tinaField = (obj: any, field: string) => {
  return obj?._tina_metadata?.fields?.[field] || undefined;
};
