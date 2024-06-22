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
            <div className="grid grid-cols-1 grid-rows-2">
              <h1
                className="md:text-8xl text-5xl row-span-1 py-12 col-span-5 mr-100 place-items-start border-b-2 border-black text-[#FF2C2C] font-bold capitalize"
                style={{ wordSpacing: "9999px" }}
              >
                {serviceData?.serviceData?.Heading1}
              </h1>

              <p
                className="text-md row-span-1 capitalize ml-72 mt-12 mb-12"
                dangerouslySetInnerHTML={{
                  __html: serviceData?.serviceData?.Description,
                }}
              ></p>
            </div>
            <div className="grid grid-cols-2">
              <div className="rounded-md">
                <img src={ProgramImg} className="col-span-5" width={"400px"} />
              </div>
              <div className="grid grid-flow-row gap-2">
                <h3 className="text-[#FF2C2C] font-bold capitalize text-3xl mt-36 font-Syne">
                  Program Details
                </h3>
                {serviceData?.servicePrograms?.map((ele: any) => {
                  return (
                    <div className="row-span-1 mt-16">
                      <h3 className="text-4xl font-bold font-Syne">
                        {ele.ContentTitle}
                      </h3>
                      <p
                        className="mt-4 mr-20 serviceProgramList"
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
        </div>
      ) : (
        <div className="grid min-h-screen md:py-16">
          <section className="md:px-20 px-5 md:py-10">
            <h1 className="md:text-8xl text-2xl row-span-1 md:py-12 py-6 col-span-5 mr-96 place-items-start border-b-2 border-black text-[#FF2C2C] font-bold capitalize">
              {serviceData?.serviceData?.ServiceTitle}
            </h1>

            <p className="text-md row-span-1 capitalize mr-36 mb-12 mt-12">
              {serviceData?.serviceData?.ServiceDescription}
            </p>

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
                    {ele.ProgramTitle}
                  </h3>
                  <p
                    className="mt-4 mr-32"
                    dangerouslySetInnerHTML={{ __html: ele.ProgramDescription }}
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
