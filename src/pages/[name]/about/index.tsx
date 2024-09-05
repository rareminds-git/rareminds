import React, { useEffect, useState } from "react";
import ServicesImg from "../../../assets/images/servicesImg.svg";

import axios from "axios";

import { Helmet } from "react-helmet";
import CTA from "@/common/CTA";
import parse from "html-react-parser";

const About = () => {
  const { name, userType } = useParams();
  const [pageData, setPageData] = useState<any>([]);

  useEffect(() => {
    async function getPageData() {
      await axios
        .get(`${import.meta.env.VITE_API_URL}${userType}/about`)
        .then((res) => {
          setPageData(res.data);
        });
    }

    getPageData();
  }, []);

  return (
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

      <div className="grid w-full min-h-screen md:pt-16">
        <section className="md:px-44 xl:px-32 xxl:px-60 px-10 md:py-32">
          <h1 className="text-xl md:text-[70px] leading-[74px] font-Syne font-medium place-items-start text-[#000000] capitalize">
            {pageData?.pageData?.Heading1}
          </h1>
          <p
            className="text-[24px] leading-[32.6px] row-span-1 mt-12 font-[Sentient] font-light ml-60 mb-12 md:px-52 xl:px-32"
            dangerouslySetInnerHTML={{
              __html:
                pageData?.pageData?.Description &&
                parse(pageData?.pageData?.Description),
            }}
          ></p>

          <div className="w-full mt-12">
            <img src={ServicesImg} alt="Services" className="w-full" />
          </div>
        </section>
      </div>
      <CTA content={""} />
    </>
  );
};

export default About;
