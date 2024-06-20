import CTA from "@/common/CTA";
import WhyUsImg from "../../assets/images/whyus.svg";

const ContactUs = ({ content, ctaContent, pageData }) => {
  console.log("page data", pageData);
  return (
    <>
      <section className="px-10 md:mt-24 mt-12 py-20 font-Inter">
        <div className="flex items-start px-32">
          <div className="grid space-y-10 place-items-start">
            <h2 className="font-bold text-5xl">{pageData?.PageSubTitle}</h2>
          </div>
        </div>

        <CTA content={ctaContent} />

        <div className="flex">
          <div className="my-4 place-items-start">
            {content.map((ele) => {
              return (
                <>
                  <div className="px-64">
                    <h3 className="text-red-400 font-bold text-2xl">
                      {ele.Heading1}
                    </h3>
                    <p className="text-black-400 font-light">{ele.Heading2}</p>
                  </div>

                  <div className="container md:px-64">
                    <div className="grid grid-cols-2 gap-4 md:py-12">
                      <div className="grid">
                        <div className="md:col-span-6 col-span-9">
                          <h3 className=" md:text-xl text-xl font-bold">
                            {ele.SubHeading1}
                          </h3>
                          <h3 className=" md:text-xl text-xl font-light">
                            {ele.Description}
                          </h3>
                        </div>
                      </div>
                      <div className="grid place-items-end">
                        <div className="md-col-span-6 col-span-3 place-items-end">
                          <h3 className=" md:text-xl text-xl text-black-400 font-Syne">
                            {ele.Address1 || ele.Contact1}
                          </h3>
                          <h3 className=" md:text-xl text-xl text-black-400 font-Syne">
                            {ele.Contact2}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="grid grid-cols-2 gap-4 md:py-12">
                      <div className="grid">
                        <div className="md:col-span-6 col-span-9">
                          <h3 className=" md:text-xl text-xl font-bold">
                            {ele.SubHeading2}
                          </h3>
                        </div>
                      </div>
                      <div className="grid place-items-end">
                        <div className="md-col-span-6 col-span-3 place-items-end">
                          <h3 className=" md:text-xl text-xl text-black-400 font-Syne">
                            {ele.Address2 || ele.EmailAddress}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-red-400 py-8">
            Spot us on the map
          </h3>
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
