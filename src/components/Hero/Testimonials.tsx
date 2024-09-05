import { useMediaQuery } from "react-responsive";
import TestimonialCarousel from "./TestimonalCarousel";
import CustomTabs from "../Tabs";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimonialImg from "../../assets/images/testimonial.svg";
import TestimonialIlls from "../../assets/images/testimonialIlls.svg";

const tabs = [
  "Healthcare",
  "Technology",
  "Finance",
  "Manufacturing",
  "Retail",
  "Hospitality",
  "Education",
  "Others",
];

const Testimonials = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      <div className="lg:py-20 xl:px-8 xxl:px-32">
        <CustomTabs content={<TestimonialCarousel />} tabs={tabs} />
      </div>
    </>
  );
};

export default Testimonials;
