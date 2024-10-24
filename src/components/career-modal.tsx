import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  GraduationCap,
  TrendingUp,
  Users,
  BookOpen,
  Lightbulb,
  Brain,
  User,
  Cpu,
} from "lucide-react";
import { type FullCareer } from "types";
import CareerCard from "./career-card";
import { courses } from "@/lib/courses";
import CourseCard from "./course-card";
import CourseModal from "./course-modal";

export default function CareerModal({ career }: { career: FullCareer }) {
  const recommendedCourses = courses
    .filter((course) =>
      course.tags.some((tag) =>
        career.knowledge?.group.some(
          (knowledge) => knowledge.title.name === tag,
        ),
      ),
    )
    .sort((a, b) => {
      const aMatchCount = a.tags.reduce(
        (count, tag) =>
          count +
          (career.knowledge?.group.some((knowledge) =>
            knowledge.element.some((element) => element.name === tag),
          )
            ? 1
            : 0),
        0,
      );
      const bMatchCount = b.tags.reduce(
        (count, tag) =>
          count +
          (career.knowledge?.group.some((knowledge) =>
            knowledge.element.some((element) => element.name === tag),
          )
            ? 1
            : 0),
        0,
      );
      return bMatchCount - aMatchCount;
    });

  return (
    <Dialog>
      <DialogTrigger className="flex h-full text-left">
        <CareerCard career={career} />
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-[90vw]">
        <DialogHeader>
          <DialogTitle>{career.career.title}</DialogTitle>
          {career.career.also_called && (
            <DialogDescription>
              Also known as: {career.career.also_called.title.join(", ")}
            </DialogDescription>
          )}
        </DialogHeader>
        <ScrollArea className="h-[calc(90vh-120px)] pr-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-1 border-none bg-[#D8FFD8] md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2" />
                  Career Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{career.career.what_they_do}</p>
                <h4 className="mb-2 font-semibold">Duties/Tasks:</h4>
                <ul className="list-disc pl-5">
                  {career.career.on_the_job.task.map((duty, index) => (
                    <li key={index}>{duty}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="col-span-1 border-none bg-[#ECE5FF] md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2" />
                  Recommended Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-full">
                  <div className="flex h-full w-max space-x-4 pb-2">
                    {recommendedCourses.map((course) => (
                      <CourseModal key={course.course_code} course={course} />
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="border-none bg-[#FBF7B8]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2" />
                  Knowledge
                </CardTitle>
              </CardHeader>
              <CardContent>
                {career.knowledge?.group.map((group, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="mb-2 font-semibold">{group.title.name}</h4>
                    <ul className="list-disc pl-5">
                      {group.element.map((element, elementIndex) => (
                        <li key={elementIndex}>{element.name}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-none bg-[#D8FFD8]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                {career.skills?.group.map((group, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="mb-2 font-semibold">{group.title.name}</h4>
                    <ul className="list-disc pl-5">
                      {group.element.map((element, elementIndex) => (
                        <li key={elementIndex}>{element.name}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="col-span-1 border-none bg-[#E0E9FE] md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2" />
                  Abilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                {career.abilities?.group.map((group, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="mb-2 font-semibold">{group.title.name}</h4>
                    <ul className="list-disc pl-5">
                      {group.element.map((element, elementIndex) => (
                        <li key={elementIndex}>{element.name}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="col-span-1 border-none bg-[#ECE5FF] md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cpu className="mr-2" />
                  Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                {career.technology.category.map((category, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="mb-2 font-semibold">
                      {category.title.name}
                    </h4>
                    <ul className="list-disc pl-5">
                      {category.example.map((element, elementIndex) => (
                        <li key={elementIndex} className="flex items-center">
                          {element.name}
                          {element.hot_technology && (
                            <Badge variant="orange" className="ml-2">
                              🔥 Hot Technology
                            </Badge>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-none bg-[#FBF7B8]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2" />
                  Personality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  {career.personality.top_interest.description}
                </p>
                <h4 className="mb-2 font-semibold">Work Styles:</h4>
                <ul className="list-disc pl-5">
                  {career.personality.work_styles
                    ? career.personality.work_styles.element.map(
                        (style, index) => <li key={index}>{style.name}</li>,
                      )
                    : career.personality.top_interest
                      ? career.personality.top_interest.title
                      : null}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none bg-[#D8FFD8]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="mb-2 font-semibold">
                  Education Usually Needed:
                </h4>
                <ul className="list-disc pl-5">
                  {career.education.education_usually_needed?.category.map(
                    (education, index) => (
                      <li key={index}>
                        {education.substring(0, 1).toUpperCase()}
                        {education.substring(1)}
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>

            <Card className="col-span-1 border-none bg-[#E0E9FE] md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2" />
                  Outlook
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Badge
                    variant={
                      career.job_outlook.outlook.category === "Bright"
                        ? "green"
                        : career.job_outlook.outlook.category === "Average"
                          ? "yellow"
                          : "red"
                    }
                  >
                    {career.job_outlook.outlook.category}
                  </Badge>
                  <p className="mt-2">
                    {career.job_outlook.outlook.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-semibold">Annual Income</h4>
                    <p>
                      Median: $
                      {career.job_outlook.salary.annual_median
                        ? `$${career.job_outlook.salary.annual_median.toLocaleString()}`
                        : "Unavailable"}
                    </p>
                    <p>
                      10th Percentile: $
                      {career.job_outlook.salary.annual_10th_percentile
                        ? `$${career.job_outlook.salary.annual_10th_percentile.toLocaleString()}`
                        : "Unavailable"}
                    </p>
                    <p>
                      90th Percentile: $
                      {career.job_outlook.salary.annual_90th_percentile
                        ? `$${career.job_outlook.salary.annual_90th_percentile.toLocaleString()}`
                        : "Unavailable"}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Hourly Wage</h4>
                    <p>
                      Median:{" "}
                      {career.job_outlook.salary.hourly_median
                        ? `$${career.job_outlook.salary.hourly_median.toFixed(2)}`
                        : "Unavailable"}
                    </p>
                    <p>
                      10th Percentile:{" "}
                      {career.job_outlook.salary.hourly_10th_percentile
                        ? `$${career.job_outlook.salary.hourly_10th_percentile.toFixed(2)}`
                        : "Unavailable"}
                    </p>
                    <p>
                      90th Percentile:{" "}
                      {career.job_outlook.salary.hourly_90th_percentile
                        ? `$${career.job_outlook.salary.hourly_90th_percentile.toFixed(2)}`
                        : "Unavailable"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1 border-none bg-[#FBF7B8] md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" />
                  Related Careers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  {career.explore_more.careers.career.map(
                    (relatedCareer, index) => (
                      <li key={index}>
                        {relatedCareer.title}
                        {relatedCareer.tags.bright_outlook && (
                          <Badge variant="green" className="ml-2">
                            Bright Outlook
                          </Badge>
                        )}
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
