import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProgramImg from "../../assets/images/program.svg";
import { useMediaQuery } from "react-responsive";
import CTA from "@/common/CTA";

const Program = ({ showCTA }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      {!isMobile ? (
        <OwlCarousel
          className="owl-theme"
          autoplay
          loop
          margin={20}
          items={1.2}
          nav={false}
          dots={false}
        >
          <div className="item">
            <div className="grid space-y-10 place-items-center grid-cols-2">
              <div className="grid my-4 place-items-center">
                <img
                  className="col-span-8"
                  src={ProgramImg}
                  width="300px"
                  alt="individual-program"
                />
              </div>
              <div className="grid my-4 place-items-center">
                <h2 className="font-bold font-Syne md:text-5xl col-span-4 text-red-500">
                  Individual Program
                </h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="grid space-y-10 place-items-center grid-cols-2">
              <div className="grid my-4 place-items-center">
                <img
                  className="col-span-8"
                  src={ProgramImg}
                  width="300px"
                  alt="school-program"
                />
              </div>
              <div className="grid my-4 place-items-center">
                <h2 className="font-bold font-Syne md:text-5xl col-span-4 text-red-500">
                  School Program
                </h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="grid space-y-10 place-items-center grid-cols-2">
              <div className="grid my-4 place-items-center">
                <img
                  className="col-span-8"
                  src={ProgramImg}
                  width="300px"
                  alt="institute-program"
                />
              </div>
              <div className="grid my-4 place-items-center">
                <h2 className="font-bold font-Syne md:text-5xl col-span-4 text-red-500">
                  Institute Program
                </h2>
              </div>
            </div>
          </div>
        </OwlCarousel>
      ) : (
        <OwlCarousel
          className="owl-theme"
          autoplay
          loop
          items={1.2}
          margin={20}
          dots={false}
        >
          <div className="item mx-2">
            <div className="grid space-y-10 place-items-center grid-cols-2">
              <div className="grid my-4 place-items-center">
                <img
                  className="col-span-8"
                  src={ProgramImg}
                  alt="individual-program"
                />
              </div>
              <div className="grid my-4 place-items-center">
                <h2 className="font-bold font-Syne md:text-5xl col-span-4 text-red-500">
                  Individual Program
                </h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="grid space-y-10 place-items-center grid-cols-2">
              <div className="grid my-4 place-items-center">
                <img
                  className="col-span-8"
                  src={ProgramImg}
                  alt="school-program"
                />
              </div>
              <div className="grid my-4 place-items-center">
                <h2 className="font-bold font-Syne md:text-5xl col-span-4 text-red-500">
                  School Program
                </h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="grid space-y-10 place-items-center grid-cols-2">
              <div className="grid my-4 place-items-center">
                <img
                  className="col-span-8"
                  src={ProgramImg}
                  alt="institute-program"
                />
              </div>
              <div className="grid my-4 place-items-center">
                <h2 className="font-bold font-Syne md:text-5xl col-span-4 text-red-500">
                  Institute Program
                </h2>
              </div>
            </div>
          </div>
        </OwlCarousel>
      )}

      {showCTA && <CTA />}
    </>
  );
};

export default Program;
