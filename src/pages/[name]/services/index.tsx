import React, { useEffect, useState } from "react";
import ServicesImg from "../../../assets/images/servicesImg.svg";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import CTA from "@/common/CTA";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const htmlDecode = (input) => {
  const e = document.createElement("div");
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
};

const Services = () => {
  const { userType, serviceName } = useParams();
  const [serviceData, setData] = useState<any>({});
  const [hoveredDivs, setHoveredDivs] = useState<any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      await axios
        .get(`${import.meta.env.VITE_API_URL}services/${userType}`)
        .then((res) => {
          setData(res.data);
        });
    }

    getData();
  }, []);

  const htmlDecode = (input) => {
    const e = document.createElement("div");
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  };

  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  return (
    <>
      <Helmet>
        <title>{serviceData?.servicePageData?.MetaTitle}</title>
        <meta
          name="description"
          content={serviceData?.servicePageData?.MetaDescription}
        />
        <meta
          name="keywords"
          content={serviceData?.servicePageData?.MetaKeywords}
        />
        <meta
          property="og:title"
          content={serviceData?.servicePageData?.OGTitle}
        />
        <meta
          property="og:description"
          content={serviceData?.servicePageData?.OGDescription}
        />
      </Helmet>
      {!isMobile ? (
        <section className="xl:px-28 lg:px-24 md:px-20 px-8 xl:pb-16 lg:pb-12 md:pb-8 pb-4 xl:py-16 lg:py-12 md:py-8 py-8 grid w-full min-h-screen">
          <h1 className="text-xl md:text-[70px] leading-[74px] font-Syne font-medium place-items-start text-[#000000] capitalize">
            {serviceData?.servicePageData?.Heading1}
          </h1>
          <p
            className="text-[24px] lg:text-[22px] leading-[32.6px] row-span-1 mt-12 font-[Sentient] font-light ml-60 lg:ml-12 mb-12 md:px-52 lg:px-4 xl:px-32"
            dangerouslySetInnerHTML={{
              __html:
                serviceData?.servicePageData?.Description &&
                htmlDecode(serviceData?.servicePageData?.Description),
            }}
          ></p>

          <div className="flex service-list pt-20">
            {serviceData &&
              serviceData?.serviceData?.map((ele: any) => {
                return (
                  <div
                    className={`item mx-2 rounded-lg bg-red-400 cursor-pointer`}
                    onMouseEnter={() => setHoveredDivs(ele.ContentAcronym)}
                    onMouseLeave={() => setHoveredDivs(undefined)}
                    onClick={() => navigate(`/${ele.ContentSlug}`)}
                  >
                    <div
                      className={` text-white pt-32 lg:pt-12 pb-12 xl:py-6 xl:px-10 xxl:py-20 xxl:px-12 px-20 lg:px-8 rounded-lg item-bg ${hoveredDivs === null ? "" : hoveredDivs !== undefined && hoveredDivs !== ele.ContentAcronym ? "active" : ""}`}
                    >
                      <h4 className="text-5xl font-Syne">{ele.Heading1}</h4>

                      <p
                        className={`text-sm my-12 font-[Sentient] font-normal ${hoveredDivs === null ? "line-clamp-4" : hoveredDivs === undefined ? "line-clamp-4" : ""}`}
                        dangerouslySetInnerHTML={{
                          __html: htmlDecode(ele?.Description),
                        }}
                      ></p>

                      <p
                        onClick={() => navigate(`/${ele.ContentSlug}`)}
                        className="font-[Sentient] font-bold text-[16px] leading-[21.76px]"
                      >
                        ...Read More
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="flex justify-center mt-40">
            <img src={ServicesImg} alt="Services" />
          </div>
        </section>
      ) : (
        <section className="px-8 pb-4 py-8 md:px-16 md:pb-8 md:py-16 w-6/6">
          <h1 className="text-[34px] leading-[34px] font-Syne font-medium place-items-start text-[#000000] capitalize">
            {serviceData?.servicePageData?.Heading1}
          </h1>
          <p
            className="text-[16px] leading-[22.6px] row-span-1 mt-12 font-[Sentient] font-light mb-12 "
            dangerouslySetInnerHTML={{
              __html:
                serviceData?.servicePageData?.Description &&
                htmlDecode(serviceData?.servicePageData?.Description),
            }}
          ></p>
          {serviceData?.serviceData?.length > 0 && (
            <OwlCarousel
              className="owl-theme"
              autoplay
              loop
              margin={10}
              items={1.1}
              dots={false}
              nav={false}
            >
              {serviceData &&
                serviceData?.serviceData?.map((ele: any) => {
                  return (
                    <div
                      className="item my-4 cursor-pointer font-Syne max-h-[300px] min-h-[300px]"
                      onClick={() => navigate(`/${ele.ContentSlug}`)}
                    >
                      <div className="bg-red-400 text-white p-8 rounded-2xl item-bg">
                        <h3 className="text-3xl font-semibold">
                          {ele.Heading1}
                        </h3>

                        <p
                          className="text-sm my-5 line-clamp-3"
                          dangerouslySetInnerHTML={{
                            __html: parse(ele?.Description),
                          }}
                        ></p>
                        <p
                          onClick={() => navigate(`/${ele.ContentSlug}`)}
                          className="font-[Sentient] font-bold text-[16px] leading-[21.76px]"
                        >
                          ...Read More
                        </p>
                      </div>
                    </div>
                  );
                })}
            </OwlCarousel>
          )}
          <div className="flex justify-center mt-10">
            <img src={ServicesImg} alt="Services" />
          </div>
        </section>
      )}
      <CTA content={""} />
    </>
  );
};

export default Services;
