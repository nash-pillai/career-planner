export interface Career {
  title: string;
  description: string;
  salary: number;
  company: string;
  education: string;
  industry: string;
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
