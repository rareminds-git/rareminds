import { useMediaQuery } from "react-responsive";
import TestimonialCarousel from "./TestimonalCarousel";
import CustomTabs from "../Tabs";

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
      {!isMobile ? (
        <div className="lg:py-20">
          <CustomTabs content={<TestimonialCarousel />} tabs={tabs} />
        </div>
      ) : (
        <>
          <h3 className="font-Syne my-8 place-items-center text-center mx-auto text-red-400 font-bold text-2xl">
            Testimonials
          </h3>
        </>
      )}
    </>
  );
};

export default Testimonials;
