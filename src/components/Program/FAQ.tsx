import { useMediaQuery } from "react-responsive";
import CTA from "@/common/CTA";

const FAQ = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });
  return (
    <>
      <section className="md:px-20 px-10 py-10">
        <div className="grid space-y-10">
          <h3 className="md:mt-20 text-3xl text-center justify-items-center justify-center font-semibold md:text-4xl text-red-400">
            FAQs
          </h3>
          <p className="justify-items-center text-center">
            Some of the answers to our most frequently asked questions for
            Institute Programs.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default FAQ;
