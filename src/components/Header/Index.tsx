import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = ({ navbarOpen, setNavbarOpen }) => {
  const [pages, setPages] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getPages() {
      await axios.get("http://13.126.41.32/api/pages").then((res) => {
        const homePages = res.data.filter((el: any) => {
          return el.PageType === 1;
        });
        setPages(homePages);
      });
    }

    getPages();
  }, []);

  const redirectToPage = (slug: string) => {
    localStorage.setItem("currentUserType", slug);
    navigate(`/${slug}`);
  };

  return (
    <header className="w-full fixed top-0 left-0 px-8 py-4 xl:py-[0.5rem] flex z-20 bg-white overflow-hidden">
      <div className="text-white flex-grow z-20">
        <a href="/">
          <img src={Logo} alt="Rareminds" width={211} height={52} />
        </a>
      </div>
      {!navbarOpen && (
        <select
          className="top-nav-dropdown hidden sm:block mt-3 font-[Poppins-Regular] font-light"
          onChange={(e) => redirectToPage(e.target.value)}
        >
          {pages.map((ele: any) => {
            return (
              <option className=" px-8" value={ele.PageSlug.replace("/", "")}>
                {" "}
                For {ele.PageName}
              </option>
            );
          })}
        </select>
      )}
      <button
        className="flex top-0 right-0 z-20 relative w-[56px] h-[56px] pl-4 text-black focus:outline-none"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="absolute w-[56px] transform -translate-x-1/2 -translate-y-1/2 top-1/2">
          <span
            className={`absolute h-0.5 w-[30.76px] bg-black transform transition duration-300 ease-in-out ${
              navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-black transform transition-all duration-200 ease-in-out ${
              navbarOpen
                ? "w-0 opacity-50"
                : "w-[30.76px] delay-200 opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-[30.76px] bg-black transform transition duration-300 ease-in-out ${
              navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
    </header>
  );
};

export default Header;
