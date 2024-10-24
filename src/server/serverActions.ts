"use server";

import { type FullCareer } from "types";
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
