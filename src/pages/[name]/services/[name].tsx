import React, { useEffect, useState } from "react";
import ServiceIllsImg from "../../../assets/images/serviceIlls.svg";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import CTA from "@/common/CTA";
import { Helmet } from "react-helmet";

const ServiceName = () => {
  const { userType, serviceName } = useParams();
  const [serviceData, setData] = useState<any>({});

  useEffect(() => {
    async function getData() {
      await axios
        .get(
          `${import.meta.env.VITE_API_URL}services/${userType}/${serviceName}`
        )
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
        <title>{serviceData?.serviceData?.MetaTitle}</title>
        <meta
          name="description"
          content={serviceData?.serviceData?.MetaDescription}
        />
        <meta
          name="keywords"
          content={serviceData?.serviceData?.MetaKeywords}
        />
        <meta property="og:title" content={serviceData?.serviceData?.OGTitle} />
        <meta
          property="og:description"
          content={serviceData?.serviceData?.OGDescription}
        />
      </Helmet>
      {!isMobile ? (
        <section className="xl:px-28 lg:px-20 md:px-16 px-8 xl:pb-16 lg:pb-16 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-8">
          <div className="grid grid-cols-6 gap-0">
            <h1
              className="lg:text-[70px] leading-[74px] text-5xl grid-cols-1 py-4 col-span-2 font-[Sentient] mr-100 place-items-start border-b-[1px] border-black text-[#FF2C2C] font-medium capitalize"
              style={{ wordSpacing: "9999px" }}
            >
              {serviceData?.serviceData?.Heading1}
            </h1>
          </div>
          <p
            className="text-md font-[Sentient] text-[24px] leading-[32.84px] font-light capitalize ml-72 mr-16 mt-12 mb-12"
            dangerouslySetInnerHTML={{
              __html: serviceData?.serviceData?.Description,
            }}
          ></p>

          <div className="grid grid-cols-4 xl:gap-24 gap-4">
            <div className="rounded col-span-2">
              <img
                src={`/images/uploads/${serviceData?.serviceData?.Image1}`}
                className="w-full rounded-xl"
                alt={serviceData?.serviceData?.Heading1}
              />
              <img
                src={ServiceIllsImg}
                className="mt-10 transform -scale-x-100"
                alt={serviceData?.serviceData?.Heading1}
              />
            </div>
            <div className="grid grid-flow-row col-span-2 relative">
              <img
                src={ServiceIllsImg}
                className="absolute -left-24 top-10"
                alt="Line"
              />
              <h2 className="text-[#FF2C2C] font-bold mb-10 capitalize lg:text-[36px] lg:leading-[42px] text-3xl mt-36 font-Syne">
                Program Details
              </h2>
              {serviceData?.servicePrograms?.map((ele: any) => {
                return (
                  <div className="row-span-1">
                    <p
                      className="text-xl lg:text-[36px] lg:leading-[42px] font-[Syne] font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: ele.ContentTitle,
                      }}
                    />
                    <span
                      className="mt-4 mr-20 lg:text-[16px] lg:leading-[21.76px] font-[Sentient] font-light serviceProgramList"
                      dangerouslySetInnerHTML={{
                        __html: ele.ContentDescription,
                      }}
                    ></span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="px-8 py-8 lg:py-10 md:px-16 md:pb-8 md:py-16 lg:px-20 lg:py-20 lg:pb-12">
          <h1 className="lg:text-8xl text-4xl row-span-1 lg:pb-10 pb-4 col-span-5 mr-36 place-items-start border-b-2 border-black text-[#FF2C2C] font-bold capitalize">
            {serviceData?.serviceData?.Heading1}
          </h1>

          <p
            className="text-[14px] leading-[21px] font-[Poppins-Regular] row-span-1 capitalize mb-12 mt-12"
            dangerouslySetInnerHTML={{
              __html: serviceData?.serviceData?.Description,
            }}
          ></p>

          <div className="rounded-md row-span-1">
            <img
              src={`/images/uploads/${serviceData?.serviceData?.Image1}`}
              className="col-span-5"
              width={"350px"}
              height={"400px"}
              alt={serviceData?.serviceData?.Heading1}
            />
            <img
              src={ServiceIllsImg}
              className="mt-10 transform -scale-x-100"
              alt={serviceData?.serviceData?.Heading1}
            />
          </div>

          <h2 className="text-[#FF2C2C] font-bold capitalize text-3xl mt-8 font-Syne">
            Program Details
          </h2>

          {serviceData?.servicePrograms?.map((ele: any) => {
            return (
              <div className="mt-6">
                <h3
                  className="lg:text-4xl text-xl font-bold font-Syne"
                  dangerouslySetInnerHTML={{
                    __html: ele.ContentTitle,
                  }}
                ></h3>
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: ele.ContentDescription }}
                ></p>
              </div>
            );
          })}
        </section>
      )}
      <CTA content={""} />
    </>
  );
};

export default ServiceName;
