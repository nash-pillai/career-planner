import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, GraduationCap, Scale, Award, ListChecks } from "lucide-react";
import { Course } from "types";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">
              {course.course_name}
            </CardTitle>
            <p className="mt-1 flex items-center text-sm text-muted-foreground">
              <GraduationCap className="mr-1 h-4 w-4" />
              Grade{course.eligible_grades.length > 1 ? "s" : ""}{" "}
              {course.eligible_grades.length > 1
                ? `${course.eligible_grades[0]}-${course.eligible_grades[course.eligible_grades.length - 1]}`
                : course.eligible_grades[0]}
            </p>
          </div>
          <Badge variant="secondary" className="text-sm">
            {course.department}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Scale className="mr-2 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Weight</p>
              <p className="text-base font-bold">
                {course.rank_weighting.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Award className="mr-2 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Credits</p>
              <p className="text-base font-bold">{course.credits.toFixed(1)}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-2 flex items-center text-sm font-medium">
            <Book className="mr-2 h-5 w-5 text-muted-foreground" />
            Course Description
          </h3>
          <p className="text-sm text-muted-foreground">{course.description}</p>
        </div>
        <div>
          <h3 className="mb-2 flex items-center text-sm font-medium">
            <ListChecks className="mr-2 h-5 w-5 text-muted-foreground" />
            Prerequisites
          </h3>
          <ul className="list-inside list-disc text-sm text-muted-foreground">
            {course.prerequisites.length > 0 ? (
              course.prerequisites.map((prerequisite) => (
                <li key={prerequisite}>{prerequisite}</li>
              ))
            ) : (
              <li>None</li>
            )}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
