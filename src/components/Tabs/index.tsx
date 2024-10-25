import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import TestimonialCarousel from "../Hero/TestimonalCarousel";

const CustomTabs = ({ testimonials, tabs, categories }) => {
  return (
    <Tabs className="border-0">
      {tabs?.map((title: any) => {
        const category = categories.filter(
          (ele) => ele.Heading1 === title && ele
        );
        const testimonialData = testimonials.filter(
          (data) => data.ContentId === category[0].ContentId && data
        );
        console.log("testimonials data", testimonialData);
        return (
          <TabPanel>
            <h5 className="font-Syne text-center my-12 lg:mb-10 place-items-center text-[#ff2c2c] lg:text-[70px] lg:leading-[115.2px] text-[28px] leading-[30px] ">
              Testimonials - {title}
            </h5>
            <TestimonialCarousel testimonials={testimonialData} />
          </TabPanel>
        );
      })}
      <TabList className="border-0 border-r-0 custom-tabs md:mx-0">
        {tabs?.map((title: any) => {
          const category = categories.filter(
            (ele) => ele.Heading1 === title && ele
          );
          const testimonialData = testimonials.filter(
            (data) => data.ContentId === category[0].ContentId && data
          );
          return (
            <Tab
              key={category[0].ContentId}
              disabled={!testimonialData.length > 0}
            >
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
    </Tabs>
  );
};

export default CustomTabs;
