import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = ({ navbarOpen, setNavbarOpen }) => {
  const [pages, setPages] = useState<any[]>([]);

  const navigate = useNavigate();

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

  const redirectToPage = (slug: string) => {
    navigate(`/${slug}`);
  };

  return (
    <header className="md:w-full md:fixed top-0 left-0 p-4 flex z-20 bg-white">
      <div className="text-white flex-grow z-20">
        <a href="/">
          <img src={Logo} />
        </a>
      </div>
      <select
        className="top-nav-dropdown font-Syne font-light"
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
      <button
        className="flex top-0 right-0 z-20 relative w-10 h-10 text-black focus:outline-none"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
              navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-black transform transition-all duration-200 ease-in-out ${
              navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
              navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
    </header>
  );
};

export default Header;
