import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const Services = ({ content, services, ctaContent }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [hoveredDivs, setHoveredDivs] = useState<any>(null);

  const navigate = useNavigate();

  return (
    <>
      <section className="md:px-40 xl:px-32 xxl:px-72 xl:py-20 px-8 pt-20">
        <h3 className="md:mb-20 text-5xl text-left md:font-semibold font-[Sentient] font-semibold text-black">
          {content?.Heading1}
        </h3>

        <>
          {!isMobile ? (
            <div className="flex service-list">
              {services.map((ele: any) => {
                return (
                  <div
                    className={`item mx-2 rounded-lg bg-red-400 cursor-pointer`}
                    onMouseEnter={() => setHoveredDivs(ele.ContentAcronym)}
                    onMouseLeave={() => setHoveredDivs(undefined)}
                    onClick={() => navigate(`/${ele.ContentSlug}`)}
                  >
                    <div
                      className={` text-white md:p-20 xl:py-20 xl:px-10 rounded-lg item-bg ${hoveredDivs === null ? "" : hoveredDivs !== undefined && hoveredDivs !== ele.ContentAcronym ? "active" : ""}`}
                    >
                      <h4 className="text-5xl font-Syne">{ele.Heading1}</h4>

                      <p
                        className={`text-sm my-5 font-[Sentient] font-normal ${hoveredDivs === null ? "line-clamp-4" : hoveredDivs === undefined ? "line-clamp-4" : ""}`}
                        dangerouslySetInnerHTML={{
                          __html: parse(ele?.Description),
                        }}
                      ></p>

                      <p
                        onClick={() => navigate(`/${ele.ContentSlug}`)}
                        className="font-[Sentient] font-bold text-[16px] leading-[21.76px]"
                      >
                        ...Read More
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <OwlCarousel
              className="owl-theme"
              autoplay
              loop
              margin={20}
              items={1}
              dots={false}
              nav={false}
            >
              {services.map((ele: any) => {
                return (
                  <div
                    className="item my-4 cursor-pointer"
                    onClick={() => navigate(`/${ele.ContentSlug}`)}
                  >
                    <div className="bg-red-400 text-white p-10 rounded-lg item-bg">
                      <h3 className="text-4xl font-semibold my-10">
                        {ele.Heading1}
                      </h3>

                      <p
                        className="text-sm my-5 line-clamp-6"
                        dangerouslySetInnerHTML={{
                          __html: ele?.Description,
                        }}
                      ></p>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          )}
        </>
      </section>

      {/* <CTA content={ctaContent} /> */}
    </>
  );
};

export default Services;
