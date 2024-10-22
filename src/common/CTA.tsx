import { useNavigate } from "react-router-dom";
import NortgImg from "../../public/images/north.svg";

const CTA = ({ content }) => {
  const navigate = useNavigate();
  return (
    <>
      <section className="cursor-pointer xl:pt-0">
        <div
          onClick={() => navigate("/unlock-your-potential")}
          className="grid space-y-10 lg:grid-cols-3 my-12 md:my-10 md:mx-20 mx-48 place-items-center border-y-[#FF2C2C] border-2 border-x-0"
        >
          <h3 className="lg:col-span-3 mb-4 relative text-left mt-4 font-Syne font-bold inline-block lg:text-[36px] lg:leading-[58px] text-[#FF2C2C] lg:mx-8 text-[22px] leading-[28.4px] py-4 px-12 lg:px-4 lg:py-12">
            Form Fill: Unlock Your Potential!
            <span className="inline-block ml-2 lg:ml-20 xxl:ml-8 absolute lg:right-[-30px] xxl:right-[-80px] lg:top-[3.5rem] xxl:top-[2.5rem] top-[2.2rem] md:top-[0.75rem] h-[100%] xxl:w-[100px] w-[40px]">
              <img src={NortgImg} />
            </span>
          </h3>
        </div>
      </section>
    </>
  );
};

export default CTA;
