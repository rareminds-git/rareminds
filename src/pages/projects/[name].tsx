import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { HeroBanner } from '../../components/naanMudhalvan/HeroBanner';
import { Stats } from '../../components/naanMudhalvan/Stats';
import { Future } from '../../components/naanMudhalvan/Future';
import { CallToAction } from '../../components/naanMudhalvan/CallToAction';
import { CourseSection } from '../../components/naanMudhalvan/CourseSection';
import { naamMudhalvanCourses, otherCourses } from '../../data/mockCourses';
import { Timeline } from '../../components/naanMudhalvan/Timeline';
// import { MapSection } from '../../components/naanMudhalvan/MapSection';
import { Header } from '../../components/naanMudhalvan/Header';
import { resolvePackageData } from 'vite';
import { Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SemesterDisplay from '../../components/naanMudhalvan/SemesterDisplay';
import { StudentTestimonials, FacultyTestimonials } from '../../components/naanMudhalvan/Testimonials';
import { useScrollToTop } from '../../../src/hooks/useScrollToTop';
import { ScrollToTopButton } from '../../components/naanMudhalvan/ScrollToTopButton';
import {allSemesterData} from '../../data/semisterData';




function Naan() {
  const [data, setData] = useState<any>([
    { pid:1,
      page: "Academic and Skill Development  ",
      pname:"Naan Mudhalvan 2024  5th Sem Upskilling Program (Powered by Rareminds)",
    description1:["Rareminds, in collaboration with the Government of Tamil Nadu, proudly launches the Naan Mudhalvan 2024 Program—a flagship initiative designed to equip over 30,000 students with industry-specific skills across 18 specialized courses.","This groundbreaking program bridges the gap between education and employability, empowering students to achieve their career aspirations while supporting the state’s vision for a skilled workforce."],
    year:"2024",
    what_we_doing:"What We have Achieved in 2024",
    take_the_next_step:"",
     stat_data:"Since 2024, we have made a significant impact by:"
    },{
      pid:2,
      page: "Academic and Skill Development  ",
      pname:"Naan Mudhalvan 2024  6th Sem Upskilling Program (Powered by Rareminds)",
    description1:["Rareminds, in collaboration with the Government of Tamil Nadu, proudly launches the Naan Mudhalvan 2024 Program—a flagship initiative designed to equip over 30,000 students with industry-specific skills across 18 specialized courses.","This groundbreaking program bridges the gap between education and employability, empowering students to achieve their career aspirations while supporting the state’s vision for a skilled workforce."],
    year:"2024",
    what_we_doing:"What We have Achieved in 2024",
   
    take_the_next_step:"",
     stat_data:"Since 2024, we have made a significant impact by:"
    },

    { pid:3,
      page: "Academic and Skill Development ",
      pname:"Rareminds & Naan Mudhalvan Upskilling Program 2025",
      stname:"Empowering Tamil Nadu’s Youth Through Skill Development",
      description1:["Rareminds, a leader in skill development plays a pivotal role in the Naan Mudhalvan 2025 initiative, launched by the Tamil Nadu Skill Development Council and the Government of Tamil Nadu."],
      description2:["As an official training partner we are set to transform the state’s workforce by providing 30,000+ students with cutting-edge industry-specific skills across 18 specialized courses."],
      description3:["This transformative program bridges the gap between education and employability, empowering students to achieve their career aspirations while supporting the state’s vision for a skilled workforce."],
      year:"2025",
      what_we_doing:"What We're Doing in 2025",
      event_time_line:[],
      Take_the_next_step:"",
      stat_data:"Since 2024, we have made a significant impact by:"
    }  
  ]);
  console.log(allSemesterData );
  const { name } = useParams();
  console.log(name);
  
  const pageData = data.find(pageDetails => pageDetails.pname === name);
  console.log(pageData);
  const { isVisible, scrollToTop } = useScrollToTop();

  const semesterData = allSemesterData.find((semester) => semester.pname === name);


  if (!pageData) {
    return <div>Semester not found</div>;
  }

  return (
    
    <div className="min-h-screen bg-white">
    {/* <Header /> */}
    <HeroBanner hero_data={pageData} />
    <Stats s_data={pageData}/>
    <Future f_data={pageData} />

    
    {/* <div className="container mx-auto px-4 py-8 ">
        <motion.h1
          className="text-3xl font-bold text-center sm:mb-12 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Semester Information
        </motion.h1>
        {allSemesterData.map((semester, index) => (
          <SemesterDisplay
            key={index}
            semesterNumber={semester.semesterNumber}
            startDate={semester.startDate}
            endDate={semester.endDate}
            registrationStart={semester.registrationStart}
            registrationEnd={semester.registrationEnd}
            data={semester.data}
          />
        ))}
        
      </div> */}
{/* 
<div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">{pageData?.page || "No Data Available"}</h1>
      {semesterData && pageData.page !== "nm_2025" && pageData.pname ? (
        <SemesterDisplay
        semesterNumber={semesterData.semesterNumber}
        startDate={semesterData.startDate}
        endDate={semesterData.endDate}
        registrationStart={semesterData.registrationStart}
        registrationEnd={semesterData.registrationEnd}
        data={semesterData.data || []} // Provide a fallback to avoid errors if data is undefined
      />
      ) : (
        <div className="text-center">
      {/* {pageData?.content || "No content available for this page."}{pageData?.pname} */}
    {/* </div>
      )}
      <ScrollToTopButton isVisible={isVisible} onClick={scrollToTop} />
    </div>  */}

<div className="container mx-auto px-4 py-8">
  {/* Check if pageData.page is not "nm_2025" */}
  <h1 className="text-[35px] font-bold text-center mb-16">
        {pageData?.page|| "No Data Available"}
      </h1>
  {/* {pageData?.page !== "nm_2025" && ( */}
    <>
    
      {semesterData?.pid && pageData.pid ? (
        <SemesterDisplay
          semesterNumber={semesterData.semesterNumber}
          startDate={semesterData.startDate}
          endDate={semesterData.endDate}
          registrationStart={semesterData.registrationStart}
          registrationEnd={semesterData.registrationEnd}
          data={semesterData.data || []} // Provide a fallback to avoid errors if data is undefined
        />
      ) : (
        <div className="text-center">
          {/* Uncomment below line if content needs to be displayed */}
          {/* {pageData?.content || "No content available for this page."}{pageData?.pname} */}
        </div>
      )}
    </>
  {/* )} */}
  <ScrollToTopButton isVisible={isVisible} onClick={scrollToTop} />
</div>




    <CourseSection
      title="Naan Mudhalvan Courses"
      description="Explore our specialized courses designed to enhance your skills and career prospects."
      courses={naamMudhalvanCourses}
    />
     {/* <CourseSection
      title="Other Courses"
      description="Discover additional learning opportunities to broaden your expertise."
      courses={otherCourses}
    />  
    {pageData?.event_time_line?.length > 0 ? <Timeline t_data={pageData}/>: <></>}
    <MapSection /> */}



<CallToAction />

{/* Semester Information Section */}
<div className="container mx-auto px-4 sm:py-8 py-4">
       
        <div className="sm:mt-16 mt-4">
          <motion.h2
            className="text-2xl font-bold text-center sm:mb-16 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 gap-8">
            <StudentTestimonials />
            <FacultyTestimonials />
          </div>
        </div>
      </div>

      {pageData?.event_time_line?.length > 0 && <Timeline t_data={pageData} />}
      {/* <MapSection /> */}
    
   
   
    <ScrollToTopButton isVisible={isVisible} onClick={scrollToTop} />
  </div>
  );
}

export default Naan;



