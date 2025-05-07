
import React, { useRef, useEffect } from 'react';

import { cn } from '@/lib/utils';

const Oldandnewmethod = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Play videos on component mount
    const videos = [videoRef1.current, videoRef2.current];
    videos.forEach(video => {
      if (video) {
        video.play().catch(error => {
          console.error("Video play failed:", error);
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
   
      {/* Feature Compare Section - Old Method */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mb-12">
          
          
          <h1 className="md:text-5xl text-2xl text-center font-bold text-black p-2 rounded pt-12">
              Why Traditional Teaching <span className="text-red-600">No Longer Works</span>
            </h1>
          <div className="h-1 w-24 bg-red-600 rounded-full mx-auto"></div>
        </div>

        {/* Old Method Section */}
        <div className="max-w-7xl mx-auto mb-20 pl-10">
          <div className="grid grid-cols-1 gap-4 items-center lg:grid-cols-2">
            <div className="order-2 lg:order-1 flex justify-center md:justify-center">
               <div className='  max-w-xl'>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Old Method</h2>
              <div className="text-lg text-gray-600 mb-8 leading-relaxed">
                <div className="space-y-3">
                  <h3 className="font-semibold text-xl text-red-600"></h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="animate-fade-in" style={{ animationDelay: "0s" }}>
                      One-way lecture delivery
                    </li>
                    <li className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                      Rote learning and memorization
                    </li>
                    <li className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      Minimal technology integration
                    </li>
                    <li className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                      Static curriculum for years
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-1 w-20 bg-red-600 rounded-full"></div>
                {/* <span className="ml-4 text-blue-600 font-medium">Explore</span> */}
              </div>
              </div>
            </div>
            
            {/* <div className="order-1 lg:order-2 overflow-hidden rounded-xl shadow-2xl">
              <video
                ref={videoRef1}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="auto"
                style={{ minHeight: "320px" }}
              >
                <source src="/images/academy/Video/2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> */}
              <div className="order-1 lg:order-2 overflow-hidden ">
              <video
                ref={videoRef1}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="auto"
                style={{ minHeight: "320px" }}
              >
                <source src="/images/academy/Video/2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* New Method Section */}
        <div className="max-w-7xl mx-auto bg-white py-16 px-4 sm:px-6 lg:px-8 rounded-2xl">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            {/* <div className="order-1 overflow-hidden rounded-xl shadow-2xl">
              <video
                ref={videoRef2}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="auto"
                style={{ minHeight: "320px" }}
              >
                <source src="/images/academy/Video/1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> */}
             <div className="order-1 overflow-hidden  ">
              <video
                ref={videoRef2}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="auto"
                style={{ minHeight: "320px" }}
              >
                <source src="/images/academy/Video/1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="order-2 flex justify-center md:justify-center">
            <div className='  max-w-xl'>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">New Method</h2>
              <div className="text-lg text-gray-600 mb-8 leading-relaxed">
                <div className="space-y-3 ">
                  <h3 className="font-semibold text-xl text-red-600"></h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="animate-fade-in" style={{ animationDelay: "0s" }}>
                      Interactive collaborative learning
                    </li>
                    <li className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                      AI-enhanced teaching tools
                    </li>
                    <li className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      Student-driven exploration
                    </li>
                    <li className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                      Adaptive learning pathways
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-1 w-20 bg-red-600 rounded-full"></div>
                {/* <span className="ml-4 text-blue-600 font-medium">Explore</span> */}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default Oldandnewmethod;