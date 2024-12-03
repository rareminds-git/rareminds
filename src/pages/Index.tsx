import Fb from "@/assets/socials-svg/fb";
import Insta from "@/assets/socials-svg/instagram";
import LinkedIn from "@/assets/socials-svg/LinkedIn";
import X from "@/assets/socials-svg/x";
import Youtube from "@/assets/socials-svg/Youtube";
import LoaderComponent from "@/components/LoaderComponent";
import { AppDispatch } from "@/redux/store";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import CorporateBanner from "../assets/images/banners/corporate-landing.webp";
import GovernmentBanner from "../assets/images/banners/GovernmentBanner.png";
import InstitutionsBanner from "../assets/images/banners/InstitutionBanner.png";
import SchoolsBanner from "../assets/images/banners/SchoolsBanner.png";
import Logo from "../assets/images/logo.png";
import Counselling from "../components/landing/career-counselling";
import College from "../components/landing/college";
import Corporate from "../components/landing/corporate";
import Govt from "../components/landing/govt";
import School from "../components/landing/school";

const Index = () => {
  const [activeBanner, setActiveBanner] = useState("corporate");

  const [showLoader, setShowLoader] = useState(true);

  const isMobile = useMediaQuery({ query: `(max-width: 1124px)` });

  const [pages, setPages] = useState<any[]>([]);

  const dispatch: AppDispatch = useDispatch();

  const [partHover, setPartHover] = useState(false);

  const togglePartHover = (value: boolean) => {
    setPartHover(value);
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const [activePart, setActivePart] = useState<UserType>("none");

  const [content, setContent] = useState([
    {
      heading: "Government collaborations",
      description:
        "Collaborating on government skill development initiatives with customized training programs to uplift students beyond traditional curriculums.",
    },
    {
      heading: "Industries and firms",
      description:
        "Revolutionizing the corporate world with tailored corporate training solutions and talent development to drive innovation and connect you with top talent.",
    },
    {
      heading: "Academia",
      description:
        "Transforming education through innovative learning solutions and advanced curriculum design, fostering impactful educational institution partnerships.",
    },
    {
      heading: "University network",
      description:
        "Bridging skill gaps and enhancing capabilities to create a future-ready workforce through transformative partnerships with colleges and universities.",
    },
    {
      heading: "Career counselling",
      description:
        "Boosting career development with expert career counselling, employability skills, and personalized training for success.",
    },
  ]);

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

  // console.log("active banner", activeBanner);

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
        <>
          <div className="w-full brain-container ">
            <AnimatePresence>
              {isNavOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.1 } }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  className={`fixed w-full min-h-[100vh] z-[15] bg-overlay-color backdrop-blur-md top-0`}
                >
                  <div className="container mx-auto text-white/90 font-bold text-3xl mt-[200px] xxl:px-[80px] flex flex-col items-center gap-5">
                    <Link
                      to="/careers"
                      className="hover:text-red-600 transition-colors duration-150"
                    >
                      Careers
                    </Link>
                    <Link
                      to="/blogs"
                      className="hover:text-red-600 transition-colors duration-150"
                    >
                      Blogs
                    </Link>
                    <Link
                      to="/contact-us"
                      className="hover:text-red-600 transition-colors duration-150"
                    >
                      Contact us
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div
              className={`relative container mx-auto py-8 px-5 ${isNavOpen ? "sticky top-0  z-[20]" : ""}`}
            >
              <div className="flex items-center">
                <img src={Logo} alt="logo" className="w-[250px]" />
                <div className="ml-auto">
                  <div
                    className={`flex gap-x-2 transition-all duration-300 ${isNavOpen ? "text-[#ffffffcc]" : "text-[#3C3C3B]"}`}
                  >
                    <span className="w-[40px] h-[40px]">
                      <Fb />
                    </span>
                    <span className="w-[40px] h-[40px]">
                      <LinkedIn />
                    </span>
                    <span className="w-[40px] h-[40px]">
                      <Youtube />
                    </span>
                    <span className="w-[40px] h-[40px]">
                      <X />
                    </span>
                    <span className="w-[40px] h-[40px]">
                      <Insta />
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="bg-black rounded-full text-white flex items-center px-5 py-2 ml-2"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <Menu size="24px" className="rotate-90" color="white" />
                <span className="ml-2">MENU</span>
              </button>
            </div>
            <div className={`flex justify-center`}>
              <div className="relative flex w-min -translate-x-[25%] xxl:-translate-x-[25%] -mt-[40px] scale-75 xxl:-mt-5 xxl:scale-75">
                <Govt
                  onAction={redirectToPage}
                  overlayActive={togglePartHover}
                  partHover={partHover}
                  activePart={activePart}
                  setActivePart={setActivePart}
                  content={content[0]}
                />
                <Corporate
                  onAction={redirectToPage}
                  overlayActive={togglePartHover}
                  partHover={partHover}
                  activePart={activePart}
                  setActivePart={setActivePart}
                  content={content[1]}
                />
                <College
                  onAction={redirectToPage}
                  overlayActive={togglePartHover}
                  partHover={partHover}
                  setActivePart={setActivePart}
                  content={content[3]}
                  activePart={activePart}
                />
                <School
                  onAction={redirectToPage}
                  overlayActive={togglePartHover}
                  partHover={partHover}
                  setActivePart={setActivePart}
                  content={content[2]}
                  activePart={activePart}
                />
                <Counselling
                  onAction={redirectToPage}
                  overlayActive={togglePartHover}
                  partHover={partHover}
                  setActivePart={setActivePart}
                  activePart={activePart}
                  content={content[4]}
                />
              </div>
            </div>
            <div className="container flex justify-center mx-auto mt-[120px] pb-[80px]">
              <div className="max-w-[500px] xxl:max-w-[600px] -translate-x-[35%] xxl:-translate-x-[45%]">
                <h1 className="text-2xl font-semibold">
                  Rareminds: Empowering Minds, Shaping Futures
                </h1>
                <p className="mt-3">
                  At Rareminds, we transform potential into excellence through
                  innovative talent acquisition, training, and consultation
                  solutions. Bridging aspirations with achievements, we empower
                  students, professionals, organizations, and academic
                  institutions to unlock limitless possibilities and drive
                  impactful growth.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mt-8 mx-auto flex justify-center items-center rounded-2xl">
            <img src={Logo} alt="Rareminds" />
          </div>
          <div className="banner md:mx-12 rounded-2xl">
            <div className="banner-grid h-screen">
              <div className="grid grid-rows-4 grid-cols-1 grid-flow-col gap-6 h-screen">
                {pages.map((ele: any, i: number) => {
                  return (
                    <div
                      key={i}
                      className={`banner md:py-8 md:px-4 rounded-2xl`}
                      style={{
                        backgroundImage: `url(${ele.PageSlug === "/corporate" ? CorporateBanner : ele.PageSlug === "/institutions" ? InstitutionsBanner : ele.PageSlug === "/government" ? GovernmentBanner : SchoolsBanner})`,
                      }}
                      onClick={() => {
                        redirectToPage(ele.PageSlug.replace("/", ""));
                      }}
                    >
                      <h3 className="text-white font-extrabold font-playfair text-2xl">
                        {ele.PageName}
                      </h3>
                      <p
                        className="xs:mt-10 md:mt-40 sm:mt-20 mt-20 md:text-2xl text-white font-playfair"
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

// onClick={() => {
//   redirectToPage(ele.PageSlug.replace("/", ""));
// }}
