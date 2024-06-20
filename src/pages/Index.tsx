import React, { useState, useEffect } from "react";
import CorporateBanner from "../assets/images/banners/CorporateBanner.png";
import GovernmentBanner from "../assets/images/banners/GovernmentBanner.png";
import InstitutionsBanner from "../assets/images/banners/InstitutionBanner.png";
import SchoolsBanner from "../assets/images/banners/SchoolsBanner.png";
import Logo from "../assets/images/logo.svg";
import { AppDispatch } from "@/redux/store";
import { selectBanner } from "@/redux/features/appSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

const Index = () => {
  const [activeBanner, setActiveBanner] = useState("corporate");

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

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
          : SchoolsBanner;

  const redirectToPage = (slug: string) => {
    setTimeout(() => {
      navigate(`/${slug}`);
    }, 200);
  };

  useEffect(() => {
    async function getPages() {
      await axios.get("http://localhost:6069/pages").then((res) => {
        let homePages = res.data.filter((el: any) => {
          return el.PageType === 1;
        });
        setPages(homePages);
      });
    }

    getPages();
  }, []);

  return (
    <>
      {!isMobile ? (
        <div className="banner" style={{ backgroundImage: `url(${Baner})` }}>
          <div className="banner-grid h-screen">
            <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-0 h-screen">
              <div className="mt-8 mx-4">
                <img src={Logo} />
              </div>
              <div className="p-12 cursor-pointer">
                <h3 className="text-white hidden">For Government</h3>
                <p className="mt-24 text-white hidden">
                  Where giants excel and aspirations become a reality
                </p>
              </div>
              {pages.map((ele: any) => {
                return (
                  <div
                    className={`p-12 cursor-pointer ${activeBanner === ele.PageSlug.replace("/", "") && "bannerSelected"} border-white border border-t-0 border-r-0`}
                    onClick={() => {
                      setActiveBanner(ele.PageSlug.replace("/", "")),
                        dispatch(selectBanner(ele.PageSlug.replace("/", "")));
                      redirectToPage(ele.PageSlug.replace("/", ""));
                    }}
                    onMouseOver={() => {
                      setActiveBanner(ele.PageSlug.replace("/", ""));
                    }}
                  >
                    <h3 className="text-white font-extrabold">
                      For {ele.PageName}
                    </h3>
                    <p className="mt-32 text-white font-normal">
                      {ele.PageSubTitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-8 mx-auto flex justify-center items-center">
            <img src={Logo} />
          </div>
          <div className="banner">
            <div className="banner-grid h-screen">
              <div className="grid grid-rows-4 grid-cols-1 grid-flow-col gap-6 h-screen">
                {pages.map((ele: any) => {
                  return (
                    <div
                      className={`banner`}
                      style={{
                        backgroundImage: `url(${ele.PageSlug === "/corporate" ? CorporateBanner : ele.PageSlug === "/institutions" ? InstitutionsBanner : ele.PageSlug === "/government" ? GovernmentBanner : SchoolsBanner})`,
                      }}
                      onClick={() => {
                        redirectToPage(ele.PageSlug.replace("/", ""));
                      }}
                    >
                      <h3 className="text-white font-extrabold">
                        For {ele.PageName}
                      </h3>
                      <p className="mt-24 text-white font-normal">
                        {ele.PageSubTitle}
                      </p>
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
