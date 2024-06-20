import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BlogImg1 from "../../assets/images/blog1.svg";
import BlogImg2 from "../../assets/images/blog2.svg";
import BlogImg3 from "../../assets/images/blog3.svg";
import { useMediaQuery } from "react-responsive";

const Blog = ({ content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      {!isMobile ? (
        <>
          <h3 className="font-Syne my-8 mx-auto text-white font-bold text-3xl">
            {content?.Title}
          </h3>
          <OwlCarousel
            className="owl-theme"
            autoplay
            responsive={{
              0: {
                items: 1,
                nav: false,
                dots: false,
              },
              600: {
                items: 1,
                nav: false,
              },
              1000: {
                items: 3,
                loop: true,
                dots: false,
              },
            }}
            loop
            margin={20}
            stagePadding={120}
            items={1}
          >
            <div className="item">
              <div className="grid grid-flow-col place-items-start">
                <div className="row-span-3 my-4 mx-4 place-items-start">
                  <img src={BlogImg1} width="280px" />
                  <p className="font-Inter text-sm pb-5 mr-4 font-bold">
                    The Never – Ending Journey of Learning: Path to Engineering
                    Excellence
                  </p>
                  <p className="font-Inter text-xs">
                    In the world of engineering, you’ve dedicated years to
                    pursuing your college degree ...Read More
                  </p>
                  <p className="font-Inter text-xs font-bold mt-3">
                    28 July 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="grid grid-flow-col place-items-start">
                <div className="row-span-3 my-4 mx-4 place-items-start">
                  <img src={BlogImg2} width="280px" />
                  <p className="font-Inter text-sm pb-5 mr-4 font-bold">
                    Boosting Employee Development: The Benefits of Corporate
                    Outbound Activities
                  </p>
                  <p className="font-Inter text-xs">
                    As globalization and technological advancements continue
                    ...Read More
                  </p>
                  <p className="font-Inter text-xs font-bold mt-3">
                    28 July 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="grid grid-flow-col place-items-start">
                <div className="row-span-3 my-4 mx-4 place-items-start">
                  <img src={BlogImg3} width="280px" />
                  <p className="font-Inter text-sm pb-5 mr-4 font-bold">
                    Can school-pass out students rewrite their story from
                    dropout to success? Explore the opportunities.
                  </p>
                  <p className="font-Inter text-xs">
                    As globalization and technological advancements continue to
                    ...Read More
                  </p>
                  <p className="font-Inter text-xs font-bold mt-3">
                    24 May 2023
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </>
      ) : (
        <>
          <h3 className="font-Syne my-8 mx-auto text-white font-bold text-3xl">
            {content?.Title}
          </h3>
          <OwlCarousel
            className="owl-theme"
            // autoplay
            loop
            margin={20}
            stagePadding={0}
            nav={false}
            dots={false}
            items={2}
          >
            <div className="item">
              <div className="grid grid-flow-col place-items-start">
                <div className="row-span-3 my-4 mx-4 place-items-start">
                  <img src={BlogImg1} />
                  <p className="font-Inter text-sm pb-5 mr-4 mt-2 font-bold">
                    The Never – Ending Journey of Learning: Path to Engineering
                    Excellence
                  </p>
                  <p className="font-Inter text-xs">
                    In the world of engineering, you’ve dedicated years to
                    pursuing your college degree ...Read More
                  </p>
                  <p className="font-Inter text-xs font-bold mt-3">
                    28 July 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="grid grid-flow-col place-items-start">
                <div className="row-span-3 my-4 mx-4 place-items-start">
                  <img src={BlogImg2} width="280px" />
                  <p className="font-Inter text-sm pb-5 mr-4 mt-2 font-bold">
                    Boosting Employee Development: The Benefits of Corporate
                    Outbound Activities
                  </p>
                  <p className="font-Inter text-xs">
                    As globalization and technological advancements continue
                    ...Read More
                  </p>
                  <p className="font-Inter text-xs font-bold mt-3">
                    28 July 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="grid grid-flow-col place-items-start">
                <div className="row-span-3 my-4 mx-4 place-items-start">
                  <img src={BlogImg3} width="280px" />
                  <p className="font-Inter text-sm mt-2 pb-5 mr-4 font-bold">
                    Can school-pass out students rewrite their story from
                    dropout to success? Explore the opportunities.
                  </p>
                  <p className="font-Inter text-xs">
                    As globalization and technological advancements continue to
                    ...Read More
                  </p>
                  <p className="font-Inter text-xs font-bold mt-3">
                    24 May 2023
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </>
      )}
    </>
  );
};

export default Blog;
