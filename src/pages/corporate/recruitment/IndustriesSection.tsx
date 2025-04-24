import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const industryIcons = [
  { icon: "💻", name: "Information Technology" },
  { icon: "🏦", name: "Banking & Finance" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "🔬", name: "Healthcare & Pharma" },
  { icon: "🛒", name: "Retail & E-commerce" },
  { icon: "📱", name: "Telecommunications" },
  { icon: "🚗", name: "Automotive" },
  { icon: "🏗️", name: "Construction" },
  { icon: "✈️", name: "Travel & Hospitality" },
  { icon: "🎮", name: "Media & Entertainment" },
  { icon: "⚡", name: "Energy & Utilities" },
  { icon: "🌱", name: "Agriculture & Food" },
];

const IndustriesSection = () => {
  const scrollToCaseStudies = () => {
    const element = document.getElementById("case-studies");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="industries" className="section py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-corporate-primary z-0"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTE2IDI0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <motion.div
            className="w-full md:w-1/2 text-corporate-black"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 inline-block mb-6">
              <Globe size={36} className="text-corporate-black" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-corporate-accent/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-corporate-black/90 text-lg leading-relaxed">
                  Rareminds is a global recruitment and cross-border talent
                  acquisition firm based in India, specializing in hiring
                  third-country nationals for international roles.
                </p>
              </div>
              <div className="bg-corporate-accent/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-corporate-black/90 text-lg leading-relaxed">
                  We have deep expertise across multiple industry verticals,
                  allowing us to understand the specific talent requirements and
                  business language of diverse sectors.
                </p>
              </div>
            </div>
            <Button
              onClick={scrollToCaseStudies}
              className="bg-corporate-secondary text-white hover:bg-white/90 hover:text-corporate-secondary shadow-lg shadow-red-950/20"
            >
              See Our Impact Stories
            </Button>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {industryIcons.map((industry, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="bg-corporate-accent/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center border border-white/10 hover:bg-white/20 transition-colors"
                >
                  <span className="text-4xl mb-3">{industry.icon}</span>
                  <span className="text-sm font-medium text-corporate-black">
                    {industry.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
