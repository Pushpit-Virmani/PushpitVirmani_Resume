export interface WorkExpItem {
  id: number;
  company: {
    name: string;
    url?: string;
  };
  designation: string;
  startDate: Date;
  endDate?: Date;
  contributions: string[];
}
