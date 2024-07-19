import WhyUsImg from "../../assets/images/whyus.svg";

const WhyUs = ({ content }) => {
  return (
    <>
      <section className="md:px-28 px-8 bg-[#cabe9e1f] py-10 why-us-block font-Inter">
        <div className="flex items-start">
          <div className="grid md:space-y-10 place-items-start">
            <h2 className="font-bold md:text-5xl text-2xl font-[Sentient-Bold]">
              {content?.Heading1}
            </h2>

            <p
              className="mb-4 mt-0 ml-0 md:text-4xl text-black-300 text-2xl font-[Sentient-Regular]"
              dangerouslySetInnerHTML={{
                __html: content?.Description,
              }}
            ></p>
            <p className="mb-4 mt-0 md:text-2xl font-Syne text-xl ml-0 font-bold text-black-200">
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
