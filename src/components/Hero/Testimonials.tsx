import { useMediaQuery } from "react-responsive";
import TestimonialCarousel from "./TestimonalCarousel";
import CustomTabs from "../Tabs";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonials = ({
  testimonials,
  categories,
}: {
  testimonials: any;
  categories: any;
}) => {
  const [tabs, setTabs] = useState();
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  console.log("categories", categories);
  useEffect(() => {
    const tabsData = categories?.map((ele: any) => {
      console.log("ele", ele);
      return ele.Heading1;
    });
    console.log("Tabs data", tabsData);
    setTabs(tabsData);
  }, []);

  console.log("tabs", tabs);
  return (
    <>
      <div className="xl:px-28 lg:px-20 md:px-16 px-8 xl:pb-16 lg:pb-16 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-8">
        <CustomTabs
          testimonials={testimonials}
          categories={categories}
          tabs={tabs}
        />
      </div>
    </>
  );
};

export default Testimonials;
