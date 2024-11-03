import { useNavigate } from "react-router-dom";
import NortgImg from "../../public/images/north.svg";
import { useMediaQuery } from "react-responsive";

const CTA = ({ content, contactPage }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  return (
    <>
      <section className="items-center cursor-pointer mx-2 md:mx-12 lg:mx-8 xl:mx-28 xl:pb-24 lg:pb-16 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-8">
        <div
          onClick={() => navigate("/unlock-your-potential")}
          className="border-y-2 border-[#FF2C2C] px-8 py-2 md:px-2 md:py-6 w-full sm:w-auto max-w-xs sm:max-w-none text-center sm:text-left"
        >
          <h3 className="font-bold font-Syne md:text-center lg:text-[36px] lg:leading-[58px] text-[#FF2C2C] text-[21.4px] leading-[28.4px] py-4 px-8 lg:py-6">
            <span className="block sm:inline">
              Form Fill: Unlock
              <br className="md:hidden" /> Your Potential!
            </span>
            <span className="inline-block ml-2 align-middle">
              <img
                src={NortgImg}
                alt="Arrow"
                className="w-[20px] md:w-[30px] h-auto"
              />
            </span>
          </h3>
        </div>
      </section>
    </>
  );
};

export default CTA;
