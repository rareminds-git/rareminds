import HeroImg1 from "../../assets/images/homepage-hero.webp";
import HeroSun from "../../assets/images/sunhome.webp";
import HeroIlls from "../../assets/images/HeroIlls.svg";
import Line from "../../assets/images/line.svg";
import Ellipsis from "../../assets/images/ellipse.svg";
import { useMediaQuery } from "react-responsive";
import { useInViewport } from "../useInViewPort";

const Hero = ({ content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  const [lineHeight, setLineHeight] = useState(0);

  const { isInViewport, ref } = useInViewport();

  useEffect(() => {
    setTimeout(() => {
      if (!isMobile) {
        if (lineHeight < 350) {
          setLineHeight(lineHeight + 125);
        }
      } else {
        if (lineHeight < 240) {
          setLineHeight(lineHeight + 35);
        }
      }
    }, 1000);
  }, [lineHeight]);

  return (
    <>
      {!isMobile ? (
        <section className="xl:px-28 lg:px-24 md:px-20 px-16 xl:pb-16 lg:pb-12 md:pb-8 pb-4 bg-hero-gradient">
          <div className="flex items-center justify-center">
            <div className="grid space-y-10 place-items-center">
              <h1
                className="mb-4 mt-8 text-[32px] leading-10 text-center font-[Sentient] font-medium lg:text-[55px] lg:leading-[74px] text-[#ff2c2c]"
                dangerouslySetInnerHTML={{
                  __html: content.Heading1,
                }}
              />
            </div>
          </div>

          <div className="grid space-y-10 place-items-start grid-cols-5">
            <div className="place-items-start col-span-2">
              <p
                className="mb-4 font-Syne lg:mt-16 mt-12 font-bold lg:text-[46px] lg:leading-[55.2px] text-black-400 mx-2 text-[24px] pl-2"
                dangerouslySetInnerHTML={{
                  __html: content.Heading2,
                }}
              />
              <p
                className="mt-8 lg:text-[32px] text-[20px] lg:leading-[53.06px] font-medium pl-2"
                dangerouslySetInnerHTML={{
                  __html: content.SubHeading1,
                }}
              />
              <p
                className="mt-2 font-Syne lg:text-[32px] text-[20px] lg:leading-[53.06px] font-mediumn pl-2"
                dangerouslySetInnerHTML={{
                  __html: content.SubHeading2,
                }}
              />
            </div>

            <div
              className="w-full col-span-1 relative items-center flex justify-center"
              ref={ref}
            >
              {isInViewport && (
                <>
                  <img
                    src={Ellipsis}
                    className="absolute top-0"
                    alt="elipsis"
                  />
                  <img
                    src={Line}
                    className="absolute top-0"
                    style={{
                      height: `${lineHeight}px`,
                      width: "15px",
                      transition: "height 1s linear",
                    }}
                    alt="line"
                  />
                  <img
                    src={Ellipsis}
                    className="absolute"
                    style={{
                      top: `${lineHeight}px`,
                      transition: "top 1s linear",
                    }}
                    alt="elipsis"
                  />
                </>
              )}
            </div>

            <div
              ref={ref}
              className="place-items-start hero-img relative float col-span-2"
            >
              {isInViewport && (
                <>
                  <img src={HeroImg1} alt="hero-user-img" />
                  {/* <img
                    src={HeroSun}
                    className="absolute top-[180px] -z-10 right-[60px] scale-150"
                    alt="hero-sun"
                  /> */}
                </>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="px-8 pb-4 py-12 md:px-16 md:pb-8 md:py-16 lg:px-20 lg:pb-12 lg:py-20 bg-hero-gradient">
          <div className="flex items-center justify-center">
            <div className="grid place-items-center">
              <h1 className="mb-4 mt-10 text-[22px] leading-[28px] md:text-[32px] md:leading-[44px] font-medium text-center font-[Sentient] text-[#ff2c2c]">
                {content.Heading1}
              </h1>
            </div>
          </div>

          <div className="space-y-10 place-items-start grid-cols-5 md:grid hidden">
            <div className="place-items-start col-span-2">
              <p
                className="mb-4 font-Syne lg:mt-16 mt-12 font-bold lg:text-[32px] lg:leading-[53.06px] text-black-400  text-[24px] pl-2"
                dangerouslySetInnerHTML={{
                  __html: content.Heading2,
                }}
              />
              <p
                className="mt-8 lg:mt-4 lg:text-[23px] text-[20px] lg:leading-[33.06px] font-medium pl-2"
                dangerouslySetInnerHTML={{
                  __html: content.SubHeading1,
                }}
              />
              <p
                className="lg:mt-0 font-Syne lg:text-[23px] text-[20px] lg:leading-[33.06px] font-mediumn pl-2"
                dangerouslySetInnerHTML={{
                  __html: content.SubHeading2,
                }}
              />
            </div>

            <div
              className="w-full col-span-1 relative items-center flex justify-center"
              ref={ref}
            >
              {isInViewport && (
                <>
                  <img
                    src={Ellipsis}
                    className="absolute top-0"
                    alt="elipsis"
                  />
                  <img
                    src={Line}
                    className="absolute top-0"
                    style={{
                      height: `${lineHeight}px`,
                      width: "15px",
                      transition: "height 1s linear",
                    }}
                    alt="line"
                  />
                  <img
                    src={Ellipsis}
                    className="absolute"
                    style={{
                      top: `${lineHeight}px`,
                      transition: "top 1s linear",
                    }}
                    alt="elipsis"
                  />
                </>
              )}
            </div>

            <div
              ref={ref}
              className="place-items-start hero-img relative col-span-2"
            >
              {isInViewport && (
                <>
                  <img src={HeroImg1} alt="hero-user-img" />
                  {/* <img
                    src={HeroSun}
                    className="absolute top-[30px] -z-10 right-[60px] "
                    alt="hero-sun"
                  /> */}
                </>
              )}
            </div>
          </div>

          <div className="flex md:hidden">
            <div className="mt-8 mb-8">
              <div className="place-items-center illsImg h-44">
                <img
                  src={HeroIlls}
                  className="heroIlls h-full"
                  alt="hero-ills"
                />
              </div>
              <div className="grid place-items-center">
                <p
                  className="mb-4 font-Syne mt-8 text-[28px] leading-[33.6px] font-medium text-black-400 text-center"
                  dangerouslySetInnerHTML={{
                    __html: content.Heading2,
                  }}
                />
                <p
                  className="mt-2 py-1 font-Syne text-[20px] leading-[33.16px] font-semibold"
                  dangerouslySetInnerHTML={{
                    __html: content.SubHeading2,
                  }}
                />
                <p
                  className="font-Syne text-[20px] leading-[33.16px] font-semibold"
                  dangerouslySetInnerHTML={{
                    __html: content.SubHeading1,
                  }}
                />
              </div>
              <div className="mt-8 mb-2 place-items-center">
                <div className="lg:col-span-6 place-items-start hero-img relative float">
                  <img src={HeroImg1} alt="hero-user-img" />

                  {/* <img
                    src={HeroSun}
                    className="absolute top-0 -z-10 right-0"
                    alt="hero-sun"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
