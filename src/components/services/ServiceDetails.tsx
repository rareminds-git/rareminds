import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import successhere from "@/assets/images/services/success-here.jpg";
import resume from "@/assets/images/services/resume2.jpg";
import job from "@/assets/images/services/job-ready.jpg";
import internship from "@/assets/images/services/internship.jpg";
import entrepreneurship from "@/assets/images/services/entrepreneurship.jpg";
import brand from "@/assets/images/services/branding.jpg";
import { useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const formattedServiceName = serviceName?.replace(/-/g, " ");
  const navigate = useNavigate();

  const services = {
    "Job Ready Training": {
      image: job,
      intro: "Your skills are your biggest strength!",
      description:
        "At Rareminds, we help you build practical, in-demand skills that companies are actively looking for. No matter where you are, you can gain expertise in AI, Digital Marketing, EV Repair, Retail, Healthcare, Cybersecurity, and more to launch a rewarding career.",
      points: [
        "Step-by-step learning for easy understanding",
        "Hands-on training to gain real experience",
        "Job-focused courses tailored to industry needs",
      ],
      whyChooseUs: {
        title: "What makes this powerful?",
        desc: "Every skill you gain today brings you one step closer to a great career. With Rareminds, you develop expertise that makes you stand out in any field.",
      },
      cta: "Ready to future-proof your career? Enroll now and take the first step toward success!",
    },
    "Internships & Placement Support": {
      image: internship,
      intro: "Jumpstart your career with internships!",
      description:
        "Gain valuable hands-on experience through paid internships, apprenticeships, and real-world projects that prepare you for the professional world. Our strong network connects students with top companies across multiple industries.",
      points: [
        "Internship & work opportunities in both local and global companies",
        "Placements in government and private sectors",
        "Industry-specific training in AgriTech, Dairy, Tourism, IT, and Logistics",
      ],
      whyChooseUs: {
        title: "Why this matters?",
        desc: "Real-world experience boosts confidence and career readiness. With the right exposure, you’ll step into the workforce feeling prepared and in control of your future.",
      },
      cta: "Turn your potential into opportunity. Apply now and land your dream job!",
    },
    "Interview & Resume Mastery": {
      image: resume,
      intro: "Your story matters—tell it with impact!",
      description:
        "We help you build strong communication skills, create a winning resume, and approach interviews with confidence. Our expert-led sessions ensure you are ready to make the best impression.",
      points: [
        "Learn interview techniques that make you stand out",
        "Simple and effective resume-building strategies",
        "Mock interviews with real recruiters for hands-on practice",
      ],
      whyChooseUs: {
        title: "Why this is a game-changer?",
        desc: "Every opportunity is a chance to grow. With the right guidance, you can walk into any interview with the confidence to showcase your strengths and land the job you deserve.",
      },
      cta: "Ready to impress recruiters? Join now and master your job search!",
    },
    "Entrepreneurship & Freelancing": {
      image: entrepreneurship,
      intro: "Turn your ideas into income!",
      description:
        "Whether you dream of starting your own business or working on your own terms, our training equips you with the knowledge to succeed in entrepreneurship and freelancing.",
      points: [
        "Learn how to start and grow your business",
        "Opportunities in online freelancing, digital work, and local businesses",
        "Access to government schemes & funding support",
      ],
      whyChooseUs: {
        title: "Why this empowers you?",
        desc: "You don’t have to wait for success—it’s something you can create! With the right mindset and skills, you can build a thriving career doing what you love.",
      },
      cta: "Start your entrepreneurial journey today. Enroll now and make your dreams a reality!",
    },
    "English for Employment": {
      image: brand,
      intro: "Strong communication leads to bigger opportunities!",
      description:
        "Mastering English for the workplace helps you grow professionally, interact with clients, and secure higher-paying jobs.",
      points: [
        "Practical English training for workplace communication",
        "Speaking & presentation skills for career success",
        "Professional writing skills for emails and reports",
      ],
      whyChooseUs: {
        title: "How this makes a difference?",
        desc: "Communication opens doors. By improving your English skills, you can connect with more people, access better opportunities, and grow in your career.",
      },
      cta: "Elevate your career with soft skills mastery. Join now and lead with confidence!",
    },
    "Personal Branding": {
      image: successhere,
      intro: "Your personal brand sets you apart!",
      description:
        "Employers look for confident, well-prepared candidates. We help you develop a strong professional presence, both online and offline, so you’re always in demand.",
      points: [
        "Create a strong professional identity on job platforms",
        "Learn how to network and build valuable industry connections",
        "Boost your confidence and make lasting impressions",
      ],
      whyChooseUs: {
        title: "Why this gives you an edge?",
        desc: "The way you present yourself defines your opportunities. With the right skills, confidence, and branding, you can attract exciting job offers and career growth.",
      },
      cta: "Your journey to success begins now. Enroll today and take the first step!",
    },
  };

  const redirectToCareer = () => {
    navigate("https://rareminds.zohorecruit.in/jobs/Careers");
  };

  const service = services[formattedServiceName]; // Use formatted name for lookup
  if (!service) return <p>Service not found</p>;

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="px-4 py-12 max-w-6xl mx-auto">
      <motion.h1
        className="text-5xl font-extrabold text-center mb-8 text-gray-900"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {formattedServiceName}
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src={service.image}
          alt={serviceName}
          className="rounded-xl w-full h-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        />
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <p className="text-2xl font-semibold text-gray-800 mb-6">
            {service.intro}
          </p>
          <p className="text-lg text-gray-600">{service.description}</p>
        </motion.div>
      </div>
      <motion.div
        className="mt-12 bg-white p-8 rounded-xl shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What You’ll Gain
        </h2>
        <motion.ul
          className="list-disc list-inside space-y-4 text-gray-700"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {service.points.map((point, index) => (
            <motion.li key={index} className="text-lg" variants={fadeInUp}>
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div
        className="mt-12 bg-blue-50 p-8 rounded-xl shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {service.whyChooseUs.title}
        </h2>
        <motion.ul
          className="list-disc list-inside space-y-4 text-gray-700"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="text-lg" variants={fadeInUp}>
            {service.whyChooseUs.desc}
          </motion.p>
        </motion.ul>
      </motion.div>
      <motion.div
        className="mt-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <p className="text-2xl font-semibold text-gray-900 mb-6">
          {service.cta}
        </p>
        <a href="https://rareminds.zohorecruit.in/jobs/Careers">
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // onClick={() => redirectToCareer()}
          >
            Get Started
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
};

export default ServiceDetail;
