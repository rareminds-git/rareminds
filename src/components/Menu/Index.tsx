import { useMediaQuery } from "react-responsive";
import FooterIcon from "../Footer/FooterIcon";
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

const Menu = ({ navbarOpen, setNavbarOpen }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  return (
    <>
      {!isMobile ? (
        <nav
          className={`fixed flex top-0 left-0 w-full px-10 z-10 md:h-screen pt-12 bg-[#FF6363] transform delay-100 transition-all duration-300 ${
            navbarOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="grid grid-cols-2">
            <div className="grid">
              <div className="col-span-6">
                <ul className="w-full flex flex-col items-start pl-56 lg:pt-24 lg:pl-28 pt-48 xl:pt-20">
                  <li className="nav-li">
                    <a
                      href="/"
                      className="nav-link text-[60px] lg:text-[56px] lg:leading-[81.6px] leading-[81.6px] font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-li">
                    <a
                      href={`${localStorage.getItem("currentUserType")}/services`}
                      className="nav-link text-[60px] lg:text-[56px] lg:leading-[81.6px] leading-[81.6px] font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Our Services
                    </a>
                  </li>
                  <li className="nav-li">
                    <a
                      href={`/about`}
                      className="nav-link text-[60px] lg:text-[56px] lg:leading-[81.6px] leading-[81.6px] font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      About
                    </a>
                  </li>
                  {/* <li className="nav-li">
                    <a
                      href="/case-studies"
                      className="nav-link text-[60px] leading-[81.6px] font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Case Study
                    </a>
                  </li> */}
                  <li className="nav-li">
                    <a
                      href="/contact-us"
                      className="nav-link text-[60px] lg:text-[56px] lg:leading-[81.6px] leading-[81.6px] font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Contact
                    </a>
                  </li>
                  <li className="nav-li">
                    <a
                      href="/blogs"
                      className="nav-link text-[60px] lg:text-[56px] lg:leading-[81.6px] leading-[81.6px] font-[Sentient] font-bold text-white"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Blog
                    </a>
                  </li>

                  <li className="nav-li text-[22px] leading-[20px] font-semibold pt-12 font-Syne text-white">
                    <a href="mailto:info@rareminds.in">info@rareminds.in</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid">
              <div className="col-span-6">
                <ul className="w-full flex flex-col items-start pl-16 pt-48 lg:pt-24 lg:pl-28 xl:pt-20">
                  <li className="nav-li opacity-0">
                    <a
                      href="/events"
                      className="nav-link text-[60px] leading-[81.6px] lg:text-[56px] lg:leading-[81.6px] font-[Sentient] font-bold text-white"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Events
                    </a>
                  </li>
                  <li className="nav-li opacity-0">
                    <a
                      href="/walloffame"
                      className="nav-link text-[60px] leading-[81.6px] lg:text-[56px] lg:leading-[81.6px] font-[Sentient] font-bold text-white"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Wall of Fame
                    </a>
                  </li>
                  <li className="nav-li opacity-0">
                    <a
                      href="/events"
                      className="nav-link text-[60px] leading-[81.6px] lg:text-[56px] lg:leading-[81.6px] font-[Sentient] font-bold text-white"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Events
                    </a>
                  </li>
                  <li className="nav-li opacity-0">
                    <a
                      href="/walloffame"
                      className="nav-link text-[60px] leading-[81.6px] lg:text-[56px] lg:leading-[81.6px] font-[Sentient] font-bold text-white"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Wall of Fame
                    </a>
                  </li>
                  <li className="nav-li text-[20px] leading-[20px] mt-6 flex items-center font-semibold lg:pt-20 pt-24 text-white font-Syne">
                    <span className="inline-flex mr-1">Follow us:</span>
                    {socialIcons.map((socialIcon) => {
                      const { icon, id, link } = socialIcon;
                      return (
                        <FooterIcon
                          key={id}
                          icon={icon}
                          link={link}
                          type="header"
                        />
                      );
                    })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav
          className={`fixed flex h-full w-full top-0 left-0 px-4 z-10 md:h-screen pt-24 bg-[#FF6363] transform delay-100 transition-all duration-300 ${
            navbarOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="grid grid-cols-1 mx-20 my-12">
            <div className="grid">
              <div className="col-span-6">
                <ul className="w-full flex flex-col items-start">
                  <li className="nav-li py-2">
                    <a
                      href="/"
                      className="nav-link text-3xl md:text-4xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-li py-2">
                    <a
                      href={`${localStorage.getItem("currentUserType")}/services`}
                      className="nav-link text-4xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Our Services
                    </a>
                  </li>
                  <li className="nav-li py-2">
                    <a
                      href={`/about`}
                      className="nav-link text-4xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      About
                    </a>
                  </li>
                  {/* <li className="nav-li py-2">
                    <a
                      href={`${localStorage.getItem("currentUserType")}/case-studies`}
                      className="nav-link text-4xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Case Study
                    </a>
                  </li> */}
                  <li className="nav-li py-2">
                    <a
                      href="/contact-us"
                      className="nav-link text-4xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Contact
                    </a>
                  </li>

                  <li className="nav-li py-2">
                    <a
                      href="/blogs"
                      className="nav-link text-4xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Blog
                    </a>
                  </li>
                  {/* <li className="nav-li py-2">
                    <a
                      href="/events"
                      className="nav-link text-[60px] leading-[81.6px] font-[Sentient] font-bold text-white"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Events
                    </a>
                  </li>
                  <li className="nav-li py-2">
                    <a
                      href="/walloffame"
                      className="nav-link text-[60px] leading-[81.6px] font-[Sentient] font-bold text-white"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Wall of Fame
                    </a>
                  </li> */}
                </ul>

                <p className="text-white font-Syne text-xl mt-32">
                  <a href="mailto:info@rareminds.in">info@rareminds.in</a>
                </p>
                <p className="text-2xl font-Syne text-white mt-32">
                  Follow us:{" "}
                  {socialIcons.map((socialIcon) => {
                    const { icon, id, link } = socialIcon;
                    return (
                      <span
                        className="text-white text-2xl rounded inline-block"
                        key={id}
                      >
                        <FooterIcon
                          key={id}
                          icon={icon}
                          link={link}
                          type="header"
                        />
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Menu;
