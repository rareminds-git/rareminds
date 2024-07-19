import React, { useEffect, useState } from "react";
import ProgramImg from "../../assets/images/programImg.svg";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import CTA from "@/common/CTA";

const ServiceName = () => {
  const { userType, serviceName } = useParams();
  const [serviceData, setData] = useState<any>({});

  useEffect(() => {
    async function getData() {
      await axios
        .get(`http://13.126.41.32/api/services/${userType}/${serviceName}`)
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
            <div className="grid grid-cols-6">
              <h1
                className="md:text-7xl text-5xl grid-cols-1 py-12 col-span-2 font-[Sentient-Regular] mr-100 place-items-start border-b-2 border-black text-[#FF2C2C] font-bold capitalize"
                style={{ wordSpacing: "9999px" }}
              >
                {serviceData?.serviceData?.Heading1}
              </h1>
            </div>
            <p
              className="text-md font-[Sentient-Regular] capitalize ml-72 mr-16 mt-12 mb-12"
              dangerouslySetInnerHTML={{
                __html: serviceData?.serviceData?.Description,
              }}
            ></p>

            <div className="grid grid-cols-4">
              <div className="rounded col-span-2">
                <img src={ProgramImg} />
              </div>
              <div className="grid grid-flow-row gap-2 col-span-2">
                <h3 className="text-[#FF2C2C] font-bold capitalize text-3xl mt-36 font-Syne">
                  Program Details
                </h3>
                {serviceData?.servicePrograms?.map((ele: any) => {
                  return (
                    <div className="row-span-1">
                      <p className="text-xl font-[Sentient-Bold]">
                        {ele.ContentTitle}
                      </p>
                      <span
                        className="mt-4 mr-20 serviceProgramList"
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
        </div>
      ) : (
        <div className="md:py-16">
          <section className="md:px-20 px-5 md:py-10">
            <h1 className="md:text-8xl text-4xl row-span-1 md:py-12 pt-20 pb-4 mt-8 col-span-5 mr-36 place-items-start border-b-2 border-black text-[#FF2C2C] font-bold capitalize">
              {serviceData?.serviceData?.Heading1}
            </h1>

            <p
              className="text-md row-span-1 capitalize mb-12 mt-12"
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

            <h3 className="text-[#FF2C2C] font-bold capitalize text-3xl mt-8 font-Syne">
              Program Details
            </h3>

            {serviceData?.servicePrograms?.map((ele: any) => {
              return (
                <div className="mt-6 px-8 ml-8">
                  <h3 className="md:text-4xl text-xl font-bold font-Syne">
                    {ele.ContentTitle}
                  </h3>
                  <p
                    className="mt-4"
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

export default ServiceName;
