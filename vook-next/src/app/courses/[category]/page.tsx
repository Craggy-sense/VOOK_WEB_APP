import React from "react";
import { allCourses, categoryTitles } from "@/data/courses";
import CoursesPage from "../courses-page";
import type { Metadata } from "next";

// Force dynamic rendering — avoids TinaCMS intercepting static param generation
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `${categoryTitles[category] || "Courses"} | Vook Voice International`,
  };
}

export default async function CategoryCourses({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const courses = allCourses.filter((c) => c.category === category);
  const title = `${categoryTitles[category] || "Courses"} Courses`;

  return <CoursesPage title={title} courses={courses} />;
}

