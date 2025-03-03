import Pagination from "@/common/Pagination";
import moment from "moment";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const PageSize = 10;

const Blogs = ({ pageData, content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(11);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = content?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <section className="xl:px-28 lg:px-24 md:px-20 px-8 xl:pb-16 lg:pb-12 md:pb-8 pb-4 xl:py-16 lg:py-12 md:py-8 py-8 relative">
        <h1 className="text-xl md:text-[70px] leading-[74px] font-medium place-items-start text-[#000000] capitalize">
          {pageData?.PageName}
        </h1>

        <div className="grid grid-cols-1 mt-20 mb-20">
          <div
            className="cursor-pointer"
            onClick={() => navigate(`/blog/${currentPosts[0].PageSlug}`)}
          >
            <img
              src={`${import.meta.env.VITE_API_URL}uploads/${currentPosts[0].Image1}`}
              width={"100%"}
              className="rounded-xl object-cover max-h-[300px]"
            />

            <h4
              className=" md:text-[26px] leading-[31.2px] mt-5 my-3 text-sm text-black font-bold"
              dangerouslySetInnerHTML={{
                __html: currentPosts[0].Heading1,
              }}
            />
            <p
              className="text-[16px] leading-[24px] my-3 line-clamp-2 font-normal"
              dangerouslySetInnerHTML={{
                __html: currentPosts[0].Heading2,
              }}
            />
            <p className="text-[16px] leading-[21.76px] my-3 ">
              {moment(currentPosts[0].CreatedOn).format("DD MMM YYYY")}
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
              onClick={() => navigate(`/blog/${ele.PageSlug}`)}
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
                className=" md:text-[26px] leading-[31.2px] mt-5 my-3 text-sm text-black font-bold"
                dangerouslySetInnerHTML={{
                  __html: ele.Heading1,
                }}
              />
              <p
                className="text-[16px] leading-[24px] my-3 line-clamp-2 font-normal"
                dangerouslySetInnerHTML={{
                  __html: ele.Heading2,
                }}
              />
              <p className="text-[16px] leading-[21.76px] my-3 ">
                {moment(ele.CreatedOn).format("DD MMM YYYY")}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 md:bottom-8  right-10">
          <Pagination
            length={content?.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            handlePagination={handlePagination}
          />
        </div>
      </section>
    </>
  );
};

export default Blogs;
