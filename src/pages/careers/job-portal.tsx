import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import { Link } from 'react-router-dom';


const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <p className="text-4xl font-bold">{count.toLocaleString()}</p>;
};

const Jobportal = () => {
  const skills = ["HR", "Marketing", "Sales", "Accounting"];

  const images = [
    "https://as2.ftcdn.net/v2/jpg/03/26/95/13/1000_F_326951305_dcTDtEql6sqLu7Ie9Qo0PNIYUHpOw6gQ.jpg",
    "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://t3.ftcdn.net/jpg/08/83/18/94/240_F_883189413_TsqgHsfJpVJPRyoDhRo17OlvdWOrmrK1.jpg",
    "https://t4.ftcdn.net/jpg/06/52/85/77/240_F_652857744_hsKmrKct8jbTTYh9c1uWOL3PIibU2K6g.jpg",
    "https://t3.ftcdn.net/jpg/05/88/37/32/240_F_588373249_1M6vgKm2VxSA1E2gA89nUXXwIfwzJf7Q.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [jobCount, setJobCount] = useState(53212);

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

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const stats = {
    candidates: 1930,
    jobsPosted: 54,
    jobsFilled: 120,
    companies: 550
  };

  return (
    <><h1 className="text-3xl font-bold p-8 text-center font-Syne bg-black text-white">Opportunities at Rareminds</h1>
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
    {/* Previous Button with Arrow Character */}
    <button
      onClick={handlePrevious}
      className="text-white px-4 py-2 rounded-full flex items-center text-xl"
    >
      &lt; {/* Left Arrow Character */}
    </button>

    {/* Indicator Dots */}
    <div className="flex justify-center flex-grow mx-4">
      {images.map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${currentImageIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          onClick={() => setCurrentImageIndex(index)} // Function to set the current image index
        />
      ))}
    </div>

    {/* Next Button with Arrow Character */}
    <button
      onClick={handleNext}
      className="text-white px-4 py-2 rounded-full flex items-center text-xl"
    >
      &gt; {/* Right Arrow Character */}
    </button>
  </div>
</div>

      {/* Job Listings Section */}
      <h1 className="text-3xl font-bold mb-4 px-8 pt-8">Latest Jobs ({jobCount})</h1>
      <SearchBar skills={skills} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 p-8">
        {Array.from({ length: 9 }).map((_, index: number) => (
          <div key={index} className="border p-4 bg-white shadow-lg hover:shadow-2xl transform hover:translate-y-2 transition-all duration-300 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-sm">JOB</span>
              <span className="text-sm">LOCATION</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Job Title {index + 1}</h2>
            <p className="text-sm mb-2">Company - Department</p>
            <p className="text-sm mb-2">Location: City, State</p>
            <p className="text-sm mb-2">Posted: Date</p>
            <button className="text-[#ff2c2c] hover:underline">Read More</button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-4 p-8">
        <button className="border px-4 py-2 rounded">Previous</button>
        <div className="flex space-x-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <button key={index} className="border px-4 py-2 rounded">
              {index + 1}
            </button>
          ))}
        </div>
        <button className="border px-4 py-2 rounded">Next</button>
      </div>

      {/* Sign Up Button */}
      <div className="m-8 mb-8 flex justify-center text-blue-500">
        <Link to="/careers/web-developer-intern">
          <button className="bg-[#ff2c2c] text-white border px-4 py-2 rounded transition-all duration-200 hover:bg-blue-500 hover:text-white">
            Sign Up for Job Alerts
          </button>
        </Link>
      </div>


      {/* Stay Connected Section */}
      <div className="bg-[#000000] mt-8 p-8 xl:px-28 lg:px-24 md:px-16 px-8 xl:py-16 lg:py-12 md:py-16 py-8 pb-8 text-center font-Syne">
        <div className="max-w-7xl">
          <h2 className="text-3xl text-white font-bold mb-8 text-center">Stay Connected</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            {/* Card 1 */}
            <div className="text-center border p-4 bg-white card transition-all duration-300 transform hover:shadow-lg hover:scale-105 rounded-lg">
            <svg
                className="w-12 h-12 mx-auto mb-4 text-primary"
                fill="none"
                stroke="#ff2c2c"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Join Our Team</h3>
              <p className="text-sm mb-2">Learn about careers at our company and find the right position for you.</p>
              <button className="text-blue-500">Search Careers</button>
            </div>

            {/* Card 2 */}
            <div className="text-center border p-4 bg-white card transition-all duration-300 transform hover:shadow-lg hover:scale-105 rounded-lg">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-primary"
              fill="none"
              stroke="#ff2c2c"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
            <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M19 7h.01M12 20H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v11a2 2 0 01-2 2h-5zM7 10h10M7 15h10M11 15h2M7 20h.01M5 20h.01M17 20h.01"
            ></path>
            </svg>

              <h3 className="text-xl font-semibold mb-2">Keep Up to Date</h3>
              <p className="text-sm mb-2">Stay informed about the latest news and updates from our company.</p>
              <button className="text-blue-500">Read Our Blog</button>
            </div>

            {/* Card 3 */}
            <div className="text-center border p-4 bg-white card transition-all duration-300 transform hover:shadow-lg hover:scale-105 rounded-lg">
            <svg
             className="w-12 h-12 mx-auto mb-4 text-primary"
             fill="none"
             stroke="#ff2c2c"
             viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg"
             >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
    strokeWidth="2"
    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a2 2 0 10-4 0v1.083A6 6 0 004 11v3.159c0 .548-.22 1.077-.595 1.436L2 17h5m5 2a3 3 0 01-6 0"
  ></path>
</svg>
              <h3 className="text-xl font-semibold mb-2">Job Alert Emails</h3>
              <p className="text-sm mb-2">Receive notifications about new job opportunities that match your interests.</p>
              <button className="text-blue-500">Sign Up for Alerts</button>
            </div>
          </div>
        </div>
      </div>


      {/* Stats Section (Moved here) */}
      <div className="background-image text-white text-center py-16 font-Syne">
        <div className="bg-sky-500 bg-opacity-75 py-12">
          <h1 className="text-2xl font-bold mb-4">JobBoard Site Stats</h1>
          <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="mb-8">Expedita unde officiis recusandae sequi excepturi corrupti.</p>
          <div className="flex justify-center space-x-16">
            <div>
              <Counter end={stats.candidates} duration={4000} />
              <p>Candidates</p>
            </div>
            <div>
              <Counter end={stats.jobsPosted} duration={4000} />
              <p>Jobs Posted</p>
            </div>
            <div>
              <Counter end={stats.jobsFilled} duration={4000} />
              <p>Jobs Filled</p>
            </div>
            <div>
              <Counter end={stats.companies} duration={4000} />
              <p>Companies</p>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Jobportal;

