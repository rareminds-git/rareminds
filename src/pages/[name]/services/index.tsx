import React, { useEffect, useState } from "react";
import ServicesImg from "../../../assets/images/servicesImg.svg";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import CTA from "@/common/CTA";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";

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

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
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
        <div className="grid w-full min-h-screen md:pt-16">
          <section className="md:px-44 xl:px-32 xxl:px-60 px-10 md:py-32">
            <h1 className="text-xl md:text-[70px] leading-[74px] font-Syne font-medium place-items-start text-[#000000] capitalize">
              {serviceData?.servicePageData?.Heading1}
            </h1>
            <p
              className="text-[24px] leading-[32.6px] row-span-1 mt-12 font-[Sentient] font-light ml-60 mb-12 md:px-52 xl:px-32"
              dangerouslySetInnerHTML={{
                __html:
                  serviceData?.servicePageData?.Description &&
                  parse(serviceData?.servicePageData?.Description),
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
                        className={` text-white pt-32 pb-12 xl:py-20 xl:px-10 xxl:py-20 xxl:px-24 px-20 rounded-lg item-bg ${hoveredDivs === null ? "" : hoveredDivs !== undefined && hoveredDivs !== ele.ContentAcronym ? "active" : ""}`}
                      >
                        <h4 className="text-5xl font-Syne">{ele.Heading1}</h4>

                        <p
                          className={`text-sm my-12 font-[Sentient] font-normal ${hoveredDivs === null ? "line-clamp-4" : hoveredDivs === undefined ? "line-clamp-4" : ""}`}
                          dangerouslySetInnerHTML={{
                            __html: ele?.Description,
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
        </div>
      ) : (
        <div className="grid min-h-screen pt-24 pb-8">
          <section className="px-8">
            <h1 className="text-[30px] leading-[74px] font-Syne font-medium place-items-start text-[#000000] capitalize">
              {serviceData?.servicePageData?.Heading1}
            </h1>

            <p
              className="text-[14px] leading-[21px] row-span-1 mt-12 font-[Poppins-Regular] font-light mb-12"
              dangerouslySetInnerHTML={{
                __html:
                  serviceData?.servicePageData?.Description &&
                  parse(serviceData?.servicePageData?.Description),
              }}
            ></p>

            {serviceData &&
              serviceData?.serviceData?.map((ele: any) => {
                return (
                  <div
                    className="item my-4 cursor-pointer"
                    onMouseEnter={() => setHoveredDivs(ele.ServiceShortForm)}
                    onMouseLeave={() => setHoveredDivs(undefined)}
                    onClick={() => navigate(`/${ele.ContentSlug}`)}
                    style={{
                      height:
                        hoveredDivs === ele.ServiceShortForm
                          ? "auto"
                          : hoveredDivs === ""
                            ? "150px"
                            : "auto",
                    }}
                  >
                    <div className="bg-red-400 text-white p-10 rounded-lg item-bg">
                      <h3 className="text-4xl font-semibold my-10">
                        {ele.Heading1}
                      </h3>

                      {hoveredDivs === ele.ServiceShortForm ? (
                        <p
                          className="text-sm my-5"
                          dangerouslySetInnerHTML={{
                            __html: ele?.Description,
                          }}
                        ></p>
                      ) : (
                        <p
                          className="text-sm my-5"
                          dangerouslySetInnerHTML={{
                            __html: ele?.SubHeading1,
                          }}
                        ></p>
                      )}
                    </div>
                  </div>
                );
              })}

            <div className="flex justify-center mt-10">
              <img src={ServicesImg} alt="Services" />
            </div>
          </section>
        </div>
      )}
      <CTA content={""} />
    </>
  );
};

export default Services;
