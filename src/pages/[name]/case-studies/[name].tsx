import React, { useEffect, useState } from "react";
import ProgramImg from "../../../assets/images/programImg.svg";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import CTA from "@/common/CTA";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";

const htmlDecode = (input) => {
  const e = document.createElement("div");
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
};

const CaseStudyDetail = () => {
  const { slug, userType } = useParams();
  const [studyData, setData] = useState<any>({});

  useEffect(() => {
    async function getData() {
      await axios
        .get(
          `${import.meta.env.VITE_API_URL}case-studies/${userType}/case-studies/${slug}`
        )
        .then((res) => {
          setData(res.data);
        });
    }

    getData();
  }, []);

  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  return (
    <>
      <Helmet>
        <title>{studyData?.studyData?.MetaTitle}</title>
        <meta
          name="description"
          content={studyData?.studyData?.MetaDescription}
        />
        <meta name="keywords" content={studyData?.studyData?.MetaKeywords} />
        <meta property="og:title" content={studyData?.studyData?.OGTitle} />
        <meta
          property="og:description"
          content={studyData?.studyData?.OGDescription}
        />
      </Helmet>
      {!isMobile ? (
        <section className="xl:px-28 lg:px-20 md:px-16 px-8 xl:pb-16 lg:pb-16 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-8">
          <div className="grid grid-cols-1 grid-rows-2">
            <h1 className="lg:text-[48px] lg:leading-[55.2px] lg:mr-[20rem] xl:mr-[12rem] text-4xl row-span-1 place-items-start text-[#FF2C2C] font-Syne font-bold capitalize">
              {studyData?.studyData?.Heading1}
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-md">
              <img
                src={`../../images/${studyData?.studyData?.Image1}`}
                alt={studyData?.studyData?.Heading1}
              />
            </div>
            <div className="grid grid-flow-row gap-4">
              {studyData?.studyDetails?.map((ele: any) => {
                return (
                  <div className="row-span-1">
                    <p
                      className="mr-20 caseStudyDetail lg:text-[18px] lg:leading-[24.48px]"
                      dangerouslySetInnerHTML={{
                        __html: ele.ContentDescription,
                      }}
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="px-8 py-8 lg:py-10 md:px-16 md:pb-8 md:py-16 lg:px-20 lg:py-20 lg:pb-12">
          <div className="grid grid-cols-1 grid-rows-1">
            <h1 className="lg:text-6xl text-2xl row-span-1 place-items-start text-[#FF2C2C] font-Syne font-bold capitalize">
              {studyData?.studyData?.Heading1}
            </h1>
          </div>
          <div className="grid grid-cols-1">
            <div className="rounded-md">
              <img
                src={`../../images/${studyData?.studyData?.Image1}`}
                alt={studyData?.studyData?.Heading1}
                className="my-8"
              />
            </div>
            <div className="grid grid-flow-row gap-4">
              {studyData?.studyDetails?.map((ele: any) => {
                return (
                  <div className="row-span-1 mt-4">
                    <p
                      className="mt-4 caseStudyDetail font-[Sentient] font-normal text-2xl"
                      dangerouslySetInnerHTML={{
                        __html: ele.ContentDescription,
                      }}
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <CTA content={""} />
    </>
  );
};

export default CaseStudyDetail;
