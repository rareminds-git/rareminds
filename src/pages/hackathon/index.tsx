import "owl.carousel/dist/assets/owl.carousel.css";
import { useNavigate } from "react-router-dom";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useMediaQuery } from "react-responsive";
import Pagination from "@/common/Pagination";
import moment from "moment";
import axios from "axios";

const PageSize = 10;

const Events = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  const navigate = useNavigate();
  const [pageData, setPageData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    async function getPageData() {
      await axios.get(`${import.meta.env.VITE_API_URL}events`).then((res) => {
        setPageData(res.data.eventsData);
      });
    }

    getPageData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pageData?.slice(indexOfFirstPost, indexOfLastPost);

  console.log("page data", currentPosts);

  return (
    <>
      <section className="xl:px-28 lg:px-24 md:px-20 px-8 xl:pb-16 lg:pb-12 md:pb-8 pb-4 xl:py-16 lg:py-12 md:py-8 py-8 relative font-Syne">
        <div className="flex">
          <div className="grid space-y-10">
            <h1 className="mb-20 text-3xl text-left font-bold md:text-5xl">
              Events
            </h1>
            {/* <p className="text-2xl mb-20">{content?.Description}</p> */}
          </div>
        </div>

        <div className="grid grid-cols-1 mb-20">
          <div
            className="cursor-pointer"
            onClick={() =>
              window.open(
                `${import.meta.env.VITE_PUBLIC_URL}${currentPosts && currentPosts[0].ContentSlug}`,
                "_self"
              )
            }
          >
            <img
              src={`${import.meta.env.VITE_API_URL}uploads/${currentPosts && currentPosts[0].Image1}`}
              width={"100%"}
              className="rounded-xl object-cover max-h-[300px]"
            />

            <h4
              className="font-Syne md:text-[26px] leading-[31.2px] mt-5 my-3 text-sm text-black font-bold"
              dangerouslySetInnerHTML={{
                __html: currentPosts && currentPosts[0].Heading1,
              }}
            />
            <p
              className="text-[16px] leading-[24px] font-Syne my-3 line-clamp-2 font-normal"
              dangerouslySetInnerHTML={{
                __html: currentPosts && currentPosts[0].Heading2,
              }}
            />
            <p className="text-[16px] leading-[21.76px] my-3 font-[Sentient]">
              {moment(currentPosts && currentPosts[0].EventDate).format(
                "DD MMM YYYY"
              )}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          {currentPosts?.slice(1).map((ele, index) => (
            <div
              key={index}
              className={`cursor-pointer md:my-4 ${
                // Adjust column span based on row pattern
                index % 4 === 0 || index % 4 === 3
                  ? "col-span-2" // 60% width for large image in odd rows
                  : "col-span-3" // 40% width for small image in odd rows
              }`}
              onClick={() => window.open(`/${ele.ContentSlug}`, "_self")}
            >
              <img
                src={`${import.meta.env.VITE_API_URL}uploads/${ele.Image1}`}
                width="100%"
                className={`rounded-xl object-cover ${
                  index % 4 === 0 || index % 4 === 3
                    ? "xl:min-h-[250px] xl:max-h-[250px]" // Large image height
                    : "xl:min-h-[400px] xl:max-h-[400px]" // Small image height
                }`}
                alt={ele.Heading1}
              />

              <h4
                className="font-Syne md:text-[26px] leading-[31.2px] mt-5 my-3 text-sm text-black font-bold"
                dangerouslySetInnerHTML={{
                  __html: ele.Heading1,
                }}
              />
              <p
                className="text-[16px] leading-[24px] font-Syne my-3 line-clamp-2 font-normal"
                dangerouslySetInnerHTML={{
                  __html: ele.Heading2,
                }}
              />
              <p className="text-[16px] leading-[21.76px] my-3 font-[Sentient]">
                {moment(ele.CreatedOn).format("DD MMM YYYY")}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute sm:bottom-0 md:bottom-8 right-10">
          <Pagination
            length={pageData?.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            handlePagination={handlePagination}
          />
        </div>
      </section>
    </>
  );
};

export default Events;
