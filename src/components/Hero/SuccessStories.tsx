import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const SuccessStories = ({ content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const navigate = useNavigate();
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
              {content?.map((ele: any) => {
                console.log("element", ele);
                return (
                  <div
                    className="cursor-pointer item"
                    onClick={() =>
                      navigate(
                        `/case-studies/${ele.PageSlug || ele.ContentSlug}`
                      )
                    }
                  >
                    <img src={`/images/${ele.Image1}`} width={"100%"} />

                    <h4 className="font-bold font-Syne md:text-2xl mt-5 text-sm text-red-500">
                      {ele.Heading1}
                    </h4>
                    <p className="text-sm">{ele.Heading2}</p>
                  </div>
                );
              })}
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
              {content.map((ele: any) => {
                return (
                  <div
                    className="cursor-pointer item"
                    onClick={() =>
                      navigate(
                        `/case-studies/${ele.PageSlug || ele.ContentSlug}`
                      )
                    }
                  >
                    <img src={`/images/${ele.Image1}`} width={"100%"} />

                    <h4 className="font-bold font-Syne md:text-2xl mt-5 text-sm text-red-500">
                      {ele.Heading1}
                    </h4>
                    <p className="text-sm">{ele.Heading2}</p>
                  </div>
                );
              })}
            </OwlCarousel>
          )}
        </div>
      </section>
    </>
  );
};

export default SuccessStories;
