import React, { useEffect, useState } from "react";
import ProgramImg from "../../../assets/images/programImg.svg";
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
        .get(`http://13.126.41.32/api/services/${userType}`)
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
        <div className="grid w-full min-h-screen md:py-16">
          <section className="md:px-44 px-10 md:py-32">
            <h1 className="text-xl md:text-[70px] leading-[74px] font-Syne font-medium place-items-start text-[#000000] capitalize">
              {serviceData?.servicePageData?.Heading1}
            </h1>
            <p
              className="text-[24px] leading-[32.6px] row-span-1 mt-12 font-[Sentient] font-light ml-60 mb-12 px-52"
              dangerouslySetInnerHTML={{
                __html:
                  serviceData?.servicePageData?.Description &&
                  parse(serviceData?.servicePageData?.Description),
              }}
            ></p>

            <div className="flex service-list">
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
                        className={` text-white pt-32 pb-12 px-20 rounded-lg item-bg ${hoveredDivs === null ? "" : hoveredDivs !== undefined && hoveredDivs !== ele.ContentAcronym ? "active" : ""}`}
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
        <div className="grid min-h-screen md:py-16">
          <section className="md:px-20 px-5 md:py-10">
            <h1 className="md:text-8xl text-2xl row-span-1 md:py-12 py-6 col-span-5 mr-96 place-items-start border-b-2 border-black text-[#FF2C2C] font-bold capitalize">
              {serviceData?.serviceData?.Heading1}
            </h1>

            <p
              className="text-md row-span-1 capitalize mr-36 mb-12 mt-12"
              dangerouslySetInnerHTML={{
                __html: serviceData?.serviceData?.Description,
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

            <div className="flex justify-center mt-40">
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
