import { motion } from "framer-motion";
import {
  ShieldCheck,
  UsersRound,
  Factory,
  Clock,
  Building2,
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const WhyRareminds = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stats = [
    {
      icon: <UsersRound size={32} />,
      number: "5,00,000+",
      description: "Candidates Successfully Placed",
      subtext:
        "We've matched over half a million individuals with meaningful careers — and counting",
    },
    {
      icon: <Building2 size={32} />,
      number: "250+",
      description: "Hiring Partners",
      subtext:
        "Corporates across India rely on us to scale their teams efficiently and effectively.",
    },
    {
      icon: <Factory size={32} />,
      number: "20+",
      description: "Industries Served",
      subtext:
        "From IT to Manufacturing, BFSI to Healthcare — we understand your business language.",
    },
    {
      icon: <Clock size={32} />,
      number: "2x",
      description: "Faster Turnaround Time",
      subtext:
        "We don't just find talent — we deliver it at speed, without compromising quality.",
    },
  ];

  const blocks = [
    {
      src: "/images/corporate/recruitment/whyRM/role.webp",
      bottom: "10%",
      left: "10%",
      width: "w-[13%]",
      heading: "Role Closure Rate",
      description: "92% of roles closed within the first shortlist round",
    },
    {
      src: "/images/corporate/recruitment/whyRM/offer.webp",
      bottom: "18%",
      left: "23%",
      width: "w-[11%]",
      heading: "Offer Acceptance Rate",
      description: "98% candidate offer acceptance rate",
    },
    {
      src: "/images/corporate/recruitment/whyRM/csat.webp",
      bottom: "24%",
      left: "35%",
      width: "w-[9%]",
      heading: "CSAT Score",
      description:
        "Rated 4.8/5 by corporate clients for quality and communication",
    },
    {
      src: "/images/corporate/recruitment/whyRM/indian.webp",
      bottom: "29%",
      left: "47%",
      width: "w-[8%]",
      heading: "20+ states",
      description: "Pan-India reach with regional hiring in",
    },
    {
      src: "/images/corporate/recruitment/whyRM/brands.webp",
      bottom: "24%",
      left: "57%",
      width: "w-[9%]",
      heading: "20+ brands",
      description: "C-Suite hires in the past year",
    },
    {
      src: "/images/corporate/recruitment/whyRM/roles.webp",
      bottom: "18%",
      left: "67%",
      width: "w-[11%]",
      heading: "150+ Roles",
      description: "Job Families Successfully Placed",
    },
    {
      src: "/images/corporate/recruitment/whyRM/countries.webp",
      bottom: "10%",
      left: "79%",
      width: "w-[13%]",
      heading: "10 Countries",
      description: "Domestic hiring @ International Locations",
    },
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <div className="relative">
        <div className="absolute w-full h-full bg-[url('/images/corporate/recruitment/whyRM/bg.webp')] bg-center bg-fill opacity-[0.03]"></div>
        <div className="container relative z-10 px-4 mx-auto max-w-7xl pb-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto py-20"
          >
            <div className="bg-corporate-secondary text-white w-16 h-16 rounded-[25px] mx-auto mb-4 flex items-center justify-center transform rotate-6">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-corporate-black">
              Trusted. Proven. Scalable
            </h2>
            <p className="text-corporate-grey max-w-3xl mx-auto">
              We blend human expertise with data-driven insights to deliver
              recruitment that's trusted, proven, and scalable.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-[389px] h-[224px]">
                  <img
                    src="/images/corporate/recruitment/shape.webp"
                    alt="Shape"
                    width={389}
                    height={224}
                    className="absolute mb-4"
                  />
                  <div className="absolute right-0 shadow-[0_1px_10px_-2px_rgba(0,0,0,0.25)] w-[80px] h-[80px] rounded-full bg-corporate-primary flex justify-center items-center">
                    <div className="text-white w-min mx-auto">{stat.icon}</div>
                  </div>
                  <div className="absolute p-[40px] w-[389px]">
                    <h3 className="font-bold text-[36px] text-corporate-primary">
                      {stat.number}
                    </h3>
                    <p className="mt-1 max-w-[225px] text-[20px] leading-6">
                      {stat.description}
                    </p>
                    <p className="mt-2 text-[12px] text-corporate-grey">
                      {stat.subtext}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Matrics */}

      <div className="relative w-full">
        <img
          src="/images/corporate/recruitment/matrics-bg.webp"
          width={1920}
          height={1080}
          alt="road image"
          className="relative w-full h-full z-0"
        />
        <div
          className={`absolute flex inset-0 bg-black transition-all duration-300 ${hoveredIndex !== null ? "z-[3] bg-opacity-80 backdrop-blur-sm" : "z-[1] bg-opacity-0 backdrop-blur-none"}`}
        ></div>

        {blocks.map((block, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`absolute w-min ${[hoveredIndex === index ? "z-[4]" : "z-[2]"].join(" ")}`}
            style={{ bottom: block.bottom, left: block.left, width: "13%" }}
            // onMouseEnter={() => setHoveredIndex(index)}
            // onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`relative flex transition-all duration-300 ease-in-out ${[
                hoveredIndex === index ? "scale-110" : "scale-100",
                ((hoveredIndex && hoveredIndex == 2) ||
                  (hoveredIndex && hoveredIndex == 3)) &&
                  "-translate-x-[100px] lg:translate-x-0",
                hoveredIndex &&
                  hoveredIndex == 4 &&
                  "translate-x-[50px] lg:translate-x-0",
              ].join(" ")}`}
            >
              <div className="relative">
                <img
                  src={block.src}
                  alt={`block-${index}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="hover:cursor-pointer"
                />
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-max ${hoveredIndex && hoveredIndex > 3 ? "right-[100%] mr-5" : "left-[100%] ml-5"}`}
                >
                  <h3
                    className={`text-white md:text-2xl max-w-[200px] md:max-w-[350px] lg:text-4xl lg:max-w-[400px] font-semibold lg:font-bold transition-all duration-300 ease-in-out ${[
                      hoveredIndex === index ? "opacity-100" : "opacity-0",
                      hoveredIndex && hoveredIndex > 3
                        ? "text-right"
                        : "text-left",
                    ].join(" ")}`}
                  >
                    {block.description}
                  </h3>
                  {/* <p
                    className={`text-white text-[16px] transition-all duration-300 ease-in-out max-w-[500px] ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {block.description}
                  </p> */}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyRareminds;
