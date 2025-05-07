
import { Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Fdpcalender = () => {
  return (
    
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 md:px-6" data-aos="fade-left">
      <div className="w-full max-w-4xl mt-10">
        <div className="text-center mb-12">
          <h1 className="text-lg md:text-4xl  font-bold mb-2">Pick From Ready-to-Run FDP Calendars</h1>
          <p className="text-gray-600 text-8px">Choose the perfect faculty development program format for your institution</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* 3-Day Intensive FDP Card */}
          <div className="border rounded-lg p-6 flex flex-col h-full animate-fade-in hover:scale-105 transition-transform duration-200">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-red-500" />
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-center mb-2">3-Day Intensive FDP</h2>
            <p className="text-gray-600 text-5px text-center mb-6">
              Quick-impact, high-energy program focused on essential teaching techniques for the digital classroom
            </p>
            
            <div className="mb-6">
              <p className="font-medium mb-3">Program Includes:</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center mr-3">
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  </div>
                  <span>Digital Tools Workshop</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center mr-3">
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  </div>
                  <span>Student Engagement Tactics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border-2 border-black  flex items-center justify-center mr-3">
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  </div>
                  <span>Assessment Redesign</span>
                </div>
              </div>
            </div>
            
            <div className="mt-auto">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                Download Calendar
              </Button>
            </div>
          </div>
          
          {/* 5-Day NEP Mastery FDP Card */}
          <div className="border rounded-lg p-4 flex flex-col h-full animate-fade-in hover:scale-105 transition-transform duration-200">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-red-500  " />
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-center mb-2">5-Day NEP Mastery FDP</h2>
            <p className="text-gray-600 text-center text-5px mb-6">
              Comprehensive program covering NEP principles, implementation strategies and pedagogical transformation
            </p>
            
            <div className="mb-6">
              <p className="font-medium mb-3">Program Includes:</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center mr-3">
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  </div>
                  <span className=" ">NEP Framework Deep-Dive</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center mr-3">
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  </div>
                  <span>Skill-Based Teaching</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center mr-3">
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  </div>
                  <span>Project-Based Learning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center mr-3">
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  </div>
                  <span>Outcome Mapping</span>
                </div>
              </div>
            </div>
            
            <div className="mt-auto">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                Download Calendar
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 flex justify-center">
          <Button 
            className="bg-red-500 hover:bg-red-600 text-black px-6 shadow-lg animate-fade-in scale-in transition-transform duration-200 hover:scale-105"
          >
            Get My FDP Calendar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Fdpcalender;
