import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ChevronDown } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import "../../../assets/css/heroHeight.css";

const SLIDES = [
  {
    img: "/images/corporate/recruitment/Your-Toughest-Role.webp",
    headline: "Your Toughest Role? Filled Faster Than You’d Believe",
    subheadline:
      "From CXOs to coders — precision hiring that drives business outcomes",
  },
  {
    img: "/images/corporate/recruitment/Dont-Just-Hire.webp",
    headline: "Don’t Just Hire. Build High-Performing Teams",
    subheadline:
      "Smart, scalable recruitment solutions trusted by 250+ corporates",
  },
  {
    img: "/images/corporate/recruitment/When-Time-to-Hire-Matters.webp",
    headline: "When Time-to-Hire Matters, So Does Who You Hire With",
    subheadline:
      "Rareminds delivers role-fit talent with speed, accuracy, and accountability",
  },
  {
    img: "/images/corporate/recruitment/Yours-Could-Be-Next.webp",
    headline: "500+ Critical Roles Closed This Quarter. Yours Could Be Next",
    subheadline:
      "Partner with the recruitment team built for performance and outcomes",
  },
  {
    img: "/images/corporate/recruitment/From-Bulk-to-Boardroom.webp",
    headline: "From Bulk to Boardroom — One Partner. Zero Compromise",
    subheadline:
      "Technical hiring, leadership search, and everything in between — done right",
  },
];

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    // Auto slide every 10 seconds
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 10000);

    // Track current slide
    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative heroHeight overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={emblaRef} className="overflow-hidden w-full">
          <div className="flex  bg-cover bg-center bg-no-repeat">
            {SLIDES.map((slide, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] relative h-full flex justify-center items-center heroHeight bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="absolute w-full h-full bg-black/20"></div>
                <div className=" relative z-10 text-white px-4">
                  <div className="max-w-3xl mx-auto text-center">
                    <div
                      className={`transition-all duration-700 ${currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    >
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        {slide.headline}
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-gray-100">
                        {slide.subheadline}
                      </p>
                      <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                        <Button
                          onClick={() => scrollToSection("contact")}
                          size="lg"
                          className="bg-corporate-secondary hover:bg-corporate-secondary/80 text-white"
                        >
                          Request Talent Now
                        </Button>
                        <Button
                          onClick={() => scrollToSection("services")}
                          size="lg"
                          variant="outline"
                          className="border-white hover:bg-white hover:text-corporate-secondary"
                        >
                          Explore Our Solutions
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel navigation dots */}
        <div className="absolute bottom-[100px] left-0 right-0 flex justify-center gap-2 z-10">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-corporate-secondary w-6"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 mx-auto animate-bounce cursor-pointer z-20"
          onClick={() => scrollToSection("why-rareminds")}
        >
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-1">Scroll Down</span>
            <ChevronDown className="text-white h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
