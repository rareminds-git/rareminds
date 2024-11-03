import React, { useEffect, useState } from "react";
import AuthorImg from "../../assets/images/author-image.svg";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import CTA from "@/common/CTA";
import moment from "moment";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blogData, setData] = useState<any>({});

  useEffect(() => {
    async function getData() {
      await axios
        .get(`${import.meta.env.VITE_API_URL}blogs/${slug}`)
        .then((res) => {
          setData(res.data);
        });
    }

    getData();
  }, []);

  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  return (
    <>
      <Helmet>
        <title>{blogData?.blogData?.MetaTitle}</title>
        <meta
          name="description"
          content={blogData?.blogData?.MetaDescription}
        />
        <meta name="keywords" content={blogData?.blogData?.MetaKeywords} />
        <meta property="og:title" content={blogData?.blogData?.OGTitle} />
        <meta
          property="og:description"
          content={blogData?.blogData?.OGDescription}
        />
      </Helmet>
      <div className="grid w-full min-h-screen xl:px-28 lg:px-20 md:px-16 px-8 xl:pb-16 lg:pb-16 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-8">
        <section className="font-Syne">
          <h1 className="lg:text-[48px] text-[24px] lg:leading-[62px] text-4xl row-span-1 place-items-start font-bold capitalize">
            {blogData?.blogData?.Heading1}
          </h1>

          <div className="grid md:grid-cols-3 sm:grid-cols-1 xl:grid-cols-3 md:grid-rows-1 sm:grid-rows-2 border-b-0 md:border-b-2 md:border-black border-0 mb-3 md:mb-5 py-1">
            <div className="col-span-1 md:col-span-2 xl:col-span-2 flex items-center lg:w-[60%] xl:w-[45%] md:w-[60%]">
              <img
                src={AuthorImg}
                height="100"
                width="100"
                className="rounded-full mr-2"
              />
              <div className="flex flex-col">
                <h3>The Art of Gaming</h3>
                <p className="text-gray-500">Social Media Manager</p>
              </div>
            </div>
            <h4 className="md:text-right text-[#FF2C2C] row-span-1 md:text-[15px] col-span-1 xl:col-span-1 md:my-6 sm:my-2 sm:border-t-2 sm:border-black md:border-0 border-0 sm:py-4">
              Published:{" "}
              {moment(blogData?.blogData?.CreatedOn).format("MMM Do YYYY")}
            </h4>
          </div>

          <div className="rounded-md">
            <img
              src={`${import.meta.env.VITE_API_URL}uploads/${blogData?.blogData?.Image1}`}
              className="rounded-lg text-center align-middle justify-center max-h-[430px] w-full"
            />
          </div>
          <div className="grid grid-cols-1 grid-flow-row gap-4">
            {blogData?.blogDetails?.map((ele: any) => {
              return (
                <div className="row-span-1 mt-16" key={ele.id}>
                  <p
                    className="mt-4 md:mr-20 mr-4 text-[16px] leading-[21.76px] font-[Syne] font-light BlogDetail"
                    dangerouslySetInnerHTML={{
                      __html: parse(ele.ContentDescription),
                    }}
                  ></p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* <CTA content={""} /> */}
    </>
  );
};

export default BlogDetail;
