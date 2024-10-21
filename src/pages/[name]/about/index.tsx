import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import Line from "../../../assets/images/line.svg";
import MissionImg from "../../../assets/images/mission.svg";
import VisionImg from "../../../assets/images/vision.svg";
import { Helmet } from "react-helmet";
import CTA from "@/common/CTA";
import parse from "html-react-parser";
import Achievements from "@/components/Hero/Achievements";

const About = () => {
  const { name, userType } = useParams();
  const [pageData, setPageData] = useState<any>([]);
  const [hoveredDivs, setHoveredDivs] = useState<any>(null);

  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });

  useEffect(() => {
    async function getPageData() {
      await axios.get(`${import.meta.env.VITE_API_URL}about`).then((res) => {
        setPageData(res.data);
      });
    }

    getPageData();
  }, []);

  console.log("page data", pageData);

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

      <section className="md:px-20 xl:px-32 xxl:px-60 md:pt-32 py-24 px-12 md:pb-0">
        <h1 className="text-[30px] leading-[74px] md:text-[70px] font-Syne font-medium place-items-start text-[#000000] capitalize">
          {pageData?.pageData?.Heading1}
        </h1>
        <p
          className="text-[18px] md:text-[20px] xl:text-[24px] xxl:text-[18px] leading-[32.6px] row-span-1 mt-12 font-[Sentient] font-light mb-12 md:px-20 xl:px-32 xxl:px-2"
          dangerouslySetInnerHTML={{
            __html:
              pageData?.pageData?.Description &&
              parse(pageData?.pageData?.Description),
          }}
        ></p>

        <p className="font-Syne md:text-6xl text-3xl text-black py-4 text-center font-bold">
          Our Values
        </p>

        {!isMobile ? (
          <div className="flex service-list pt-20 my-8">
            {pageData &&
              pageData?.coreValues?.map((ele: any) => {
                return (
                  <div
                    className={`item mx-2 rounded-lg bg-red-400 cursor-pointer`}
                    onMouseEnter={() => setHoveredDivs(ele.ContentAcronym)}
                    onMouseLeave={() => setHoveredDivs(undefined)}
                  >
                    <div
                      className={` text-white pt-32 pb-12 xl:py-20 xl:px-10 xxl:py-20 xxl:px-8 md:px-8 md:pt-12 px-20 rounded-lg item-bg ${hoveredDivs === null ? "" : hoveredDivs !== undefined && hoveredDivs !== ele.ContentAcronym ? "active" : ""}`}
                    >
                      <h4 className="text-5xl font-Syne">{ele.Heading2}</h4>

                      <p
                        className={`text-sm my-12 font-[Sentient] font-normal ${hoveredDivs === null ? "line-clamp-2" : hoveredDivs === undefined ? "line-clamp-4" : ""}`}
                        dangerouslySetInnerHTML={{
                          __html: ele?.Description,
                        }}
                      ></p>

                      {/* <p
                        onClick={() => navigate(`/${ele.ContentSlug}`)}
                        className="font-[Sentient] font-bold text-[16px] leading-[21.76px]"
                      >
                        ...Read More
                      </p> */}
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="item my-4 cursor-pointer md:inline-flex md:gap-4">
            {pageData &&
              pageData?.coreValues?.map((ele: any) => {
                return (
                  <div className="bg-red-400 text-white p-10 my-4 rounded-lg item-bg">
                    <h4 className="text-5xl font-Syne">{ele.Heading2}</h4>

                    <p
                      className={`text-sm my-12 font-[Sentient] font-normal ${hoveredDivs === null ? "line-clamp-2" : hoveredDivs === undefined ? "line-clamp-4" : ""}`}
                      dangerouslySetInnerHTML={{
                        __html: ele?.Description,
                      }}
                    ></p>
                  </div>
                );
              })}
          </div>
        )}

        <div className="grid md:py-24 py-8 place-items-start relative md:grid-cols-3 md:gap-4 grid-cols-1  ">
          <div className="mt-4 col-span-2 md:col-span-1">
            <img
              src={VisionImg}
              width="180px"
              className="rounded-full
            border-[#CAF0F8] border-[17px] mx-auto my-6"
            />
            <p
              className="mb-4 font-Syne lg:mt-6 mt-12 text-center font-medium lg:text-[46px] lg:leading-[55.2px] text-black-400 mx-2 text-[24px]"
              dangerouslySetInnerHTML={{
                __html:
                  pageData?.visionMission &&
                  pageData?.visionMission[0]?.Heading1,
              }}
            />

            <p
              className="mt-2 lg:text-[22px] text-[18px] lg:leading-[43.06px] font-light"
              dangerouslySetInnerHTML={{
                __html:
                  pageData?.visionMission &&
                  pageData?.visionMission[0]?.Description,
              }}
            />
          </div>

          <div className="w-full hidden md:flex xxl:block lg:flex col-span-1 mt-4 items-center justify-center">
            <>
              <img
                src={Line}
                style={{
                  width: "2px",
                  height: "100%",
                }}
                alt="line"
                className="py-28"
              />
            </>
          </div>

          <div className="mt-4 col-span-2 md:col-span-1">
            <img
              src={MissionImg}
              width="180px"
              className="rounded-full
            border-[#CAF0F8] border-[17px] mx-auto my-6"
            />
            <p
              className="mb-4 font-Syne lg:mt-6 mt-12 text-center font-medium lg:text-[46px] lg:leading-[55.2px] text-black-400 mx-2 text-[24px]"
              dangerouslySetInnerHTML={{
                __html:
                  pageData?.visionMission &&
                  pageData?.visionMission[1]?.Heading1,
              }}
            />

            <p
              className="mt-2 lg:text-[22px] text-[18px] lg:leading-[43.06px] font-light"
              dangerouslySetInnerHTML={{
                __html:
                  pageData?.visionMission &&
                  pageData?.visionMission[1]?.Description,
              }}
            />
          </div>
        </div>

        <p className="font-Syne md:text-6xl text-3xl text-black py-4 text-center font-bold">
          Awards and Recognitions
        </p>

        <div className="grid py-16 xxl:grid-flow-col md:grid-cols-2 md:grid-rows-2 lg:grid-flow-col xl:grid-flow-col place-items-start relative">
          {pageData?.awards?.map((ele: any, index) => {
            return (
              <>
                <div
                  className={`mt-4 xxl:row-span-${index + 1} min-h-100 col-span-12 px-2 py-3 rounded overflow-hidden shadow-xl mx-3`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}images/uploads/${ele.Image1}`}
                    width="180px"
                    className="rounded-full
            border-[#CAF0F8] border-[17px] mx-auto my-6"
                  />
                  <p
                    className="mb-4 font-Syne lg:mt-6 mt-12 text-center font-medium lg:text-[26px] lg:leading-[35.2px] text-black-400 mx-2 text-[24px]"
                    dangerouslySetInnerHTML={{
                      __html: ele.Heading2,
                    }}
                  />

                  <p
                    className="mt-2 lg:text-[22px] text-[12px] text-center lg:leading-[43.06px] font-light"
                    dangerouslySetInnerHTML={{
                      __html: ele.SubHeading1,
                    }}
                  />
                </div>
              </>
            );
          })}
        </div>

        {!isMobile ? (
          <div className="logoMarqueeSection text-center md:px-4 px-8 md:py-8">
            <h3 className="font-Syne text-6xl text-black py-4 text-center font-bold">
              Our Partners
            </h3>
            <div className="container" id="logoMarqueeSection">
              <div className="default-content-container flex items-center">
                <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block md:flex">
                  <div className="marquee" style={{ animationDuration: "12s" }}>
                    {pageData?.partners?.map((ele) => {
                      return (
                        <a target="_blank">
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}images/${ele.Image1}`}
                            title=""
                            className="marqueelogo"
                            alt="Rareminds"
                            width={350}
                            height={200}
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="logoMarqueeSection text-center md:px-4 px-8 md:py-8">
            <div className="text-center md-px-0 px-8">
              <h3 className="font-Syne text-3xl text-black py-4 text-center font-bold">
                Our Partners
              </h3>
              <div className="container">
                <div className="xxl:flex lg:inline-flex sm:flex md:inline-flex items-center">
                  {pageData?.partners?.map((ele) => {
                    return (
                      <a target="_blank">
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}images/${ele.Image1}`}
                          title=""
                          className="marqueelogo my-8"
                          alt="Rareminds"
                          width={350}
                          height={200}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Achievements
        content={pageData?.achievementsData}
        achievements={
          pageData?.achievementsData &&
          pageData?.achievementsData[0]?.achievements
        }
      />
      <div className="md:px-20">
        <CTA content={""} />
      </div>
    </>
  );
};

export default About;
