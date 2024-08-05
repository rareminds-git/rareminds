import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimonialImg from "../../assets/images/testimonial.svg";
import TestimonialIlls from "../../assets/images/testimonialIlls.svg";

const TestimonialCarousel = () => {
  return (
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
        <div className="grid grid-cols-2 place-items-start">
          <div className="col-span-1 row-span-3 my-4 mx-4 place-items-start testimonyImg">
            <img
              src={TestimonialImg}
              width="480px"
              className="rounded-full
            border-[#CAF0F8] border-[17px]"
            />
            <p className="font-[Sentient] font-normal text-wrap lg:text-[30px] text-[20px] lg:leading-[40.8px] my-8 lg:pr-44">
              Santosh Kumar G, HR, Shriram Properties, Management Trainee,
              Product Vertical
            </p>
            <p className="font-[Sentient] font-normal text-balance text-[18px] leading-[24.48px] pb-5 lg:pr-44 Hero">
              "Rareminds puts forward only those candidates who closely match
              your requirements and ace their services in both recruiting and
              training. It has been the most rewarding to work with the team."
            </p>
          </div>
          <div className="col-span-1 row-span-1 my-4 place-items-start">
            <img src={TestimonialIlls} width="380px" />
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default TestimonialCarousel;
