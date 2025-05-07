import React from "react";
import { Button } from "@/components/ui/button";

import { Calendar, ArrowDown, Eye } from "lucide-react";

export const HeroSection = () => {
  const scrollToGovOutcome = () => {
    const el = document.getElementById("feature-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className=" min-h-screen flex relative items-center justify-center">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('/images/Govt-Images/bg.jpeg')" }}
      >
        {/* Left Content (Text + Buttons) */}
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-6 lg:p-16">
          <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Over ₹10 Crore in Skill Projects Delivered. One Trusted Partner. Seamless Execution. Guaranteed Impact.{" "}

          </h1>
          <p className="mb-8 text-base md:text-lg text-gray-900">
            Pan-India deployment. Tier 2 & 3 coverage. LMS, dashboards, assessments, and 13+ language trainers — all under one roof.
          </p>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">

            <button className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
              <Eye className="h-5 w-5 mr-2" />
              View Our Government Training Portfolio
            </button>


            <button className="flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-md">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule a Strategy Call
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center px-4 md:px-0 ">
          <img
            src="/images/Govt-Images/map.svg"
            alt="India Deployment Map"
            className="w-full max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-8xl h-auto object-cover object-center mr-16 scale-100 md:mr-56 md:scale-125"
          />
        </div>

      </div>


      <button
        onClick={scrollToGovOutcome}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce hover-scale cursor-pointer outline-none"
        aria-label="Scroll down"
      >
        <ArrowDown size={36} className="text-black drop-shadow-lg" />
        <span className="text-black text-xs mt-1">Scroll</span>
      </button>
    </section>
  );
};
