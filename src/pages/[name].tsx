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
import Blogs from "@/components/Program/Blogs";
import QueryForm from "@/components/Program/QueryForm";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";

const Name = () => {
  const { name } = useParams();
  const [pageData, setPageData] = useState<any>([]);

  const [sections, setSections] = useState<any>([]);

  useEffect(() => {
    async function getPageData() {
      await axios
        .get(`${import.meta.env.VITE_API_URL}pages/${name}`)
        .then((res) => {
          setPageData(res.data);
          const sectionKeys = res.data.sectionData.map(
            (ele: any) => ele.ContentSlug || ele.PageSlug
          );

          setSections(sectionKeys);
        });
    }

    getPageData();
  }, [name]);

  console.log("sections", sections);

  return pageData.sectionData !== undefined ? (
    <>
      <Helmet>
        <title>{pageData?.pageData?.MetaTitle}</title>
        <meta
          name="description"
          content={pageData?.pageData?.MetaDescription}
        />
        <meta name="keywords" content={pageData?.pageData?.MetaKeywords} />
        <meta property="og:title" content={pageData?.pageData?.OGTitle} />
        <meta
          property="og:description"
          content={pageData?.pageData?.OGDescription}
        />
      </Helmet>
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
          content={pageData.studyData}
          pageData={
            pageData.sectionData.filter(
              (ele: any) => ele.ContentSlug === "successstories" && ele
            )[0]
          }
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
      {pageData.pageData.PageType === 1 && (
        <Testimonials
          content={pageData.sectionData.filter(
            (ele: any) => ele.ContentSlug === "testimonials" && ele
          )}
          testimonials={pageData?.testimonialData}
          categories={pageData?.categories}
        />
      )}
      {pageData.blogsData.length > 0 && pageData.pageData.PageType === 1 && (
        <Blog content={pageData.blogsData} />
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
      {/* {sections.includes("casestudies") && (
        <CaseStudies
          pageData={pageData.pageData}
          content={pageData.sectionData.filter(
            (ele: any) => ele.ContentSlug === "casestudies" && ele
          )}
          ctaContent={pageData.sectionData.filter(
            (ele: any) => ele.ContentSlug === "cta" && ele
          )}
        />
      )} */}

      {sections.includes("blogs") && (
        <Blogs
          pageData={pageData.pageData}
          content={pageData.sectionData.filter(
            (ele: any) => ele.ContentSlug === "blogs" && ele
          )}
        />
      )}

      {sections.includes("queryform") && (
        <QueryForm
          pageData={pageData.pageData}
          content={pageData.sectionData.filter(
            (ele: any) => ele.ContentSlug === "queryform" && ele
          )}
        />
      )}

      {(sections.includes("/privacy") ||
        sections.includes("/t&amp;c") ||
        pageData.pageData.PageType === 3) && (
        <section className="md:px-20 px-10 py-10">
          <div className="flex">
            <div className="grid">
              <h1 className="mb-20 mt-20 text-2xl text-left font-bold md:text-5xl">
                {pageData?.pageData?.PageName}
              </h1>
              <p
                className="text-[16px] mb-20"
                dangerouslySetInnerHTML={{
                  __html: pageData.sectionData[0]?.Description,
                }}
              ></p>
            </div>
          </div>
        </section>
      )}

      {sections.length === 0 && (
        <section className="md:px-20 px-10 py-10">
          <div className="flex">
            <div className="grid space-y-10">
              <h1 className="mb-20 mt-20 text-3xl text-left font-bold md:text-5xl">
                {pageData?.pageData?.PageName}
              </h1>
              {/* <p className="text-2xl mb-20">{content?.Description}</p> */}
            </div>
          </div>
        </section>
      )}
    </>
  ) : (
    ""
  );
};

export default Name;
