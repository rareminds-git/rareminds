import React from "react";
import { Rss, CalendarCheck } from "lucide-react";

const PartnershipHero = () => {
    const handleCtaClick = (action: string) => {
        console.log(`Action clicked: ${action}`);
    };

    return (
        <div className="">
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex justify-center">
                    <div className="space-y-8 animate-fade-in text-center max-w-3xl w-full">
                        <div className="inline-block">
                            <span className="bg-red-400/40 backdrop-blur-md border border-red-400  text-red-400 text-xs sm:text-sm font-medium px-3 py-1 rounded-full">
                                PARTNERSHIP PROGRAM
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-snug sm:leading-tight">
                            Your Vision. <span className="text-indigo-600">Our Model.</span>
                            <br />
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Let's Scale Impact Together.
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-600 mx-auto px-2 sm:px-0">
                            Rareminds invites State Skill Development Missions (SSDMs), education departments, universities,
                            and public sector initiatives to explore high-impact collaborations tailored for local needs.
                        </p>

                        <div className="flex  gap-4 justify-center items-center">
                            <button
                                onClick={() => handleCtaClick("schedule a government pitch call")}
                                className="w-full sm:w-auto px-6 py-3 font-semibold rounded-2xl border bg-red-500 border-b-4 border-red-300 text-white hover:bg-red-400 hover:border-red-500 transition-all duration-300"
                            >
                                <span>Schedule a Government Pitch Call</span>
                            </button>

                            <button
                                onClick={() => handleCtaClick("request a department-specific proposal")}
                                className="w-full sm:w-auto px-6 py-3 font-semibold rounded-2xl border bg-white border-b-4 border-gray-300 text-black  transition-all duration-300"
                            >
                                Request Department-Specific Proposal
                            </button>
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => handleCtaClick("subscribe to government partner newsletter")}
                                className="px-6 py-3 text-black hover:text-indigo-600 hover:bg-transparent 
                                flex items-center space-x-2 font-semibold rounded-2xl transition duration-300 
                                bg-red-100 border-b-4 border-red-300 border"
                            >
                                <Rss size={16} className="mr-2 font-bold" />
                                <span>Subscribe to Govt. Partner Newsletter</span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnershipHero;
