import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TestimonialCarousel from "../Hero/TestimonalCarousel";

const CustomTabs = ({ content, tabs }) => {
  return (
    <Tabs className="border-0">
      {tabs.map((title: any) => {
        return (
          <TabPanel>
            <h5 className="font-Syne text-center my-12 lg:mb-20 place-items-center lg:mx-20 text-[#ff2c2c] lg:text-[70px] lg:leading-[115.2px] text-[28px] leading-[30px] ">
              Testimonials - {title}
            </h5>
            <TestimonialCarousel />
          </TabPanel>
        );
      })}
      <TabList className="border-0 border-r-0 custom-tabs md:mx-20">
        {tabs.map((title: any) => {
          return <Tab key={title}>{title}</Tab>;
        })}
      </TabList>
    </Tabs>
  );
};

export default CustomTabs;
