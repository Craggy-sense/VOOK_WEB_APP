import React from "react";
import client from "../../../../tina/__generated__/client";
import CoreTeamPage from "./core-team-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Team | Vook Voice International",
};

export default async function CoreTeam() {
  const result = await client.queries.pages({ relativePath: "about.md" });
  return <CoreTeamPage {...result} />;
}
