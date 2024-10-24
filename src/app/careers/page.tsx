"use client";

import CareerCard from "@/components/career-card";
import CareerModal from "@/components/career-modal";
import CareerSearch from "@/components/career-search";
import {
  careersByInterest,
  getCareerReport,
  searchCareers,
} from "@/server/serverActions";
import { useEffect, useState } from "react";
import { type FullCareer } from "types";
import { uniqBy } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export default function Careers() {
  const searchParams = useSearchParams();
  const [careers, setCareers] = useState<(FullCareer & { index: number })[]>(
    [],
  );
  const [searchText, setSearchText] = useState("");

  const [personality, setPersonality] = useState({
    Realistic: +(searchParams.get("Realistic") ?? 0),
    Investigative: +(searchParams.get("Investigative") ?? 0),
    Artistic: +(searchParams.get("Artistic") ?? 0),
    Social: +(searchParams.get("Social") ?? 0),
    Enterprising: +(searchParams.get("Enterprising") ?? 0),
    Conventional: +(searchParams.get("Conventional") ?? 0),
  });
  const [trainingLevel, setTrainingLevel] = useState(0);
  const [brightOutlook, setBrightOutlook] = useState(false);

  const [filterOn, setFilterOn] = useState(false);

  useEffect(() => {
    if (Object.values(personality).some((val) => val > 0)) return;
    setCareers([]);
    let isCurrent = true;
    void searchCareers(searchText).then((data) => {
      if (data.error || !data.occupation) return;
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      data.occupation.forEach(async (career: { code: string }, i) => {
        if (!isCurrent) return;
        const careerDetails = await getCareerReport(career.code);
        if (careerDetails.error || !isCurrent) return;
        setCareers((prev) =>
          [...prev, { index: i, ...careerDetails }].sort(
            (a, b) => a.index - b.index,
          ),
        );
      });
    });
    return () => {
      isCurrent = false;
    };
  }, [searchText]);

  useEffect(() => {
    if (!Object.values(personality).some((val) => val > 0)) return;
    setCareers([]);
    let isCurrent = true;
    void careersByInterest({
      personality,
      job_zone: trainingLevel + 1,
      // brightOutlook,
    }).then((data) => {
      if (data.error || !data.career) return;
      data.career.forEach(
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        async (career: { code: string; title: string }, i) => {
          if (
            !isCurrent ||
            !career.title.toLowerCase().includes(searchText.toLowerCase())
          )
            return;
          const careerDetails = await getCareerReport(career.code);
          if (careerDetails.error || !isCurrent) return;
          setCareers((prev) =>
            [...prev, { index: i, ...careerDetails }].sort(
              (a, b) => a.index - b.index,
            ),
          );
        },
      );
    });
    return () => {
      isCurrent = false;
    };
  }, [personality, trainingLevel, brightOutlook, searchText]);

  return (
    <div className="flex flex-col items-center justify-center space-y-12 p-12">
      <h1 className="text-4xl font-bold">Careers</h1>
      <CareerSearch
        searchText={searchText}
        setSearchText={setSearchText}
        personality={personality}
        trainingLevel={trainingLevel}
        brightOutlook={brightOutlook}
        setPersonality={setPersonality}
        setTrainingLevel={setTrainingLevel}
        setBrightOutlook={setBrightOutlook}
        filterOn={filterOn}
        setFilterOn={setFilterOn}
      />
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {uniqBy(careers, (val: FullCareer) => val.code).map((career) => (
          <CareerModal
            key={`${career.code}-${career.career.title}`}
            career={career}
            // fit={career.fit}
          />
        ))}
      </div>
    </div>
  );
}
