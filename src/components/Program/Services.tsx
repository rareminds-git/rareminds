import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import CTA from "@/common/CTA";

const Services = ({ content, services, ctaContent }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [hoveredDivs, setHoveredDivs] = useState<any>(null);

  const navigate = useNavigate();

  return (
    <>
      <section className="md:px-20 px-10 py-10">
        <h3 className="md:mb-20 md:mt-20 text-5xl text-left md:font-semibold font-[Sentient-Regular] text-black">
          {content?.Heading1}
        </h3>

        <>
          {!isMobile ? (
            <div className="flex service-list">
              {services.map((ele: any) => {
                return (
                  <div
                    className="item mx-2 cursor-pointer"
                    onMouseEnter={() => setHoveredDivs(ele.ContentAcronym)}
                    onMouseLeave={() => setHoveredDivs(undefined)}
                    onClick={() => navigate(`/services/${ele.ContentSlug}`)}
                  >
                    <div
                      className="bg-red-400 text-white p-10 rounded-lg item-bg"
                      style={{
                        maxWidth:
                          hoveredDivs === ele.ContentAcronym
                            ? "auto"
                            : hoveredDivs === ""
                              ? "30px"
                              : "auto",
                        transition: "all 120s ease-in-out 5s",
                      }}
                    >
                      {hoveredDivs === ele.ContentAcronym ||
                      hoveredDivs === undefined ? (
                        <h4 className="text-5xl font-Syne my-10">
                          {ele.Heading1}
                        </h4>
                      ) : (
                        ""
                      )}
                      {hoveredDivs === ele.ContentAcronym ? (
                        <p
                          className="text-sm my-5 font-[Sentient-Regular]"
                          dangerouslySetInnerHTML={{
                            __html: ele?.Description,
                          }}
                        ></p>
                      ) : hoveredDivs === null || hoveredDivs === undefined ? (
                        <p
                          className="text-sm my-5 font-[Sentient-Regular]"
                          dangerouslySetInnerHTML={{
                            __html: ele?.SubHeading1,
                          }}
                        ></p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            services.map((ele: any) => {
              return (
                <div
                  className="item my-4 cursor-pointer"
                  onMouseEnter={() => setHoveredDivs(ele.ServiceShortForm)}
                  onMouseLeave={() => setHoveredDivs(undefined)}
                  onClick={() => navigate(`/services/${ele.ContentSlug}`)}
                  style={{
                    height:
                      hoveredDivs === ele.ServiceShortForm
                        ? "auto"
                        : hoveredDivs === ""
                          ? "150px"
                          : "auto",
                  }}
                >
                  <div className="bg-red-400 text-white p-10 rounded-lg item-bg">
                    <h4 className="text-4xl font-semibold my-10">
                      {ele.Heading1}
                    </h4>

                    {hoveredDivs === ele.ServiceShortForm ? (
                      <p
                        className="text-sm my-5"
                        dangerouslySetInnerHTML={{
                          __html: ele?.Description,
                        }}
                      ></p>
                    ) : (
                      <p
                        className="text-sm my-5"
                        dangerouslySetInnerHTML={{
                          __html: ele?.SubHeading1,
                        }}
                      ></p>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </>
      </section>

      {/* <CTA content={ctaContent} /> */}
    </>
  );
};

export default Services;
