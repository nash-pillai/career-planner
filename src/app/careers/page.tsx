"use client";

import { CareerCard } from "@/components/career-card";
import { useState } from "react";
import { Career } from "types";

export default function Careers() {
  const [careers, setCareers] = useState<Career[]>([
    {
      title: "Software Engineer",
      description:
        "As a Software Engineer at TechCorp Inc., you'll be responsible for designing, developing, and maintaining high-quality software solutions. You'll work collaboratively with cross-functional teams to create innovative products that solve complex problems and deliver value to our customers.",
      salary: 95000,
      company: "Google",
      education: "Bachelor's Degree",
      industry: "Tech",
    },
    {
      title: "Software Engineer",
      description:
        "As a Software Engineer at TechCorp Inc., you'll be responsible for designing, developing, and maintaining high-quality software solutions. You'll work collaboratively with cross-functional teams to create innovative products that solve complex problems and deliver value to our customers.",
      salary: 100000,
      company: "Google",
      education: "Bachelor's Degree",
      industry: "Tech",
    },
    {
      title: "Software Engineer",
      description:
        "As a Software Engineer at TechCorp Inc., you'll be responsible for designing, developing, and maintaining high-quality software solutions. You'll work collaboratively with cross-functional teams to create innovative products that solve complex problems and deliver value to our customers.",
      salary: 105000,
      company: "Google",
      education: "Bachelor's Degree",
      industry: "Tech",
    },
    {
      title: "Software Engineer",
      description:
        "As a Software Engineer at TechCorp Inc., you'll be responsible for designing, developing, and maintaining high-quality software solutions. You'll work collaboratively with cross-functional teams to create innovative products that solve complex problems and deliver value to our customers.",
      salary: 110000,
      company: "Google",
      education: "Bachelor's Degree",
      industry: "Tech",
    },
  ]);
  return (
    <div className="grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {careers.map((career) => (
        <CareerCard key={career.title} career={career} />
      ))}
    </div>
  );
}
