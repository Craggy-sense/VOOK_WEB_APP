import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import client from "../../../../tina/__generated__/client";
import CoursesPage from "../courses-page";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const titles: Record<string, string> = {
    "leadership": "Leadership and Governance Courses",
    "peace-building": "Peace Building Courses",
    "governance": "Governance Courses"
  };
  return {
    title: `${titles[params.category] || 'Courses'} | Vook Voice International`,
  };
}

export function generateStaticParams() {
  return [
    { category: 'leadership' },
    { category: 'peace-building' },
    { category: 'governance' }
  ];
}

export default async function CategoryCourses({ params }: { params: { category: string } }) {
  const coursesDir = path.join(process.cwd(), "src/content/courses");
  const files = fs.readdirSync(coursesDir);
  let courses = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(coursesDir, filename), "utf-8");
    const { data } = matter(fileContent);
    return data;
  });

  // Filter courses by category parameter
  courses = courses.filter(course => course.category === params.category);

  // Fetch the page content for visual editing
  const result = await client.queries.pages({ relativePath: "courses-page.md" });

  // Override hero title to reflect category
  const titles: Record<string, string> = {
    "leadership": "Leadership and Governance Courses",
    "peace-building": "Peace Building Courses",
    "governance": "Governance Courses"
  };
  if (result.data.pages) {
    // We clone the object so we don't mutate the cached global object
    result.data.pages = {
      ...result.data.pages,
      courses_hero_title: titles[params.category] || "Courses"
    };
  }

  return <CoursesPage {...result} courses={courses} />;
}
