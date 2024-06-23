import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SS1 from "../../assets/images/ss1.svg";
import SS2 from "../../assets/images/ss2.svg";
import { useMediaQuery } from "react-responsive";

const SuccessStories = ({ content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      <section className="md:px-20 px-10 py-10 bg-hero-gradient">
        <div className="flex">
          <div className="grid space-y-10">
            <h1 className="mb-4 mt-20 text-3xl text-left font-bold md:text-5xl text-red-500">
              Case Studies
            </h1>
            <p className="text-2xl mb-20">{content?.Description}</p>
          </div>
        </div>

        <div className="flex mt-12">
          {!isMobile ? (
            <OwlCarousel
              className="owl-theme"
              autoplay
              loop
              items={1.5}
              margin={40}
              dots={false}
              nav={false}
            >
              <div className="item">
                <img src={SS1} width={"300px"} />

                <h4 className="font-bold font-Syne md:text-2xl  text-red-500">
                  Transforming Talent at a Leading Global Alco-bev Organization:
                </h4>
                <p>
                  At Rareminds, our commitment to transforming workplaces
                  through innovative talent solutions is exemplified
                </p>
              </div>
              <div className="item">
                <img src={SS2} />

                <h4 className="font-bold font-Syne md:text-2xl  text-red-500">
                  Institutional Case Study
                </h4>
                <p>
                  Rareminds' commitment to talent development and placement
                  has...Read More
                </p>
              </div>
              <div className="item">
                <img src={SS1} />

                <h4 className="font-bold font-Syne md:text-2xl text-red-500">
                  Transforming Talent at a Leading Global Alco-bev Organization:
                </h4>
                <p>
                  At Rareminds, our commitment to transforming workplaces
                  through innovative talent solutions is exemplified
                </p>
              </div>
            </OwlCarousel>
          ) : (
            <OwlCarousel
              className="owl-theme"
              autoplay
              loop
              items={1.2}
              // stagePadding={60}
              margin={20}
              dots={false}
              nav={false}
            >
              <div className="item">
                <img src={SS1} width={"300px"} />

                <h4 className="font-bold font-Syne md:text-2xl mt-5 text-sm text-red-500">
                  Transforming Talent at a Leading Global Alco-bev Organization:
                </h4>
                <p className="text-sm">
                  At Rareminds, our commitment to transforming workplaces
                  through innovative talent solutions is exemplified
                </p>
              </div>
              <div className="item">
                <img src={SS2} />

                <h4 className="font-bold font-Syne md:text-2xl mt-5 text-sm text-red-500">
                  Institutional Case Study
                </h4>
                <p className="text-sm">
                  Rareminds' commitment to talent development and placement
                  has...Read More
                </p>
              </div>
              <div className="item">
                <img src={SS1} />

                <h4 className="font-bold font-Syne md:text-2xl mt-5 text-sm text-red-500">
                  Transforming Talent at a Leading Global Alco-bev Organization:
                </h4>
                <p className="text-sm">
                  At Rareminds, our commitment to transforming workplaces
                  through innovative talent solutions is exemplified
                </p>
              </div>
            </OwlCarousel>
          )}
        </div>
      </section>
    </>
  );
};

export default SuccessStories;
