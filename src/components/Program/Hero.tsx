import { useMediaQuery } from "react-responsive";
import ProgramImg from "../../assets/images/programImg.svg";

const Hero = ({ name }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      {!isMobile ? (
        <div className="grid w-full min-h-screen md:py-16">
          <section className="md:px-20 px-10 md:py-10">
            <div className="grid grid-cols-1 grid-rows-2">
              <h1 className="md:text-8xl text-2xl row-span-1 py-12 col-span-5 mr-100 place-items-start border-b-2 border-black text-[#FF2C2C] font-bold capitalize">
                {name.replace("-", " ")}
              </h1>

              <p className="text-md row-span-1 capitalize ml-72 mt-12">
                At Rareminds, we champion the belief that personal growth is the
                cornerstone of professional success. Talent development for
                individuals is not just an investment in your career; it's an
                investment in your future. Here's why it's crucial:
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="rounded-md">
                <img src={ProgramImg} className="col-span-5" width={"400px"} />
              </div>

              <div className="grid grid-flow-row gap-8">
                <div className="row-span-1 mt-36">
                  <h3 className="text-4xl font-bold font-Syne">
                    Staying Relevant:
                  </h3>
                  <p className="mt-4">
                    In an era where industries evolve rapidly, staying relevant
                    is key. Talent development ensures you keep pace with the
                    latest trends, technologies, and methodologies, securing
                    your place in the future workforce.
                  </p>
                </div>
                <div className="row-span-1 mt-1">
                  <h3 className="text-4xl font-bold font-Syne">
                    Career Advancement:
                  </h3>
                  <p className="mt-4">
                    Whether you're aiming for a promotion, a career shift, or
                    entrepreneurship, talent development opens doors to new
                    opportunities. It equips you with the skills and knowledge
                    necessary to excel and stand out in a competitive job
                    market.
                  </p>
                </div>
                <div className="row-span-1 mt-1">
                  <h3 className="text-4xl font-bold font-Syne">
                    Personal Fulfillment:
                  </h3>
                  <p className="mt-4">
                    Beyond professional achievements, talent development
                    contributes to personal fulfillment. Learning new skills and
                    overcoming challenges boosts confidence, ignites passion,
                    and enriches your life both inside and outside the
                    workplace.
                  </p>
                </div>
                <div className="row-span-1 mt-1">
                  <h3 className="text-4xl font-bold font-Syne">
                    Adaptability:
                  </h3>
                  <p className="mt-4">
                    The ability to adapt is invaluable in today's dynamic world.
                    Talent development fosters a mindset of continuous learning,
                    making you more flexible and resilient in the face of
                    change.
                  </p>
                </div>
                <div className="row-span-1 mt-1">
                  <h3 className="text-4xl font-bold font-Syne">
                    Adaptability and Innovation:
                  </h3>
                  <p className="mt-4">
                    Engaging in talent development programs connects you with
                    like-minded professionals and mentors. These networks can be
                    a powerful resource for career guidance, opportunities, and
                    support.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="grid min-h-screen md:py-16">
          <section className="md:px-20 px-5 md:py-10">
            <h1 className="md:text-8xl text-2xl row-span-1 md:py-12 py-6 col-span-5 mr-96 place-items-start border-b-2 border-black text-[#FF2C2C] font-bold capitalize">
              {name.replace("-", " ")}
            </h1>

            <p className="text-md row-span-1 capitalize mr-36 mb-12 mt-12">
              At Rareminds, we champion the belief that personal growth is the
              cornerstone of professional success. Talent development for
              individuals is not just an investment in your career; it's an
              investment in your future. Here's why it's crucial:
            </p>

            <div className="rounded-md row-span-1">
              <img
                src={ProgramImg}
                className="col-span-5"
                width={"350px"}
                height={"400px"}
              />
            </div>

            <div className="mt-6">
              <h3 className="md:text-4xl text-3xl font-bold font-Syne">
                Staying Relevant:
              </h3>
              <p className="mt-4 mr-32">
                In an era where industries evolve rapidly, staying relevant is
                key. Talent development ensures you keep pace with the latest
                trends, technologies, and methodologies, securing your place in
                the future workforce.
              </p>
            </div>
            <div className="mt-2">
              <h3 className="md:text-4xl text-3xl font-bold font-Syne">
                Career Advancement:
              </h3>
              <p className="mt-4 mr-32">
                Whether you're aiming for a promotion, a career shift, or
                entrepreneurship, talent development opens doors to new
                opportunities. It equips you with the skills and knowledge
                necessary to excel and stand out in a competitive job market.
              </p>
            </div>
            <div className="mt-2">
              <h3 className="md:text-4xl text-3xl font-bold font-Syne">
                Personal Fulfillment:
              </h3>
              <p className="mt-4 mr-32">
                Beyond professional achievements, talent development contributes
                to personal fulfillment. Learning new skills and overcoming
                challenges boosts confidence, ignites passion, and enriches your
                life both inside and outside the workplace.
              </p>
            </div>
            <div className="mt-1">
              <h3 className="md:text-4xl text-3xl font-bold font-Syne">
                Adaptability:
              </h3>
              <p className="mt-4 mr-32">
                The ability to adapt is invaluable in today's dynamic world.
                Talent development fosters a mindset of continuous learning,
                making you more flexible and resilient in the face of change.
              </p>
            </div>
            <div className="mt-1">
              <h3 className="md:text-4xl mr-16 text-3xl font-bold font-Syne">
                Adaptability and Innovation:
              </h3>
              <p className="mt-4 mr-32 mb-8">
                Engaging in talent development programs connects you with
                like-minded professionals and mentors. These networks can be a
                powerful resource for career guidance, opportunities, and
                support.
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Hero;
