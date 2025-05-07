
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { testimonials } from "@/constants/testimonials";
import { TestimonialImages } from "./partnerships/TestimonialImages";
import { SectionHeader } from "./partnerships/SectionHeader";
import { TestimonialContent } from "./partnerships/TestimonialContent";
import { CarouselNavigation } from "./partnerships/CarouselNavigation";

export const PartnershipsSection: React.FC = () => {
  const [idx, setIdx] = React.useState(0);
  const testimonial = testimonials[idx];

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-transparent" id="partnerships">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        <SectionHeader />

        <div className="w-full rounded-[20px] sm:rounded-[28px] md:rounded-[36px] p-4 sm:p-6 md:p-10 lg:p-14 flex flex-col md:flex-row gap-6 sm:gap-8 bg-[linear-gradient(110deg,_#d3dafe_0%,_#e3e4ee_50%,_#b8eefc_100%)] shadow-lg">
          <TestimonialImages testimonials={testimonials} currentIndex={idx} />

          <AnimatePresence mode="wait">
            <TestimonialContent
              trainer={testimonial.trainer}
              student={testimonial.student}
            />
          </AnimatePresence>
        </div>

        <CarouselNavigation
          currentIndex={idx}
          totalItems={testimonials.length}
          onPrevious={() => setIdx((prev) => Math.max(0, prev - 1))}
          onNext={() => setIdx((prev) => Math.min(testimonials.length - 1, prev + 1))}
        />
      </div>
    </section>
  );
};
