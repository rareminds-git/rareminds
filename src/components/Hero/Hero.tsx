import HeroImg1 from "../../assets/images/hero.svg";
import HeroIlls from "../../assets/images/HeroIlls.svg";
import { useMediaQuery } from "react-responsive";

const Hero = ({ content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      {!isMobile ? (
        <section className="md:px-36 md:pt-36">
          <div className="flex items-center justify-center">
            <div className="grid space-y-10 place-items-center">
              <h1 className="mb-4 mt-20 text-4xl text-center md:mx-24 font-bold md:text-5xl text-red-500">
                {content?.Heading1}
              </h1>
            </div>
          </div>

          <div className="flex">
            <div className="grid space-y-10 place-items-start md:grid-cols-3">
              <div className="grid my-4 place-items-start">
                <h5 className="md:col-span-3 mb-4 font-Syne  mt-44 font-bold md:text-3xl text-black-400 mx-8 text-xs">
                  Hiring for our Sales & Marketing teams became more accessible.
                </h5>
              </div>
              <div className="grid">
                <img src={HeroIlls} className="md:col-span-2 heroIlls" />
              </div>
              <div className="my-4 place-items-start">
                <img src={HeroImg1} className="md:col-span-8" />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="md:px-36 md:pt-36">
          <div className="flex items-center justify-center">
            <div className="grid space-y-10 place-items-center">
              <h1 className="mb-4 mt-20 text-4xl text-center md:mx-64 font-bold md:text-5xl text-red-500">
                {content.Heading1}
              </h1>
            </div>
          </div>

          <div className="flex">
            <div>
              <div className="place-items-center illsImg">
                <img src={HeroIlls} className="heroIlls" />
              </div>
              <div className="grid place-items-center">
                <h5 className="mb-4 font-Syne font-bold text-black-400 mx-8 text-4xl">
                  Hiring for our Sales & Marketing teams became more accessible.
                </h5>
              </div>
              <div className="my-4 place-items-center">
                <img src={HeroImg1} className="md:col-span-8" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
