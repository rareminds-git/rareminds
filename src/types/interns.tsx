export interface Intern {
    id: number;
    fullName: string;
    company: string;
    skill: string;
    university: string;
    districtCollegeName: string;
  }
  
  export interface Job {
    title: string;
    description: string;
  }
  
  export interface Company {
    id: number;
    clientName: string;
    industry: string;
    positionHired?: string; // Optional if not always provided
    location: string;
    logo: string;
    jobs: Job[]; // Updated type
  }