import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useMediaQuery } from "react-responsive";
import moment from "moment";

const Blog = ({ content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  const navigate = useNavigate();
  return (
    <>
      {!isMobile ? (
        <div className="xl:px-28 lg:px-20 md:px-16 px-8 xl:pb-16 lg:pb-16 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-8 bg-[#CABE9E1A]">
          <h5 className="font-Syne mx-auto text-black font-bold mb-20 text-[59px] leading-[70.8px] text-center">
            Blog
          </h5>
          <OwlCarousel
            className="owl-theme"
            nav={true}
            autoplay
            responsive={{
              0: {
                items: 1,
                nav: true,
                dots: false,
              },
              600: {
                items: 2,
                nav: true,
                dots: false,
                stagePadding: 20,
              },
              1000: {
                items: 3.5,
                loop: true,
                dots: false,
              },
            }}
            loop
            margin={40}
            // stagePadding={150}
            items={4}
          >
            {content.map((ele, index) => {
              return (
                <div
                  className="item cursor-pointer"
                  onClick={() => navigate(`/blogs/${ele.ContentSlug}`)}
                >
                  <div className="grid grid-flow-col place-items-start">
                    <div className="row-span-3 my-4 mx-4 place-items-start">
                      <img
                        src={`${import.meta.env.VITE_API_URL}uploads/${ele.Image1}`}
                        style={{
                          width: "100%",
                          height: `${index % 2 === 0 ? "445px" : "575px"}`,
                        }}
                        className={`${index % 2 === 0 ? "rounded-tl-[20px] rounded-tr-[180px] rounded-bl-[20px] rounded-br-[20px] object-cover" : "rounded-tl-[80px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] object-cover"}`}
                      />
                      <p
                        className="font-Syne text-[16px] mt-4 leading-[18px] pb-5 mr-4 font-bold"
                        dangerouslySetInnerHTML={{
                          __html: ele.Heading1,
                        }}
                      />
                      <p
                        className="font-Syne font-normal text-[16px] leading-[18px] line-clamp-3"
                        dangerouslySetInnerHTML={{
                          __html: ele.Heading2,
                        }}
                      />
                      <span
                        onClick={() => navigate(`/blogs/${ele.ContentSlug}`)}
                        className="text-black font-bold cursor-pointer"
                      >
                        Read more
                      </span>
                      <p className="font-Syne font-normal text-[16px] leading-[18px] mt-3">
                        {moment(ele.CreatedOn).format("MMM Do YYYY")}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      ) : (
        <div className="bg-[#cabe9e1f] px-8 pb-4 py-8 md:px-16 md:pb-8 md:py-16">
          <h5 className="font-Syne mx-auto text-red-400 text-center font-bold text-3xl">
            Blog
          </h5>
          <OwlCarousel
            className="owl-theme pl-2"
            autoplay
            loop
            margin={5}
            stagePadding={0}
            nav={false}
            dots={false}
            items={1.5}
            responsive={{
              0: {
                items: 2,
                nav: true,
                dots: false,
              },
              600: {
                items: 3.5,
                nav: true,
                dots: false,
                stagePadding: 20,
              },
              1000: {
                items: 3,
                loop: true,
                dots: false,
              },
            }}
          >
            {content.map((ele, index) => {
              return (
                <div
                  className="item cursor-pointer"
                  onClick={() => navigate(`/blogs/${ele.ContentSlug}`)}
                >
                  <div className="grid grid-flow-col place-items-start">
                    <div className="row-span-3 my-4 mx-4 place-items-start">
                      <img
                        src={`${import.meta.env.VITE_API_URL}uploads/${ele.Image1}`}
                        style={{
                          // width: "159px",
                          height: `${index % 2 === 0 ? "186px" : "295px"}`,
                        }}
                        className={`${index % 2 === 0 ? "rounded-tl-[20px] rounded-tr-[180px] rounded-bl-[20px] rounded-br-[20px] object-cover" : "rounded-tl-[80px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] object-cover"}`}
                      />
                      <p
                        className="font-Syne text-[16px] leading-[18px] pb-5 mr-4 mt-4 font-bold"
                        dangerouslySetInnerHTML={{
                          __html: ele.Heading1,
                        }}
                      />
                      <p
                        className="font-Syne font-normal text-[16px] leading-[18px] line-clamp-3"
                        dangerouslySetInnerHTML={{
                          __html: ele.Heading2 + "Read more",
                        }}
                      />
                      <span
                        onClick={() => navigate(`/blogs/${ele.ContentSlug}`)}
                        className="text-black font-extrabold cursor-pointer"
                      >
                        Read more
                      </span>
                      <p className="font-Syne font-normal text-[16px] leading-[18px] mt-3">
                        {moment(ele.CreatedOn).format("MMM Do YYYY")}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      )}
    </>
  );
};

export default Blog;
