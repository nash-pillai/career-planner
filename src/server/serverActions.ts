"use server";

import { type FullCareer } from "types";
import { oNetApi } from "./serverUtils";

export async function searchCareers() {
  return await oNetApi<{
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
  }>("online/search?keyword=software");
}

export async function getCareerReport(code: string) {
  return {
    knowledge: { group: [] },
    skills: { group: [] },
    abilities: { group: [] },
    ...(await oNetApi<FullCareer>(`mnm/careers/${code}/report`)),
  };
}
