import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimonialImg from "../../assets/images/testimonial.svg";
import TestimonialIlls from "../../assets/images/testimonialIlls.svg";
import { useMediaQuery } from "react-responsive";

const TestimonialCarousel = ({ testimonials }: { testimonials: any }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  console.log("testimonials", testimonials);
  return (
    <>
      {!isMobile ? (
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
          {testimonials?.map((item: any) => {
            return (
              <div className="item mx-20">
                <div className="grid grid-cols-2 place-items-start">
                  <div className="col-span-1 row-span-3 my-4 mx-4 place-items-start testimonyImg">
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}uploads/${item.AuthorImage}`}
                      width="480px"
                      className="rounded-full
            border-[#CAF0F8] border-[17px]"
                    />
                    <p
                      className="font-[Sentient] font-normal text-wrap lg:text-[30px] text-[20px] lg:leading-[40.8px] my-8 lg:pr-44"
                      dangerouslySetInnerHTML={{
                        __html: item.Contenttitle,
                      }}
                    />
                    <p
                      className="font-[Sentient] font-normal text-balance text-[18px] leading-[24.48px] pb-5 lg:pr-44 Hero"
                      dangerouslySetInnerHTML={{
                        __html: item.ContentDescription,
                      }}
                    />
                  </div>
                  <div className="col-span-1 row-span-1 my-4 place-items-start">
                    <img
                      src={TestimonialIlls}
                      width="380px"
                      alt="Testimonial-Ills"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
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
          {testimonials?.map((item: any) => {
            return (
              <div className="item mx-5">
                <div className="grid grid-cols-3 place-items-start">
                  <div className="mx-4 place-items-start testimonyImg">
                    <div className="col-span-1 place-items-start">
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}api/uploads/${item.AuthorImage}`}
                        className="rounded-full mt-12
            border-[#CAF0F8] border-[12px]"
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <p
                      className="font-Inter text-xl font-bold my-8"
                      dangerouslySetInnerHTML={{
                        __html: item.Contenttitle,
                      }}
                    />
                    <p
                      className="font-Inter text-sm pb-5 mr-4 font-thin"
                      dangerouslySetInnerHTML={{
                        __html: item.ContentDescription,
                      }}
                    />
                    <div className="col-span-4 row-span-1 my-4 place-items-start">
                      <img
                        className="testimonyIlls"
                        src={TestimonialIlls}
                        width="100%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      )}
    </>
  );
};

export default TestimonialCarousel;
