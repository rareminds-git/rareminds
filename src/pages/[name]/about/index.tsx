import React, { useEffect, useState } from "react";

import axios from "axios";

import { Helmet } from "react-helmet";

const About = () => {
  const { name, userType } = useParams();
  const [pageData, setPageData] = useState<any>([]);

  const [sections, setSections] = useState<any>([]);

  useEffect(() => {
    async function getPageData() {
      await axios
        .get(`http://13.126.41.32/api/${userType}/about`)
        .then((res) => {
          setPageData(res.data);
        });
    }

    getPageData();
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageData?.pageData?.MetaTitle}</title>
        <meta
          name="description"
          content={pageData?.pageData?.MetaDescription}
        />
        <meta name="keywords" content={pageData?.pageData?.MetaKeywords} />
        <meta property="og:title" content={pageData?.pageData?.OGTitle} />
        <meta
          property="og:description"
          content={pageData?.pageData?.OGDescription}
        />
      </Helmet>

      <section className="md:px-20 px-10 py-10">
        <div className="flex">
          <div className="grid space-y-10">
            <h1 className="mb-20 mt-20 text-3xl text-left font-bold md:text-5xl">
              {pageData?.pageData?.Heading1}
            </h1>
            {/* <p className="text-2xl mb-20">{content?.Description}</p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
