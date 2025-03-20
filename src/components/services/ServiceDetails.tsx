import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import successhere from "@/assets/images/services/success-here.jpg";
import resume from "@/assets/images/services/resume2.jpg";
import job from "@/assets/images/services/job-ready.jpg";
import internship from "@/assets/images/services/internship.jpg";
import entrepreneurship from "@/assets/images/services/entrepreneurship.jpg";
import brand from "@/assets/images/services/branding.jpg";

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const formattedServiceName = serviceName?.replace(/-/g, " ");

  const services = {
    "Job Ready Training": {
      image: job,
      intro:
        "Stand out in today’s competitive job market with skills that employers crave!",
      description:
        "Our Job Ready Training program equips you with cutting-edge expertise in AI, Digital Marketing, EV Technology, Cybersecurity, and Business Strategy. Gain hands-on experience, work on real-world projects, and earn certifications that set you apart.",
      points: [
        "Learn from industry experts with years of practical experience.",
        "Master in-demand skills through hands-on projects and case studies.",
        "Earn certifications recognized by top companies worldwide.",
      ],
      whyChooseUs: [
        "Mentorship from professionals who’ve been in your shoes.",
        "Access to a global network of industry leaders and recruiters.",
        "Personalized career guidance and job placement support.",
      ],
      cta: "Ready to future-proof your career? Enroll now and take the first step toward success!",
    },
    "Internships & Placement Support": {
      image: internship,
      intro:
        "Kickstart your career with real-world experience and exclusive opportunities!",
      description:
        "Our Internships & Placement Support program connects you with top companies and startups. Gain hands-on experience, build your resume, and secure your dream job with our extensive corporate network.",
      points: [
        "Access to premium internships with leading organizations.",
        "Placement assistance with top recruiters and hiring managers.",
        "Resume building and interview preparation tailored to your goals.",
      ],
      whyChooseUs: [
        "Strong partnerships with Fortune 500 companies and startups.",
        "Dedicated career coaches to guide you through every step.",
        "Exclusive job openings and hiring events just for our students.",
      ],
      cta: "Turn your potential into opportunity. Apply now and land your dream job!",
    },
    "Interview & Resume Mastery": {
      image: resume,
      intro:
        "Your resume and interview skills are your ticket to success—make them unbeatable!",
      description:
        "Our Interview & Resume Mastery program teaches you how to craft a standout resume, ace interviews, and impress recruiters. With mock interviews, HR insights, and AI-powered feedback, you’ll be unstoppable.",
      points: [
        "Resume writing workshops with customizable templates.",
        "Mock interviews with industry professionals and HR experts.",
        "Aptitude test prep and career coaching to boost your confidence.",
      ],
      whyChooseUs: [
        "Expert-led sessions to refine your resume and interview skills.",
        "AI-powered tools to analyze and optimize your resume.",
        "Proven strategies to stand out in competitive job markets.",
      ],
      cta: "Ready to impress recruiters? Join now and master your job search!",
    },
    "Entrepreneurship & Freelancers": {
      image: entrepreneurship,
      intro: "Turn your ideas into a thriving business or freelance career!",
      description:
        "Our Entrepreneurship & Freelancers program provides the tools, strategies, and mentorship you need to succeed. Learn business planning, digital monetization, and financial independence from seasoned entrepreneurs.",
      points: [
        "Step-by-step guides to launch and grow your business.",
        "Financial planning and funding strategies for startups.",
        "Networking opportunities with investors and industry leaders.",
      ],
      whyChooseUs: [
        "Access to a network of successful entrepreneurs and mentors.",
        "Practical tools and resources to build your business from scratch.",
        "Guidance on scaling your business and achieving long-term success.",
      ],
      cta: "Start your entrepreneurial journey today. Enroll now and make your dreams a reality!",
    },
    "Soft Skills & Personal Branding": {
      image: brand,
      intro:
        "Unlock your full potential with confidence, communication, and leadership skills!",
      description:
        "Our Soft Skills & Personal Branding program helps you develop the essential skills to thrive in any career. From public speaking to emotional intelligence, you’ll learn how to stand out and lead with impact.",
      points: [
        "Enhance your communication and presentation skills.",
        "Build a powerful personal and professional brand.",
        "Develop leadership and emotional intelligence strategies.",
      ],
      whyChooseUs: [
        "Expert coaches with real-world experience in leadership and branding.",
        "Interactive workshops and live feedback sessions.",
        "Practical tools to apply your skills in any professional setting.",
      ],
      cta: "Elevate your career with soft skills mastery. Join now and lead with confidence!",
    },
    "Your Success Starts Here!": {
      image: successhere,
      intro:
        "At Rareminds, we don’t just prepare you for a job—we prepare you for a lifetime of success.",
      description:
        "Our comprehensive programs are designed to help you stay ahead, upskill, and seize opportunities in a rapidly changing world. With Rareminds, your future is limitless.",
      points: [
        "Tailored training programs to meet industry demands.",
        "Lifelong learning resources and career development support.",
        "A dedicated community of peers and professionals to guide you.",
      ],
      whyChooseUs: [
        "Continuous support to help you achieve long-term career goals.",
        "Exclusive access to high-quality learning materials and tools.",
        "A network of mentors and peers to inspire and motivate you.",
      ],
      cta: "Your journey to success begins now. Enroll today and take the first step!",
    },
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
          Why Choose Rareminds?
        </h2>
        <motion.ul
          className="list-disc list-inside space-y-4 text-gray-700"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {service.whyChooseUs.map((reason, index) => (
            <motion.li key={index} className="text-lg" variants={fadeInUp}>
              {reason}
            </motion.li>
          ))}
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
        <motion.button
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ServiceDetail;
