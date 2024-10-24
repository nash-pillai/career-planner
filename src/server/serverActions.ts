"use server";

import { type MatchingCareer, type FullCareer } from "types";
import { oNetApi } from "./serverUtils";

export async function searchCareers(searchText: string) {
  return oNetApi<{
    keyword: string;
    start: number;
    end: number;
    total: number;
    link: { href: string; rel: string }[];
    occupation: {
      href: string;
      relevance_score: number;
      code: string;
      title: string;
      tags: Record<string, boolean>;
    }[];
  }>(`online/search?start=1&end=50&keyword=${searchText || "e"}`);
}

export async function careersByInterest({
  personality,
  job_zone,
}: {
  personality: {
    Realistic: number;
    Investigative: number;
    Artistic: number;
    Social: number;
    Enterprising: number;
    Conventional: number;
  };
  job_zone: number;
}) {
  return oNetApi<{ career: MatchingCareer[] }>(
    `mnm/interestprofiler/careers?${new URLSearchParams({ ...personality, job_zone, start: 1, end: 50 } as unknown as Record<string, string>).toString()}`,
  );
}

export async function getCareerReport(code: string) {
  const careerData = await oNetApi<FullCareer>(`mnm/careers/${code}/report`);
  if (careerData.error || !careerData.career) return { error: true as const };
  return {
    knowledge: { group: [] },
    skills: { group: [] },
    abilities: { group: [] },
    ...careerData,
  };
}
