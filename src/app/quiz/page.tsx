"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsDown, ThumbsUp, ArrowLeft, ArrowRight } from "lucide-react";
import { PersonalityArea } from "types";
import { useRouter } from "next/navigation";

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
] as {
  area: PersonalityArea;
  text: string;
}[];

const ratings = [
  "Strongly Dislike",
  "Dislike",
  "Neutral",
  "Like",
  "Strongly Like",
];

const trainingLevel = [
  {
    title: "Little or No Preparation Needed",
    experience:
      "Little or no previous work-related skill, knowledge, or experience is needed for these careers. For example, a person can become a waiter or waitress even if he/she has never worked before.",
    education:
      "Some of these careers may need a high school diploma or GED certificate.",
    job_training:
      "Employees in these careers need from a few days to a few months of training. Usually, an experienced worker can show you how to do the job.",
    examples:
      "These careers involve following instructions and helping others. Examples include agricultural equipment operators, dishwashers, floor sanders and finishers, landscaping and groundskeeping workers, logging equipment operators, baristas, and maids and housekeeping cleaners.",
    svp_range: "(Below 4.0)",
  },
  {
    title: "Some Preparation Needed",
    experience:
      "Some previous work-related skill, knowledge, or experience is usually needed. For example, it would help a teller to have experience working with the public.",
    education: "These careers usually need a high school diploma.",
    job_training:
      "Employees in these careers need from a few months to one year of working with experienced employees. An apprenticeship program may be available for these careers.",
    examples:
      "These careers often involve using your knowledge and skills to help others. Examples include orderlies, counter and rental clerks, customer service representatives, security guards, upholsterers, tellers, and dental laboratory technicians.",
    svp_range: "(4.0 to < 6.0)",
  },
  {
    title: "Medium Preparation Needed",
    experience:
      "Previous work-related skill, knowledge, or experience is needed for these careers. For example, an electrician must be in an apprenticeship for three to four years or have several years of job training. You may need to pass a test to get a license to do the job.",
    education:
      "Most of these careers need vocational school training, on-the-job experience, or an associate's degree.",
    job_training:
      "Employees in these careers need one or two years of training. Both on-the-job experience and informal training with experienced workers may be needed. An apprenticeship program may be a good choice for these careers.",
    examples:
      "These careers usually involve using communication and organizational skills to coordinate, supervise, manage, or train others to accomplish goals. Examples include hydroelectric production managers, desktop publishers, electricians, agricultural technicians, barbers, court reporters and simultaneous captioners, and medical assistants.",
    svp_range: "(6.0 to < 7.0)",
  },
  {
    title: "High Preparation Needed",
    experience:
      "Long term work-related skill, knowledge, or experience is needed for these careers. For example, an accountant must complete four years of college and work several years in the field to be qualified for the job.",
    education:
      "Most of these careers need a four-year bachelor's degree, but some do not.",
    job_training:
      "Employees in these careers need several years of work-related experience and training. Both on-the-job and classroom job training may be needed.",
    examples:
      "Many of these careers involve coordinating, supervising, managing, or training others. Examples include real estate brokers, sales managers, database administrators, graphic designers, conservation scientists, art directors, and cost estimators.",
    svp_range: "(7.0 to < 8.0)",
  },
  {
    title: "Extensive Preparation Needed",
    experience:
      "Extensive skill, knowledge, and experience are needed for these careers. Many require more than five years of experience. For example, surgeons must complete four years of college and an additional five to seven years of specialized medical training to be able to do their job.",
    education:
      "Most of these careers need a graduate school education. For example, they may require a master's degree, and some require a Ph.D., M.D., or J.D. (law degree).",
    job_training:
      "Employees may need some on-the-job training. However, the person will usually have the needed skills, knowledge, work-related experience, and training before starting the job.",
    examples:
      "These careers often involve coordinating, training, supervising, or managing the activities of others to accomplish goals. Very advanced communication and organizational skills are required. Examples include pharmacists, lawyers, astronomers, biologists, clergy, physician assistants, and veterinarians.",
    svp_range: "(8.0 and above)",
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
            className="flex items-center"
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
