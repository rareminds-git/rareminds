
import React from "react";
import { HeroSection } from "@/components/Govt/sections/HeroSection";
import { FeaturesSection } from "@/components/Govt/sections/FeaturesSection";
import { DashboardSection } from "@/components/Govt/sections/DashboardSection";
import { PartnershipsSection } from "@/components/Govt/PartnershipsSection";
import { DeploymentSection } from "@/components/Govt/DeploymentSection";
import { GovernmentOutcomesSection } from "@/components/Govt/sections/GovernmentOutcomesSection";
import SectorExpertise from "@/components/Govt/sections/SectorExpertise";
import { CTAButton } from "@/components/Govt/CTAButton";
import GovtServiceSection from "@/components/Govt/sections/GovtServiceSection";
import PartnershipHero from "@/components/Govt/sections/PartnershipHero";

const govt = () => {
  return (
    <div className="min-h-screen w-full bg-white relative">

      <HeroSection />
      <CTAButton />
      {/* <FeaturesSection /> */}
      <GovernmentOutcomesSection />
      <PartnershipsSection />
      <DashboardSection />
      {/* <SectorExpertise /> */}
      <PartnershipHero />
      {/* <GovtServiceSection /> */}
      <DeploymentSection />
    </div>
  );
};

export default govt;
