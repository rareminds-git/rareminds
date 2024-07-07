import React, { useEffect, useState } from "react";
import ProgramImg from "../../assets/images/programImg.svg";
import ServicesImg from "../../assets/images/servicesImg.svg";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import CTA from "@/common/CTA";
import { useNavigate } from "react-router-dom";

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
      {!isMobile ? (
        <div className="grid w-full min-h-screen md:py-16">
          <section className="md:px-20 px-10 md:py-10">
            <div className="grid grid-cols-1 grid-rows-2">
              <h1 className="md:text-8xl text-5xl row-span-1 col-span-5 mr-100 place-items-start text-[#000000] font-bold capitalize">
                {serviceData?.servicePageData?.Heading1}
              </h1>

              <p
                className="text-md row-span-1 font-Syne ml-60 mb-12"
                dangerouslySetInnerHTML={{
                  __html: serviceData?.servicePageData?.Description,
                }}
              ></p>
            </div>
            <div className="flex">
              {serviceData &&
                serviceData?.serviceData?.map((ele: any) => {
                  return (
                    <div
                      className="item mx-2 cursor-pointer"
                      onMouseEnter={() => setHoveredDivs(ele.ContentAcronym)}
                      onMouseLeave={() => setHoveredDivs(undefined)}
                      onClick={() => navigate(`/services/${ele.ContentSlug}`)}
                      style={{
                        width:
                          hoveredDivs === ele.ContentAcronym
                            ? "auto"
                            : hoveredDivs === ""
                              ? "30px"
                              : "auto",
                      }}
                    >
                      <div className="bg-red-400 text-white p-10 rounded-lg item-bg">
                        {hoveredDivs === ele.ContentAcronym ||
                        hoveredDivs === undefined ? (
                          <h4 className="text-5xl font-semibold my-10">
                            {ele.Heading1}
                          </h4>
                        ) : (
                          ""
                        )}
                        {hoveredDivs === ele.ContentAcronym ? (
                          <p
                            className="text-sm my-5"
                            dangerouslySetInnerHTML={{
                              __html: ele?.Description,
                            }}
                          ></p>
                        ) : hoveredDivs === null ||
                          hoveredDivs === undefined ? (
                          <p
                            className="text-sm my-5"
                            dangerouslySetInnerHTML={{
                              __html: ele?.SubHeading1,
                            }}
                          ></p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="flex justify-center mt-40">
              <img src={ServicesImg} />
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

            <div className="rounded-md row-span-1">
              <img
                src={ProgramImg}
                className="col-span-5"
                width={"350px"}
                height={"400px"}
              />
            </div>

            {serviceData?.servicePrograms?.map((ele: any) => {
              return (
                <div className="mt-6">
                  <h3 className="md:text-4xl text-2xl font-bold font-Syne">
                    {ele.ContentTitle}
                  </h3>
                  <p
                    className="mt-4 mr-32"
                    dangerouslySetInnerHTML={{ __html: ele.ContentDescription }}
                  ></p>
                </div>
              );
            })}
          </section>
        </div>
      )}
      <CTA content={""} />
    </>
  );
};

export default Services;
