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
import ProcessSVG from "@/assets/corporate/home/process/process";
import ProcessSVGMob from "@/assets/corporate/home/process/processMobile";

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
  // const [activeStep, setActiveStep] = useState("1");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const process = [
    {
      description: "",
      x: "left-[10%]",
      y: "top-[10%]",
      width: "w-[13%]",
    },
    {
      description: "",
      x: "left-[10%]",
      y: "top-[10%]",
      width: "w-[13%]",
    },
    {
      description: "",
      x: "left-[10%]",
      y: "top-[10%]",
      width: "w-[13%]",
    },
    {
      description: "",
      x: "left-[10%]",
      y: "top-[10%]",
      width: "w-[13%]",
    },
    {
      description: "",
      x: "left-[10%]",
      y: "top-[10%]",
      width: "w-[13%]",
    },
    {
      description: "",
      x: "left-[10%]",
      y: "top-[10%]",
      width: "w-[13%]",
    },
  ];

  return (
    <section
      id="process"
      className="py-16 relative overflow-hidden min-h-screen"
    >
      {/* Background design elements */}
      {/* <div className="absolute top-0 left-1/3 w-1/3 h-1/3 bg-gradient-to-b from-red-100 to-transparent rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-1/4 h-1/4 bg-gradient-to-t from-red-100 to-transparent rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-1/5 h-1/5 bg-gradient-to-l from-red-100 to-transparent rounded-full opacity-40 blur-3xl transform -translate-y-1/2"></div> */}

      <div className="mx-auto relative z-10">
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
        <div className="lg:hidden relative">
          <img
            src="/images/corporate/recruitment/process/bg-mobile.webp"
            className="object-center w-full h-[852px]"
            width={400}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <ProcessSVGMob className="scale-[0.8] xl:scale-110" />
          </div>
        </div>
      </div>

      {/* Desktop Process View - Tabs Interface */}
      {/* <img
        src="/images/corporate/recruitment/process/bg-cloud.webp"
        alt="Process Section"
        className="hidden lg:block w-full h-auto mb-12"
      /> */}
      <div className="hidden lg:block relative">
        <img
          src="/images/corporate/recruitment/process/process-bg.webp"
          className="object-center"
          height={626}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <ProcessSVG className="scale-[0.8] xl:scale-110" />
        </div>

        {/* <img
          src="/images/corporate/recruitment/process/bg.webp"
          alt="Modern Pop art"
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

        <div className="absolute top-[14%] left-[5.1%] w-[19%] z-[2] hover:z-[11]">
          <img
            src="/images/corporate/recruitment/process/charactors/understand.webp"
            alt="Understand your need"
            className="w-full hover:scale-105 transition-all duration-300"
            height={180}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        </div>

        <div className="absolute top-[22%] left-[26.3%] w-[18%] group z-[2] hover:z-[11]">
          <img
            src="/images/corporate/recruitment/process/charactors/map.webp"
            alt="Map the market"
            className="w-full group-hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="absolute top-[27.3%] left-[47.5%] w-[26%] z-[2] hover:z-[11]">
          <img
            src="/images/corporate/recruitment/process/charactors/source.webp"
            alt="source & screen talent"
            className="w-full group-hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="absolute top-[40%] left-[68.5%] w-[26.4%] z-[2] hover:z-[11]">
          <img
            src="/images/corporate/recruitment/process/charactors/interview.webp"
            alt="interview coordination"
            className="w-full group-hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="absolute top-[66%] left-[56.8%] w-[30.4%] z-[2] hover:z-[11]">
          <img
            src="/images/corporate/recruitment/process/charactors/final.webp"
            alt="final selection & offer support"
            className="w-full"
          />
        </div>

        <div className="absolute top-[62%] left-[13.4%] w-[26%] z-[2] hover:z-[11]">
          <img
            src="/images/corporate/recruitment/process/charactors/feedback.webp"
            alt="post-onboarding feedback"
            className="w-full"
          />
        </div> */}

        {/* lines */}

        {/* <div className="absolute top-[27%] left-[13%] w-[13%]">
          <img
            src="/images/corporate/recruitment/process/lines/1.webp"
            alt="line"
            className="w-full"
          />
        </div>

        <div className="absolute top-[39.4%] left-[33%] w-[15%]">
          <img
            src="/images/corporate/recruitment/process/lines/2.webp"
            alt="line"
            className="w-full"
          />
        </div>

        <div className="absolute top-[39.4%] left-[58%] w-[10.5%]">
          <img
            src="/images/corporate/recruitment/process/lines/3.webp"
            alt="line"
            className="w-full"
          />
        </div>

        <div className="absolute top-[52.5%] left-[53.2%] w-[14.7%]">
          <img
            src="/images/corporate/recruitment/process/lines/4.webp"
            alt="line"
            className="w-full"
          />
        </div>

        <div className="absolute top-[80%] left-[40.4%] w-[14%]">
          <img
            src="/images/corporate/recruitment/process/lines/5.webp"
            alt="line"
            className="w-full"
          />
        </div> */}

        {/* clouds */}

        {/* <div className="absolute top-[33%] left-[11.8%] w-[11%]">
          <img
            src="/images/corporate/recruitment/process/clouds/1.webp"
            alt="cloud"
            className="w-full"
          />
        </div>

        <div className="absolute top-[33.1%] left-[37.2%] w-[8.4%]">
          <img
            src="/images/corporate/recruitment/process/clouds/1.webp"
            alt="cloud"
            className="w-full"
          />
        </div>

        <div className="absolute top-[45.6%] left-[55.7%] w-[8.8%] -rotate-12">
          <img
            src="/images/corporate/recruitment/process/clouds/2.webp"
            alt="cloud"
            className="w-full"
          />
        </div>

        <div className="absolute top-[73.5%] left-[42%] w-[8.8%]">
          <img
            src="/images/corporate/recruitment/process/clouds/2.webp"
            alt="cloud"
            className="w-full"
          />
        </div> */}

        {/* Cloud Desc */}
        {/* <div
          className={`absolute z-10 top-[30%] left-[9%] w-[500px] transition-all duration-300 ${[hoveredIndex == 0 ? "opacity-100" : "opacity-0"]}`}
        >
          <img
            src="/images/corporate/recruitment/process/Cloud.webp"
            alt="Understand your need"
            className="w-full drop-shadow-lg"
            height={180}
          />
          <p className="absolute top-[30%] text-corporate-grey left-[15%] w-[350px] text-center">
            We start by listening. Our team collaborates with your hiring
            managers to understand your business goals, role expectations, team
            dynamics, and success metrics.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default ProcessSection;
