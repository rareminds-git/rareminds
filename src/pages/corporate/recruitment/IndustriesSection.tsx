import IndutriesSVG from "@/assets/corporate/home/industries/industries";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const IndustriesSection = () => {
  const scrollToCaseStudies = () => {
    const element = document.getElementById("case-studies");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="industries"
      className="section w-full flex flex-col relative overflow-hidden"
    >
      <div className="text-center mb-12 mt-16 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-corporate-black">
            Industries We Serve
          </h2>
          <p className="text-corporate-grey max-w-3xl mx-auto">
            Rareminds is a global recruitment and cross-border talent
            acquisition firm based in India, specializing in hiring
            third-country nationals for international roles
          </p>
        </motion.div>
      </div>
      <IndutriesSVG className="w-full h-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="my-10 text-center"
      >
        {/* <Link to="/contact-us"> */}
        <Button
          onClick={scrollToCaseStudies}
          size="lg"
          className="bg-corporate-secondary hover:bg-red-700 text-white shadow-lg shadow-red-200 hover:shadow-red-300/50 transition-all duration-300 !rounded-full"
        >
          See Our Impact Stories
        </Button>
        {/* </Link> */}
      </motion.div>
    </section>
  );
};

export default IndustriesSection;
