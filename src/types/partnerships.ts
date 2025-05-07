
import { TestimonialQuote } from "./testimonial";

export interface TestimonialCarouselProps {
  currentIndex: number;
  totalItems: number;
  onPrevious: () => void;
  onNext: () => void;
}

export interface TestimonialCardsProps {
  trainer: TestimonialQuote;
  student: TestimonialQuote;
}
