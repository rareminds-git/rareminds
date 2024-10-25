import React, { useEffect, useState, useRef } from "react";
import FooterIcon from "./FooterIcon";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import FaceBookIcon from "../../assets/images/fb-icon.svg";
import TwitterIcon from "../../assets/images/twitter-icon.svg";
import LinkedInIcon from "../../assets/images/linkedin-icon.svg";
import YoutubeIcon from "../../assets/images/youtube-icon.svg";
import InstagramIcon from "../../assets/images/instagram-icon.svg";

const socialIcons = [
  {
    id: 1,
    icon: FaceBookIcon,
    link: "https://www.facebook.com/raremindsgroup",
  },
  {
    id: 2,
    icon: TwitterIcon,
    link: "https://twitter.com/minds_rare",
  },
  {
    id: 3,
    icon: InstagramIcon,
    link: "https://www.instagram.com/rareminds_eym/",
  },
  {
    id: 4,
    icon: YoutubeIcon,
    link: "https://www.youtube.com/channel/UClkBtwJsScYxFzNoFdlifeA",
  },
  {
    id: 5,
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/company/13376601/admin/",
  },
];

const FooterBar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  const [serviceData, setData] = useState<any>({});
  const [subscriberEmail, setSubscriberEmail] = useState(null);
  const [successMessage, setSuccessMsg] = useState(null);

  const subscribeInput = useRef();

  useEffect(() => {
    async function getData() {
      await axios
        .get(
          `${import.meta.env.VITE_API_URL}services/${localStorage.getItem("currentUserType")}`
        )
        .then((res) => {
          setData(res.data);
        });
    }

    getData();
  }, []);

  const submitSubscription = () => {
    if (subscriberEmail) {
      if (!/(.+)@(.+){2,}\.(.+){2,}/.test(subscriberEmail)) {
        setSuccessMsg("Enter a valid email address");
      } else {
        setSuccessMsg(null);
        const config = {
          method: "post",
          maxBodyLength: Infinity,
          url: `${import.meta.env.VITE_API_URL}subscribers`,
          headers: {
            "Content-Type": "application/json",
          },
          data: { SubscriberEmail: subscriberEmail },
        };

        axios
          .request(config)
          .then((response) => {
            if (response.data.status === 200) {
              setSuccessMsg("Thank you for subscribing");
              subscribeInput.current.value = "";
              setTimeout(() => {
                setSuccessMsg(null);
              }, 2000);
            }
            if (response.data.status === 500) {
              setErrorMsg(response.data.message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      setSuccessMsg("Please enter the email address");
    }
  };

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
                      <a href={`/about`}>About </a>
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
                        href={`${localStorage.getItem("currentUserType")}/services`}
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
                        href={`${localStorage.getItem("currentUserType")}/case-studies`}
                      >
                        Case Study
                      </a>
                    </li>
                    <li>
                      <a href="/blogs">Blog</a>
                    </li>
                    <li>
                      <a href="/walloffame">Wall Of Fame</a>
                    </li>
                    <li>
                      <a href="/events">Events</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row-span-1 place-items-end text-right">
              <h3 className="text-[30px] leading-[40.8px] font-light font-[Sentient] text-left xl:ml-[4.5rem] lg:ml-[3.5rem] xxl:ml-[8rem] md:ml-[32rem]">
                Sign up to receive <br /> latest news.
              </h3>
              <input
                className="rounded p-2 mt-5 bg-transparent border-[#CAF0F8]-400 border mr-10"
                placeholder="Enter your email"
                ref={subscribeInput}
                onChange={(e) => {
                  setSuccessMsg(null);
                  setSubscriberEmail(e.target.value);
                }}
              />

              <button
                className="btn font-Syne bg-[#CAF0F8] text-black p-2 mt-5 rounded font-bold mr-0"
                onClick={() => submitSubscription()}
              >
                Subscribe
              </button>

              {successMessage && (
                <span className="text-white flex text-2xl justify-end text-left mt-4 py-4">
                  {successMessage}
                </span>
              )}
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
              className="rounded p-2 mt-3 bg-transparent border-[#CAF0F8]-400 border w-[60%] md:w-[80%] lg:w-[85%] xl:w-[100%] xxl:w-[100%] mr-[10px]"
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
                      <a href={`/about`}>About </a>
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
                      <a href="/walloffame">Wall Of Fame</a>
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
            {/* <div className="flex items-center row-span-1 justify-center md:flex md:justify-start">
              {socialIcons.map((socialIcon) => {
                const { icon, id, link } = socialIcon;
                return (
                  <div key={id}>
                    <FooterIcon key={id} icon={icon} link={link} />
                  </div>
                );
              })}
            </div> */}
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
