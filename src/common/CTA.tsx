import { useNavigate } from "react-router-dom";
import NortgImg from "../../public/images/north.svg";

const CTA = ({ content }) => {
  const navigate = useNavigate();
  return (
    <>
      <section className="cursor-pointer xl:pt-0">
        <div
          onClick={() => navigate("/unlock-your-potential")}
          className="grid space-y-10 lg:grid-cols-3 my-12 md:my-20  lg:mx-32 mx-12 sm:mx-4 place-items-center border-y-[#FF2C2C] border-2 border-x-0"
        >
          <h3 className="lg:col-span-3 mb-4 relative text-left mt-4 font-Syne font-bold inline-block lg:text-[50px] lg:leading-[58px] text-[#FF2C2C] lg:mx-8 text-[22px] leading-[28.4px] py-4 px-12 lg:px-4 lg:py-12">
            Form Fill: Unlock Your Potential!
            <span className="inline-block ml-8 absolute top-[2.5rem] h-[100%] w-[100%] ">
              <img src={NortgImg} />
            </span>
          </h3>
        </div>
      </section>
    </>
  );
};

export default CTA;
