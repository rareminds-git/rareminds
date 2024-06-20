import WhyUsImg from "../../assets/images/whyus.svg";

const WhyUs = ({ content }) => {
  return (
    <>
      <section className="px-10 md:mt-24 mt-12 bg-[#cabe9e1f] py-20 why-us-block font-Inter">
        <div className="flex items-start">
          <div className="grid space-y-10 place-items-start">
            <h2 className="font-bold text-5xl">{content?.Heading1}</h2>, <br />
            <p
              className="mb-4 mt-0 text-2xl md:mx-20 md:mr-64 ml-0 md:text-2xl text-black-300"
              dangerouslySetInnerHTML={{
                __html: content?.Description,
              }}
            ></p>
            <p className="mb-4 mt-0 md:text-3xl text-xl md:mx-20 md:mr-64 ml-0 font-bold text-black-200">
              Read more about What we do
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="grid space-y-10 place-items-end md:grid-cols-2">
            <div className="my-4 place-items-start"></div>

            <div className="my-4 place-items-start why-us-img">
              <img src={WhyUsImg} className="md:col-span-8" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
