
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from "./MainLayout";
import MethodCard from "./Teacher/MethodCard";
import MethodCardR from "./Students/MethodCard";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import StudentCardR from "./Students/StudentCard";
import EducatorCard from "./Teacher/EducatorCard";
import { Book, Calendar, Circle, Users } from "lucide-react";
import StatsShowcase from "./Teacher/StatsShowcase";
import ProgramCard from "./Students/ProgramCard";
import Logos from "./Logos";
import FacultyTransformation from "./Teacher/FacultyTransformation";
import Fdpcalender from "./Teacher/Fdpcalender";
import FAQ from "./Teacher/FAQ";
import FacultyForm from "./Teacher/FacultyForm";
import ResourcesPage from "./Teacher/ResourcesPage";
import ResourceDownloadForm from "./Teacher/ResourceDownloadForm";
import Testimonials from "./Teacher/TestimonialSlider";
// import TestimonialsStudent from "./Students/Testimonials";
// import VideoCarousel from "./VideoCarousel";
import VideoCarousel from "../Academy/Teacher/VideoCarousel";
import FaqAndContact from "../Academy/Teacher/FaqAndContact";
import DownloadForm from "./Teacher/DownloadForm"
import Oldandnewmethod from "./Teacher/oldandnewmethod"
import Text from "./Teacher/text";


const Academy = ({ userType = "teacher" }: { userType?: "teacher" | "student" }) => {
  const [activeTab, setActiveTab] = useState<"teacher" | "student">("teacher");

  const stats = [
    { icon: Book, value: "20,000+", label: "Faculty Trained" },
    { icon: Users, value: "100+", label: "Schools Onboarded" },
    { icon: Calendar, value: "250+", label: "Pilots Deployed" },
    { icon: Circle, value: "92%", label: "Faculty Satisfaction Rate" },
  ];

   useEffect (() =>{
    AOS.init({
    
    });
    

   },[])

  return (
   
        <div>
      {/* Hero Banner */}
       {/* Hero Banner (90% width) */}
     <div className="w-full h-[35vh] md:h-[65vh]  ">
    {/* <div className="h-full flex items-center justify-center"> */}
     <h1 className="text-4xl font-bold text-white"></h1>
      {/* </div> */}
      <VideoCarousel />
    </div>

      {/* <div className="w-full h-[65vh]"></div> */}

      <div className="w-full bg-gradient-to-r mt-6">
        <div className="h-[80%] bg-white justify-center">
          <h2 className=" text-2xl md:text-4xl font-bold text-black text-center pt-16">
            Why Schools Must <span className="text-red-600">Shift Now</span>
          </h2>
          <h4 className="text-1xl font-bold text-black text-center pb-6">
            Traditional curriculum ≠ Future Careers
          </h4>

          <div className="w-full h-[600px] bg-white relative flex justify-center">
            {/* <div className="w-full md:w-1/2 flex justify-center items-center py-4">
              <img src="/images/academy/board1.png" alt="" className="w-[50%]" />
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center py-4">
              <img src="/images/academy/ai1.png" alt="" className="w-[50%]" />
            </div> */}

          <div className="w-[90%] h-auto bg-white">
            <div className="w-full h-full  ">
            <Text />
              {/* <div className=" bg-blue-300 w-[15%] h-[30%] absolute left-[1%] top-[8%]">  </div>
          <img src="/images/academy/pth1.svg" alt="Logo" className="w-[20%] h-auto absolute  left-[15%] top-[3%]  " />
            
          <img src="/images/academy/pth2.svg" alt="Logo" className="w-[15%] h-auto absolute  left-[35%] top-[15%] " />
            
          <img src="/images/academy/pth3.svg" alt="Logo" className="w-[25%] h-auto absolute  left-[190px] top-[250px] bottom-[100px]" />
            
          <img src="/images/academy/pth4.svg" alt="Logo" className="w-[15%] h-auto absolute  left-[130px] top-[340px] bottom-[100px]" />

          <img src="/images/academy/pth5.svg" alt="Logo" className="w-[25%] h-auto absolute  left-[300px]  bottom-[50px]" />
            
          <div className="absolute bg-blue-300 w-[10%] h-32 mt-10 ml-8 bottom-20 right-[590px]">  </div> */}
          </div>
          </div>
          </div>
        </div>

   

        {/* <div
          className="h-56 flex items-center justify-center bg-cover bg-center"
          // style={{ backgroundImage: `url('/images/academy/Cloud.png')` }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <h1 className="lg:text-3xl text-2xl text-center font-bold text-black p-2 rounded pt-12">
              Why Traditional Teaching <span className="text-red-600">No Longer Works</span>
            </h1>
          </div>
        </div> */}
      </div>
       
      

     
    
      {/* <div className="flex md:hidden justify-center mb-6 gap-4">

        
        <button
          onClick={() => setActiveTab("teacher")}
          className={`px-4 py-2 font-semibold rounded ${activeTab === "teacher" ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-700"}`}
        >
          Teacher
        </button>
        <button
          onClick={() => setActiveTab("student")}
          className={`px-4 py-2 font-semibold rounded ${activeTab === "student" ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-700"}`}
        >
          Student
        </button>
      </div> */}


       <Oldandnewmethod/>
      {/* Desktop (2 Columns) + Mobile (Conditional Rendering) */}
      {/* <div className="hidden md:grid grid-cols-[47%_4%_47%] gap-0"> */}
        {/* Left Column */}
        {/* <div className="space-y-4" data-aos="fade-down-right">
          <MethodCard  />
        </div> */}

        {/* Middle Gap */}
        {/* <div className="bg-opacity-50">
          <div className="w-full h-full  opacity-50"></div>
        </div> */}

        {/* Right Column */}
        {/* <div className="space-y-4" data-aos="fade-left">
          <MethodCardR />
        </div>
      </div> */}





      {/* Mobile View */}
      {/* <div className="md:hidden space-y-4">
        {activeTab === "teacher" ? <MethodCard /> : <MethodCardR />}
      </div> */}

      {/* Yellow Card */}
      <div className="w-full flex items-center justify-center bg-white p-4 pt-0" data-aos="fade-up"
     data-aos-duration="1000">
        <Card className="max-w-[600px] w-full p-8 bg-[#FFFBEB] border-l-4 border-l-Red-400">
          <h2 className="text-lg md:text-xl font-medium mb-6 text-left">The education landscape is changing:</h2>
          <ul className="space-y-4">
            {[
              "Gen Z needs engaging, real-world learning experiences",
              "NeP navigates self-based pedagogy for future-ready students",
              "Digital-first classrooms demand tech-savvy faculty",
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-left text-sm md:text-lg">
                <Check className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-base">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center italic text-gray-800">
            "Students are changing. Are your teaching methods keeping up?"
          </p>
        </Card>
      </div>

      {/* Testimonials Section */}


      <Testimonials />
      <div className="hidden md:grid grid-cols-[47%_0%_47%] gap-0">
        <div className="space-y-4" data-aos="fade-down-right">
          
        </div>
        
      </div>





      <EducatorCard />
      <div className="min-h-screen flex items-center justify-center bg-white">
            <StatsShowcase
              title="We've Trained Over 20,000 Educators Across 100+ Institutions"
              stats={stats}
            />
          </div>
          {/* <ProgramCard /> */}

 

      {/* Logos */}
      <Logos />


   {/* Faculty Transformation & Calendar */}
      <FacultyTransformation />
      <Fdpcalender />
   
     

      {/* FAQ
      <FAQ /> */}


     

      {/* Faculty Form */}

      <div className="min-h-screen flex flex-col bg-white">
 
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-16 mt-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Still Have Questions?</h2>
        <p className="text-gray-600">Find answers to commonly asked questions about our faculty development programs</p>
      </div>
        <FaqAndContact />

      </main>
      
    
    </div>
      {/* Resources Page */}

      <ResourcesPage />

      <div className="w-full h-450px flex justify-center  p-8 mt-8 mb-6">
      <DownloadForm />
      </div>
    </div>
  
  );
};

export default Academy;
