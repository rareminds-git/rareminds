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
        <div className="bg-[#cabe9e1f] py-20 mt-10">
          <h3 className="font-Syne my-8 mx-auto text-black font-bold mb-20 text-4xl text-center">
            Blog
          </h3>
          <OwlCarousel
            className="owl-theme pl-24"
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
                        width="280px"
                        className={`rounded ${index % 2 === 0 ? "rounded-tr-full" : "rounded-tl-full"}`}
                      />
                      <p className="font-Inter text-sm pb-5 mr-4 font-bold">
                        {ele.Heading1}
                      </p>
                      <p className="font-Inter text-xs">{ele.Heading2}</p>
                      <p className="font-Inter text-xs font-bold mt-3">
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
        <div className="bg-[#cabe9e1f] py-12">
          <h3 className="font-Syne my-8 mx-auto text-red-400 text-center font-bold text-3xl">
            Blog
          </h3>
          <OwlCarousel
            className="owl-theme pl-2"
            // autoplay
            loop
            margin={20}
            stagePadding={0}
            nav={false}
            dots={false}
            items={2}
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
                        width="280px"
                        className={`rounded ${index % 2 === 0 ? "rounded-tr-full" : "rounded-tl-full"}`}
                      />
                      <p className="font-Inter text-sm pb-5 mr-4 font-bold">
                        {ele.Heading1}
                      </p>
                      <p className="font-Inter text-xs">{ele.Heading2}</p>
                      <p className="font-Inter text-xs font-bold mt-3">
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
