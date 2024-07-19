import HeroImg1 from "../../assets/images/hero.svg";
import HeroSun from "../../assets/images/hero-sun.svg";
import HeroIlls from "../../assets/images/HeroIlls.svg";
import { useMediaQuery } from "react-responsive";

const Hero = ({ content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      {!isMobile ? (
        <section className="md:px-16 md:pt-44 md:pb-44 bg-hero-gradient">
          <div className="flex items-center justify-center">
            <div className="grid space-y-10 place-items-center">
              <h1 className="mb-4 text-4xl text-center md:mx-12 font-[Sentient-Medium] md:text-6xl text-[#ff2c2c]">
                {content?.Heading1}
              </h1>
            </div>
          </div>

          <div className="grid space-y-10 place-items-start md:grid-cols-5">
            <div className="place-items-start col-span-2">
              <h5 className="mb-4 font-Syne mt-36 font-bold md:text-5xl text-black-400 mx-2 text-xs pl-8">
                "Hiring for our Sales & Marketing teams became more accessible."
              </h5>
              <p className="mt-8 font-Syne text-3xl pl-8">
                Jaguar, GMT Manager,
              </p>
              <p className="mt-2 font-Syne text-3xl pl-8">Abhilash. P</p>
            </div>

            <div className="w-full col-span-1">
              <img src={HeroIlls} className="heroIlls" />
            </div>

            <div className="place-items-start hero-img relative float col-span-2">
              <img src={HeroImg1} />

              <img src={HeroSun} className="absolute top-0 -z-10 right-0" />
            </div>
          </div>
        </section>
      ) : (
        <section className="py-24 bg-hero-gradient">
          <div className="flex items-center justify-center">
            <div className="grid space-y-10 place-items-center">
              <h1 className="mb-4 mt-20 text-2xl text-center md:mx-64 mx-4 font-[Sentient-Medium] text-[#ff2c2c]">
                {content.Heading1}
              </h1>
            </div>
          </div>

          <div className="flex">
            <div className="mt-8">
              <div className="place-items-center illsImg h-44">
                <img src={HeroIlls} className="heroIlls h-full" />
              </div>
              <div className="grid place-items-center">
                <p className="mb-4 font-Syne mt-8 text-3xl text-black-400 text-center">
                  "Hiring for our Sales & Marketing teams became more
                  accessible."
                </p>
                <p className="mt-2 font-Syne text-2xl">Jaguar, GMT Manager,</p>
                <p className="mt-2 font-Syne text-2xl">Abhilash. P</p>
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
