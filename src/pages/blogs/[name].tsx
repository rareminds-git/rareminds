import React, { useEffect, useState } from "react";
import ProgramImg from "../../assets/images/programImg.svg";
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

          <div className="grid md:grid-cols-3 sm:grid-cols-1 md:grid-rows-1 sm:grid-rows-2 border-b-2 md:border-black mb-10 py-5">
            <div className="col-span-1 md:col-span-2 xl:col-span-1 inline-block lg:w-[60%] xl:w-[45%] md:w-[60%]">
              <img
                src="https://icons.veryicon.com/png/o/healthcate-medical/orange-particle/author-2.png"
                height="75"
                width="75"
                className="rounded-full border-4 float-left"
              />

              <h3 className="float-left mx-2 my-2">The Art of Gaming</h3>
              <p className="float-left mx-2 my-2 xxl:my-1 text-gray-500">
                Social Media Manager
              </p>
            </div>
            <h4 className="md:text-right text-red-600 row-span-1 md:text-[15px] col-span-1 md:my-6 sm:my-2 sm:border-t-2 sm:border-black md:border-0 sm:py-4">
              Published:{" "}
              {moment(blogData?.blogData?.CreatedOn).format("MMM Do YYYY")}
            </h4>
          </div>

          <div className="rounded-md">
            <img
              src={`${import.meta.env.VITE_API_URL}uploads/${blogData?.blogData?.Image1}`}
              className="rounded-lg text-center align-middle justify-center h-96 w-full h-full"
            />
          </div>
          <div className="grid grid-cols-1 grid-flow-row gap-4">
            {/* <div className="grid grid-flow-row gap-4"> */}
            {blogData?.blogDetails?.map((ele: any) => {
              return (
                <div className="row-span-1 mt-16">
                  <p
                    className="mt-4 md:mr-20 mr-4 text-[16px] leading-[21.76px] font-[Syne] font-light BlogDetail"
                    dangerouslySetInnerHTML={{
                      __html: parse(ele.ContentDescription),
                    }}
                  ></p>
                </div>
              );
            })}
            {/* </div> */}
          </div>
        </section>
      </div>

      {/* <CTA content={""} /> */}
    </>
  );
};

export default BlogDetail;
