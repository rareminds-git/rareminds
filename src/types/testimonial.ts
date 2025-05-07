
export interface TestimonialQuote {
  title: string;
  quote: string;
  author: string;
}

export interface Testimonial {
  img: string;
  trainer: TestimonialQuote;
  student: TestimonialQuote;
}
