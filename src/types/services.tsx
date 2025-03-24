export interface Service {
  id: number;
  title: string;
  heading: string;
  points: string[];
  h2: string;
  description: string;
  //   whyChooseUs: string;
}

export interface ServicesState {
  services: Service[];
}
