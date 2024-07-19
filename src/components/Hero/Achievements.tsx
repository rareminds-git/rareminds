import { useMediaQuery } from "react-responsive";

const Achievements = ({ content, achievements }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      <section className="md:px-10 md:py-20 place-items-center font-Syne">
        <div className="items-center px-5 py-5">
          <p className="mt-0 font-bold text-center ml-0 md:text-5xl text-2xl py-10 text-black-500 font-[Poppins-Regular]">
            {content[0]?.Heading1}
          </p>
          <p className="md:text-2xl text-xl md:mt-2 md:px-12 mb-20 md:text-center font-[Poppins-Regular]">
            {content[0]?.Description}
          </p>
        </div>
        {!isMobile ? (
          <>
            {achievements?.map((ele: any) => {
              return (
                <div className="container-fluid md:px-12">
                  <div className="grid grid-cols-2 gap-4 md:px-12 md:py-12 px-10 border-y-black border-2 border-x-0">
                    <div className="grid">
                      <div className="md:col-span-6 col-span-9">
                        <h3 className=" md:text-5xl text-2xl font-bold">
                          {ele.ContentTitle}
                        </h3>
                        <p className="text-xl mt-5 font-Inter">
                          {ele.ContentDescription}
                        </p>
                      </div>
                    </div>
                    <div className="grid place-items-end">
                      <div className="md-col-span-6 col-span-3 place-items-end">
                        <h3 className=" md:text-9xl text-2xl text-blue-400 font-Inter">
                          {ele.ContentSubDescription}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {achievements?.map((ele: any) => {
              return (
                <div className="container px-2">
                  <div className="grid grid-rows-3 grid-flow-col py-5 border-y-black border-2 border-x-0 px-2">
                    <div className="col-span-2 row-span-1">
                      <h3 className=" md:text-5xl text-xl font-bold">
                        {ele.ContentTitle}
                      </h3>
                    </div>
                    <div className="row-span-2 col-span-2">
                      <p className="text-sm mt-2 font-Inter">
                        {ele.ContentDescription}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <h3 className=" md:text-8xl text-4xl text-blue-400 font-Inter">
                        {ele.ContentSubDescription}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </section>
    </>
  );
};

export default Achievements;
