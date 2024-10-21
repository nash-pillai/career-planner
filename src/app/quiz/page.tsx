"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsDown, ThumbsUp, ArrowLeft, ArrowRight } from "lucide-react";

const allQuestions = [
  {
    area: "Realistic",
    text: "Building kitchen cabinets.",
  },
  {
    area: "Realistic",
    text: "Laying brick or tile.",
  },
  {
    area: "Investigative",
    text: "Developing a new medicine.",
  },
  {
    area: "Investigative",
    text: "Studying ways to reduce water pollution.",
  },
  {
    area: "Artistic",
    text: "Writing books or plays.",
  },
  {
    area: "Artistic",
    text: "Playing a musical instrument.",
  },
  {
    area: "Social",
    text: "Teaching an individual an exercise routine.",
  },
  {
    area: "Social",
    text: "Helping people with personal or emotional problems.",
  },
  {
    area: "Enterprising",
    text: "Buying and selling stocks and bonds.",
  },
  {
    area: "Enterprising",
    text: "Managing a retail store.",
  },
  {
    area: "Conventional",
    text: "Developing a spreadsheet using computer software.",
  },
  {
    area: "Conventional",
    text: "Proofreading records or forms.",
  },
  {
    area: "Realistic",
    text: "Repairing household appliances.",
  },
  {
    area: "Realistic",
    text: "Raising fish in a fish hatchery.",
  },
  {
    area: "Investigative",
    text: "Conducting chemical experiments.",
  },
  {
    area: "Investigative",
    text: "Studying the movement of planets.",
  },
  {
    area: "Artistic",
    text: "Composing or arranging music.",
  },
  {
    area: "Artistic",
    text: "Drawing pictures.",
  },
  {
    area: "Social",
    text: "Giving career guidance to people.",
  },
  {
    area: "Social",
    text: "Performing rehabilitation therapy.",
  },
  {
    area: "Enterprising",
    text: "Operating a beauty salon or barber shop.",
  },
  {
    area: "Enterprising",
    text: "Managing a department within a large company.",
  },
  {
    area: "Conventional",
    text: "Installing software across computers on a large network.",
  },
  {
    area: "Conventional",
    text: "Operating a calculator.",
  },
  {
    area: "Realistic",
    text: "Assembling electronic parts.",
  },
  {
    area: "Realistic",
    text: "Driving a truck to deliver packages to offices and homes.",
  },
  {
    area: "Investigative",
    text: "Examining blood samples using a microscope.",
  },
  {
    area: "Investigative",
    text: "Investigating the cause of a fire.",
  },
  {
    area: "Artistic",
    text: "Creating special effects for movies.",
  },
  {
    area: "Artistic",
    text: "Painting sets for plays.",
  },
  {
    area: "Social",
    text: "Doing volunteer work at a non-profit organization.",
  },
  {
    area: "Social",
    text: "Teaching children how to play sports.",
  },
  {
    area: "Enterprising",
    text: "Starting your own business.",
  },
  {
    area: "Enterprising",
    text: "Negotiating business contracts.",
  },
  {
    area: "Conventional",
    text: "Keeping shipping and receiving records.",
  },
  {
    area: "Conventional",
    text: "Calculating the wages of employees.",
  },
  {
    area: "Realistic",
    text: "Testing the quality of parts before shipment.",
  },
  {
    area: "Realistic",
    text: "Repairing and installing locks.",
  },
  {
    area: "Investigative",
    text: "Developing a way to better predict the weather.",
  },
  {
    area: "Investigative",
    text: "Working in a biology lab.",
  },
  {
    area: "Artistic",
    text: "Writing scripts for movies or television shows.",
  },
  {
    area: "Artistic",
    text: "Performing jazz or tap dance.",
  },
  {
    area: "Social",
    text: "Teaching sign language to people who are deaf or hard of hearing.",
  },
  {
    area: "Social",
    text: "Helping conduct a group therapy session.",
  },
  {
    area: "Enterprising",
    text: "Representing a client in a lawsuit.",
  },
  {
    area: "Enterprising",
    text: "Marketing a new line of clothing.",
  },
  {
    area: "Conventional",
    text: "Inventorying supplies using a hand-held computer.",
  },
  {
    area: "Conventional",
    text: "Recording rent payments.",
  },
  {
    area: "Realistic",
    text: "Setting up and operating machines to make products.",
  },
  {
    area: "Realistic",
    text: "Putting out forest fires.",
  },
  {
    area: "Investigative",
    text: "Inventing a replacement for sugar.",
  },
  {
    area: "Investigative",
    text: "Doing laboratory tests to identify diseases.",
  },
  {
    area: "Artistic",
    text: "Singing in a band.",
  },
  {
    area: "Artistic",
    text: "Editing movies.",
  },
  {
    area: "Social",
    text: "Taking care of children at a day-care center.",
  },
  {
    area: "Social",
    text: "Teaching a high-school class.",
  },
  {
    area: "Enterprising",
    text: "Selling merchandise at a department store.",
  },
  {
    area: "Enterprising",
    text: "Managing a clothing store.",
  },
  {
    area: "Conventional",
    text: "Keeping inventory records.",
  },
  {
    area: "Conventional",
    text: "Stamping, sorting, and distributing mail for an organization.",
  },
];

export default function Quiz() {
  const [results, setResults] = useState({
    Realistic: 0,
    Social: 0,
    Investigative: 0,
    Artistic: 0,
    Enterprising: 0,
    Conventional: 0,
  });

  const [questionIndex, setQuestionIndex] = useState(-1);

  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const ratings = [
    "Strongly Dislike",
    "Dislike",
    "Neutral",
    "Like",
    "Strongly Like",
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-12 p-12">
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
        {questionIndex > -1 && (
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
                  onClick={() =>
                    setSelectedRatings([
                      ...selectedRatings.slice(0, questionIndex),
                      index,
                      ...selectedRatings.slice(questionIndex + 1),
                    ])
                  }
                >
                  {index === 0 && <ThumbsDown className="mb-2 h-6 w-6" />}
                  {index === 4 && <ThumbsUp className="mb-2 h-6 w-6" />}
                  <span className="text-center text-sm">{rating}</span>
                </Button>
              ))}
            </div>
            {selectedRatings[questionIndex] ? (
              <p className="text-center text-muted-foreground">
                You selected: {ratings[selectedRatings[questionIndex]]}
              </p>
            ) : (
              <div className="h-6" />
            )}
          </>
        )}
        <div className="flex justify-between">
          <Button
            variant="outline"
            className="flex items-center"
            onClick={() => setQuestionIndex(questionIndex - 1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button
            disabled={selectedRatings[questionIndex] === undefined}
            className="flex items-center"
            onClick={() => {
              setQuestionIndex(questionIndex + 1);
            }}
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
