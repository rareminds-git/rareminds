import MenuIlls from "../../assets/images/MenuIlls.svg";
import { useMediaQuery } from "react-responsive";
import FooterIcon from "../Footer/FooterIcon";

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

const Menu = ({ navbarOpen, setNavbarOpen }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      {!isMobile ? (
        <nav
          className={`fixed flex top-0 left-0 w-full px-10 z-10 md:h-screen pt-24 bg-red-400 transform delay-100 transition-all duration-300 ${
            navbarOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="grid grid-cols-3">
            <div className="grid">
              <div className="col-span-6">
                <ul className="w-full flex flex-col items-start pl-56 pt-20">
                  <li className="nav-li py-3">
                    <a
                      href="/"
                      className="nav-link text-6xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-li py-3">
                    <a
                      href={`/services/${localStorage.getItem("currentUserType")}`}
                      className="nav-link text-6xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Our Services
                    </a>
                  </li>
                  <li className="nav-li py-3">
                    <a
                      href="/about-us"
                      className="nav-link text-6xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-li py-3">
                    <a
                      href="/case-studies"
                      className="nav-link text-6xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Case Study
                    </a>
                  </li>
                  <li className="nav-li py-3">
                    <a
                      href="/contact-us"
                      className="nav-link text-6xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Contact
                    </a>
                  </li>
                  <li className="nav-li py-3">
                    <a
                      href="/blogs"
                      className="nav-link text-6xl font-[Sentient-Bold] font-bold text-white"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-li py-3 text-2xl pt-44 font-Syne text-white">
                    info@rareminds.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid">
              <div className="col-span-6">
                <ul className="w-full flex flex-col items-start pl-28 pt-20">
                  <li className="nav-li py-3 opacity-0">
                    <a
                      href="/"
                      className="nav-link text-6xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-li py-3 opacity-0">
                    <a
                      href={`/services/${localStorage.getItem("currentUserType")}`}
                      className="nav-link text-6xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Our Services
                    </a>
                  </li>
                  <li className="nav-li py-3 opacity-0">
                    <a
                      href="/about-us"
                      className="nav-link text-6xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-li py-3 opacity-0">
                    <a
                      href="/case-studies"
                      className="nav-link text-6xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Case Study
                    </a>
                  </li>
                  <li className="nav-li py-3 opacity-0">
                    <a
                      href="/contact-us"
                      className="nav-link text-6xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Contact
                    </a>
                  </li>
                  <li className="nav-li py-3 opacity-0">
                    <a
                      href="/blogs"
                      className="nav-link text-6xl font-[Sentient-Bold] font-bold text-white"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-li py-3 text-2xl pt-44 font-Syne text-white">
                    Follow us:{" "}
                    {socialIcons.map((socialIcon) => {
                      const { icon, id, link } = socialIcon;
                      return (
                        <div
                          className="text-white text-2xl rounded inline-block"
                          key={id}
                        >
                          <FooterIcon
                            key={id}
                            icon={icon}
                            link={link}
                            type="header"
                          />
                        </div>
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
          className={`fixed flex h-full w-full top-0 left-0 px-4 z-10 md:h-screen pt-24 bg-red-400 transform delay-100 transition-all duration-300 ${
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
                      className="nav-link text-3xl md:text-4xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-li py-2">
                    <a
                      href={`/services/${localStorage.getItem("currentUserType")}`}
                      className="nav-link text-4xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Our Services
                    </a>
                  </li>
                  <li className="nav-li py-2">
                    <a
                      href="/services"
                      className="nav-link text-4xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-li py-2">
                    <a
                      href="/case-studies"
                      className="nav-link text-4xl font-[Sentient-Bold] text-white font-bold"
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
                      className="nav-link text-4xl font-[Sentient-Bold] text-white font-bold"
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
                      className="nav-link text-4xl font-[Sentient-Bold] text-white font-bold"
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
                      className="nav-link text-4xl font-[Sentient-Bold] text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Blog
                    </a>
                  </li>
                </ul>

                <p className="text-white font-Syne text-xl mt-32">
                  info@rareminds.com
                </p>
                <p className="text-2xl font-Syne text-white">
                  Follow us:{" "}
                  {socialIcons.map((socialIcon) => {
                    const { icon, id, link } = socialIcon;
                    return (
                      <div
                        className="text-white text-2xl rounded inline-block"
                        key={id}
                      >
                        <FooterIcon
                          key={id}
                          icon={icon}
                          link={link}
                          type="header"
                        />
                      </div>
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
