import "owl.carousel/dist/assets/owl.carousel.css";
import { useNavigate } from "react-router-dom";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useMediaQuery } from "react-responsive";
import Pagination from "@/common/Pagination";
import moment from "moment";
import axios from "axios";

const PageSize = 10;

const Events = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
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
      <section className="md:px-20 px-10 py-10 relative font-Syne">
        <div className="flex">
          <div className="grid space-y-10">
            <h1 className="mb-20 mt-20 text-3xl text-left font-bold md:text-5xl">
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
              className="rounded-xl object-cover"
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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {currentPosts?.slice(1).map((ele) => {
            return (
              <div
                className="cursor-pointer sm:my-4 md:max-h-[1200px] md:my-4"
                onClick={() =>
                  window.open(
                    `${import.meta.env.VITE_PUBLIC_URL}${ele.ContentSlug}`,
                    "_self"
                  )
                }
              >
                <img
                  src={`${import.meta.env.VITE_API_URL}uploads/${ele.Image1}`}
                  width={"100%"}
                  className="rounded-xl md:min-h-[500px] md:max-h-[400px] object-cover"
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
                  {moment(ele.EventDate).format("DD MMM YYYY")}
                </p>
              </div>
            );
          })}
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
