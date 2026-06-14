import React from "react";
import { allCourses } from "@/data/courses";
import CoursesPage from "./courses-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Vook Voice International",
};

export default function Courses() {
  return <CoursesPage title="Our Courses" courses={allCourses} />;
}
