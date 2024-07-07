import HeroImg1 from "../../assets/images/hero.svg";
import HeroSun from "../../assets/images/hero-sun.svg";
import HeroIlls from "../../assets/images/HeroIlls.svg";
import { useMediaQuery } from "react-responsive";

const Hero = ({ content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      {!isMobile ? (
        <section className="md:px-36 md:pt-24">
          <div className="flex items-center justify-center">
            <div className="grid space-y-10 place-items-center">
              <h1 className="mb-4 text-4xl text-center md:mx-12 font-bold font-Syne md:text-5xl text-red-500">
                {content?.Heading1}
              </h1>
            </div>
          </div>

          <div className="grid space-y-10 place-items-start md:grid-cols-3">
            <div className="place-items-start">
              <h5 className="mb-4 font-Syne mt-36 font-bold md:text-3xl text-black-400 mx-2 text-xs">
                Hiring for our Sales & Marketing teams became more accessible.
              </h5>
            </div>

            <div className="w-full">
              <img src={HeroIlls} className="heroIlls" />
            </div>

            <div className="place-items-start hero-img relative float">
              <img src={HeroImg1} />

              <img src={HeroSun} className="absolute top-0 -z-10 right-0" />
            </div>
          </div>
        </section>
      ) : (
        <section className="md:px-36 md:pt-36">
          <div className="flex items-center justify-center">
            <div className="grid space-y-10 place-items-center">
              <h1 className="mb-4 mt-20 text-3xl text-center md:mx-64 mx-4 font-bold md:text-5xl text-red-500">
                {content.Heading1}
              </h1>
            </div>
          </div>

          <div className="flex">
            <div className="mt-8">
              <div className="place-items-center illsImg">
                <img src={HeroIlls} className="heroIlls" />
              </div>
              <div className="grid place-items-center">
                <h5 className="mb-4 font-Syne font-bold text-black-400 mx-8 text-4xl">
                  Hiring for our Sales & Marketing teams became more accessible.
                </h5>
              </div>
              <div className="my-4 place-items-center mx-8">
                <div className="md:col-span-6 place-items-start hero-img relative float">
                  <img src={HeroImg1} />

                  <img src={HeroSun} className="absolute top-0 -z-10 right-0" />
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
