import React, { useEffect, useRef, useState } from "react";

const logos = [
  {
    label: "UNIVERSITY OF MADRAS",
    imgSrc: "/images/academy/Logos/UNIVERSITYOFMADRAS.png",
  },
  {
    label: "ALAGAPPA UNIVERSITY",
    imgSrc: "/images/academy/Logos/ALAGAPPA UNIVERSITY.png",
  },
  {
    label: "ANNAMALAI UNIVERSITY",
    imgSrc: "/images/academy/Logos/ANNAMALAI UNIVERSITY.png",
  },
  {
    label: "BHARATHIAR UNIVERSITY",
    imgSrc: "/images/academy/Logos/BHARATHIAR UNIVERSITY.png",
  },
  {
    label: "BHARATHIDASAN UNIVERSITY",
    imgSrc: "/images/academy/Logos/BHARATHIDASAN UNIVERSITY.png",
  },{
    label: "UNIVERSITY OF MADRAS",
    imgSrc: "/images/academy/Logos/UNIVERSITYOFMADRAS.png",
  },
  {
    label: "MADURAI KAMARAJ UNIVERSITY",
    imgSrc: "/images/academy/Logos/MADURAI KAMARAJ UNIVERSITY.png",
  },
  {
    label: "MANONMANIAM SUNDARANAR UNIVERSITY",
    imgSrc: "/images/academy/Logos/MANONMANIAM SUNDARANAR UNIVERSITY.png",
  },
  {
    label: "MOTHER TERESA UNIVERSITY",
    imgSrc: "/images/academy/Logos/MOTHER TERESA UNIVERSITY.png",
  },
  {
    label: "PERIYAR UNIVERSITY",
    imgSrc: "/images/academy/Logos/PERIYAR UNIVERSITY.png",
  },
  {
    label: "THIRUVALLUVAR UNIVERSITY",
    imgSrc: "/images/academy/Logos/THIRUVALLUVAR UNIVERSITY.png",
  },
];

const repeatedLogos = [...logos, ...logos, ...logos];

const TrustedInstitutions: React.FC<{ className?: string }> = ({ className }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationFrameIdRef = useRef<number | null>(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 1.2; // pixels per tick
    const interval = 20;  // ms between frames

    const scrollWidth = scrollContainer.scrollWidth / 3; // one full loop of the logos

    function scrollLoop() {
      if (!scrollContainer || isPaused) return;

      if (scrollContainer.scrollLeft >= scrollWidth * 2) {
        // Jump to the "first" set for seamless looping
        scrollContainer.scrollLeft = scrollWidth;
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }
      animationFrameIdRef.current = window.setTimeout(scrollLoop, interval);
    }

    // Only set the initial position ONCE
    if (!isInitializedRef.current) {
      scrollContainer.scrollLeft = scrollWidth;
      isInitializedRef.current = true;
    }

    // Start or continue scrolling as needed
    if (!isPaused) {
      animationFrameIdRef.current = window.setTimeout(scrollLoop, interval);
    }

    return () => {
      if (animationFrameIdRef.current !== null) {
        clearTimeout(animationFrameIdRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section className={`pb-16 pt-3 px-4 bg-white relative ${className || ""}`}>
  
      <div className="container mx-auto " >
        <h2 className="text-center text-[18px] md:text-4xl font-semibold mb-10 text-gray-800">
          Trusted by Leading Institutions
        </h2>
        {/* Carousel wrapper */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="overflow-x-auto hide-scrollbar"
          style={{
            WebkitOverflowScrolling: "touch",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="flex items-center gap-8 md:gap-20 py-6" style={{ minWidth: "180%" }}>
            {repeatedLogos.map((logo, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center flex-shrink-0 w-[160px] pr-10 mx-2"
              >
                <div className="w-16 h-16 mb-3 rounded-full bg-white flex items-center justify-center shadow-sm institution-logo hover-scale transition-transform duration-200 overflow-hidden">
  <img
    src={logo.imgSrc}
    alt={logo.label}
    className="w-full h-full object-contain"
  />
</div>

                <span className="text-center  text-[12px] md:text-sm font-medium text-gray-700 select-none break-words leading-tight">{logo.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        /* Hide scrollbar cross-browser */
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

const Logos = () => {
  return (
    <div className=" bg-white">
      <main className="w-full pt-12 pb-12">
        {/* Hero Section */}
        {/* <div className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Education Platform</h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Empowering students and educators with innovative learning solutions
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>
        </div> */}
        
        {/* The trust banner section is now included here directly */}
        <TrustedInstitutions />
        

      </main>
    </div>
  );
};

export default Logos;


