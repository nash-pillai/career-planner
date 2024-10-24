import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Book,
  GraduationCap,
  Scale,
  Award,
  Briefcase,
  Users,
  ArrowRight,
} from "lucide-react";
import { type Course } from "types";
import CourseCard from "./course-card";

export default function CourseModal({ course }: { course: Course }) {
  return (
    <Dialog>
      <DialogTrigger className="flex text-left">
        <CourseCard course={course} />
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-[90vw]">
        <DialogHeader>
          <DialogTitle>{course.course_name}</DialogTitle>
          <DialogDescription>
            Course Code: {course.course_code}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[calc(90vh-120px)] pr-4">
          <div
            className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${course.pathway ? "lg:grid-cols-3" : ""}`}
          >
            <Card className="col-span-full border-none bg-[#D8FFD8]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Briefcase className="mr-2" />
                    Course Information
                  </span>
                  <Badge>{course.department}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{course.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Award className="mr-2 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Credits</p>
                      <p className="text-lg font-bold">
                        {course.credits.toFixed(1)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Scale className="mr-2 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Rank Weighting</p>
                      <p className="text-lg font-bold">
                        {course.rank_weighting.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-[#ECE5FF]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2" />
                  Eligible Grades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">
                  {course.eligible_grades.join(", ")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-[#FBF7B8]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2" />
                  Prerequisites
                </CardTitle>
              </CardHeader>
              <CardContent>
                {course.prerequisites.length > 0 ? (
                  <ul className="list-inside list-disc space-y-2 text-sm">
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index}>{prereq}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg font-bold">None</p>
                )}
              </CardContent>
            </Card>

            {course.pathway && (
              <Card className="border-none bg-[#E0E9FE]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2" />
                    Pathway
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold">{course.pathway}</p>
                </CardContent>
              </Card>
            )}

            <Card className="col-span-full flex cursor-not-allowed items-center justify-center border-none bg-gray-200 transition-colors">
              <CardContent className="flex items-center justify-center p-6">
                <span className="mr-2 text-2xl font-bold">Enroll</span>
                <ArrowRight className="h-6 w-6" />
              </CardContent>
            </Card>
            <span className="col-span-full text-center text-sm text-red-500">
              Enrollment has closed for this semester.
            </span>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
