import React, { useEffect, useState } from "react";
import CTA from "@/common/CTA";
import Achievements from "@/components/Hero/Achievements";
import Blog from "@/components/Hero/Blog";
import Hero from "@/components/Hero/Hero";
import SuccessStories from "@/components/Hero/SuccessStories";
import Testimonials from "@/components/Hero/Testimonials";
import WhyUs from "@/components/Hero/WhyUs";
import axios from "axios";

import Services from "@/components/Program/Services";
import ContactUs from "@/components/Hero/ContactUs";

const Name = () => {
  const { name } = useParams();
  const [pageData, setPageData] = useState<any>([]);

  const [sections, setSections] = useState<any>([]);

  useEffect(() => {
    async function getPageData() {
      await axios.get(`http://13.126.41.32/api/pages/${name}`).then((res) => {
        setPageData(res.data);
        const sectionKeys = res.data.sectionData.map(
          (ele: any) => ele.ContentSlug
        );

        setSections(sectionKeys);
      });
    }

    getPageData();
  }, [name]);

  return pageData.sectionData !== undefined ? (
    <>
      {sections.includes("hero") && (
        <Hero
          content={
            pageData.sectionData.filter(
              (ele: any) => ele.ContentSlug === "hero" && ele
            )[0]
          }
          key={pageData.sectionData.hero}
        />
      )}
      {sections.includes("cta") && (
        <CTA
          content={
            pageData.sectionData.filter(
              (ele: any) => ele.ContentSlug === "cta" && ele
            )[0]
          }
          key={pageData.sectionData.cta}
        />
      )}
      {sections.includes("whyus") && (
        <WhyUs
          content={
            pageData.sectionData.filter(
              (ele: any) => ele.ContentSlug === "whyus" && ele
            )[0]
          }
        />
      )}
      {sections.includes("services") && (
        <Services
          content={
            pageData.sectionData.filter(
              (ele: any) => ele.ContentSlug === "services" && ele
            )[0]
          }
          services={pageData.serviceData}
          ctaContent={pageData.sectionData.filter(
            (ele: any) => ele.ContentSlug === "cta" && ele
          )}
        />
      )}
      {sections.includes("successstories") && (
        <SuccessStories
          content={pageData.sectionData.filter(
            (ele: any) => ele.ContentSlug === "successstories" && ele
          )}
        />
      )}
      {sections.includes("achievements") && (
        <Achievements
          content={pageData.sectionData.filter(
            (ele: any) => ele.ContentSlug === "achievements" && ele
          )}
          achievements={pageData.achievementsData}
        />
      )}
      {sections.includes("testimonials") && (
        <Testimonials
          content={pageData.sectionData.filter(
            (ele: any) => ele.ContentSlug === "testimonials" && ele
          )}
        />
      )}
      {sections.includes("blog") && (
        <Blog
          content={pageData.sectionData.filter(
            (ele: any) => ele.ContentSlug === "blog" && ele
          )}
        />
      )}

      {sections.includes("contactus") && (
        <ContactUs
          pageData={pageData.pageData}
          content={pageData.sectionData.filter(
            (ele: any) => ele.ContentSlug === "contactus" && ele
          )}
          ctaContent={pageData.sectionData.filter(
            (ele: any) => ele.ContentSlug === "cta" && ele
          )}
        />
      )}
    </>
  ) : (
    ""
  );
};

export default Name;
