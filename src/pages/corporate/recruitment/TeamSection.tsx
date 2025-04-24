import { motion } from "framer-motion";
import { LinkedinIcon, Users, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "RONNIE Poulose",
    photo: "/images/corporate/recruitment/team/Ronnie.webp",
    designation: "Head of Recruitment, BD & Delivery",
    linkedin: "https://www.linkedin.com/in/ronniepoulose/",
    mission: "Building future-ready teams through strategic hiring",
    bg: "bg-[#D0F0C0]",
  },
  {
    name: "Sudha Subramaniam",
    photo: "/images/corporate/recruitment/team/Sudha.webp",
    designation: "HR Consultant",
    linkedin: "https://www.linkedin.com/in/sudha-subramaniam-75a6b0124/",
    mission: "Fostering inclusive workplaces through thoughtful recruitment",
    bg: "bg-[#EFDECD]",
  },
  {
    name: "Rohit Bhandiye",
    photo: "/images/corporate/recruitment/team/Rohit.webp",
    designation: "Senior Recruiter",
    linkedin: "https://www.linkedin.com/in/rohit-bhandiye-267a0719/",
    mission: "Empowering organizations with top-tier talent solutions",
    bg: "bg-[#FFE789]",
  },
  {
    name: "Subiksha Karthikeyan",
    photo: "/images/corporate/recruitment/team/Subiksha.webp", // You can replace with actual photo path
    designation: "Talent Acquisition Executive",
    linkedin: "https://www.linkedin.com/in/subiksha-k/",
    mission: "Connecting exceptional talent with transformative opportunities",
    bg: "bg-[#BFBFFF]",
  },
  {
    name: "Varalakshmi M",
    photo: "/images/corporate/recruitment/team/Varalakshmi.webp",
    designation: "Recruitment Executive",
    linkedin: "https://www.linkedin.com/in/varalakshmi-m-183001278/",
    mission: "Bridging talent gaps with precision and expertise",
    bg: "bg-[#E3DCD4]",
  },
];

const TeamSection = () => {
  return (
    <section className="py-[160px] relative overflow-hidden object-none object-bottom bg-no-repeat">
      {/* Background elements */}
      {/* <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-b from-red-100 to-transparent rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-gradient-to-t from-red-100 to-transparent rounded-full opacity-50 blur-3xl"></div> */}
      <div className="absolute flex w-full h-[100%] bg-[url(/images/corporate/recruitment/team-bg.webp)] opacity-5"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-4">
            <div className="bg-corporate-secondary text-white w-16 h-16 rounded-[25px] mx-auto mb-4 flex items-center justify-center transform rotate-6">
              <Users className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-corporate-black">
            Meet the Minds Behind Rareminds
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group row-span-4 ${index % 2 == 1 ? "row-start-2" : "row-start-1"}`}
            >
              <div
                className={`relative ${member.bg} rounded-full flex flex-col h-[500px] overflow-hidden group`}
              >
                <div className="p-5 flex flex-col">
                  <p className="text-lg font-bold text-center mt-10">
                    {member.name.toUpperCase()}
                  </p>
                  <p className="mt-1 text-center">{member.designation}</p>
                  <Link
                    to={member.linkedin}
                    target="_blank"
                    className="text-center mt-2 w-min mx-auto"
                  >
                    <div className="bg-[#1F2937] w-min rounded-full p-3 mt-5 ">
                      <Linkedin className="text-white" />
                    </div>
                  </Link>
                </div>

                <div
                  className={`absolute ${index == 1 ? "bottom-[-60px]" : "bottom-[-100px]"} scale-150`}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="lg:grayscale lg:group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
