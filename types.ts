export interface CareerListing {
  code: string;
  title: string;
  tags: {
    bright_outlook: boolean;
    green: boolean;
    apprenticeship: boolean;
  };
}

export interface MatchingCareer extends CareerListing {
  fit: "Best" | "Great" | "Good";
}

export interface CareerGroup {
  title: {
    id: string;
    name: string;
  };
  element: {
    id: string;
    name: string;
  }[];
}

export interface FullCareer {
  code: string;
  career: CareerListing & {
    also_called: {
      title: string[];
    };
    what_they_do: string;
    on_the_job: {
      task: string[];
    };
  };
  knowledge: {
    group: CareerGroup[];
  };
  skills: {
    group: CareerGroup[];
  };
  abilities: {
    group: CareerGroup[];
  };
  personality: {
    top_interest: {
      id: string;
      title: string;
      description: string;
    };
    work_styles: {
      element: CareerGroup["element"];
    };
  };
  technology: {
    category: {
      unspsc: number;
      title: {
        name: string;
      };
      example: {
        hot_technology: string;
        name: string;
      }[];
    }[];
  };
  education: {
    job_zone: number;
    education_usually_needed: {
      category: (
        | "no high school diploma/GED"
        | "high school diploma/GED"
        | "certificate after high school"
        | "some college"
        | "associate's degree"
        | "bachelor's degree"
        | "certificate after college"
        | "master's degree"
        | "certificate after master's"
        | "professional degree"
        | "doctoral degree"
        | "post-doctoral training"
      )[];
    };
  };
  job_outlook: {
    salary: {
      soc_code: string;
      annual_10th_percentile: number;
      annual_median: number;
      annual_90th_percentile: number;
      hourly_10th_percentile: number;
      hourly_median: number;
      hourly_90th_percentile: number;
    };
  } & (
    | {
        outlook: {
          description: string;
          category: "Average" | "Below Average";
        };
      }
    | {
        outlook: {
          description: string;
          category: "Bright";
        };
        bright_outlook: {
          description: string;
          category: ("Grow Rapidly" | "Openings" | "New & Emerging")[];
        };
      }
  );
  // check_out_my_state
  explore_more: {
    careers: {
      career: CareerListing[];
    };
    industries: {
      soc_code: string;
      industry: {
        percent_employed: number;
        code: number;
        title: string;
      }[];
    };
  };
  // where_do_they_work
}

export interface Course {
  name: string;
  description: string;
  credits: number;
  weight: number;
  recommendedGrades: number[];
  prerequisites: string[];
  department: string;
}

export type PersonalityArea =
  | "Realistic"
  | "Investigative"
  | "Artistic"
  | "Social"
  | "Enterprising"
  | "Conventional";
