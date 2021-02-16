export interface EducationalQualification {
  title: string;
  score: string;
  year: number;
}

export interface Education {
  id: number;
  instituteName: string;
  url?: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  qualifications: EducationalQualification[];
}
