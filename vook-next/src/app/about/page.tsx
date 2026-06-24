import React from "react";
import client from "../../../tina/__generated__/client";
import AboutPage from "./about-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vook Voice International",
};

export default async function About() {
  const result = await client.queries.about_page({ relativePath: "about.md" });
  return <AboutPage {...result} />;
}
