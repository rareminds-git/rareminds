import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Award,
  CheckCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const caseStudies = [
  {
    title: "Park Controls and Communication (PCC)",
    subtitle: "Three Critical Hires, One Seamless Strategy",
    client:
      "Park Controls and Communication (PCC) – a precision engineering company requiring fast-track recruitment.",
    challenge:
      "PCC urgently needed to close three vital positions: Jr. Secretarial Assistant, Sr. Secretarial, and Technical Assistant with project-critical deadlines.",
    solution: [
      "Mobilized our trained candidate network within 24 hours.",
      "Conducted focused assessments and aligned panel interviews swiftly.",
      "Ensured offers were rolled out to all three candidates by 10th Feb 2025.",
    ],
    outcomes: [
      "All 3 positions joined within 40 days",
      "100% offer-to-join ratio",
      "Positions filled without compromising quality or timelines",
    ],
    testimonial:
      "The Rareminds team was exceptionally agile. They understood our requirement and delivered not just fast, but right.",
    author: "HR Lead, PCC",
  },
  {
    title: "Plastic for Change (PFC)",
    subtitle: "Niche Hire for a Mission-Driven Role in Under 30 Days",
    client:
      "Plastic for Change (PFC) – a sustainability-focused organization with unique talent needs.",
    challenge:
      "Find and onboard a Manager – BD (Merchandise) who aligned with sustainability, had ethical sales experience, and could grow mission-driven merchandise.",
    solution: [
      "Activated outreach to candidates from social impact networks and green startups.",
      "Screened for cultural fit, sales experience, and mission-alignment.",
      "Concluded all interviews and offer processes by 10th July 2024.",
    ],
    outcomes: [
      "27 days from JD to Joining",
      "Boosted BD outreach by 20% within the first month",
      "Elevated brand trust with the right face representing their cause",
    ],
    testimonial:
      "For a role that needed both heart and hustle, Rareminds delivered someone perfect.",
    author: "CEO, PFC",
  },
];

const CaseStudiesSection = () => {
  return (
    <section
      id="case-studies"
      className="section py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTE2IDI0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="container px-5 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="bg-corporate-secondary text-white w-16 h-16 rounded-[25px] mx-auto mb-4 flex items-center justify-center transform rotate-6">
            <Award size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-corporate-black">
            Proven Impact, Delivered
          </h2>
          <p className="text-corporate-grey max-w-3xl mx-auto text-lg">
            Real stories. Real results. See how our recruitment solutions
            transform businesses.
          </p>
        </motion.div>

        <Carousel className="w-full">
          <CarouselContent>
            {caseStudies.map((currentCase, idx) => (
              <CarouselItem key={`case-${idx}`}>
                <div className="bg-white rounded-3xl overflow-hidden border border-corporate-primary/40 ">
                  <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[70vh]">
                    {/* Left Panel - Image & Stats */}
                    <div className="bg-gradient-to-br from-corporate-primary-light to-corporate-primary text-corporate-black p-8 flex flex-col justify-between">
                      <div>
                        <motion.div
                          key={`case-title-${idx}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="mb-8"
                        >
                          <h3 className="text-2xl font-bold mb-2 flex items-center">
                            <span className="mr-2 bg-white min-w-8 min-h-8 rounded-full flex items-center justify-center text-corporate-secondary">
                              {idx + 1}
                            </span>
                            {currentCase.title}
                          </h3>
                          <p className="">{currentCase.subtitle}</p>
                        </motion.div>

                        <div className="space-y-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <TrendingUp size={24} className="mb-2" />
                            <h4 className="font-semibold mb-1">Key Outcomes</h4>
                            <ul className="space-y-2">
                              {currentCase.outcomes.map((outcome, i) => (
                                <motion.li
                                  key={`outcome-${idx}-${i}`}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                  className="flex items-start gap-2"
                                >
                                  <CheckCheck
                                    size={18}
                                    className="mt-1 flex-shrink-0"
                                  />
                                  <span className="text-sm">{outcome}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <blockquote className="border-l-4 border-s-corporate-secondary pl-4 italic">
                          "{currentCase.testimonial}"
                        </blockquote>
                        <p className="text-right text-sm mt-2">
                          — {currentCase.author}
                        </p>
                      </div>
                    </div>

                    {/* Right Panel - Case Study Details */}
                    <div className="col-span-2 p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                        <div className="space-y-6">
                          <motion.div
                            key={`client-${idx}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-corporate-accent p-6 rounded-xl border border-corporate-primary-light/20"
                          >
                            <h4 className="text-corporate-black font-bold mb-3 flex items-center gap-2">
                              <span className="bg-corporate-secondary/10 p-2 mr-1 rounded-lg">
                                👥
                              </span>
                              Client
                            </h4>
                            <p className="text-gray-700">
                              {currentCase.client}
                            </p>
                          </motion.div>

                          <motion.div
                            key={`challenge-${idx}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="bg-corporate-accent p-6 rounded-xl border border-corporate-primary-light/20"
                          >
                            <h4 className="text-corporate-black font-bold mb-3 flex items-center gap-2">
                              <span className="bg-corporate-secondary/10 p-2 mr-1 rounded-lg">
                                🎯
                              </span>
                              Challenge
                            </h4>
                            <p className="text-gray-700">
                              {currentCase.challenge}
                            </p>
                          </motion.div>
                        </div>

                        <motion.div
                          key={`solution-${idx}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="bg-corporate-accent p-6 rounded-xl flex flex-col justify-between h-full border border-corporate-primary-light/20"
                        >
                          <div>
                            <h4 className="text-corporate-black font-bold mb-3 flex items-center gap-2">
                              <span className="bg-corporate-secondary/10 p-2 mr-1 rounded-lg">
                                ⚙️
                              </span>
                              Rareminds Solution
                            </h4>
                            <ul className="space-y-3 mt-5">
                              {currentCase.solution.map((step, i) => (
                                <li
                                  key={`solution-${idx}-${i}`}
                                  className="flex items-start gap-3"
                                >
                                  <CheckCircle
                                    className="text-corporate-secondary mt-1 flex-shrink-0"
                                    size={18}
                                  />
                                  <span className="text-gray-700">{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* <div className="mt-6">
                            <Button className="bg-corporate-secondary hover:bg-corporate-secondary/90 text-white">
                              Read Full Case Study{" "}
                              <ArrowRight size={16} className="ml-2" />
                            </Button>
                          </div> */}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static translate-y-0 mr-4 bg-corporate-primary/20 border-corporate-primary text-corporate-primary hover:bg-corporate-primary hover:text-white" />
            <CarouselNext className="static translate-y-0 ml-4 bg-corporate-primary/20 border-corporate-primary text-corporate-primary hover:bg-corporate-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
