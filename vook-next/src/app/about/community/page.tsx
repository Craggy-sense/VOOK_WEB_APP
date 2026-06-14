import React from "react";
import client from "../../../../tina/__generated__/client";
import CommunityPage from "./community-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Community | Vook Voice International",
};

export default async function Community() {
  const result = await client.queries.pages({ relativePath: "about.md" });
  return <CommunityPage {...result} />;
}
