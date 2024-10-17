"use client";

import CourseCard from "@/components/course-card";
import { useState } from "react";
import { Course } from "types";

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([
    {
      name: "Advanced Mathematics",
      description:
        "This course covers complex topics including calculus, linear algebra, and probability theory. Students will develop strong problem-solving skills and gain a deep understanding of mathematical concepts applicable to various scientific and engineering fields.",
      credits: 1,
      weight: 1.1,
      recommendedGrades: [11, 12],
      prerequisites: [],
      department: "Mathematics",
    },
    {
      name: "Advanced Physics",
      description:
        "This course covers complex topics including calculus, linear algebra, and probability theory. Students will develop strong problem-solving skills and gain a deep understanding of mathematical concepts applicable to various scientific and engineering fields.",
      credits: 1,
      weight: 1.1,
      recommendedGrades: [10],
      prerequisites: ["Algebra II", "Pre-Calculus"],
      department: "Mathematics",
    },
    {
      name: "Advanced Physics",
      description:
        "This course covers complex topics including calculus, linear algebra, and probability theory. Students will develop strong problem-solving skills and gain a deep understanding of mathematical concepts applicable to various scientific and engineering fields.",
      credits: 1,
      weight: 1,
      recommendedGrades: [11, 12],
      prerequisites: ["Algebra II", "Pre-Calculus"],
      department: "Science",
    },
    {
      name: "Advanced Physics",
      description:
        "This course covers complex topics including calculus, linear algebra, and probability theory. Students will develop strong problem-solving skills and gain a deep understanding of mathematical concepts applicable to various scientific and engineering fields.",
      credits: 0.5,
      weight: 1.05,
      recommendedGrades: [11, 12],
      prerequisites: ["Algebra II", "Pre-Calculus"],
      department: "Mathematics",
    },
    {
      name: "Advanced Physics",
      description:
        "This course covers complex topics including calculus, linear algebra, and probability theory. Students will develop strong problem-solving skills and gain a deep understanding of mathematical concepts applicable to various scientific and engineering fields.",
      credits: 1,
      weight: 1.1,
      recommendedGrades: [11, 12],
      prerequisites: ["Algebra II", "Pre-Calculus"],
      department: "Mathematics",
    },
  ]);
  return (
    <div className="flex flex-col items-center justify-center space-y-12 p-12">
      <h1 className="text-4xl font-bold">Courses</h1>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.name} course={course} />
        ))}
      </div>
    </div>
  );
}
