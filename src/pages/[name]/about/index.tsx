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
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const About = () => {
  const { name, userType } = useParams();
  const [pageData, setPageData] = useState<any>([]);
  const [hoveredDivs, setHoveredDivs] = useState<any>(null);

  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });

  useEffect(() => {
    const getPageData = async () =>
      setPageData(
        (await axios.get(`${import.meta.env.VITE_API_URL}about`)).data
      );

    getPageData();
  }, []);

  console.log("pageData", pageData);

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

      <section className="xl:px-28 lg:px-20 md:px-16 px-8 xl:pb-16 lg:pb-16 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-8">
        <h1 className="text-[30px] leading-[74px] md:text-[70px] font-Syne font-medium place-items-start text-[#000000] capitalize">
          {pageData?.pageData?.Heading1}
        </h1>
        <p
          className="text-[18px] md:text-[20px] xl:text-[24px] xxl:text-[18px] leading-[32.6px] row-span-1 mt-12 font-[Sentient] font-light mb-12 md:px-8 xl:px-32 xxl:px-2"
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
                  <div className="bg-red-400 text-white md:p-6 p-10 my-4 rounded-lg item-bg">
                    <h4 className="text-5xl md:text-3xl font-Syne">
                      {ele.Heading2}
                    </h4>

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

        <div className="grid md:py-24 py-8 place-items-start relative md:grid-cols-3 md:gap-4 grid-cols-1 xl:mx-36 xl:text-center">
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
              className="mt-2 lg:text-[22px] text-[18px] lg:leading-[43.06px] font-light text-center"
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
                className="py-28 mx-auto"
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
              className="mt-2 lg:text-[22px] text-[18px] lg:leading-[43.06px] font-light text-center"
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

        <div className="py-16 place-items-start relative">
          {!isMobile
            ? pageData?.awards && (
                <OwlCarousel
                  className="owl-theme"
                  nav={true}
                  autoplay
                  responsive={{
                    0: {
                      items: 1,
                      nav: true,
                      dots: false,
                    },
                    600: {
                      items: 1,
                      nav: true,
                    },
                    1000: {
                      items: 4,
                      loop: true,
                      dots: false,
                    },
                  }}
                  loop
                  cellPadding={120}
                  margin={100}
                  items={4}
                >
                  {pageData?.awards?.map((ele: any, index) => {
                    console.log("award ele", ele);
                    return (
                      <div className="item">
                        <div
                          className={`mt-4 xxl:row-span-${index + 1} min-h-100 px-2 py-3 rounded overflow-hidden shadow-xl mx-3`}
                        >
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}images/${ele.Image1}`}
                            width="180px"
                            className="mx-auto my-6"
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
                      </div>
                    );
                  })}
                </OwlCarousel>
              )
            : pageData.awards && (
                <OwlCarousel
                  className="owl-theme"
                  nav={true}
                  autoplay
                  loop
                  margin={0}
                  items={1}
                  dots={false}
                  nav={false}
                  responsive={{
                    0: {
                      items: 1,
                      nav: true,
                      dots: false,
                    },
                    600: {
                      items: 3,
                      nav: true,
                      dots: false,
                      stagePadding: 20,
                    },
                    1000: {
                      items: 3,
                      loop: true,
                      dots: false,
                    },
                  }}
                >
                  {pageData?.awards?.map((ele: any, index) => {
                    return (
                      <div className="item">
                        <div
                          className={`mt-4 xxl:row-span-${index + 1} min-h-100 px-2 py-3 rounded overflow-hidden shadow-xl mx-3`}
                        >
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}images/${ele.Image1}`}
                            width="180px"
                            className="mx-auto my-6"
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
                      </div>
                    );
                  })}
                </OwlCarousel>
              )}
        </div>

        <div className="text-center md:px-4 px-2 md:py-8 py-2">
          <h3 className="font-Syne xxl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-black py-4 text-center font-bold">
            Our Partners
          </h3>
          <div className="container">
            {pageData.partners && (
              <OwlCarousel
                className="owl-theme"
                nav={true}
                autoplay
                responsive={{
                  0: {
                    items: 1,
                    nav: true,
                    dots: false,
                  },
                  600: {
                    items: 2,
                    nav: true,
                    dots: false,
                  },
                  1000: {
                    items: 4,
                    loop: true,
                    dots: false,
                    nav: true,
                  },
                }}
                loop
                cellPadding={10}
                margin={10}
                items={4}
              >
                {pageData &&
                  pageData?.partners?.map((ele) => {
                    return (
                      <div className="item">
                        <a target="_blank">
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}images/${ele.Image1}`}
                            title=""
                            className="marqueelogo"
                            alt="Rareminds"
                            width={!isMobile ? 350 : 250}
                            height={!isMobile ? 200 : 100}
                          />
                        </a>
                      </div>
                    );
                  })}
              </OwlCarousel>
            )}
          </div>
        </div>
      </section>
      <Achievements
        content={pageData?.achievementsData}
        achievements={
          pageData?.achievementsData &&
          pageData?.achievementsData[0]?.achievements
        }
      />

      <CTA content={""} />
    </>
  );
};

export default About;
