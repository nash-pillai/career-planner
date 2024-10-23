"use client";

import CourseCard from "@/components/course-card";
import { useEffect, useState } from "react";
import { Course, departments, pathways } from "types";
import CourseSearch from "@/components/course-search";
import { courses } from "@/lib/courses";

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

  return (
    <div className="flex flex-col items-center justify-center space-y-12 p-12">
      <h1 className="text-4xl font-bold">Courses</h1>
      <CourseSearch
        subject={subject}
        grade={grade}
        credits={credits}
        weight={weight}
        pathway={pathway}
        setSubject={setSubject}
        setGrade={setGrade}
        setCredits={setCredits}
        setWeight={setWeight}
        setPathway={setPathway}
      />
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.course_name} course={course} />
        ))}
      </div>
    </div>
  );
}
