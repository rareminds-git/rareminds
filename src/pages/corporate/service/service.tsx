import React from "react";

const services = [
  "Technical Hiring",
  "Bulk Hiring",
  "Leadership Hiring",
  "Project-Based Hiring",
  "Project-Based Tech Hiring",
  "Campus Hiring",
];

const engagementModels = [
  {
    title: "Full-Cycle Tech Recruitment",
    desc: "From sourcing to onboarding, we manage the entire recruitment process for technical roles. Ideal for companies without in-house hiring capacity or seeking consistency in tech hiring.",
  },
  {
    title: "Project-Based Tech Hiring",
    desc: "Focused technical recruitment support for specific projects, product launches, or expansion phases. We bring in dedicated hiring teams to deliver within tight timelines.",
  },
  {
    title: "Tech Sourcing-as-a-Service",
    desc: "Already have an in-house HR team but need extra hands to source candidates? We support sourcing, pre-screening, and candidate shortlisting while you handle interviews and offers.",
  },
];

const approachSteps = [
  {
    title: "Role Discovery & Calibration",
    points: [
      "Deep-dive into your tech stack, team structure, and hiring goals",
      "Competency mapping and ideal candidate profiling",
      "Market benchmarking to set realistic expectations",
    ],
  },
  {
    title: "Sourcing & Assessment",
    points: [
      "Multi-channel sourcing: LinkedIn, GitHub, Stack Overflow, referrals, and communities",
      "Technical screening using real-world scenarios",
      "Behavioral interviews to ensure culture fit",
    ],
  },
  {
    title: "Candidate Engagement & Offer Management",
    points: [
      "Deep-dive into your tech stack, team structure, and hiring goals",
      "Competency mapping and ideal candidate profiling",
      "Market benchmarking to set realistic expectations",
    ],
  },
  {
    title: "Onboarding & Retention Support",
    points: [
      "Structured onboarding roadmap",
      "First-30-day check-ins and feedback",
      "Continuous improvement via post-hire analysis",
    ],
  },
];

const CorporateService = () => {
  const ComingSoon = true;

  if (ComingSoon)
    return (
      <div className="h-[600px] flex justify-center items-center">
        <h2 className="text-5xl">Comimg Soon</h2>
      </div>
    );
  return (
    <div className="">
      <section
        className="bg-corporate-primary-light bg-[url('/images/corporate/service/head-bg.webp')] p-5 h-[400px] bg-center bg-cover"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)",
        }}
      >
        <div className="!container mx-auto h-full grid grid-cols-2 gap-10 items-center ">
          <div>
            <h1 className="text-5xl font-bold">Technical Hiring Services</h1>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </section>

      <section className="p-10 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <img
            src="/tech-hiring-header.png"
            alt="Tech Hiring"
            width={800}
            height={400}
            className="rounded"
          />
          <h2 className="text-xl font-bold mt-6">
            Build Winning Tech Teams with Confidence: Our Technical Hiring
            Services
          </h2>
          <p className="mt-2 text-sm">
            In the fast-paced world of technology, securing top engineering
            talent is no longer optional — it's mission-critical. Whether you're
            building digital products, modernizing infrastructure, or scaling
            globally, having the right tech minds on board directly impacts your
            business outcomes.
          </p>
        </div>
        <div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-bold mb-2">All Services</h3>
            <ul className="text-sm space-y-1">
              {services.map((service) => (
                <li
                  key={service}
                  className="hover:text-yellow-600 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-10 py-6">
        <h2 className="text-xl font-bold mb-4">
          Our Technical Hiring Engagement Models
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {engagementModels.map((model) => (
            <div
              key={model.title}
              className="bg-yellow-100 p-4 rounded-lg shadow"
            >
              <h4 className="font-bold mb-2">{model.title}</h4>
              <p className="text-sm">{model.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 py-8 bg-gray-50">
        <h2 className="text-xl font-bold mb-6">
          Our Proven Approach to Technical Hiring
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {approachSteps.map((step) => (
            <div
              key={step.title}
              className="bg-white p-4 border rounded-lg shadow"
            >
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {step.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-yellow-300 px-10 py-6 text-center">
        <h3 className="text-lg font-bold mb-2">
          Ready to Hire Better, Faster, and Smarter?
        </h3>
        <p className="text-sm max-w-2xl mx-auto mb-4">
          Whether you're facing scaling challenges, talent shortages, or long
          hiring cycles, our Technical Hiring Services provide the expertise and
          infrastructure to build high-performing tech teams — on time, and on
          target.
        </p>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          CONTACT WITH US
        </button>
      </footer>
    </div>
  );
};

export default CorporateService;
