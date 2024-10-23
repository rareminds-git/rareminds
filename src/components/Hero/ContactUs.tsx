import CTA from "@/common/CTA";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";

const ContactUs = ({ content, ctaContent, pageData }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });
  return (
    <>
      <Helmet>
        <title>{pageData?.MetaTitle}</title>
        <meta name="description" content={pageData?.MetaDescription} />
        <meta name="keywords" content={pageData?.MetaKeywords} />
        <meta property="og:title" content={pageData?.OGTitle} />
        <meta property="og:description" content={pageData?.OGDescription} />
      </Helmet>
      <section className="px-12 md:mt-24 mt-12 md:py-20 py-24 font-Syne mb-10">
        <div className="flex items-start md:px-12">
          <div className="grid space-y-10 place-items-start">
            <h1 className="font-bold text-5xl sm:text-3xl">
              {pageData?.PageSubTitle}
            </h1>
          </div>
        </div>

        {!isMobile && <CTA content={ctaContent} />}

        <div className="flex md:px-10 xl:px-32">
          <div className="my-4 place-items-start">
            {content.map((ele, index) => {
              return (
                <>
                  <div className="md:px-10 xl:px-32 my-10">
                    <p
                      className="text-[#FF2C2C] font-bold font-Syne text-[36px] leading-[43.2px] "
                      dangerouslySetInnerHTML={{
                        __html: ele.Heading1,
                      }}
                    />
                    <p
                      className="text-black-400 py-2 font-normal font-Syne text-[18px] leading-[21.6px]"
                      dangerouslySetInnerHTML={{
                        __html: ele.Heading2,
                      }}
                    />
                  </div>

                  <div className="container md:px-12 xl:px-32">
                    <div className="grid grid-cols-2 gap-4 md:py-12">
                      <div className="grid">
                        <div className="md:col-span-6 col-span-9">
                          <p
                            className="md:text-[20px] md:leading-[24px] text-xl font-semibold"
                            dangerouslySetInnerHTML={{
                              __html: ele.SubHeading1,
                            }}
                          />
                          <p
                            className=" md:text-[20px] md:leading-[24px] text-xl font-normal"
                            dangerouslySetInnerHTML={{
                              __html: ele.SubHeading2,
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid place-items-end my-5">
                        <div className="md-col-span-6 col-span-3 place-items-end">
                          <p
                            className=" md:text-xl text-xl text-black-400 font-Syne"
                            dangerouslySetInnerHTML={{
                              __html: ele.Address1 || ele.Contact1,
                            }}
                          />

                          <p
                            className=" md:text-xl text-xl text-black-400 font-Syne"
                            dangerouslySetInnerHTML={{
                              __html: ele.Contact2,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="text-black" />
                    <div className="grid grid-cols-2 gap-4 md:py-12">
                      <div className="grid my-5">
                        <div className="md:col-span-6 col-span-9">
                          <p
                            className=" md:text-xl text-xl font-bold"
                            dangerouslySetInnerHTML={{
                              __html: ele.subHeading2,
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid place-items-end my-5">
                        <div className="md-col-span-6 col-span-3 place-items-end">
                          <p
                            className=" md:text-xl text-xl text-black-400 font-Syne"
                            dangerouslySetInnerHTML={{
                              __html: ele.Address2 || ele.EmailAddress,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {index === 0 && isMobile && <CTA content={ctaContent} />}
                </>
              );
            })}
          </div>
        </div>
        <div className="md:px-12">
          <h2 className="text-2xl font-bold text-[#FF2C2C] md:py-8">
            Spot us on the map
          </h2>
          <iframe
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=IndiQube%20Octagon%E2%80%A8No.643,%2080ft%20Road,%E2%80%A8Opp.%20Swathi%20Maharaja%20Hotel,%E2%80%A84th%20Block,%20Koramangala,%E2%80%A8Bengaluru,%20Karnataka+(Rareminds)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
