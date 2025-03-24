import OwlCarousel from "react-owl-carousel";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store"; // Import Redux store types

const InstitutionServices = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });

  // Fetch services from Redux store
  const services = useSelector((state: RootState) => state.services.services);

  return (
    <section className="xl:px-28 lg:px-20 md:px-16 px-8 xl:pb-16 lg:pb-16 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-8 servicesSection">
      <h2 className="mb-5 text-4xl md:text-5xl md:font-semibold font-semibold text-black text-center">
        Our Services - Your Career, Your Future!
      </h2>
      <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
        At <span className="font-bold text-black">Rareminds</span>, we offer
        everything you need to{" "}
        <span className="font-bold text-black">
          land your dream job, upskill for the future, and earn like a pro
        </span>
        . Our programs are designed to{" "}
        <span className="font-bold text-black">
          match industry demands, boost your confidence, and give you a
          competitive edge
        </span>{" "}
        in today’s job market.
      </p>

      {!isMobile ? (
        <div>
          <div className="flex py-2 gap-5 transition-all">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="bg-red-500 p-8 flex-1 hover:flex-[10] transition-all duration-700 rounded-3xl text-white group h-[276px] flex flex-col cursor-pointer"
                onClick={() =>
                  navigate(
                    `/institutions/services/${service.title.replace(/\s+/g, "-")}`,
                  )
                }
              >
                <h3 className="text-3xl font-semibold my-auto group-hover:my-0">
                  {service.title}
                </h3>
                <p className="hidden group-hover:block text-wrap mt-5">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex py-2 gap-5 transition-all">
            {services.slice(3, 6).map((service) => (
              <div
                key={service.id}
                className="bg-red-500 p-8 flex-1 hover:flex-[10] transition-all duration-700 rounded-3xl text-white group h-[276px] flex flex-col cursor-pointer"
                onClick={() =>
                  navigate(`/institutions/services/${service.title}`)
                }
              >
                <h3 className="text-3xl font-semibold my-auto group-hover:my-0 transition-all duration-700">
                  {service.title}
                </h3>
                <p className="hidden group-hover:block text-wrap mt-5">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="">
          <OwlCarousel
            className="owl-theme"
            nav={true}
            autoplay
            loop
            margin={10}
            items={1.1}
            dots={false}
          >
            {services.map((ele) => {
              return (
                <div
                  className="item my-4 cursor-pointer font-playfair max-h-[300px] min-h-[300px]"
                  onClick={() =>
                    navigate(`/institutions/services/${ele.title}`)
                  }
                >
                  <div className="bg-red-400 text-white p-8 rounded-2xl item-bg">
                    <h3 className="text-3xl font-semibold">{ele.title}</h3>
                    <p className="text-sm my-5">
                      {ele.description.substring(0, 80)}...
                    </p>
                    <p
                      className="font-playfair font-bold text-[16px] mt-8 leading-[21.76px]"
                      onClick={() =>
                        navigate(`/institutions/services/${ele.title}`)
                      }
                    >
                      ..Read More
                    </p>
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      )}
    </section>
  );
};

export default InstitutionServices;
