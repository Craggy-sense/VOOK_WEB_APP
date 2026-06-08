"use client";
import React from "react";
import { useTina } from "tinacms/dist/react";
import Image from "next/image";

export default function AboutPage(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.pages;

  return (
    <>
      <div className="bg-corporate-dark text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead" data-tina-field={tinaField(page, "vision")}>
            Discover the driving force behind Vook Voice International.
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-5 text-center">
            <Image 
              src={page.founder_image || "/images/placeholder-founder.jpg"} 
              alt="Pastor Susan Kibii" 
              width={400} 
              height={500} 
              className="img-fluid rounded shadow-sm mb-3"
              data-tina-field={tinaField(page, "founder_image")}
            />
          </div>
          <div className="col-md-7">
            <h2 className="fw-bold mb-4">Pastor Susan Kibii</h2>
            <h5 className="text-corporate-primary mb-3">Founder & Principal Consultant</h5>
            <div className="lead mb-4" data-tina-field={tinaField(page, "founder_bio")}>
              {page.founder_bio?.split('\n').map((line: string, i: number) => <p key={i}>{line}</p>)}
            </div>
            <blockquote className="blockquote border-start border-4 border-primary ps-4 fst-italic text-muted">
              <p data-tina-field={tinaField(page, "founder_quote")}>{page.founder_quote}</p>
            </blockquote>
          </div>
        </div>

        <hr className="my-5" />

        <div className="row align-items-center">
          <div className="col-md-7 order-2 order-md-1">
            <h2 className="fw-bold mb-4">Moses Kibii</h2>
            <h5 className="text-corporate-primary mb-3">Co-Founder</h5>
            <div className="lead" data-tina-field={tinaField(page, "moses_bio")}>
              {page.moses_bio?.split('\n').map((line: string, i: number) => <p key={i}>{line}</p>)}
            </div>
          </div>
          <div className="col-md-5 order-1 order-md-2 text-center mb-4 mb-md-0">
            <Image 
              src={page.moses_image || "/images/placeholder-moses.jpg"} 
              alt="Moses Kibii" 
              width={400} 
              height={500} 
              className="img-fluid rounded shadow-sm"
              data-tina-field={tinaField(page, "moses_image")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const tinaField = (obj: any, field: string) => {
  return obj?._tina_metadata?.fields?.[field] || undefined;
};
