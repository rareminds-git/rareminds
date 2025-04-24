import { motion } from "framer-motion";
import {
  ShieldCheck,
  UsersRound,
  Factory,
  Clock,
  Building2,
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhyRareminds = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

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

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
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

        {/* Main Stats with Modern Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
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
      {/*  Metrics Grid with Modern Design */}
      <div className="mt-[100px]">
        <img
          src="/images/corporate/recruitment/matrics-bg.webp"
          width={1920}
          height={1080}
          alt="road image"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default WhyRareminds;
