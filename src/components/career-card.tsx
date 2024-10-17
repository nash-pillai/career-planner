import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Building, GraduationCap, DollarSign } from "lucide-react";
import { Career } from "types";

export default function CareerCard({ career }: { career: Career }) {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">{career.title}</CardTitle>
            <p className="mt-1 flex items-center text-sm text-muted-foreground">
              <Building className="mr-1 h-4 w-4" />
              {career.company}
            </p>
          </div>
          <Badge variant="secondary" className="text-sm">
            {career.industry}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center">
          <DollarSign className="mr-2 h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Average Salary</p>
            <p className="text-2xl font-bold">
              ${career.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              /year
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <GraduationCap className="mr-2 h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Education Requirements</p>
            <p className="text-base">{career.education}</p>
          </div>
        </div>
        <div>
          <h3 className="mb-2 flex items-center text-sm font-medium">
            <Briefcase className="mr-2 h-5 w-5 text-muted-foreground" />
            Job Description
          </h3>
          <p className="text-sm text-muted-foreground">{career.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
