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

      <section className="section-padding bg-panel">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <ScrollReveal>
                <div className="section-title">
                  <span className="subtitle" data-tina-field={page.vision ? tinaField(page, "vision") : undefined}>Welcome to Vook Voice</span>
                  <h2 data-tina-field={tinaField(page, "welcome_title")}>{page.welcome_title || "A Vision for Empowerment"}</h2>
                  <div className="title-underline"></div>
                </div>
                <p className="lead-text mt-4">We are committed to delivering high-impact training and knowledge transfer.</p>
                <p className="text-muted mt-3 mb-4">Founded in 2017, Vook Voice International stands as a beacon of professional and spiritual empowerment in Nairobi, Kenya. Our meticulously designed programs target both emerging and seasoned leaders.</p>
                
                <Link href="/about" className="btn-corporate-primary">Read Full Profile</Link>
              </ScrollReveal>
            </div>
            
            <div className="col-7">
              <div className="grid-2" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                {page.feature_boxes && page.feature_boxes.map((feature: any, index: number) => (
                  <ScrollReveal delay={(index + 1) * 100} key={index}>
                    <div className="feature-box" data-tina-field={tinaField(feature, "title")}>
                      <i className={`${feature.icon || "fas fa-star"} feature-icon`} data-tina-field={tinaField(feature, "icon")}></i>
                      <div className="feature-text">
                        <h4 data-tina-field={tinaField(feature, "title")}>{feature.title}</h4>
                        <p data-tina-field={tinaField(feature, "desc")}>{feature.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
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
