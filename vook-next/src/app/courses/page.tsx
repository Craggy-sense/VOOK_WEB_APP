import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import client from "../../../tina/__generated__/client";
import CoursesPage from "./courses-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Vook Voice International",
};

export default async function Courses() {
  // Read individual courses for the grid
  const coursesDir = path.join(process.cwd(), "src/content/courses");
  const files = fs.readdirSync(coursesDir);
  const courses = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(coursesDir, filename), "utf-8");
    const { data } = matter(fileContent);
    return data;
  });

  // Fetch the page content for visual editing
  const result = await client.queries.pages({ relativePath: "courses-page.md" });

  return <CoursesPage {...result} courses={courses} />;
}
