import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const InstitutionServices = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });

  const services = [
    {
      id: 1,
      title: "Job Ready Training",
      description:
        "Skills that make you stand out! Learn what top companies want—AI, Digital Marketing, EV Technology, Cybersecurity, Business Strategy, and more. Our courses help you build expertise, master real-world projects, and get certified.",
    },
    {
      id: 2,
      title: "Internships & Placement Support",
      description:
        "Why wait till graduation? Get hands-on experience with internships, real projects, and exclusive hiring opportunities with our corporate partners. Our network opens doors to top jobs, startup roles, and high-paying careers.",
    },
    {
      id: 3,
      title: "Interview & Resume Mastery",
      description:
        "Your resume is your ticket to a great job! Learn how to craft a powerful CV, ace interviews, and crack aptitude tests with expert guidance. Get mock interview practice, HR insights, and the secret strategies that will make recruiters say YES.",
    },
    {
      id: 4,
      title: "Entrepreneurship & Freelancers",
      description:
        "Dream of starting your own business or side hustle? We help you turn ideas into reality! Learn business strategies, freelancing tricks, digital monetization, and financial independence so you can earn while you learn.",
    },
    {
      id: 5,
      title: "Soft Skills & Personal Branding",
      description:
        "A degree alone isn’t enough—confidence, communication, and leadership set you apart. Develop public speaking skills, emotional intelligence, and networking power to succeed in any career.",
    },
    {
      id: 6,
      title: "Your Success Starts Here!",
      description:
        "With Rareminds, you’re not just preparing for a job—you’re preparing for a lifetime of success. The future belongs to those who stay ahead, upskill, and grab opportunities—and we make sure that’s YOU!",
    },
  ];

  return (
    <section className="xl:px-28 lg:px-20 md:px-16 px-8 xl:pb-16 lg:pb-16 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-8 servicesSection">
      <h2 className="mb-5 text-4xl md:text-5xl md:font-semibold font-semibold text-black text-center">
        Our Services - Your Career, Your Future!
      </h2>
      <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
        At <span className="font-bold text-black">Rareminds</span>, we offer
        everything you need to{" "}
        <span className="font-bold text-black">
          land your dream job, upskill for the future, and earn like a pro
        </span>
        . Our programs are designed to{" "}
        <span className="font-bold text-black">
          match industry demands, boost your confidence, and give you a
          competitive edge
        </span>{" "}
        in today’s job market.
      </p>

      {!isMobile && (
        <div>
          <div className="flex py-2 gap-5 transition-all">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="bg-red-500 p-8 flex-1 hover:flex-[10] transition-all duration-700 rounded-3xl text-white group h-[276px] flex flex-col cursor-pointer"
                onClick={() =>
                  navigate(
                    `/institutions/services/${service.title.replace(/\s+/g, "-")}`,
                  )
                }
              >
                <h3 className="text-3xl font-semibold my-auto group-hover:my-0">
                  {service.title}
                </h3>
                <p className="hidden group-hover:block text-wrap mt-5">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex py-2 gap-5 transition-all">
            {services.slice(3, 6).map((service) => (
              <div
                key={service.id}
                className="bg-red-500 p-8 flex-1 hover:flex-[10] transition-all duration-700 rounded-3xl text-white group h-[276px] flex flex-col cursor-pointer"
                onClick={() =>
                  navigate(`/institutions/services/${service.title}`)
                }
              >
                <h3 className="text-3xl font-semibold my-auto group-hover:my-0 transition-all duration-700">
                  {service.title}
                </h3>
                <p className="hidden group-hover:block text-wrap mt-5">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default InstitutionServices;
