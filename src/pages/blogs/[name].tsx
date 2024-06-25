import React, { useEffect, useState } from "react";
import ProgramImg from "../../assets/images/programImg.svg";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import CTA from "@/common/CTA";
import moment from "moment";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blogData, setData] = useState<any>({});

  useEffect(() => {
    async function getData() {
      await axios.get(`http://localhost:6069/blogs/${slug}`).then((res) => {
        setData(res.data);
      });
    }

    getData();
  }, []);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      <div className="grid w-full min-h-screen md:py-12">
        <section className="md:px-20 px-10 md:py-10 font-Syne">
          <div className="grid grid-cols-1 grid-rows-2">
            <h1 className="md:text-4xl text-4xl row-span-1 place-items-start font-bold capitalize">
              {blogData?.blogData?.Heading1}
            </h1>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 border-b-2 border-black mb-10 p-5">
            <div className="col-span-1 inline-block">
              <img
                src="https://icons.veryicon.com/png/o/healthcate-medical/orange-particle/author-2.png"
                height="75"
                width="75"
                className="rounded-full border-4 float-left"
              />

              <h3 className="float-left mx-2 my-2">The Art of Gaming</h3>
              <p className="float-left mx-2 my-2 text-gray-500">
                Social Media Manager
              </p>
            </div>
            <div className="grid grid-cols-subgrid col-span-1"></div>
            <h4 className="text-right text-red-600 my-6">
              Published:{" "}
              {moment(blogData?.blogData?.CreatedOn).format("MMM Do YYYY")}
            </h4>
          </div>

          <div className="rounded-md">
            <img src={`${blogData?.blogData?.Image1}`} />
          </div>
          <div className="grid grid-cols-1">
            <div className="grid grid-flow-row gap-4">
              {blogData?.blogDetails?.map((ele: any) => {
                return (
                  <div className="row-span-1 mt-16">
                    <p
                      className="mt-4 mr-20 BlogDetail"
                      dangerouslySetInnerHTML={{
                        __html: ele.ContentDescription,
                      }}
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* <CTA content={""} /> */}
    </>
  );
};

export default BlogDetail;
