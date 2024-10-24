"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsDown, ThumbsUp, ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  allQuestions,
  type personalityAreas,
  ratings,
  trainingLevel,
} from "@/lib/constants";

export default function Quiz() {
  const [results, setResults] = useState<{
    [key in (typeof personalityAreas)[number]]: number;
  }>({
    Realistic: 0,
    Social: 0,
    Investigative: 0,
    Artistic: 0,
    Enterprising: 0,
    Conventional: 0,
  });

  const router = useRouter();

  const [questionIndex, setQuestionIndex] = useState(-1);

  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const [selectedTrainingLevel, setSelectedTrainingLevel] = useState<
    number | null
  >(null);

  useEffect(() => {
    const newResults = {
      Realistic: 0,
      Social: 0,
      Investigative: 0,
      Artistic: 0,
      Enterprising: 0,
      Conventional: 0,
    };
    if (
      questionIndex === allQuestions.length &&
      selectedRatings.length === allQuestions.length
    ) {
      for (let i = 0; i < allQuestions.length; i++) {
        newResults[allQuestions[i]!.area] += selectedRatings[i]!;
      }
      setResults(newResults);
    }
  }, [questionIndex, selectedRatings]);

  const answerQuestion = (rating: string, index: number) => {
    setSelectedRatings([
      ...selectedRatings.slice(0, questionIndex),
      index,
      ...selectedRatings.slice(questionIndex + 1),
    ]);
    if (questionIndex === allQuestions.length + 1)
      router.push(
        `/careers?${Object.entries(results)
          .map(([area, rating]) => `${area}=${rating}`)
          .join("&")}${
          selectedTrainingLevel ? `&job_zone=${selectedTrainingLevel + 1}` : ""
        }`,
      );
    else setQuestionIndex(questionIndex + 1);
  };

  return (
    <div
      className="flex flex-col items-center justify-center space-y-12 p-12"
      tabIndex={0}
      onKeyDown={(e) => {
        if (["1", "2", "3", "4", "5"].includes(e.key))
          answerQuestion(ratings[+e.key - 1]!, +e.key - 1);
      }}
    >
      <h1 className="text-4xl font-bold">Quiz</h1>
      <div className="mx-auto w-full max-w-3xl space-y-6 p-6">
        {questionIndex === -1 && (
          <>
            <p className="text-center text-lg font-semibold">
              Rate how much you would enjoy each of the following activities.
            </p>
            <p className="text-center">
              Try not to think about the required education/training for each
              activity or how much money it would earn.
            </p>
          </>
        )}
        {questionIndex > -1 && questionIndex < allQuestions.length && (
          <>
            <h2 className="text-center text-2xl font-bold">
              Question {questionIndex + 1}/60
            </h2>
            <p className="text-center text-lg">
              Rate how much you would enjoy: {allQuestions[questionIndex]?.text}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
              {ratings.map((rating, index) => (
                <Button
                  key={rating}
                  variant={
                    selectedRatings[questionIndex] === index
                      ? "default"
                      : "outline"
                  }
                  className="flex h-24 w-full flex-col items-center justify-center p-2"
                  onClick={() => answerQuestion(rating, index)}
                >
                  {index === 0 && <ThumbsDown className="mb-2 h-6 w-6" />}
                  {index === 4 && <ThumbsUp className="mb-2 h-6 w-6" />}
                  <span className="text-center text-sm">{rating}</span>
                </Button>
              ))}
            </div>
            <p className="text-center text-muted-foreground">
              Select a rating by clicking the option or pressing 1-5 on your
              keyboard
            </p>
          </>
        )}
        {questionIndex === allQuestions.length && (
          <>
            <p className="text-center text-lg font-semibold">
              You have completed the quiz.
            </p>
            <p className="text-center">Here are your results:</p>
            <div className="mx-auto w-fit">
              {Object.entries(results).map(([area, rating]) => (
                <div key={area}>
                  <span>{area}: </span>
                  <span className="font-bold">{rating}</span>
                </div>
              ))}
            </div>
          </>
        )}
        {questionIndex === allQuestions.length + 1 && (
          <>
            <h2 className="text-center text-2xl font-bold">
              How much training, education, or experience are you willing to
              obtain? (optional)
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {trainingLevel.map((level, index) => (
                <Button
                  key={level.title}
                  variant={
                    selectedTrainingLevel === index ? "default" : "outline"
                  }
                  className="flex h-fit w-full flex-col items-start justify-start px-6 py-4"
                  onClick={() => setSelectedTrainingLevel(index)}
                >
                  <span className="w-full text-left text-lg font-bold">
                    {level.title}
                  </span>
                  <ul className="space-y-2 whitespace-normal text-left">
                    <li>
                      <span className="font-bold">Experience:</span>{" "}
                      <span
                        className={
                          selectedTrainingLevel !== index
                            ? "text-muted-foreground"
                            : "text-gray-300"
                        }
                      >
                        {level.experience}
                      </span>
                    </li>
                    <li>
                      <span className="font-bold">Education:</span>{" "}
                      <span
                        className={
                          selectedTrainingLevel !== index
                            ? "text-muted-foreground"
                            : "text-gray-300"
                        }
                      >
                        {level.education}
                      </span>
                    </li>
                    <li>
                      <span className="font-bold">Job Training:</span>{" "}
                      <span
                        className={
                          selectedTrainingLevel !== index
                            ? "text-muted-foreground"
                            : "text-gray-300"
                        }
                      >
                        {level.job_training}
                      </span>
                    </li>
                    <li>
                      <span className="font-bold">Examples:</span>{" "}
                      <span
                        className={
                          selectedTrainingLevel !== index
                            ? "text-muted-foreground"
                            : "text-gray-300"
                        }
                      >
                        {level.examples}
                      </span>
                    </li>
                    <li>
                      <span className="font-bold">SVP Range:</span>{" "}
                      <span
                        className={
                          selectedTrainingLevel !== index
                            ? "text-muted-foreground"
                            : "text-gray-300"
                        }
                      >
                        {level.svp_range}
                      </span>
                    </li>
                  </ul>
                </Button>
              ))}
            </div>
          </>
        )}
        <div className="flex justify-between">
          <Button
            variant="outline"
            className={`flex items-center ${questionIndex === -1 ? "invisible" : ""}`}
            onClick={() => setQuestionIndex(questionIndex - 1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button
            disabled={
              selectedRatings[questionIndex] === undefined &&
              !(questionIndex >= allQuestions.length || questionIndex < 0)
            }
            className={`flex items-center ${questionIndex === -1 ? "" : "invisible"}`}
            onClick={() =>
              questionIndex === allQuestions.length + 1
                ? router.push(
                    `/careers?${Object.entries(results)
                      .map(([area, rating]) => `${area}=${rating}`)
                      .join("&")}${
                      selectedTrainingLevel
                        ? `&job_zone=${selectedTrainingLevel + 1}`
                        : ""
                    }`,
                  )
                : setQuestionIndex(questionIndex + 1)
            }
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
