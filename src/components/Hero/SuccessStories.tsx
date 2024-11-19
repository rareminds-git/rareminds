import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const SuccessStories = ({ content, pageData }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  const navigate = useNavigate();
  return (
    <>
      <section className="xl:px-28 lg:px-20 md:px-16 px-8 xl:pb-16 lg:pb-16 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-8 bg-hero-gradient">
        <div className="flex">
          <div className="grid space-y-10">
            <h4 className="mb-4 md:text-[50px] md:leading-[75.2px] text-[28px] leading-[30px] text-left font-normal text-[#FF2C2C]">
              Success Stories so far
            </h4>
            <p
              className="text-[22px] leading-[33px] mb-10 font-playfair"
              dangerouslySetInnerHTML={{
                __html: pageData?.Description,
              }}
            />
          </div>
        </div>

        <div className="flex mt-12">
          {!isMobile ? (
            <OwlCarousel
              className="owl-theme"
              nav={true}
              // autoplay
              loop
              items={1.5}
              margin={40}
              dots={false}
              nav={false}
            >
              {content?.map((ele: any) => {
                console.log("Slug", ele.ContentSlug);
                return (
                  <div
                    className="cursor-pointer item"
                    onClick={() => navigate(`/${ele.ContentSlug}`)}
                  >
                    <img
                      src={`/images/${ele.Image1}`}
                      className="rounded-2xl"
                      style={{ width: "975px", height: "575px" }}
                    />

                    <h4 className="font-bold font-playfair md:text-2xl mt-5 text-sm text-red-500">
                      {ele.Heading1}
                    </h4>
                    <p className="text-sm">
                      {ele.Heading2}...{" "}
                      <span
                        onClick={() => navigate(`${ele.ContentSlug}`)}
                        className="text-black font-bold cursor-pointer"
                      >
                        Read more
                      </span>
                    </p>
                  </div>
                );
              })}
            </OwlCarousel>
          ) : (
            <OwlCarousel
              className="owl-theme"
              nav={true}
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
                    className="cursor-pointer item rounded-2xl"
                    onClick={() => navigate(`/${ele.ContentSlug}`)}
                  >
                    <img
                      src={`/images/${ele.Image1}`}
                      width={"100%"}
                      alt={ele.Heading1}
                      className="rounded-2xl"
                    />

                    <h4 className="font-bold font-playfair md:text-2xl mt-5 text-sm text-red-500">
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
