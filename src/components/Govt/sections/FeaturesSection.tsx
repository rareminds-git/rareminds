import React, { useState } from "react";
import { Section } from "@/components/ui/section";
import { SparklesText } from "@/components/ui/sparkles-text";


export const FeaturesSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Section className="bg-white py-20 " id="feature-section">
      <div className="text-center mb-16">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Why Governments Choose{" "}
          <SparklesText
            text="Rareminds"
            className="inline-block text-blue-600 text-3xl md:text-5xl z-10"
            colors={{ first: "#fa564b", second: "#33C3F0" }}
            sparklesCount={10}
          />
        </h2>
        <p className="mx-auto max-w-3xl md:text-xl text-base text-gray-600">
          Our comprehensive approach to government training delivers results through
          efficiency, transparency, and excellence
        </p>
      </div>

      <div className="hidden sm:flex justify-center items-center w-full max-w-[1440px] h-[400px] mx-auto overflow-hidden bg-white">
        {/* Centered and Responsive Image */}
        <img
          src="images/Govt-Images/Main_layout.svg"
          alt="Main Layout"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Mobile View */}
      <div className="sm:hidden w-full max-w-[400px] mx-auto px-4">
        <img
          src="/images/Govt-Images/Mobile.svg"
          className="w-full h-auto object-contain"
          alt="Mobile Features"
        />
      </div>
    </Section>
  );
};
