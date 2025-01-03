import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Jobportal = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [jobCount, setJobCount] = useState(53212);

  const images = [
    "https://as2.ftcdn.net/v2/jpg/03/26/95/13/1000_F_326951305_dcTDtEql6sqLu7Ie9Qo0PNIYUHpOw6gQ.jpg",
    "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://t3.ftcdn.net/jpg/08/83/18/94/240_F_883189413_TsqgHsfJpVJPRyoDhRo17OlvdWOrmrK1.jpg",
    "https://t4.ftcdn.net/jpg/06/52/85/77/240_F_652857744_hsKmrKct8jbTTYh9c1uWOL3PIibU2K6g.jpg",
    "https://t3.ftcdn.net/jpg/05/88/37/32/240_F_588373249_1M6vgKm2VxSA1E2gA89nUXXwIfwzJf7Q.jpg",
  ];

  const stats = {
    candidates: 1930,
    jobsPosted: 54,
    jobsFilled: 120,
    companies: 550,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const jobInterval = setInterval(() => {
      setJobCount((prevCount) => prevCount + 1);
    }, 15000);
    return () => clearInterval(jobInterval);
  }, []);

  // Dynamically loading the Zoho Recruit scripts and styles
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src =
      "https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js";
    script.async = true;

    script.onload = () => {
      console.log("Zoho script loaded successfully");
      if (window.rec_embed_js) {
        window.rec_embed_js.load({
          widget_id: "rec_job_listing_div",
          page_name: "Careers",
          source: "CareerSite",
          site: "https://rareminds.zohorecruit.in",
          brand_color: "#3B82F6",
          empty_job_msg: "No current Openings",
        });
      } else {
        console.error("rec_embed_js is not available");
      }
    };

    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const handlePrevious = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <h1 className="text-3xl font-bold p-8 text-center font-Syne bg-black text-white">
        Opportunities at Rareminds
      </h1>
      <div className="container mx-auto">
        {/* Hero Image Section */}
        <div className="relative hero-section pb-8 px-32 bg-black">
          <img
            src={images[currentImageIndex]}
            alt={`Hero section image ${currentImageIndex + 1}`}
            className="w-[120%] h-80 object-cover rounded-lg"
          />
          {/* Indicator and Navigation Buttons Section */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={handlePrevious}
              className="text-white px-4 py-2 rounded-full flex items-center text-xl"
            >
              &lt;
            </button>
            <div className="flex justify-center flex-grow mx-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                    currentImageIndex === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="text-white px-4 py-2 rounded-full flex items-center text-xl"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Job Listings Section */}
        <div className="flex flex-col md:flex-row bg-gray-100 p-8">
          {/* Filters Section */}
          <div className="w-full md:w-1/4 p-4">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-md font-semibold mb-2">Job Type</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="full-time"
                  className="mr-2"
                />
                <label htmlFor="full-time" className="text-sm">
                  Full time (10)
                </label>
              </div>
            </div>
          </div>
          {/* Job Listings */}
          <div className="w-full md:w-3/4 p-4">
            <div id="rec_job_listing_div"></div>
            <div className="bg-blue-100 p-4 rounded shadow mb-4 mt-8">
              <p className="text-gray-600">
                Can't find any job matches? Share your resume to{" "}
                <a
                  href="mailto:resumes@rareminds.zohorecruitmail.in"
                  className="text-blue-600"
                >
                  resumes@rareminds.zohorecruitmail.in
                </a>
                , and a recruiter will get in touch with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobportal;
