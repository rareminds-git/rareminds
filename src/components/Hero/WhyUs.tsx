import WhyUsImg from "../../assets/images/whyus-home.webp";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const WhyUs = ({ content }) => {
  const navigate = useNavigate();

  return (
    <>
      <section className=" bg-[#cabe9e1f] xl:px-28 lg:px-20 md:px-16 px-8 xl:pb-16 lg:pb-16 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-8 why-us-block">
        <div className="flex items-start">
          <div className="grid place-items-start">
            <h2 className="lg:font-bold lg:text-[50px] lg:leading-[83.5px] text-[22px] leading-[28px] font-bold font-playfair">
              {content?.Heading1}
            </h2>

            <p
              className="mb-2 mt-0 ml-0 lg:text-[50px] lg:leading-[68px] text-[22px] leading-[28px] font-normal text-black lg:font-normal text-2xl font-playfair"
              dangerouslySetInnerHTML={{
                __html: parse(content?.Description),
              }}
            ></p>
            <p
              onClick={() => navigate(`/about`)}
              className="mb-4 mt-0 lg:text-[24px] lg:leading-[71px] text-[14px] leading-[20px] cursor-pointer font-playfair text-xl ml-0 font-bold text-black-200"
            >
              Read more about What we do
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="grid space-y-10 place-items-end lg:grid-cols-2">
            <div className="my-4 place-items-start"></div>

            <div className="my-4 place-items-start why-us-img">
              <img src={WhyUsImg} className="lg:col-span-8" alt="Why Us" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
