import React, { useEffect, useState } from "react";
import FooterIcon from "./FooterIcon";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

const socialIcons = [
  {
    id: 1,
    icon: "mdi:twitter",
    link: "https://twitter.com/",
  },

  {
    id: 2,
    icon: "mdi:facebook",
    link: "https://facebook.com",
  },
  {
    id: 3,
    icon: "mdi:instagram",
    link: "https://instagram.com",
  },
  {
    id: 4,
    icon: "mdi:youtube",
    link: "https://youtube.com",
  },
  {
    id: 5,
    icon: "mdi:linkedin",
    link: "https://linkedin.com",
  },
];
const FooterBar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [serviceData, setData] = useState<any>({});

  useEffect(() => {
    async function getData() {
      await axios
        .get(
          `http://13.126.41.32/api/services/${localStorage.getItem("currentUserType")}`
        )
        .then((res) => {
          setData(res.data);
        });
    }

    getData();
  }, []);

  return (
    <>
      {!isMobile ? (
        <div className="bg-black text-white font-Syne py-10">
          <div className="grid grid-flow-col grid-rows-1 mx-10 py-10 gap-4">
            <div className="row-span-1">
              <div className="grid grid-rows-1 grid-flow-col">
                <div className="row-span-1">
                  <ul className="mx-10 text-[20px] leading-[24px] font-Syne">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a
                        href={`/${localStorage.getItem("currentUserType")}/about`}
                      >
                        About{" "}
                      </a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="row-span-1">
                  <ul className="mx-10 text-[20px] leading-[24px] font-Syne">
                    <li>
                      <a href="/corporate">Corporate Program </a>
                    </li>
                    <li>
                      <a href="/institutions">Institutions Program</a>
                    </li>
                    <li>
                      <a href="/government">Government Program</a>
                    </li>
                    <li>
                      <a href="/schools">School Program</a>
                    </li>
                  </ul>
                </div>

                <div className="row-span-1">
                  <ul className="mx-10 text-[20px] leading-[24px] font-Syne">
                    <li>
                      <a
                        href={`/${localStorage.getItem("currentUserType")}/services`}
                      >
                        Our Services
                      </a>
                    </li>
                    {serviceData &&
                      serviceData?.serviceData?.map((ele: any) => {
                        return (
                          <li>
                            <a href={`/${ele.ContentSlug}`}>{ele.Heading1}</a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className="row-span-1">
                  <ul className="mx-10 text-[20px] leading-[24px] font-Syne">
                    <li>
                      <a
                        href={`/${localStorage.getItem("currentUserType")}/case-studies`}
                      >
                        Case Study
                      </a>
                    </li>
                    <li>
                      <a href="/blogs">Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row-span-1 place-items-end text-right">
              <h3 className="text-[30px] leading-[40.8px] font-light font-[Sentient] text-left xl:ml-[4.5rem] md:ml-[32rem]">
                Sign up to receive <br /> latest news.
              </h3>
              <input
                className="rounded p-2 mt-5 bg-transparent border-[#CAF0F8]-400 border mr-10"
                placeholder="Enter your email"
              />
              <button className="btn font-Syne bg-[#CAF0F8] text-black p-2 mt-5 rounded font-bold mr-0">
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid grid-flow-col grid-rows-1">
            <div className="flex items-center row-span-1 justify-center md:flex mx-20 mt-10 md:justify-start">
              <p>@rareminds 2024</p>
            </div>
            <div className="flex items-end row-span-1 justify-center md:flex md:justify-end mr-10">
              <a href="/terms-&-conditions" className="underline mx-10 text">
                Terms & Conditions
              </a>
              <a href="/privacy-policy" className="underline">
                Privacy
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black text-white py-12 font-Syne pt-10">
          <div className="row-span-1 mx-10 my-5">
            <h3 className="text-3xl">
              Sign up to receive the <br /> latest news.
            </h3>
            <input
              className="rounded p-2 mt-3 bg-transparent border-[#CAF0F8]-400 border"
              placeholder="Enter your email"
            />
            <button className="btn font-Syne bg-[#CAF0F8] text-black p-2 mt-3 rounded font-bold">
              Subscribe
            </button>
          </div>

          <div className="grid grid-flow-col grid-rows-2 mx-10 py-10 gap-4">
            <div className="row-span-2">
              <div className="grid grid-rows-1 grid-flow-col">
                <div className="col-span-6 row-span-1">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a
                        href={`/${localStorage.getItem("currentUserType")}/about`}
                      >
                        About{" "}
                      </a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact</a>
                    </li>
                    <li>
                      <a
                        href={`/${localStorage.getItem("currentUserType")}/case-studies`}
                      >
                        Case Study
                      </a>
                    </li>
                    <li>
                      <a href="/blogs">Blog</a>
                    </li>

                    <li>
                      <a href="/corporate">Corporate Program </a>
                    </li>
                    <li>
                      <a href="/institutions">Institutions Program</a>
                    </li>
                    <li>
                      <a href="/government">Government Program</a>
                    </li>
                    <li>
                      <a href="/schools">School Program</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col grid-rows-1">
            <div className="flex items-center row-span-1 justify-center md:flex md:justify-start">
              {socialIcons.map((socialIcon) => {
                const { icon, id, link } = socialIcon;
                return (
                  <div key={id}>
                    <FooterIcon key={id} icon={icon} link={link} />
                  </div>
                );
              })}
            </div>
            <div className="flex items-end row-span-1 justify-center md:flex md:justify-end mr-10">
              <p>@rareminds 2024</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterBar;
