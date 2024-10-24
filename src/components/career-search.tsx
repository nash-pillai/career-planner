"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, Search } from "lucide-react";

export default function CareerSearch({
  searchText,
  setSearchText,
  personality,
  trainingLevel,
  brightOutlook,
  setPersonality,
  setTrainingLevel,
  setBrightOutlook,
}: {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  personality: {
    Realistic: number;
    Investigative: number;
    Artistic: number;
    Social: number;
    Enterprising: number;
    Conventional: number;
  };
  trainingLevel: number;
  brightOutlook: boolean;
  setPersonality: Dispatch<
    SetStateAction<{
      Realistic: number;
      Investigative: number;
      Artistic: number;
      Social: number;
      Enterprising: number;
      Conventional: number;
    }>
  >;
  setTrainingLevel: Dispatch<SetStateAction<number>>;
  setBrightOutlook: Dispatch<SetStateAction<boolean>>;
}) {
  const handleSliderChange = (category: string, value: number[]) => {
    setPersonality((prev) => ({ ...prev, [category]: value[0] }));
  };

  const handleInputChange = (category: string, value: string) => {
    const numValue = Math.min(Math.max(parseInt(value) || 0, 0), 40);
    setPersonality((prev) => ({ ...prev, [category]: numValue }));
  };

  const trainingLevels = [
    "No filter",
    "Little or No Preparation",
    "Some Preparation",
    "Medium Preparation",
    "High Preparation",
    "Extensive Preparation",
  ];

  return (
    <div className="mx-auto w-full max-w-3xl p-4">
      <div className="flex items-center space-x-2">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
          <Input
            type="text"
            placeholder="Search careers..."
            className="w-full py-2 pl-8 pr-4"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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
              <h3 className="mb-2 font-medium">Career Characteristics</h3>
              {Object.entries(personality)
                .slice(0, 6)
                .map(([category, value]) => (
                  <div key={category} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Label htmlFor={category} className="capitalize">
                        {category}
                      </Label>
                      <Input
                        id={`${category}-input`}
                        type="number"
                        min={0}
                        max={40}
                        value={value}
                        onChange={(e) =>
                          handleInputChange(category, e.target.value)
                        }
                        className="w-16 text-right"
                      />
                    </div>
                    <Slider
                      id={category}
                      min={0}
                      max={40}
                      step={1}
                      value={[value]}
                      onValueChange={(value) =>
                        handleSliderChange(category, value)
                      }
                    />
                  </div>
                ))}
              <div className="space-y-2">
                <Label>Training Level</Label>
                <RadioGroup
                  value={trainingLevels[trainingLevel]}
                  onValueChange={(value) =>
                    setTrainingLevel(trainingLevels.indexOf(value))
                  }
                >
                  {trainingLevels.map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={level}
                        id={level.toLowerCase().replace(/\s+/g, "-")}
                      />
                      <Label htmlFor={level.toLowerCase().replace(/\s+/g, "-")}>
                        {level}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="bright-outlook"
                  checked={brightOutlook}
                  onCheckedChange={(checked) =>
                    setBrightOutlook(checked as boolean)
                  }
                />
                <Label htmlFor="bright-outlook">Bright Outlook Only</Label>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
