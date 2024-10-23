"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Filter, Search, X } from "lucide-react";
import { departments, pathways } from "@/lib/constants";

export default function CourseSearch({
  subject,
  grade,
  credits,
  weight,
  pathway,
  searchQuery,
  setSubject,
  setGrade,
  setCredits,
  setWeight,
  setPathway,
  setSearchQuery,
}: {
  subject: (typeof departments)[number] | null;
  grade: number | null;
  credits: number | null;
  weight: number | null;
  pathway: (typeof pathways)[number] | null;
  searchQuery: string;
  setSubject: Dispatch<SetStateAction<(typeof departments)[number] | null>>;
  setGrade: Dispatch<SetStateAction<number | null>>;
  setCredits: Dispatch<SetStateAction<number | null>>;
  setWeight: Dispatch<SetStateAction<number | null>>;
  setPathway: Dispatch<SetStateAction<(typeof pathways)[number] | null>>;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}) {
  const [typedGrade, setTypedGrade] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-3xl p-4">
      <div className="flex items-center space-x-2">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
          <Input
            type="text"
            placeholder="Search courses..."
            className="w-full py-2 pl-8 pr-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="px-3">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <div className="flex items-center space-x-2">
                  <Select
                    value={subject ?? ""}
                    onValueChange={(value) =>
                      setSubject(value as (typeof departments)[number])
                    }
                  >
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {subject && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSubject(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="grade">Grade</Label>
                <Input
                  id="grade"
                  type="number"
                  min={9}
                  max={12}
                  value={typedGrade ?? ""}
                  onChange={(e) => setTypedGrade(e.target.valueAsNumber)}
                  onBlur={(e) =>
                    setGrade(Math.max(9, Math.min(12, e.target.valueAsNumber)))
                  }
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label>Credits</Label>
                <RadioGroup
                  value={credits ? credits.toString() : "Any"}
                  onValueChange={(value) =>
                    setCredits(value === "Any" ? null : parseFloat(value))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Any" id="credits-any" />
                    <Label htmlFor="credits-any">Any</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="credits-1" />
                    <Label htmlFor="credits-1">1.0</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0.5" id="credits-0.5" />
                    <Label htmlFor="credits-0.5">0.5</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Weight</Label>
                <RadioGroup
                  value={weight ? weight.toString() : "Any"}
                  onValueChange={(value) =>
                    setWeight(value === "Any" ? null : parseFloat(value))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Any" id="weight-any" />
                    <Label htmlFor="weight-any">Any</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="weight-1" />
                    <Label htmlFor="weight-1">1.0</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1.05" id="weight-1.05" />
                    <Label htmlFor="weight-1.05">1.05</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1.1" id="weight-1.1" />
                    <Label htmlFor="weight-1.1">1.1</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pathway">Pathway</Label>
                <div className="flex items-center space-x-2">
                  <Select
                    value={pathway ?? ""}
                    onValueChange={(value) =>
                      setPathway(value as (typeof pathways)[number])
                    }
                  >
                    <SelectTrigger id="pathway">
                      <SelectValue placeholder="Select pathway" />
                    </SelectTrigger>
                    <SelectContent>
                      {pathways.map((path) => (
                        <SelectItem key={path} value={path}>
                          {path}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {pathway && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setPathway(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
