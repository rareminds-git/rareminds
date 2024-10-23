import { useMediaQuery } from "react-responsive";
import CountUp from "react-countup";
import { useInViewport } from "../useInViewPort";

const Achievements = ({ content, achievements }) => {
  const { isInViewport, ref } = useInViewport();
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  return (
    <>
      <section className="xl:px-32 xxl:px-44 md:px-20 px-6 md:py-4 place-items-center font-Syne">
        <div className="items-center px-3 py-5">
          <p
            className="mt-0 font-bold text-center ml-0 text-[24px] leading-[28.8px] lg:text-[49px] lg:leading-[73.5px] py-10 text-black-500 font-[Poppins-Regular]"
            dangerouslySetInnerHTML={{
              __html: content && content[0]?.Heading1,
            }}
          />

          <p
            className="lg:text-[22px] lg:leading-[33px] text-[14px] leading-[21px] lg:mt-2 lg:px-10 xl:px-[4rem] lg:mb-20 lg:text-center font-[Poppins-Regular]"
            dangerouslySetInnerHTML={{
              __html: content && content[0]?.Description,
            }}
          />
        </div>
        {!isMobile ? (
          <>
            {achievements?.map((ele: any) => {
              return (
                <div className="container" ref={ref}>
                  <div className="grid grid-cols-4 gap-4 lg:px-4 lg:py-12 py-10 px-10 border-y-black border-2 border-x-0">
                    <div className="lg:col-span-1 col-span-1">
                      <h5
                        className="text-[52px] leading-[58px] font-Syne font-bold"
                        dangerouslySetInnerHTML={{
                          __html: ele.ContentTitle,
                        }}
                      ></h5>
                      <p
                        className="text-[16px] leading-[21.76px] mt-5 font-[Sentient] font-light"
                        dangerouslySetInnerHTML={{
                          __html: ele.ContentDescription,
                        }}
                      ></p>
                    </div>
                    <div className="grid place-items-end lg:col-span-3 col-span-1">
                      <div className="place-items-end">
                        <h5 className=" lg:text-[162px] leading-[171px] text-[60px] text-blue-400 font-[Poppins-Regular]">
                          {isInViewport && (
                            <CountUp
                              start={0}
                              end={ele.ContentSubDescription.replace(",", "")}
                            />
                          )}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {achievements?.map((ele: any) => {
              return (
                <div className="container px-2">
                  <div className="grid md:grid-rows-1 grid-rows-1 gap-4 lg:px-12 lg:py-12 px-4 border-y-black border-2 border-x-0">
                    <div className="row-span-1 grid grid-cols-3">
                      <div className="col-span-1 mt-4">
                        <h5
                          className="text-[16px] leading-[18px] font-Syne font-bold"
                          dangerouslySetInnerHTML={{
                            __html: ele.ContentTitle,
                          }}
                        ></h5>
                      </div>
                      <div className="col-span-2 mt-4">
                        <h5 className="text-right lg:text-[40px] leading-[42px] text-blue-400 font-Poppins}">
                          <CountUp
                            end={ele.ContentSubDescription.replace(",", "")}
                            duration={5}
                            className="text-[40px]"
                          />
                        </h5>
                      </div>
                    </div>
                    <div className="row-span-1">
                      <p
                        className="text-[13px] leading-[17.66px] mb-4 font-[Sentient] font-light"
                        dangerouslySetInnerHTML={{
                          __html: ele.ContentDescription,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </section>
    </>
  );
};

export default Achievements;
