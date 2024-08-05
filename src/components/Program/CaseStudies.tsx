import "owl.carousel/dist/assets/owl.carousel.css";
import { useNavigate } from "react-router-dom";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useMediaQuery } from "react-responsive";

const CaseStudies = ({ pageData, ctaContent, content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const navigate = useNavigate();
  return (
    <>
      <section className="lg:px-20 px-10 py-10">
        <div className="flex">
          <div className="grid">
            <h1 className="lg:mb-20 lg:mt-20 mt-10 text-3xl text-left font-bold lg:text-5xl">
              {pageData?.PageName}
            </h1>
            {/* <p className="text-2xl mb-20">{content?.Description}</p> */}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {content.map((ele: any) => {
            return (
              <div
                className="cursor-pointer"
                onClick={() => navigate(`/case-studies/${ele.PageSlug}`)}
              >
                <img
                  src={`/images/${ele.Image1}`}
                  width={"100%"}
                  alt={ele.Heading1}
                />

                <h4 className="font-bold font-Syne lg:text-2xl mt-5 text-sm text-red-500">
                  {ele.Heading1}
                </h4>
                <p className="text-sm">{ele.Heading2}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
