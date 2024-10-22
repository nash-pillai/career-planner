import { Button } from "@/components/ui/button";
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
import { FullCareer } from "types";
import CareerCard from "./career-card";

export default function CareerModal({ career }: { career: FullCareer }) {
  // const careerData = {
  //   name: "Software Developer",
  //   alsoCalled: ["Programmer", "Software Engineer", "Application Developer"],
  //   description: "Develops and maintains software applications and systems.",
  //   duties: [
  //     "Write and test code",
  //     "Debug and troubleshoot software issues",
  //     "Collaborate with other developers and stakeholders",
  //     "Implement software updates and fixes",
  //   ],
  //   knowledge: [
  //     {
  //       topic: "Computer Science",
  //       details: [
  //         "Algorithms and data structures",
  //         "Software design patterns",
  //         "Database management systems",
  //       ],
  //     },
  //     {
  //       topic: "Programming Languages",
  //       details: ["Java", "Python", "JavaScript", "C++"],
  //     },
  //   ],
  //   skills: [
  //     {
  //       name: "Problem Solving",
  //       details: ["Analytical thinking", "Logical reasoning", "Creativity"],
  //     },
  //     {
  //       name: "Communication",
  //       details: [
  //         "Technical writing",
  //         "Verbal explanation of complex concepts",
  //       ],
  //     },
  //   ],
  //   abilities: [
  //     {
  //       name: "Attention to Detail",
  //       details: [
  //         "Spotting errors in code",
  //         "Ensuring code quality and efficiency",
  //       ],
  //     },
  //     {
  //       name: "Adaptability",
  //       details: [
  //         "Learning new technologies quickly",
  //         "Adjusting to changing project requirements",
  //       ],
  //     },
  //   ],
  //   personality: {
  //     trait:
  //       "Analytical and logical thinker with a creative problem-solving approach.",
  //     workStyles: [
  //       "Detail-oriented",
  //       "Self-motivated",
  //       "Team player",
  //       "Continuous learner",
  //     ],
  //   },
  //   technology: [
  //     {
  //       category: "Programming Languages",
  //       tools: ["Python", "JavaScript", "Java", "C++"],
  //     },
  //     {
  //       category: "Web Technologies",
  //       tools: ["React", "Node.js", "Angular", "Vue.js"],
  //     },
  //     {
  //       category: "Databases",
  //       tools: ["MySQL", "MongoDB", "PostgreSQL"],
  //     },
  //   ],
  //   education: [
  //     "Bachelor's degree in Computer Science or related field",
  //     "Master's degree (optional)",
  //   ],
  //   outlook: {
  //     rating: "Bright",
  //     description:
  //       "Much faster than average job growth expected over the next decade.",
  //     income: {
  //       median: 110000,
  //       tenthPercentile: 65000,
  //       ninetiethPercentile: 170000,
  //     },
  //     hourlyWage: {
  //       median: 52.88,
  //       tenthPercentile: 31.25,
  //       ninetiethPercentile: 81.73,
  //     },
  //   },
  //   relatedCareers: [
  //     "Web Developer",
  //     "Database Administrator",
  //     "Systems Analyst",
  //     "DevOps Engineer",
  //   ],
  // };

  return (
    <Dialog>
      <DialogTrigger>
        <CareerCard career={career} />
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-[90vw]">
        <DialogHeader>
          <DialogTitle>{career.career.title}</DialogTitle>
          <DialogDescription>
            Also known as: {career.career.also_called.title.join(", ")}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[calc(90vh-120px)] pr-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-1 md:col-span-2 lg:col-span-3">
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2" />
                  Knowledge
                </CardTitle>
              </CardHeader>
              <CardContent>
                {career.knowledge.group.map((group, index) => (
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                {career.skills.group.map((group, index) => (
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

            <Card className="col-span-1 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2" />
                  Abilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                {career.abilities.group.map((group, index) => (
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

            <Card className="col-span-1 md:col-span-2">
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
                            <Badge
                              variant="secondary"
                              className="ml-2 bg-orange-500/30 hover:bg-orange-500/30"
                            >
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

            <Card>
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
                  {career.personality.work_styles.element.map(
                    (style, index) => (
                      <li key={index}>{style.name}</li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>

            <Card>
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
                  {career.education.education_usually_needed.category.map(
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

            <Card className="col-span-1 md:col-span-2">
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
                        ? "brightOutlook"
                        : "secondary"
                    }
                    className={
                      career.job_outlook.outlook.category === "Average"
                        ? "bg-yellow-500/50 hover:bg-yellow-500/50"
                        : career.job_outlook.outlook.category ===
                            "Below Average"
                          ? "bg-red-500/50 hover:bg-red-500/50"
                          : ""
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
                      {career.job_outlook.salary.annual_median.toLocaleString()}
                    </p>
                    <p>
                      10th Percentile: $
                      {career.job_outlook.salary.annual_10th_percentile.toLocaleString()}
                    </p>
                    <p>
                      90th Percentile: $
                      {career.job_outlook.salary.annual_90th_percentile.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Hourly Wage</h4>
                    <p>
                      Median: $
                      {career.job_outlook.salary.hourly_median.toFixed(2)}
                    </p>
                    <p>
                      10th Percentile: $
                      {career.job_outlook.salary.hourly_10th_percentile.toFixed(
                        2,
                      )}
                    </p>
                    <p>
                      90th Percentile: $
                      {career.job_outlook.salary.hourly_90th_percentile.toFixed(
                        2,
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1 md:col-span-2">
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
                          <Badge variant="brightOutlook" className="ml-2">
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
