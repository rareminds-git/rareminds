import "owl.carousel/dist/assets/owl.carousel.css";
import { useNavigate } from "react-router-dom";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { Helmet } from "react-helmet";

const CaseStudies = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  const { userType } = useParams();
  const [pageData, setPageData] = useState<any>({});
  const [content, setContent] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      await axios
        .get(`${import.meta.env.VITE_API_URL}${userType}/case-studies`)
        .then((res) => {
          setPageData(res.data.pageData);
          setContent(res.data.studyData);
        });
    }

    getData();
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageData?.MetaTitle}</title>
        <meta name="description" content={pageData?.MetaDescription} />
        <meta name="keywords" content={pageData?.MetaKeywords} />
        <meta property="og:title" content={pageData?.OGTitle} />
        <meta property="og:description" content={pageData?.OGDescription} />
      </Helmet>
      <section className="xl:px-28 lg:px-24 md:px-20 px-8 xl:pb-16 lg:pb-12 md:pb-8 pb-4 xl:py-16 lg:py-12 md:py-8 py-8">
        <div className="flex">
          <div className="grid">
            <h1 className="lg:mb-8 mt-10 mb-8 text-3xl text-left font-bold lg:text-5xl">
              {pageData?.Heading1}
            </h1>
            {/* <p className="text-2xl mb-20">{content?.Description}</p> */}
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          {content.map((ele, index) => (
            <div
              key={index}
              className={`cursor-pointer md:my-4 ${
                // Adjust column span based on row pattern
                index % 4 === 0 || index % 4 === 3
                  ? "col-span-2" // 60% width for large image in odd rows
                  : "col-span-3" // 40% width for small image in odd rows
              }`}
              onClick={() => navigate(`/${ele.ContentSlug}`)}
            >
              <img
                src={`/images/${ele.Image1}`}
                width="100%"
                className={`rounded-xl object-cover ${
                  index % 4 === 0 || index % 4 === 3
                    ? "xl:min-h-[250px] xl:max-h-[250px]" // Large image height
                    : "xl:min-h-[400px] xl:max-h-[400px]" // Small image height
                }`}
                alt={ele.Heading1}
              />

              <h4 className="font-bold font-Syne lg:text-2xl mt-5 text-sm text-red-500">
                {ele.Heading1}
              </h4>
              <p className="text-sm">{ele.Heading2}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
