import { useMediaQuery } from "react-responsive";
import CountUp from "react-countup";
import { useInViewport } from "../useInViewPort";

const Achievements = ({ content, achievements }) => {
  const { isInViewport, ref } = useInViewport();
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  return (
    <>
      <section className="xl:px-28 lg:px-20 md:px-16 px-8 xl:pb-16 lg:pb-16 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-8 place-items-center font-Syne">
        <div className="items-center px-1 py-5">
          <p
            className="mt-0 font-bold text-center ml-0 text-[24px] leading-[28.8px] lg:text-[49px] lg:leading-[73.5px] py-10 text-black-500 font-[Poppins-Regular]"
            dangerouslySetInnerHTML={{
              __html: content && content[0]?.Heading1,
            }}
          />

          <p
            className="lg:text-[22px] lg:leading-[33px] text-[14px] leading-[21px] xl:px-[4rem] lg:mb-20 mx-4 lg:mx-20 text-center font-[Poppins-Regular]"
            dangerouslySetInnerHTML={{
              __html: content && content[0]?.Description,
            }}
          />
        </div>
        {!isMobile ? (
          <>
            {achievements?.map((ele: any, index) => {
              return (
                <div className="container" ref={ref}>
                  <div
                    className={`grid grid-cols-4 gap-4 lg:px-4 lg:py-4 py-10 px-10 ${index === 0 ? "border-y-black border-2" : ""} ${index === 2 ? "border-t-black border-2 border-b-0" : ""} border-x-0`}
                  >
                    <div className="col-span-2">
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
                    {index > 0 && <div className="col-span-1"></div>}
                    <div
                      className={`grid lg:col-span-1 ${index < 2 ? "content-center" : "content-start"}`}
                    >
                      <h5
                        className={`${index < 2 ? "lg:text-[162px] leading-[171px]" : "lg:text-[62px] leading-[71px]"} text-right text-[60px] text-blue-400 font-[Poppins-Regular]`}
                      >
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
              );
            })}
          </>
        ) : (
          <>
            {achievements?.map((ele: any, index: any) => {
              return (
                <div className="container">
                  <div
                    className={`grid md:grid-rows-1 grid-rows-1 gap-4 ${index === 0 ? "border-y-black border-2" : ""} ${index === 2 ? "border-t-black border-2 border-b-0" : ""} border-x-0`}
                  >
                    <div className="row-span-1 grid grid-cols-3">
                      <div className="col-span-1 mt-4">
                        <h5
                          className="text-[16px] leading-[18px] lg:text-[24px] lg:leading-[32px] font-Syne font-bold"
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
                            className="text-[40px] lg:text-[80px]"
                          />
                        </h5>
                      </div>
                    </div>
                    <div className="row-span-1 lg:w-[50%]">
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
