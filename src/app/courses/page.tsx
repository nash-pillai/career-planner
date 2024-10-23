"use client";

import CourseCard from "@/components/course-card";
import { useEffect, useState } from "react";
import { Course } from "types";
import CourseSearch from "@/components/course-search";
import { courses } from "@/lib/courses";
import { departments, pathways } from "@/lib/constants";

export default function Courses() {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);

  const [subject, setSubject] = useState<(typeof departments)[number] | null>(
    null,
  );
  const [grade, setGrade] = useState<number | null>(null);
  const [credits, setCredits] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [pathway, setPathway] = useState<(typeof pathways)[number] | null>(
    null,
  );

  useEffect(() => {
    setFilteredCourses(
      courses.filter(
        (course) =>
          (!subject || course.department === subject) &&
          (!grade || course.eligible_grades.includes(grade)) &&
          (!credits || course.credits === credits) &&
          (!weight || course.rank_weighting === weight) &&
          (!pathway || course.pathway === pathway),
      ),
    );
  }, [subject, grade, credits, weight, pathway]);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const searchTerm = searchQuery.toLowerCase();

    setFilteredCourses(
      courses
        .filter(
          (course) =>
            course.course_name.toLowerCase().includes(searchTerm) ??
            course.course_code.toLowerCase().includes(searchTerm) ??
            course.department.toLowerCase().includes(searchTerm) ??
            course.description.toLowerCase().includes(searchTerm) ??
            course.pathway?.toLowerCase().includes(searchTerm) ??
            course.prerequisites.some((prereq) =>
              prereq.toLowerCase().includes(searchTerm),
            ) ??
            course.eligible_grades.some((grade) =>
              grade.toString().includes(searchTerm),
            ),
        )
        .sort((a, b) => {
          if (
            a.course_name.toLowerCase().includes(searchTerm) &&
            !b.course_code.toLowerCase().includes(searchTerm)
          )
            return -1;
          else if (
            a.course_code.toLowerCase().includes(searchTerm) &&
            !b.course_code.toLowerCase().includes(searchTerm)
          )
            return -1;
          else if (
            a.department.toLowerCase().includes(searchTerm) &&
            !b.department.toLowerCase().includes(searchTerm)
          )
            return -1;
          else if (
            !a.department.toLowerCase().includes(searchTerm) &&
            b.department.toLowerCase().includes(searchTerm)
          )
            return 1;
          else if (
            a.pathway?.toLowerCase().includes(searchTerm) &&
            !b.pathway?.toLowerCase().includes(searchTerm)
          )
            return -1;
          else return 0;
        }),
    );
  }, [courses, searchQuery]);

  return (
    <div className="flex flex-col items-center justify-center space-y-12 p-12">
      <h1 className="text-4xl font-bold">Courses</h1>
      <CourseSearch
        subject={subject}
        grade={grade}
        credits={credits}
        weight={weight}
        pathway={pathway}
        searchQuery={searchQuery}
        setSubject={setSubject}
        setGrade={setGrade}
        setCredits={setCredits}
        setWeight={setWeight}
        setPathway={setPathway}
        setSearchQuery={setSearchQuery}
      />
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.course_code} course={course} />
        ))}
      </div>
    </div>
  );
}
