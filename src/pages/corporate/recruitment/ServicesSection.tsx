import { Button } from "@/components/ui/button";
import ServiceCard from "../../../components/ui/ServiceCard";
import { motion } from "framer-motion";
import {
  Code,
  Users,
  UserPlus,
  Brain,
  Calendar,
  FileCheck,
  GraduationCap,
  LineChart,
  UsersRound,
  Map,
  MessageSquare,
  BookOpen,
  Briefcase,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useMediaQuery } from "react-responsive";

const ServicesSection = () => {
  const carouselRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const [itemsPerView, setItemsPerView] = useState(3);

  // Update items per view based on screen size
  useEffect(() => {
    if (isMobile) {
      setItemsPerView(1);
    } else if (isTablet) {
      setItemsPerView(2);
    } else {
      setItemsPerView(3);
    }
  }, [isMobile, isTablet]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: <Code />,
      title: "Technical Hiring",
      description:
        "Access pre-screened tech professionals for IT, software, engineering & data roles.",
    },
    {
      icon: <Users />,
      title: "Bulk Hiring",
      description:
        "Need to grow your workforce fast? We handle high-volume hiring with speed and scale.",
    },
    {
      icon: <UserPlus />,
      title: "Leadership Hiring",
      description:
        "From CXOs to VPs, our executive search team secures proven leaders aligned to your vision.",
    },
    {
      icon: <Brain />,
      title: "Behavioral & Culture Fit Assessments",
      description:
        "Hire candidates who fit your company's mindset, not just the role.",
    },
    {
      icon: <Calendar />,
      title: "Project-Based Hiring",
      description:
        "Flexible staffing for contract or short-term business needs.",
    },
    {
      icon: <FileCheck />,
      title: "RPO Services",
      description:
        "Outsource your hiring engine to us for end-to-end recruitment management.",
    },
    {
      icon: <GraduationCap />,
      title: "Campus Hiring",
      description:
        "Engage, assess, and recruit young talent through structured college hiring programs.",
    },
    {
      icon: <LineChart />,
      title: "Psychometric Testing",
      description:
        "Use data-driven assessments to evaluate candidate fit and soft skills.",
    },
    {
      icon: <UsersRound />,
      title: "Diversity Hiring",
      description:
        "Inclusive recruitment strategies that reflect your values and expand your reach.",
    },
    {
      icon: <Map />,
      title: "Talent Mapping",
      description:
        "Gain insights into hiring trends, salary benchmarks, and competitor talent pools.",
    },
    {
      icon: <MessageSquare />,
      title: "Interview-as-a-Service",
      description:
        "Streamline interview processes with our expert-managed panels and systems.",
    },
    {
      icon: <BookOpen />,
      title: "Pre-Onboarding Support",
      description:
        "Get candidates job-ready with essential training before their first day.",
    },
  ];

  return (
    <section id="services" className="section py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-white z-0"></div>
      {/* <div className="absolute left-0 top-0 w-64 h-64 bg-gradient-to-br from-red-100 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div> */}
      {/* <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tl from-red-100 to-transparent rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div> */}

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center items-center">
              {/* <div className="bg-red-600 rounded-full p-3 shadow-lg shadow-red-200">
                <Briefcase className="text-white" size={28} />
              </div> */}
              <div className="bg-corporate-secondary text-white w-16 h-16 rounded-[25px] mx-auto mb-4 flex items-center justify-center transform rotate-6">
                <Briefcase size={32} />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-corporate-black">
              Services We Offer
            </h2>
            <p className="text-corporate-grey max-w-3xl mx-auto">
              At Rareminds, we provide precision recruitment solutions tailored
              for fast-growing companies, enterprise teams, and industry
              leaders.
            </p>
            {/* <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-6 rounded-full"></div> */}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Carousel
            ref={carouselRef}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4 pb-5">
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full p-2">
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      className="border-none h-full bg-corporate-accent shadow-[0_4px_6px_-4px_#F1CF54] hover:shadow-[0_4px_6px_-4px_#F1CF54,0_10px_15px_-3px_#F1CF5466] transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-3">
              <CarouselPrevious className=" translate-y-0 mr-2 bg-corporate-primary/10 border-corporate-primary text-corporate-primary hover:bg-corporate-primary hover:text-white" />
              <CarouselNext className=" translate-y-0 ml-2 bg-corporate-primary/10 border-corporate-primary text-corporate-primary hover:bg-corporate-primary hover:text-white" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link to="/contact-us">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-corporate-secondary hover:bg-red-700 text-white shadow-lg shadow-red-200 hover:shadow-red-300/50 transition-all duration-300"
            >
              Try us on your toughest role
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
