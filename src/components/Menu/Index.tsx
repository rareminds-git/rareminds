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
    link: "https://facebook.com",
  },
  {
    id: 2,
    icon: TwitterIcon,
    link: "https://twitter.com/",
  },
  {
    id: 3,
    icon: InstagramIcon,
    link: "https://instagram.com",
  },
  {
    id: 4,
    icon: YoutubeIcon,
    link: "https://youtube.com",
  },
  {
    id: 5,
    icon: LinkedInIcon,
    link: "https://linkedin.com",
  },
];

const Menu = ({ navbarOpen, setNavbarOpen }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
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
                <ul className="w-full flex flex-col items-start pl-56 pt-20">
                  <li className="nav-li">
                    <a
                      href="/"
                      className="nav-link text-[60px] leading-[81.6px] font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-li">
                    <a
                      href={`/${localStorage.getItem("currentUserType")}/services`}
                      className="nav-link text-[60px] leading-[81.6px] font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Our Services
                    </a>
                  </li>
                  <li className="nav-li">
                    <a
                      href={`/${localStorage.getItem("currentUserType")}/about`}
                      className="nav-link text-[60px] leading-[81.6px] font-[Sentient] text-white font-bold"
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
                      className="nav-link text-[60px] leading-[81.6px] font-[Sentient] text-white font-bold"
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
                      className="nav-link text-[60px] leading-[81.6px] font-[Sentient] font-bold text-white"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-li text-[22px] leading-[20px] font-semibold pt-12 font-Syne text-white">
                    info@rareminds.in
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid">
              <div className="col-span-6">
                <ul className="w-full flex flex-col items-start pl-16 pt-20">
                  <li className="nav-li opacity-0">
                    <a
                      href="/"
                      className="nav-link text-6xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-li opacity-0">
                    <a
                      href={`/${localStorage.getItem("currentUserType")}/services`}
                      className="nav-link text-6xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Our Services
                    </a>
                  </li>
                  <li className="nav-li opacity-0">
                    <a
                      href={`/${localStorage.getItem("currentUserType")}/about`}
                      className="nav-link text-6xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-li opacity-0">
                    <a
                      href={`/${localStorage.getItem("currentUserType")}/case-studies`}
                      className="nav-link text-6xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Case Study
                    </a>
                  </li>
                  <li className="nav-li opacity-0">
                    <a
                      href="/contact-us"
                      className="nav-link text-6xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Contact
                    </a>
                  </li>
                  <li className="nav-li opacity-0">
                    <a
                      href="/blogs"
                      className="nav-link text-6xl font-[Sentient] font-bold text-white"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-li text-[20px] leading-[20px] flex items-center font-semibold pt-24 text-white font-Syne">
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
                      href={`/${localStorage.getItem("currentUserType")}/services`}
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
                      href={`/${localStorage.getItem("currentUserType")}/about`}
                      className="nav-link text-4xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-li py-2">
                    <a
                      href={`/${localStorage.getItem("currentUserType")}/case-studies`}
                      className="nav-link text-4xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Case Study
                    </a>
                  </li>
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
                      href="/testimonials"
                      className="nav-link text-4xl font-[Sentient] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Testimonials
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
                </ul>

                <p className="text-white font-Syne text-xl mt-32">
                  info@rareminds.in
                </p>
                <p className="text-2xl font-Syne text-white">
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
