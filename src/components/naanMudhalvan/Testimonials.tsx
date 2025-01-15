import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const studentTestimonials: Testimonial[] = [
  { id: 1, name: "S. Priya", role: "Student From Bharathiar University", content: "Before the Rareminds program, I was unsure about my future. Now, I feel ready to take on real-world challenges! Thank you Rareminds and Naan Mudhalvan", image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "R. Karthik", role: "Student From Madurai Kamaraj University", content: "This training was practical and easy to understand, trainers from Rareminds made me understand every concept clearly. I learned things that no textbook taught me!", image: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "M. Deepa", role: "Student From Annamalai University", content: "I got to work on real projects, and now I know how to apply what I study! " , image: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "V. Arun", role: "Student From Alagappa University", content: "I used to be nervous in interviews. Now, I can confidently answer and present myself better!" , image: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "K. Harini", role: "Student From Thiruvalluvar University", content: "This program gave me the skills and motivation to plan my career in the right direction!" , image: "/placeholder.svg?height=100&width=100" },

];

const facultyTestimonials: Testimonial[] = [
  { id: 1, name: "Dr. Meena R", role: "Alagappa University", content: "Teaching students is not just about books. This program helped me make learning more practical!" , image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "Prof. Aravind M", role: "Annamalai University", content: "After this training, I can guide my students better and help them build real skills." , image: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "Dr. Suresh B", role: "Mother Teresa Women’s University", content: "I learned new ways to teach complex topics in a simple and effective manner." , image: "/placeholder.svg?height=100&width=100" },
  { id: 4, name: "Dr. Lakshmi V", role: "Bharathiar University", content: "The training made me realize how important it is to prepare students for industry needs." , image: "/placeholder.svg?height=100&width=100" },
  { id: 5, name: "Prof. Karthikeyan", role: "Madurai Kamaraj University", content: "This program gave me fresh ideas to make my classroom sessions more interactive and engaging!", image: "/placeholder.svg?height=100&width=100" },
];

export const StudentTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % studentTestimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto overflow-hidden ">
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mt-10 mb-12 text-center">Student Testimonials</h2>
      <div className="relative h-[250px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full  "
          >
            <Card className="overflow-hidden shadow-md bg-gradient-to-r from-blue-500 to-purple-600 hover:text-black ">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4 text-white ">
                  {/* <Avatar className="w-16 h-16 border-2 border-gray-200">
                    <AvatarImage src={studentTestimonials[currentIndex].image} alt={studentTestimonials[currentIndex].name} />
                    <AvatarFallback className="text-lg bg-gray-100">{studentTestimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar> */}
                  <div>
                    <p className="font-semibold text-lg text-white">{studentTestimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-600 ">{studentTestimonials[currentIndex].role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-white">"{studentTestimonials[currentIndex].content}"</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export const FacultyTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % facultyTestimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden px-4">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl mt-10 mb-12 text-center ">Faculty Testimonials</h2>
      <div className="relative h-[250px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-full"
          >
            <Card className="overflow-hidden shadow-md bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  {/* <Avatar className="w-16 h-16 border-2 border-gray-200">
                    <AvatarImage src={facultyTestimonials[currentIndex].image} alt={facultyTestimonials[currentIndex].name} />
                    <AvatarFallback className="text-lg bg-gray-100">{facultyTestimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar> */}
                  <div>
                    <p className="font-semibold text-lg">{facultyTestimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-600">{facultyTestimonials[currentIndex].role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-white">"{facultyTestimonials[currentIndex].content}"</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

