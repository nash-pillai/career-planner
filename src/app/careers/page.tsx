"use client";

import CareerCard from "@/components/career-card";
import CareerModal from "@/components/career-modal";
import CareerSearch from "@/components/career-search";
import { getCareerReport, searchCareers } from "@/server/serverActions";
import { useEffect, useState } from "react";
import { type FullCareer } from "types";
import { uniqBy } from "@/lib/utils";

export default function Careers() {
  const [careers, setCareers] = useState<FullCareer[]>([]);
  const [searchText, setSearchText] = useState("");

  const [personality, setPersonality] = useState({
    realistic: 0,
    investigative: 0,
    artistic: 0,
    social: 0,
    enterprising: 0,
    conventional: 0,
  });
  const [trainingLevel, setTrainingLevel] = useState(0);
  const [brightOutlook, setBrightOutlook] = useState(false);

  useEffect(() => {
    setCareers([]);
    void searchCareers(searchText).then((data) => {
      console.log(data);
      if (!data.error && data.occupation) {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        data.occupation.forEach(async (career: { code: string }) => {
          const careerDetails = await getCareerReport(career.code);
          if (careerDetails.error) return;
          if (!careerDetails.career) console.log(careerDetails);
          setCareers((prev) => [...prev, careerDetails]);
        });
      }
    });
  }, [searchText]);

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
      />
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {uniqBy(careers, (val: FullCareer) => val.code).map((career) => (
          <CareerModal
            key={`${career.code}-${career.career.title}`}
            career={career}
          />
        ))}
      </div>
    </div>
  );
}
