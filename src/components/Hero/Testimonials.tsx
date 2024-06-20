import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimonialImg from "../../assets/images/testimonial.svg";
import TestimonialIlls from "../../assets/images/testimonialIlls.svg";
import { useMediaQuery } from "react-responsive";

const Testimonials = ({ content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      {!isMobile ? (
        <>
          <h3 className="font-Inter my-8 place-items-start mx-20 text-red-600 font-bold text-3xl">
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
                items: 1,
                loop: true,
                dots: false,
              },
            }}
            loop
            cellPadding={120}
            margin={100}
            items={1}
          >
            <div className="item mx-20">
              <div className="grid grid-flow-col place-items-start">
                <div className="col-span-6 row-span-3 my-4 mx-4 place-items-start testimonyImg">
                  <img src={TestimonialImg} width="280px" />
                  <p className="font-Inter text-xl pb-5 mr-4">
                    Rareminds puts forward only those candidates who closely
                    match your requirements and ace their services in both
                    recruiting and training. It has been the most rewarding to
                    work with the team.
                  </p>
                  <p className="font-Inter text-sm">
                    Santosh Kumar G, HR, Shriram Properties, Management Trainee,
                    Product Vertical
                  </p>
                </div>
                <div className="col-span-6 row-span-1 my-4 place-items-start">
                  <img src={TestimonialIlls} width="280px" />
                </div>
              </div>
            </div>
          </OwlCarousel>
        </>
      ) : (
        <>
          <h3 className="font-Inter my-8 place-items-center text-center mx-auto text-red-600 font-bold text-xl">
            {content?.Title}
          </h3>
          <OwlCarousel
            className="owl-theme"
            autoplay
            loop
            margin={20}
            items={1}
            dots={false}
            nav={false}
          >
            <div className="item mx-5">
              <div className="grid grid-rows-2 grid-flow-col place-items-start">
                <div className="col-span-12 row-span-1 my-4 place-items-start">
                  <img src={TestimonialIlls} width="280px" />
                </div>
                <div className="row-span-1 grid grid-rows-1 grid-flow-col mx-4 place-items-start testimonyImg">
                  <div className="col-span-6 place-items-start">
                    <img
                      src={TestimonialImg}
                      className="mt-20 mr-20"
                      width="280px"
                    />
                  </div>
                  <div className="col-span-6">
                    <p className="font-Inter text-sm pb-5">
                      Rareminds puts forward only those candidates who closely
                      match your requirements and ace their services in both
                      recruiting and training. It has been the most rewarding to
                      work with the team.
                    </p>
                    <p className="font-Inter text-xs">
                      Santosh Kumar G, HR, Shriram Properties, Management
                      Trainee, Product Vertical
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item mx-5">
              <div className="grid grid-rows-2 grid-flow-col place-items-start">
                <div className="col-span-12 row-span-1 my-4 place-items-start">
                  <img src={TestimonialIlls} width="280px" />
                </div>
                <div className="row-span-1 grid grid-rows-1 grid-flow-col mx-4 place-items-start testimonyImg">
                  <div className="col-span-6 place-items-start">
                    <img
                      src={TestimonialImg}
                      className="mt-20 mr-20"
                      width="280px"
                    />
                  </div>
                  <div className="col-span-6">
                    <p className="font-Inter text-sm pb-5">
                      Rareminds puts forward only those candidates who closely
                      match your requirements and ace their services in both
                      recruiting and training. It has been the most rewarding to
                      work with the team.
                    </p>
                    <p className="font-Inter text-xs">
                      Santosh Kumar G, HR, Shriram Properties, Management
                      Trainee, Product Vertical
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </>
      )}
    </>
  );
};

export default Testimonials;
