import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Building, GraduationCap, DollarSign } from "lucide-react";
import { MatchingCareer, type FullCareer } from "types";

export default function CareerCard({
  career,
  fit,
}: {
  career: FullCareer;
  fit?: MatchingCareer["fit"];
}) {
  return (
    <Card className="mx-auto h-full w-full max-w-md">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">
              {career.career.title}
            </CardTitle>
            {/* <p className="mt-1 flex items-center text-sm text-muted-foreground">
                <Building className="mr-1 h-4 w-4" />
                {career.company}
              </p> */}
          </div>
          {fit && (
            <Badge
              variant={
                fit === "Best" ? "purple" : fit === "Great" ? "blue" : "yellow"
              }
              className="whitespace-nowrap text-sm"
            >
              {fit}
            </Badge>
          )}
          {career.career.tags.bright_outlook && (
            <Badge variant="green" className="whitespace-nowrap text-sm">
              Bright Outlook
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <h3 className="mb-2 flex items-center text-sm font-medium">
            <DollarSign className="mr-2 h-5 w-5 text-muted-foreground" />
            Average Salary
          </h3>

          <p className="text-2xl font-bold">
            $
            {career.job_outlook.salary.annual_median
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? "Unavailable"}
            /year
          </p>
        </div>
        <div>
          <h3 className="mb-2 flex items-center text-sm font-medium">
            <GraduationCap className="mr-2 h-5 w-5 text-muted-foreground" />
            Education
          </h3>
          <ul className="text-base">
            {career.education.education_usually_needed?.category.map(
              (education) => (
                <li key={education}>
                  {education.substring(0, 1).toUpperCase()}
                  {education.substring(1)}
                </li>
              ),
            ) ?? "Unavailable"}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 flex items-center text-sm font-medium">
            <Briefcase className="mr-2 h-5 w-5 text-muted-foreground" />
            Job Description
          </h3>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {career.career.what_they_do}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
