import { ServicesState } from "@/types/services";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ServicesState = {
  services: [
    {
      id: 1,
      title: "Job-Ready Training",
      heading: "Job-Ready Training – Skills That Open Doors to Success!",
      points: [
        "Step-by-step learning for easy understanding",
        "Hands-on training to gain real experience",
        "Job-focused courses tailored to industry needs",
      ],
      h2: "Your skills are your biggest strength!",
      description:
        "At Rareminds, we help you build practical, in-demand skills that companies are actively looking for. No matter where you are, you can gain expertise in AI, Digital Marketing, EV Repair, Retail, Healthcare, Cybersecurity, and more to launch a rewarding career.",
    },
    {
      id: 2,
      title: "Internships & Placement Support",
      heading:
        "Internships & Placement Support – Real Work Experience for a Bright Future!",
      points: [
        "Internship & work opportunities in both local and global companies",
        "Placements in government and private sectors",
        "Industry-specific training in AgriTech, Dairy, Tourism, IT, and Logistics",
      ],
      h2: "Jumpstart your career with internships!",
      description:
        "Gain valuable hands-on experience through paid internships, apprenticeships, and real-world projects that prepare you for the professional world. Our strong network connects students with top companies across multiple industries.",
    },
    {
      id: 3,
      title: "Interview & Resume Mastery",
      heading: "Interview & Resume Mastery – Present Yourself with Confidence!",
      points: [
        "Learn interview techniques that make you stand out",
        "Simple and effective resume-building strategies",
        "Mock interviews with real recruiters for hands-on practice",
      ],
      h2: "Your story matters—tell it with impact!",
      description:
        "We help you build strong communication skills, create a winning resume, and approach interviews with confidence. Our expert-led sessions ensure you are ready to make the best impression.",
    },
    {
      id: 4,
      title: "Entrepreneurship & Freelancing",
      heading: "Entrepreneurship & Freelancing – Create Your Own Success!",
      points: [
        "Learn how to start and grow your business",
        "Opportunities in online freelancing, digital work, and local businesses",
        "Access to government schemes & funding support",
      ],
      h2: "Turn your ideas into income!",
      description:
        "Whether you dream of starting your own business or working on your own terms, our training equips you with the knowledge to succeed in entrepreneurship and freelancing.",
    },
    {
      id: 5,
      title: "English for Employment",
      heading:
        "English for Employment – Communicate with Confidence in Any Job!",
      points: ["", "", ""],
      h2: "Strong communication leads to bigger opportunities!",
      description:
        "Mastering English for the workplace helps you grow professionally, interact with clients, and secure higher-paying jobs.",
    },
    {
      id: 6,
      title: "Personal Branding",
      heading: "Personal Branding – Be the First Choice for Every Opportunity!",
      points: [
        "Practical English training for workplace communication",
        "Speaking & presentation skills for career success",
        "Professional writing skills for emails and reports",
      ],
      h2: "Your personal brand sets you apart!",
      description:
        "Employers look for confident, well-prepared candidates. We help you develop a strong professional presence, both online and offline, so you’re always in demand.",
    },
  ],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
});

export default servicesSlice.reducer;
