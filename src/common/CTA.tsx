import { useNavigate } from "react-router-dom";
import NortgImg from "../../public/images/north.svg";

const CTA = ({ content }) => {
  const navigate = useNavigate();
  return (
    <>
      <section className="cursor-pointer">
        <div
          onClick={() => navigate("/unlock-your-potential")}
          className="grid space-y-10 md:grid-cols-3 my-20 md:mx-32 mx-12 place-items-center border-y-[#FF2C2C] border-2 border-x-0"
        >
          <h3 className="md:col-span-3 mb-4 text-left mt-4 font-Syne font-bold inline-block md:text-5xl text-[#FF2C2C] md:mx-8 text-xl py-4 px-4 md:px-4 md:py-12">
            Form Fill: Unlock Your Potential!
            <span className="inline-block ml-8">
              <img src={NortgImg} />
            </span>
          </h3>
        </div>
      </section>
    </>
  );
};

export default CTA;
