import { useNavigate } from "react-router-dom";
import NortgImg from "../../public/images/north.svg";

const CTA = ({ content, contactPage }) => {
  const navigate = useNavigate();
  return (
    <>
      <section
        className={
          !contactPage
            ? `xl:px-28 lg:px-20 md:px-16 px-8 xl:pb-16 lg:pb-12 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-12 cursor-pointer`
            : "py-10"
        }
      >
        <div
          onClick={() => navigate("/unlock-your-potential")}
          className="grid space-y-10 lg:grid-cols-3 place-items-center border-y-[#FF2C2C] border-2 border-x-0 "
        >
          <h3 className="lg:col-span-3 mb-4 cta-heading relative text-left mt-4 font-Syne font-bold inline-block lg:text-[36px] lg:leading-[58px] text-[#FF2C2C] text-[22px] leading-[28.4px] py-4 px-12 lg:py-6">
            <span className="inline-block">
              {" "}
              Form Fill: Unlock Your Potential!{" "}
            </span>
            <span className="inline-block ml-2 lg:ml-2 xxl:ml-2 relative md:top-[0.75rem] h-[100%] xxl:w-[50px] w-[40px]">
              <img src={NortgImg} />
            </span>
          </h3>
        </div>
      </section>
    </>
  );
};

export default CTA;
