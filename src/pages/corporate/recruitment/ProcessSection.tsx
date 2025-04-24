import { useState } from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  Map,
  Search,
  CalendarCheck,
  CheckCircle,
  BarChart,
  CircleDot,
  SquaresExclude,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const steps = [
  {
    icon: <Headphones className="text-white" size={24} />,
    number: "1",
    title: "Understand Your Need",
    description:
      "We start by listening. Our team collaborates with your hiring managers to understand your business goals, role expectations, team dynamics, and success metrics.",
    details: [
      "In-depth discovery sessions with stakeholders",
      "Understanding of company culture and team dynamics",
      "Detailed role analysis beyond the job description",
      "Establishment of clear success metrics and timelines",
    ],
  },
  {
    icon: <Map className="text-white" size={24} />,
    number: "2",
    title: "Map the Market",
    description:
      "We conduct real-time talent market analysis to benchmark roles, identify top talent pools, and refine the ideal candidate profile.",
    details: [
      "Comprehensive salary benchmarking data",
      "Competitive landscape analysis",
      "Identification of target companies and talent pools",
      "Candidate persona development",
    ],
  },
  {
    icon: <Search className="text-white" size={24} />,
    number: "3",
    title: "Source & Screen Talent",
    description:
      "Leveraging AI tools, niche networks, and our deep recruiter expertise, we source the best candidates and rigorously screen them for technical, cultural, and behavioral fit.",
    details: [
      "Multi-channel sourcing strategy",
      "AI-powered candidate identification",
      "Rigorous technical and cultural screening",
      "Behavioral assessment alignment",
    ],
  },
  {
    icon: <CalendarCheck className="text-white" size={24} />,
    number: "4",
    title: "Interview Coordination",
    description:
      "We streamline the interview process — from scheduling to prep support — ensuring a smooth experience for both candidates and your internal teams.",
    details: [
      "End-to-end interview logistics management",
      "Candidate preparation and briefing",
      "Interviewer guidance and support",
      "Real-time feedback collection",
    ],
  },
  {
    icon: <CheckCircle className="text-white" size={24} />,
    number: "5",
    title: "Final Selection & Offer Support",
    description:
      "We guide you through the offer stage with market-aligned salary insights, candidate expectation alignment, and closing strategies that reduce drop-offs.",
    details: [
      "Salary negotiation guidance",
      "Candidate expectation management",
      "Offer letter preparation assistance",
      "Streamlined acceptance process",
    ],
  },
  {
    icon: <BarChart className="text-white" size={24} />,
    number: "6",
    title: "Post-Onboarding Feedback",
    description:
      "Our process doesn't end at hiring. We stay engaged with clients and candidates during onboarding to ensure satisfaction, retention, and long-term success.",
    details: [
      "30/60/90 day check-ins",
      "Hiring manager satisfaction surveys",
      "New employee feedback collection",
      "Continuous improvement recommendations",
    ],
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState("1");

  return (
    <section id="process" className="py-16 relative overflow-hidden">
      {/* Background design elements */}
      {/* <div className="absolute top-0 left-1/3 w-1/3 h-1/3 bg-gradient-to-b from-red-100 to-transparent rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-1/4 h-1/4 bg-gradient-to-t from-red-100 to-transparent rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-1/5 h-1/5 bg-gradient-to-l from-red-100 to-transparent rounded-full opacity-40 blur-3xl transform -translate-y-1/2"></div> */}

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center mb-4">
            <div className="bg-corporate-secondary text-white w-16 h-16 rounded-[25px] mx-auto mb-4 flex items-center justify-center transform rotate-6">
              <SquaresExclude className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-corporate-black">
            Our Process, Your Peace of Mind
          </h2>
          <p className="text-corporate-grey max-w-3xl mx-auto text-lg">
            At Rareminds, we believe a great hire is not a coincidence — it's
            the outcome of a structured, insight-driven, and human-centric
            process. Here's how we ensure the right fit, every time:
          </p>
        </motion.div>

        {/* Mobile Process View - Stacked Cards */}
        <div className="lg:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mb-6 relative"
            >
              {index < steps.length - 1 && (
                <div className="absolute top-full left-6 w-1 h-10 bg-gradient-to-b from-red-500 to-transparent z-0"></div>
              )}

              <Card className="overflow-hidden border-none shadow-lg bg-white">
                <div className="bg-gradient-to-r from-red-500 to-red-700 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/90">
                      Step {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  <div className="space-y-2">
                    {step.details.slice(0, 2).map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="mt-1.5 min-w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                        </div>
                        <p className="text-gray-700 text-sm">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Process View - Tabs Interface */}
      {/* <img
        src="/images/corporate/recruitment/process/bg-cloud.webp"
        alt="Process Section"
        className="hidden lg:block w-full h-auto mb-12"
      /> */}
      <div className="hidden lg:block relative h-screen">
        <img
          src="/images/corporate/recruitment/process/bg.webp"
          alt="Clouds"
          width={1920}
          height={1080}
          className="absolute top-0 h-full w-full"
        />
        <img
          src="/images/corporate/recruitment/process/clouds.webp"
          alt="Clouds"
          width={1920}
          height={186}
          className="absolute top-0 rotate-180"
        />
        <img
          src="/images/corporate/recruitment/process/clouds.webp"
          alt="Clouds"
          width={1920}
          height={186}
          className="absolute bottom-0"
        />
      </div>
    </section>
  );
};

export default ProcessSection;
