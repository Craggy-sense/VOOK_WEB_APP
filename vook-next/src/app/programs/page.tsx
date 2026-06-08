import React from "react";
import client from "../../../tina/__generated__/client";
import ProgramsPage from "./programs-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departments & Programs | Vook Voice International",
};

export default async function Programs() {
  const result = await client.queries.pages({ relativePath: "programs.md" });
  return <ProgramsPage {...result} />;
}
