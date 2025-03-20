import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const slides = [
  {
    image: "/images/institutions/hero/AI-&-Machine-Learning-Specialist.png",
    title: "AI & Machine Learning Specialist",
    description1: {
      title: "Why It’s Exciting:",
      ponits: [
        "AI is revolutionizing industries from finance to healthcare.",
        "Opportunities to work in autonomous systems, deep learning, and AI ethics.",
        "High demand and lucrative salary prospects.",
      ],
    },
    description2: {
      title: "How Rareminds Can Help:",
      ponits: [
        "AI & ML courses tailored for non-tech and tech students.",
        "Hands-on projects in computer vision, NLP, and AI-powered automation.",
        "Industry partnerships for internships and AI hackathons.",
      ],
    },
  },
  {
    image: "/images/institutions/hero/Digital-Marketing-&-Growth-Hacking.png",
    title: "Digital Marketing & Growth Hacking",
    description1: {
      title: "Why It’s Exciting:",
      ponits: [
        "Creativity meets technology in the world of branding, influencer marketing, and ad tech.",
        "Work in gaming, social media, e-commerce, and startups.",
        "Remote work opportunities with high earning potential.",
      ],
    },
    description2: {
      title: "How Rareminds Can Help:",
      ponits: [
        "Training in SEO, Meta & Google Ads, social media strategy, and analytics.",
        "Live case studies from real businesses.",
        "Certifications that enhance employability.",
      ],
    },
  },
  {
    image: "/images/institutions/hero/EV.png",
    title: "EV (Electric Vehicle) & Sustainability Engineer",
    description1: {
      title: "Why It’s Exciting:",
      ponits: [
        "The future is green, and EVs are at the forefront of transportation.",
        "Work with companies like Tesla, Tata Motors, Ola Electric, and Hyundai.",
        "Solve real challenges in battery tech, sustainability, and smart charging.",
      ],
    },
    description2: {
      title: "How Rareminds Can Help:",
      ponits: [
        "45-hour EV technology bootcamps for students from all backgrounds.",
        "Industry exposure to battery recycling, EV powertrains, and grid integration.",
        "Internship & job opportunities in the growing EV sector.",
      ],
    },
  },
  {
    image: "/images/institutions/hero/Cybersecurity-&-Ethical-Hacking.png",
    title: "Cybersecurity & Ethical Hacking",
    description1: {
      title: "Why It’s Exciting:",
      ponits: [
        "The digital world needs security experts to combat hacking, fraud, and data breaches.",
        "Work with top firms like Microsoft, Palo Alto Networks, and IBM.",
        "Freelance & startup opportunities in penetration testing and digital forensics.",
      ],
    },
    description2: {
      title: "How Rareminds Can Help:",
      ponits: [
        "Courses on ethical hacking, network security, and malware analysis.",
        "Hands-on bug bounty challenges and real-world simulations.",
        "Placement assistance in cybersecurity firms.",
      ],
    },
  },
  {
    image:
      "/images/institutions/hero/AgriTech-&-Food-Processing-Specialist.png",
    title: "AgriTech & Food Processing Specialist",
    description1: {
      title: "Why It’s Exciting:",
      ponits: [
        "Tech + Agriculture = A revolution in organic farming, hydroponics, and smart food production.",
        "Work on food innovations like lab-grown meat, organic food, and precision farming.",
        "Create climate-resilient agriculture solutions.",
      ],
    },
    description2: {
      title: "How Rareminds Can Help:",
      ponits: [
        "Training in food analysis, agribusiness management, and organic production.",
        "Partnerships with organic farms, AgriTech startups, and F&B companies.",
        "Hands-on exposure in farm-to-fork businesses.",
      ],
    },
  },
  {
    image: "/images/institutions/hero/Content-Creator.png",
    title: "Content Creator & Storyteller (YouTube, Podcasting, Blogging)",
    description1: {
      title: "Why It’s Exciting:",
      ponits: [
        "Be your own boss in social media, content writing, and video creation.",
        "Opportunities in gaming, edutainment, travel vlogging, and AR/VR content.",
        "Build a brand in personal branding, digital storytelling, and voice AI.",
      ],
    },
    description2: {
      title: "How Rareminds Can Help:",
      ponits: [
        "Training in video editing, podcasting, scriptwriting, and AI-generated content.",
        "Hands-on workshops on monetizing social media & SEO for content.",
        "Networking with successful content creators.",
      ],
    },
  },
  {
    image:
      "/images/institutions/hero/Mental-Health-&-Organizational-Psychologist.png",
    title: "Mental Health & Organizational Psychologist",
    description1: {
      title: "Why It’s Exciting:",
      ponits: [
        "Work-life balance, emotional intelligence, and mental health are in demand.",
        "Job roles in corporate wellness, schools, sports psychology, and HR.",
        "Flexible work, freelancing, and consultancy opportunities.",
      ],
    },
    description2: {
      title: "How Rareminds Can Help:",
      ponits: [
        "45-hour course in counseling psychology & behavioral interventions.",
        "Real-world case studies & internship opportunities.",
        "AI-driven psychological assessments.",
      ],
    },
  },
  {
    image:
      "/images/institutions/hero/Fashion-Tech-&-Sustainable-Textiles-Expert.png",
    title: "Fashion Tech & Sustainable Textiles Expert",
    description1: {
      title: "Why It’s Exciting:",
      ponits: [
        "Fashion meets innovation in areas like 3D printing, digital fashion, and biodegradable fabrics.",
        "Work with brands like Nike, Adidas, H&M, and startups in sustainable fashion.",
        "AI-driven styling, personalized fashion, and virtual clothing.",
      ],
    },
    description2: {
      title: "How Rareminds Can Help:",
      ponits: [
        "Textile innovation and fashion-tech training.",
        "Hands-on sustainability projects.",
        "Collaboration with fashion brands and designers.",
      ],
    },
  },
];

const InstitutionHeroSection = () => {
  return (
    <section className="bg-hero-gradient py-16">
      <div className="max-w-7xl mx-auto px-6">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={20}
          nav
          autoplay={true}
          autoplayTimeout={4000}
          dots
          items={1}
          navText={["<", ">"]}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-8 p-6"
            >
              {/* Left Side - Text Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  {slide.title}
                </h1>

                <p className="text-gray-600 text-lg font-semibold">
                  {slide.description1.title}
                </p>
                <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-2">
                  {slide.description1.ponits.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="text-gray-600 text-lg font-semibold mt-4">
                  {slide.description2.title}
                </p>
                <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-2">
                  {slide.description2.ponits.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="/institutions/query"
                  className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Get in Touch
                </a>
              </div>

              {/* Right Side - Image */}
              <div className="lg:w-1/2 flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full max-w-md rounded-lg"
                />
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default InstitutionHeroSection;
