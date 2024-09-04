import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BlogImg1 from "../../assets/images/blog1.svg";
import BlogImg2 from "../../assets/images/blog2.svg";
import BlogImg3 from "../../assets/images/blog3.svg";
import { useMediaQuery } from "react-responsive";
import moment from "moment";

const Blog = ({ content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const navigate = useNavigate();
  return (
    <>
      {!isMobile ? (
        <div className="bg-[#cabe9e1f] lg:py-32 mt-10">
          <h5 className="font-Syne py-12 mx-auto text-black font-bold mb-20 text-[59px] leading-[70.8px] text-center">
            Blog
          </h5>
          <OwlCarousel
            className="owl-theme lg:pl-64 xl:pl-40"
            autoplay
            responsive={{
              0: {
                items: 1,
                nav: false,
                dots: false,
              },
              600: {
                items: 2,
                nav: false,
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
                        src={ele.Image1}
                        style={{
                          width: "100%",
                          height: `${index % 2 === 0 ? "445px" : "575px"}`,
                        }}
                        className={`${index % 2 === 0 ? "rounded-tl-[20px] rounded-tr-[180px] rounded-bl-[20px] rounded-br-[20px]" : "rounded-tl-[80px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]"}`}
                      />
                      <p className="font-Syne text-[16px] mt-4 leading-[18px] pb-5 mr-4 font-bold">
                        {ele.Heading1}
                      </p>
                      <p className="font-Syne font-normal text-[16px] leading-[18px] line-clamp-3">
                        {ele.Heading2}
                      </p>
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
        <div className="bg-[#cabe9e1f] pl-24">
          <h5 className="font-Syne my-8 mx-auto text-red-400 text-center font-bold text-3xl">
            Blog
          </h5>
          <OwlCarousel
            className="owl-theme pl-2"
            autoplay
            loop
            margin={20}
            stagePadding={0}
            nav={false}
            dots={false}
            items={1}
          >
            {content.map((ele, index) => {
              return (
                <div
                  className="item cursor-pointer"
                  onClick={() => navigate(`/blogs/${ele.PageSlug}`)}
                >
                  <div className="grid grid-flow-col place-items-start">
                    <div className="row-span-3 my-4 mx-4 place-items-start">
                      <img
                        src={ele.Image1}
                        style={{
                          width: "159px",
                          height: `${index % 2 === 0 ? "186px" : "295px"}`,
                        }}
                        className={`${index % 2 === 0 ? "rounded-tl-[20px] rounded-tr-[180px] rounded-bl-[20px] rounded-br-[20px]" : "rounded-tl-[80px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]"}`}
                      />
                      <p className="font-Syne text-[16px] leading-[18px] pb-5 mr-4 mt-4 font-bold">
                        {ele.Heading1}
                      </p>
                      <p className="font-Syne font-normal text-[16px] leading-[18px] line-clamp-3">
                        {ele.Heading2}
                      </p>
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
