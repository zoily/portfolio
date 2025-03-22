export interface Experience {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
}

export interface Education {
  startDate: string;
  endDate: string;
  degree: string;
  school: string;
  location: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}
