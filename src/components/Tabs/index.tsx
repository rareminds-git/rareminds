import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import TestimonialCarousel from "../Hero/TestimonalCarousel";

const CustomTabs = ({ testimonials, tabs, categories }) => {
  return (
    <Tabs preventScroll={true} className="border-0 relative pb-[50px]">
      <TabList className="border-0 border-r-0 custom-tabs md:mx-0 absolute bottom-0">
        {tabs?.map((title: any) => {
          const category = categories.filter((ele) => ele.Heading1 === title);
          const testimonialData = testimonials.filter(
            (data) => data.ContentId === category[0].ContentId
          );
          return (
            <Tab key={title} disabled={!testimonialData.length > 0}>
              <span
                className={
                  !testimonialData.length > 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-black cursor-pointer"
                }
              >
                {title}
              </span>
            </Tab>
          );
        })}
      </TabList>
      {tabs?.map((title: any) => {
        const category = categories.filter((ele) => ele.Heading1 === title);
        const testimonialData = testimonials.filter(
          (data) => data.ContentId === category[0].ContentId
        );
        console.log("testimonials data", testimonialData);
        return (
          <TabPanel key={title}>
            <h5 className=" text-center my-12 md:my-2 lg:mb-10 place-items-center text-[#ff2c2c] lg:text-[70px] text-[28px] leading-[30px] ">
              Testimonials - {title}
            </h5>
            <TestimonialCarousel testimonials={testimonialData} />
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

export default CustomTabs;
