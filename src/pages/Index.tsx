import React, { useState, useEffect } from "react";
import CorporateBanner from "../assets/images/banners/corporate-landing.webp";
import GovernmentBanner from "../assets/images/banners/GovernmentBanner.png";
import InstitutionsBanner from "../assets/images/banners/InstitutionBanner.png";
import SchoolsBanner from "../assets/images/banners/SchoolsBanner.png";
import Logo from "../assets/images/logo.svg";
import { AppDispatch } from "@/redux/store";
import { selectBanner } from "@/redux/features/appSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import LoaderComponent from "@/components/LoaderComponent";
import { Helmet } from "react-helmet";

const Index = () => {
  const [activeBanner, setActiveBanner] = useState("corporate");

  const [showLoader, setShowLoader] = useState(true);

  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });

  const [pages, setPages] = useState<any[]>([]);

  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();

  let Baner = "";
  Baner =
    activeBanner === "corporate"
      ? CorporateBanner
      : activeBanner === "government"
        ? GovernmentBanner
        : activeBanner === "institutions"
          ? InstitutionsBanner
          : activeBanner === "schools"
            ? SchoolsBanner
            : CorporateBanner;

  const redirectToPage = (slug: string) => {
    setTimeout(() => {
      localStorage.setItem("currentUserType", slug);
      navigate(`/${slug}`);
    }, 200);
  };

  useEffect(() => {
    async function getPages() {
      await axios.get(`${import.meta.env.VITE_API_URL}pages`).then((res) => {
        const homePages = res.data.filter((el: any) => {
          return el.PageType === 1;
        });
        setPages(homePages);
      });
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }

    getPages();
  }, []);

  console.log("active banner", activeBanner);

  return showLoader ? (
    <LoaderComponent />
  ) : (
    <>
      <Helmet>
        <title>
          Rareminds | Empowering Growth Through Innovation Solutions, Applied
          Learning, Redefining Work Experience
        </title>
        <meta
          name="description"
          content="Discover tailored solutions for corporate, government, institutional and school sectors. Rareminds specializes in talent acquisition, management and development."
        />
        <meta
          name="keywords"
          content="tailored solutions, corporate, government, institutional, school, talent acquisition, talent management, talent development"
        />
        <meta
          property="og:title"
          content="Rareminds - Empowering Growth Through Innovative Solutions"
        />
        <meta
          property="og:description"
          content="Rareminds offers tailored solutions for corporate, government, institutional and school sectors. Specializing in talent acquisition, management and development."
        />
      </Helmet>
      {!isMobile ? (
        <div className="banner" style={{ backgroundImage: `url(${Baner})` }}>
          <div className="banner-grid h-screen bg-black opacity-55">
            <div className="grid grid-rows-2 grid-flow-col gap-0 h-screen">
              <div
                className="mt-8 mx-8 row-span-2 md:col-span-2"
                onMouseOver={() => {
                  console.log("mouse over");
                  setActiveBanner("home");
                }}
              >
                <img src={Logo} alt="Rareminds" />
              </div>
              <div
                className="p-12 cursor-pointer row-span-2 md:hidden"
                onMouseOver={() => {
                  console.log("mouse over");
                  setActiveBanner("home");
                }}
              >
                <h3 className="text-white hidden">For Government</h3>
                <p className="mt-24 text-white hidden">
                  Where giants excel and aspirations become a reality
                </p>
              </div>
              {pages.map((ele: any, index: any) => {
                return (
                  <div
                    className={`p-8 cursor-pointer relative ${activeBanner === ele.PageSlug.replace("/", "") && "bannerSelected"} border-white border border-t-0 border-r-0`}
                    onClick={() => {
                      setActiveBanner(ele.PageSlug.replace("/", "")),
                        dispatch(selectBanner(ele.PageSlug.replace("/", "")));
                      redirectToPage(ele.PageSlug.replace("/", ""));
                    }}
                    onMouseOver={() => {
                      setActiveBanner(ele.PageSlug.replace("/", ""));
                    }}
                  >
                    <h3 className="text-white font-bold font-[Poppins-Regular] text-[36px] leading-[38px]">
                      For {ele.PageName}
                    </h3>
                    {activeBanner === ele.PageSlug.replace("/", "") ? (
                      <p
                        className="mt-60 mr-16 text-white font-[Urbanist] text-[20px] leading-[26px] font-semibold absolute bottom-10"
                        dangerouslySetInnerHTML={{
                          __html: ele.PageSubTitle,
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-8 mx-auto flex justify-center items-center rounded-2xl">
            <img src={Logo} alt="Rareminds" />
          </div>
          <div className="banner md:mx-12 rounded-2xl">
            <div className="banner-grid h-screen">
              <div className="grid grid-rows-4 grid-cols-1 grid-flow-col gap-6 h-screen">
                {pages.map((ele: any) => {
                  return (
                    <div
                      className={`banner md:py-12 md:px-4 rounded-2xl`}
                      style={{
                        backgroundImage: `url(${ele.PageSlug === "/corporate" ? CorporateBanner : ele.PageSlug === "/institutions" ? InstitutionsBanner : ele.PageSlug === "/government" ? GovernmentBanner : SchoolsBanner})`,
                      }}
                      onClick={() => {
                        redirectToPage(ele.PageSlug.replace("/", ""));
                      }}
                    >
                      <h3 className="text-white font-extrabold font-[Poppins-Medium] text-2xl">
                        For {ele.PageName}
                      </h3>
                      <p
                        className="xs:mt-10 md:mt-40 sm:mt-20 mt-20 md:text-2xl text-white font-[Poppins-Medium]"
                        dangerouslySetInnerHTML={{
                          __html: ele.PageSubTitle,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
