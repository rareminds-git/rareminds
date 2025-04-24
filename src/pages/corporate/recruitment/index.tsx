import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import WhyRareminds from "./whyRm/WhyRareminds";
import ServicesSection from "./ServicesSection";
import IndustriesSection from "./IndustriesSection";
import TestimonialsSection from "./TestimonialsSection";
import CaseStudiesSection from "./CaseStudiesSection";
import ProcessSection from "./ProcessSection";
import ContactSection from "./ContactSection";
import TeamSection from "./TeamSection";

const RecruitmentPage = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible =
          rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;

        if (isVisible) {
          el.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div>
        <HeroSection />
        <div id="why-rareminds">
          <WhyRareminds />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="industries">
          <IndustriesSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="case-studies">
          <CaseStudiesSection />
        </div>
        <div id="process">
          <ProcessSection />
        </div>
        <div id="team">
          <TeamSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default RecruitmentPage;
