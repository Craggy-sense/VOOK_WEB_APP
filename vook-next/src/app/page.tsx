import React from "react";
import client from "../../tina/__generated__/client";
import HomePage from "./home-page";

export default async function Home() {
  const result = await client.queries.pages({ relativePath: "home.md" });
  return <HomePage {...result} />;
}
