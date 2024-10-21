"use client";

import CareerCard from "@/components/career-card";
import { useState } from "react";
import { FullCareer } from "types";

export default function Careers() {
  const [careers, setCareers] = useState<FullCareer[]>([
    {
      code: "17-2051.00",
      career: {
        code: "17-2051.00",
        title: "Civil Engineers",
        tags: {
          bright_outlook: true,
          green: false,
          apprenticeship: false,
        },
        also_called: {
          title: [
            "Civil Engineer",
            "Design Engineer",
            "Project Engineer",
            "Structural Engineer",
          ],
        },
        what_they_do:
          "Perform engineering duties in planning, designing, and overseeing construction and maintenance of building structures and facilities, such as roads, railroads, airports, bridges, harbors, channels, dams, irrigation projects, pipelines, power plants, and water and sewage systems.",
        on_the_job: {
          task: [
            "Direct engineering activities, ensuring compliance with environmental, safety, or other governmental regulations.",
            "Manage and direct the construction, operations, or maintenance activities at project site.",
            "Inspect project sites to monitor progress and ensure conformance to design specifications and safety or sanitation standards.",
          ],
        },
      },
      knowledge: {
        group: [
          {
            title: {
              id: "2.C.3",
              name: "Engineering and Technology",
            },
            element: [
              {
                id: "2.C.3.c",
                name: "design",
              },
              {
                id: "2.C.3.b",
                name: "product and service development",
              },
            ],
          },
          {
            title: {
              id: "2.C.4",
              name: "Math and Science",
            },
            element: [
              {
                id: "2.C.4.a",
                name: "arithmetic, algebra, geometry, calculus, or statistics",
              },
              {
                id: "2.C.4.b",
                name: "physics",
              },
            ],
          },
          {
            title: {
              id: "2.C.7",
              name: "Arts and Humanities",
            },
            element: [
              {
                id: "2.C.7.a",
                name: "English language",
              },
            ],
          },
          {
            title: {
              id: "2.C.1",
              name: "Business",
            },
            element: [
              {
                id: "2.C.1.a",
                name: "management",
              },
            ],
          },
        ],
      },
      skills: {
        group: [
          {
            title: {
              id: "2.A",
              name: "Basic Skills",
            },
            element: [
              {
                id: "2.A.1.b",
                name: "listening to others, not interrupting, and asking good questions",
              },
              {
                id: "2.A.1.a",
                name: "reading work related information",
              },
            ],
          },
          {
            title: {
              id: "2.B.2",
              name: "Problem Solving",
            },
            element: [
              {
                id: "2.B.2.i",
                name: "noticing a problem and figuring out the best way to solve it",
              },
            ],
          },
          {
            title: {
              id: "2.B.4",
              name: "People and Technology Systems",
            },
            element: [
              {
                id: "2.B.4.g",
                name: "figuring out how a system should work and how changes in the future will affect it",
              },
              {
                id: "2.B.4.e",
                name: "thinking about the pros and cons of different options and picking the best one",
              },
            ],
          },
        ],
      },
      abilities: {
        group: [
          {
            title: {
              id: "1.A.1.a",
              name: "Verbal",
            },
            element: [
              {
                id: "1.A.1.a.3",
                name: "communicate by speaking",
              },
              {
                id: "1.A.1.a.4",
                name: "communicate by writing",
              },
            ],
          },
          {
            title: {
              id: "1.A.1.b",
              name: "Ideas and Logic",
            },
            element: [
              {
                id: "1.A.1.b.5",
                name: "make general rules or come up with answers from lots of detailed information",
              },
              {
                id: "1.A.1.b.3",
                name: "notice when problems happen",
              },
            ],
          },
          {
            title: {
              id: "1.A.1.c",
              name: "Math",
            },
            element: [
              {
                id: "1.A.1.c.1",
                name: "choose the right type of math to solve a problem",
              },
              {
                id: "1.A.1.c.2",
                name: "add, subtract, multiply, or divide",
              },
            ],
          },
          {
            title: {
              id: "1.A.1.e",
              name: "Visual Understanding",
            },
            element: [
              {
                id: "1.A.1.e.3",
                name: "quickly compare groups of letters, numbers, pictures, or other things",
              },
            ],
          },
        ],
      },
      personality: {
        top_interest: {
          id: "1.B.1.a",
          title: "Realistic",
          description:
            "People interested in this work like activities that include practical, hands-on problems and solutions.",
        },
        work_styles: {
          element: [
            {
              id: "1.C.5.c",
              name: "Integrity",
            },
            {
              id: "1.C.5.a",
              name: "Dependability",
            },
            {
              id: "1.C.7.b",
              name: "Analytical Thinking",
            },
            {
              id: "1.C.5.b",
              name: "Attention to Detail",
            },
            {
              id: "1.C.1.c",
              name: "Initiative",
            },
            {
              id: "1.C.4.a",
              name: "Self Control",
            },
          ],
        },
      },
      technology: {
        category: [
          {
            unspsc: 43232604,
            title: {
              name: "Computer aided design CAD software",
            },
            example: [
              {
                hot_technology: "Autodesk AutoCAD Civil 3D",
                name: "Autodesk AutoCAD Civil 3D",
              },
              {
                hot_technology: "Autodesk Revit",
                name: "Autodesk Revit",
              },
            ],
          },
          {
            unspsc: 43232106,
            title: {
              name: "Presentation software",
            },
            example: [
              {
                hot_technology: "Microsoft PowerPoint",
                name: "Microsoft PowerPoint",
              },
            ],
          },
          {
            unspsc: 43232605,
            title: {
              name: "Analytical or scientific software",
            },
            example: [
              {
                hot_technology: "Procore software",
                name: "Procore software",
              },
              {
                hot_technology: "The MathWorks MATLAB",
                name: "The MathWorks MATLAB",
              },
            ],
          },
        ],
      },
      education: {
        job_zone: 4,
        education_usually_needed: {
          category: ["bachelor's degree", "associate's degree"],
        },
      },
      job_outlook: {
        outlook: {
          description: "New job opportunities are very likely in the future.",
          category: "Bright",
        },
        bright_outlook: {
          description: "This career will grow rapidly in the next few years.",
          category: ["Grow Rapidly"],
        },
        salary: {
          soc_code: "17-2051",
          annual_10th_percentile: 63220,
          annual_median: 95890,
          annual_90th_percentile: 150640,
          hourly_10th_percentile: 30.4,
          hourly_median: 46.1,
          hourly_90th_percentile: 72.42,
        },
      },
      // check_out_my_state: {
      //   map: {
      //     href: "https://services.onetcenter.org/ws/mnm/state-maps/17-2051.gif",
      //     width: 600,
      //     height: 340,
      //   },
      //   legend: {
      //     href: "https://services.onetcenter.org/ws/mnm/state-maps/legend.gif",
      //     width: 230,
      //     height: 85,
      //   },
      //   above_average: {
      //     state: [
      //       {
      //         postal_code: "AK",
      //         location_quotient: 2.42,
      //         name: "Alaska",
      //       },
      //       {
      //         postal_code: "GU",
      //         location_quotient: 2.32,
      //         name: "Guam",
      //       },
      //       {
      //         postal_code: "CO",
      //         location_quotient: 1.98,
      //         name: "Colorado",
      //       },
      //       {
      //         postal_code: "HI",
      //         location_quotient: 1.79,
      //         name: "Hawaii",
      //       },
      //       {
      //         postal_code: "MT",
      //         location_quotient: 1.65,
      //         name: "Montana",
      //       },
      //       {
      //         postal_code: "WA",
      //         location_quotient: 1.61,
      //         name: "Washington",
      //       },
      //       {
      //         postal_code: "ND",
      //         location_quotient: 1.54,
      //         name: "North Dakota",
      //       },
      //       {
      //         postal_code: "WY",
      //         location_quotient: 1.45,
      //         name: "Wyoming",
      //       },
      //       {
      //         postal_code: "SD",
      //         location_quotient: 1.39,
      //         name: "South Dakota",
      //       },
      //       {
      //         postal_code: "VA",
      //         location_quotient: 1.29,
      //         name: "Virginia",
      //       },
      //       {
      //         postal_code: "PR",
      //         location_quotient: 1.28,
      //         name: "Puerto Rico",
      //       },
      //       {
      //         postal_code: "CA",
      //         location_quotient: 1.26,
      //         name: "California",
      //       },
      //       {
      //         postal_code: "VT",
      //         location_quotient: 1.25,
      //         name: "Vermont",
      //       },
      //     ],
      //   },
      //   average: {
      //     state: [
      //       {
      //         postal_code: "SC",
      //         location_quotient: 1.24,
      //         name: "South Carolina",
      //       },
      //       {
      //         postal_code: "AL",
      //         location_quotient: 1.2,
      //         name: "Alabama",
      //       },
      //       {
      //         postal_code: "ID",
      //         location_quotient: 1.11,
      //         name: "Idaho",
      //       },
      //       {
      //         postal_code: "MA",
      //         location_quotient: 1.1,
      //         name: "Massachusetts",
      //       },
      //       {
      //         postal_code: "NC",
      //         location_quotient: 1.1,
      //         name: "North Carolina",
      //       },
      //       {
      //         postal_code: "DC",
      //         location_quotient: 1.07,
      //         name: "District of Columbia",
      //       },
      //       {
      //         postal_code: "RI",
      //         location_quotient: 1.07,
      //         name: "Rhode Island",
      //       },
      //       {
      //         postal_code: "ME",
      //         location_quotient: 1.06,
      //         name: "Maine",
      //       },
      //       {
      //         postal_code: "NH",
      //         location_quotient: 1.06,
      //         name: "New Hampshire",
      //       },
      //       {
      //         postal_code: "OR",
      //         location_quotient: 1.06,
      //         name: "Oregon",
      //       },
      //       {
      //         postal_code: "CT",
      //         location_quotient: 1.05,
      //         name: "Connecticut",
      //       },
      //       {
      //         postal_code: "WI",
      //         location_quotient: 1.05,
      //         name: "Wisconsin",
      //       },
      //       {
      //         postal_code: "IL",
      //         location_quotient: 1.04,
      //         name: "Illinois",
      //       },
      //       {
      //         postal_code: "UT",
      //         location_quotient: 1.04,
      //         name: "Utah",
      //       },
      //       {
      //         postal_code: "PA",
      //         location_quotient: 1.03,
      //         name: "Pennsylvania",
      //       },
      //       {
      //         postal_code: "TX",
      //         location_quotient: 1.01,
      //         name: "Texas",
      //       },
      //       {
      //         postal_code: "KS",
      //         location_quotient: 0.94,
      //         name: "Kansas",
      //       },
      //       {
      //         postal_code: "AZ",
      //         location_quotient: 0.92,
      //         name: "Arizona",
      //       },
      //       {
      //         postal_code: "NV",
      //         location_quotient: 0.92,
      //         name: "Nevada",
      //       },
      //       {
      //         postal_code: "DE",
      //         location_quotient: 0.89,
      //         name: "Delaware",
      //       },
      //       {
      //         postal_code: "NE",
      //         location_quotient: 0.89,
      //         name: "Nebraska",
      //       },
      //       {
      //         postal_code: "FL",
      //         location_quotient: 0.88,
      //         name: "Florida",
      //       },
      //       {
      //         postal_code: "NJ",
      //         location_quotient: 0.86,
      //         name: "New Jersey",
      //       },
      //       {
      //         postal_code: "MD",
      //         location_quotient: 0.84,
      //         name: "Maryland",
      //       },
      //       {
      //         postal_code: "MI",
      //         location_quotient: 0.84,
      //         name: "Michigan",
      //       },
      //       {
      //         postal_code: "WV",
      //         location_quotient: 0.84,
      //         name: "West Virginia",
      //       },
      //       {
      //         postal_code: "GA",
      //         location_quotient: 0.82,
      //         name: "Georgia",
      //       },
      //       {
      //         postal_code: "NY",
      //         location_quotient: 0.81,
      //         name: "New York",
      //       },
      //     ],
      //   },
      //   below_average: {
      //     state: [
      //       {
      //         postal_code: "MS",
      //         location_quotient: 0.79,
      //         name: "Mississippi",
      //       },
      //       {
      //         postal_code: "MO",
      //         location_quotient: 0.79,
      //         name: "Missouri",
      //       },
      //       {
      //         postal_code: "IA",
      //         location_quotient: 0.77,
      //         name: "Iowa",
      //       },
      //       {
      //         postal_code: "NM",
      //         location_quotient: 0.77,
      //         name: "New Mexico",
      //       },
      //       {
      //         postal_code: "LA",
      //         location_quotient: 0.73,
      //         name: "Louisiana",
      //       },
      //       {
      //         postal_code: "OK",
      //         location_quotient: 0.73,
      //         name: "Oklahoma",
      //       },
      //       {
      //         postal_code: "KY",
      //         location_quotient: 0.68,
      //         name: "Kentucky",
      //       },
      //       {
      //         postal_code: "AR",
      //         location_quotient: 0.64,
      //         name: "Arkansas",
      //       },
      //       {
      //         postal_code: "OH",
      //         location_quotient: 0.61,
      //         name: "Ohio",
      //       },
      //       {
      //         postal_code: "IN",
      //         location_quotient: 0.59,
      //         name: "Indiana",
      //       },
      //       {
      //         postal_code: "TN",
      //         location_quotient: 0.59,
      //         name: "Tennessee",
      //       },
      //       {
      //         postal_code: "VI",
      //         location_quotient: 0.58,
      //         name: "Virgin Islands",
      //       },
      //       {
      //         postal_code: "MN",
      //         location_quotient: 0.56,
      //         name: "Minnesota",
      //       },
      //     ],
      //   },
      // },
      explore_more: {
        careers: {
          career: [
            {
              code: "17-3022.00",
              title: "Civil Engineering Technologists & Technicians",
              tags: {
                bright_outlook: false,
                green: false,
                apprenticeship: false,
              },
            },
            {
              code: "47-4011.00",
              title: "Construction & Building Inspectors",
              tags: {
                bright_outlook: false,
                green: false,
                apprenticeship: true,
              },
            },
            {
              code: "11-9021.00",
              title: "Construction Managers",
              tags: {
                bright_outlook: true,
                green: false,
                apprenticeship: false,
              },
            },
            {
              code: "17-2051.01",
              title: "Transportation Engineers",
              tags: {
                bright_outlook: true,
                green: false,
                apprenticeship: false,
              },
            },
            {
              code: "17-2051.02",
              title: "Water/Wastewater Engineers",
              tags: {
                bright_outlook: true,
                green: false,
                apprenticeship: false,
              },
            },
          ],
        },
        industries: {
          soc_code: "17-2051",
          industry: [
            {
              percent_employed: 54,
              code: 54,
              title: "Professional, Science, & Technical",
            },
            {
              percent_employed: 25,
              code: 93,
              title: "Government",
            },
            {
              percent_employed: 13,
              code: 23,
              title: "Construction",
            },
          ],
        },
      },
      // where_do_they_work: {
      //   industry: [
      //     {
      //       href: "https://services.onetcenter.org/ws/mnm/browse/54",
      //       percent_employed: 54,
      //       code: 54,
      //       title: "Professional, Science, & Technical",
      //     },
      //     {
      //       href: "https://services.onetcenter.org/ws/mnm/browse/93",
      //       percent_employed: 25,
      //       code: 93,
      //       title: "Government",
      //     },
      //     {
      //       href: "https://services.onetcenter.org/ws/mnm/browse/23",
      //       percent_employed: 13,
      //       code: 23,
      //       title: "Construction",
      //     },
      //   ],
      // },
    },
  ]);
  return (
    <div className="flex flex-col items-center justify-center space-y-12 p-12">
      <h1 className="text-4xl font-bold">Careers</h1>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {careers.map((career) => (
          <CareerCard key={career.code} career={career} />
        ))}
      </div>
    </div>
  );
}
