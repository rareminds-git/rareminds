import MenuIlls from "../../assets/images/MenuIlls.svg";
import { useMediaQuery } from "react-responsive";

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
                <ul className="w-full flex flex-col items-start px-10 py-10">
                  <li className="nav-li py-5">
                    <a
                      href="/"
                      className="nav-link text-5xl font-Inter text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-li py-5">
                    <a
                      href={`/services/${localStorage.getItem("currentUserType")}`}
                      className="nav-link text-5xl font-Inter text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Our Services
                    </a>
                  </li>
                  {/* <li className="nav-li py-5">
                    <a
                      href="/about-us"
                      className="nav-link text-5xl font-Inter text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      About
                    </a>
                  </li> */}
                  <li className="nav-li py-5">
                    <a
                      href="/case-studies"
                      className="nav-link text-5xl font-Inter text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Case Study
                    </a>
                  </li>
                  <li className="nav-li py-5">
                    <a
                      href="/contact-us"
                      className="nav-link text-5xl font-Inter text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Contact
                    </a>
                  </li>
                  <li className="nav-li py-5">
                    <a
                      href="/blogs"
                      className="nav-link text-5xl font-Inter font-bold text-white"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid">
              <div className="col-span-6">
                <ul className="w-full flex flex-col items-start px-10 py-10">
                  {/* <li className="nav-li py-5">
                    <a
                      href="/"
                      className="nav-link text-3xl font-Inter text-white"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Testimonials
                    </a>
                  </li> */}
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
                      className="nav-link text-3xl md:text-4xl font-Inter text-white font-bold"
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
                      className="nav-link text-4xl font-Inter text-white font-bold"
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
                      className="nav-link text-4xl font-Inter text-white font-bold"
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
                      className="nav-link text-4xl font-Inter text-white font-bold"
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
                      className="nav-link text-4xl font-Inter text-white font-bold"
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
                      className="nav-link text-4xl font-Inter text-white font-bold"
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
                      className="nav-link text-4xl font-Inter text-white font-bold"
                      onClick={() => {
                        setNavbarOpen(false);
                      }}
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Menu;
