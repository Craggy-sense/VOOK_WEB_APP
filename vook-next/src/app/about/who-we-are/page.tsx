import React from "react";
import client from "../../../../tina/__generated__/client";
import WhoWeArePage from "./who-we-are-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are | Vook Voice International",
};

export default async function WhoWeAre() {
  const result = await client.queries.pages({ relativePath: "about.md" });
  return <WhoWeArePage {...result} />;
}
