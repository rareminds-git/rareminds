// import React, { useRef, useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/naanMudhalvan/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/naanMudhalvan/ui/table";

// interface UniversityData {
//   University: string;
//   Domain: string;
//   SEM: number;
//   Course: string;
//   'SDP- students assigned': number;
//   'FDP- Faculties attended training': number;
// }

// interface SemesterDisplayProps {
//   semesterNumber: number;
//   startDate: string;
//   endDate: string;
//   registrationStart: string;
//   registrationEnd: string;
//   data: UniversityData[];
// }

// export default function SemesterDisplay({
//   semesterNumber,
//   startDate,
//   endDate,
//   registrationStart,
//   registrationEnd,
//   data
// }: SemesterDisplayProps) {
//   const tableRef = useRef<HTMLDivElement>(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const scrollStep = 1;

//   useEffect(() => {
//     const tableElement = tableRef.current;
//     if (!tableElement) return;

//     let animationFrameId: number;

//     const autoScroll = () => {
//       if (!isHovering) {
//         setScrollPosition((prevPosition) => {
//           const newPosition = prevPosition + scrollStep;
//           if (newPosition >= tableElement.scrollHeight - tableElement.clientHeight) {
//             return 0;
//           }
//           return newPosition;
//         });
//       }
//       animationFrameId = requestAnimationFrame(autoScroll);
//     };

//     animationFrameId = requestAnimationFrame(autoScroll);

//     return () => cancelAnimationFrame(animationFrameId);
//   }, [isHovering]);

//   useEffect(() => {
//     const tableElement = tableRef.current;
//     if (tableElement) {
//       tableElement.scrollTop = scrollPosition;
//     }
//   }, [scrollPosition]);

//   const handleMouseEnter = () => setIsHovering(true);
//   const handleMouseLeave = () => setIsHovering(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card className="w-full max-w-4xl mx-auto my-8">
//         <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//           <CardTitle className="text-2xl font-bold">
//             {semesterNumber}TH SEM {new Date().getFullYear()}
//           </CardTitle>
//           <p className="text-sm opacity-80">
//             Course Duration: {startDate} to {endDate}
//           </p>
//           <p className="text-sm opacity-80">
//             Registration: {registrationStart} to {registrationEnd}
//           </p>
//         </CardHeader>
//         <CardContent className="p-6 relative">
//           <div 
//             ref={tableRef} 
//             className="max-h-[500px] overflow-y-auto overflow-x-auto"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="w-[250px] sticky top-0 bg-white z-10">University</TableHead>
//                   <TableHead className="sticky top-0 bg-white z-10">Domain</TableHead>
//                   <TableHead className="sticky top-0 bg-white z-10">SEM</TableHead>
//                   <TableHead className="sticky top-0 bg-white z-10">Course</TableHead>
//                   <TableHead className="text-right sticky top-0 bg-white z-10">SDP Students</TableHead>
//                   <TableHead className="text-right sticky top-0 bg-white z-10">FDP Faculties</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {data?.map((row, index) => (
//                   <motion.tr
//                     key={index}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="hover:bg-gray-100 transition-colors"
//                   >
//                     <TableCell className="font-medium">{row.University}</TableCell>
//                     <TableCell>{row.Domain}</TableCell>
//                     <TableCell>{row.SEM}</TableCell>
//                     <TableCell>{row.Course}</TableCell>
//                     <TableCell className="text-right">{row['SDP- students assigned']}</TableCell>
//                     <TableCell className="text-right">{row['FDP- Faculties attended training']}</TableCell>
//                   </motion.tr>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }


// ////////////

// import React, { useRef, useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/naanMudhalvan/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/naanMudhalvan/ui/table";
// // import { Card, CardContent, CardHeader, CardTitle } from "../../components/naanMudhalvan/ui/card";
// // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/naanMudhalvan/ui/table";


// interface UniversityData {
//   University: string;
//   Domain: string;
//   SEM: number;
//   Course: string;
//   'SDP- students assigned': number;
//   'FDP- Faculties attended training': number;
// }

// interface SemesterDisplayProps {
//   semesterNumber: number;
//   startDate: string;
//   endDate: string;
//   registrationStart: string;
//   registrationEnd: string;
//   data: UniversityData[];
// }

// export default function SemesterDisplay({
//   semesterNumber,
//   startDate,
//   endDate,
//   registrationStart,
//   registrationEnd,
//   data
// }: SemesterDisplayProps) {
//   const tableRef = useRef<HTMLDivElement>(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const scrollStep = 1;

//   useEffect(() => {
//     const tableElement = tableRef.current;
//     if (!tableElement) return;

//     let animationFrameId: number;

//     const autoScroll = () => {
//       if (!isHovering) {
//         setScrollPosition((prevPosition) => {
//           const newPosition = prevPosition + scrollStep;
//           if (newPosition >= tableElement.scrollHeight - tableElement.clientHeight) {
//             return 0;
//           }
//           return newPosition;
//         });
//       }
//       animationFrameId = requestAnimationFrame(autoScroll);
//     };

//     animationFrameId = requestAnimationFrame(autoScroll);

//     return () => cancelAnimationFrame(animationFrameId);
//   }, [isHovering]);

//   useEffect(() => {
//     const tableElement = tableRef.current;
//     if (tableElement) {
//       tableElement.scrollTop = scrollPosition;
//     }
//   }, [scrollPosition]);

//   const handleMouseEnter = () => setIsHovering(true);
//   const handleMouseLeave = () => setIsHovering(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card className="w-full max-w-4xl mx-auto my-8">
//         <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//           <CardTitle className="text-2xl font-bold">
//             {semesterNumber}TH SEM {new Date().getFullYear()}
//           </CardTitle>
//           <p className="text-sm opacity-80">
//             Course Duration: {startDate} to {endDate}
//           </p>
//           <p className="text-sm opacity-80">
//             Registration: {registrationStart} to {registrationEnd}
//           </p>
//         </CardHeader>
//         <CardContent className="p-6 relative">
//           <div 
//             ref={tableRef} 
//             className="max-h-[500px] overflow-y-auto overflow-x-auto"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="w-[250px] sticky top-0 bg-white z-10">University</TableHead>
//                   <TableHead className="sticky top-0 bg-white z-10">Domain</TableHead>
//                   <TableHead className="sticky top-0 bg-white z-10">SEM</TableHead>
//                   <TableHead className="sticky top-0 bg-white z-10">Course</TableHead>
//                   <TableHead className="text-right sticky top-0 bg-white z-10">SDP Students</TableHead>
//                   <TableHead className="text-right sticky top-0 bg-white z-10">FDP Faculties</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {data.map((row, index) => (
//                   <motion.tr
//                     key={index}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="hover:bg-gray-100 transition-colors"
//                   >
//                     <TableCell className="font-medium">{row.University}</TableCell>
//                     <TableCell>{row.Domain}</TableCell>
//                     <TableCell>{row.SEM}</TableCell>
//                     <TableCell>{row.Course}</TableCell>
//                     <TableCell className="text-right">{row['SDP- students assigned']}</TableCell>
//                     <TableCell className="text-right">{row['FDP- Faculties attended training']}</TableCell>
//                   </motion.tr>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

interface UniversityData {
  University: string;
  Domain: string;
  SEM: number;
  Course: string;
  'SDP- students assigned': number;
  'FDP- Faculties attended training': number;
}

interface SemesterDisplayProps {
  semesterNumber: number;
  startDate: string;
  endDate: string;
  registrationStart: string;
  registrationEnd: string;
  data: UniversityData[];
}

// Extended dummy data (15 more entries)
const extendedDummyData: UniversityData[] = [
  // {
  //   University: "Chennai University",
  //   Domain: "Computer Science",
  //   SEM: 6,
  //   Course: "Artificial Intelligence",
  //   "SDP- students assigned": 1800,
  //   "FDP- Faculties attended training": 45
  // },
  // {
  //   University: "Madurai University",
  //   Domain: "Physics",
  //   SEM: 6,
  //   Course: "Quantum Mechanics",
  //   "SDP- students assigned": 1200,
  //   "FDP- Faculties attended training": 30
  // },
  // {
  //   University: "Coimbatore Institute",
  //   Domain: "Mechanical Engineering",
  //   SEM: 6,
  //   Course: "Robotics",
  //   "SDP- students assigned": 1500,
  //   "FDP- Faculties attended training": 38
  // },
  // {
  //   University: "Salem College",
  //   Domain: "Electrical Engineering",
  //   SEM: 6,
  //   Course: "Power Systems",
  //   "SDP- students assigned": 1300,
  //   "FDP- Faculties attended training": 32
  // },
  // {
  //   University: "Trichy University",
  //   Domain: "Civil Engineering",
  //   SEM: 6,
  //   Course: "Structural Design",
  //   "SDP- students assigned": 1400,
  //   "FDP- Faculties attended training": 35
  // },
  // {
  //   University: "Vellore Institute",
  //   Domain: "Biotechnology",
  //   SEM: 6,
  //   Course: "Genetic Engineering",
  //   "SDP- students assigned": 1100,
  //   "FDP- Faculties attended training": 28
  // },
  // {
  //   University: "Thanjavur College",
  //   Domain: "Agriculture",
  //   SEM: 6,
  //   Course: "Crop Science",
  //   "SDP- students assigned": 900,
  //   "FDP- Faculties attended training": 22
  // },
  // {
  //   University: "Kanyakumari University",
  //   Domain: "Marine Biology",
  //   SEM: 6,
  //   Course: "Oceanography",
  //   "SDP- students assigned": 800,
  //   "FDP- Faculties attended training": 20
  // },
  // {
  //   University: "Erode Engineering College",
  //   Domain: "Chemical Engineering",
  //   SEM: 6,
  //   Course: "Process Control",
  //   "SDP- students assigned": 1000,
  //   "FDP- Faculties attended training": 25
  // },
  // {
  //   University: "Tirunelveli University",
  //   Domain: "Environmental Science",
  //   SEM: 6,
  //   Course: "Pollution Control",
  //   "SDP- students assigned": 950,
  //   "FDP- Faculties attended training": 24
  // },
  // {
  //   University: "Dharmapuri College",
  //   Domain: "Mathematics",
  //   SEM: 6,
  //   Course: "Applied Statistics",
  //   "SDP- students assigned": 1050,
  //   "FDP- Faculties attended training": 26
  // },
  // {
  //   University: "Namakkal Institute",
  //   Domain: "Information Technology",
  //   SEM: 6,
  //   Course: "Cybersecurity",
  //   "SDP- students assigned": 1600,
  //   "FDP- Faculties attended training": 40
  // },
  // {
  //   University: "Thoothukudi University",
  //   Domain: "Economics",
  //   SEM: 6,
  //   Course: "Econometrics",
  //   "SDP- students assigned": 850,
  //   "FDP- Faculties attended training": 21
  // },
  // {
  //   University: "Krishnagiri College",
  //   Domain: "Psychology",
  //   SEM: 6,
  //   Course: "Cognitive Neuroscience",
  //   "SDP- students assigned": 750,
  //   "FDP- Faculties attended training": 19
  // },
  // {
  //   University: "Virudhunagar Institute",
  //   Domain: "Pharmacy",
  //   SEM: 6,
  //   Course: "Drug Design",
  //   "SDP- students assigned": 1150,
  //   "FDP- Faculties attended training": 29
  // }
];

export default function SemesterDisplay({
  semesterNumber,
  startDate,
  endDate,
  registrationStart,
  registrationEnd,
  data
}: SemesterDisplayProps) {
  const tableRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Combine the original data with the extended dummy data
  const combinedData = [...data, ...extendedDummyData];

  useEffect(() => {
    const tableElement = tableRef.current;
    if (!tableElement) return;

    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const scrollPosition = (elapsed * 0.05) % tableElement.scrollHeight;

      if (!isHovering) {
        tableElement.scrollTop = scrollPosition;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovering]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-4xl mx-auto my-8">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardTitle className="text-2xl font-bold">
            {semesterNumber}TH SEM 
            {/* {new Date().getFullYear()} */}
          </CardTitle>
          <p className="text-sm opacity-80">
            Course Duration: {startDate} 
            {/* to {endDate} */}
          </p>
          {/* <p className="text-sm opacity-80">
            Registration: {registrationStart} to {registrationEnd}
          </p> */}
        </CardHeader>
        <CardContent className="p-6 relative">
          <div 
            ref={tableRef} 
            className="max-h-[500px] overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px] sticky top-0 bg-white z-10">University</TableHead>
                  <TableHead className="sticky top-0 bg-white z-10">Domain</TableHead>
                  <TableHead className="sticky top-0 bg-white z-10">SEM</TableHead>
                  <TableHead className="sticky top-0 bg-white z-10">Course</TableHead>
                  <TableHead className="text-right sticky top-0 bg-white z-10">SDP Students</TableHead>
                  <TableHead className="text-right sticky top-0 bg-white z-10">FDP Faculties</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {combinedData.map((row, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-gray-100 transition-colors"
                  >
                    <TableCell className="font-medium">{row.University}</TableCell>
                    <TableCell>{row.Domain}</TableCell>
                    <TableCell>{row.SEM}</TableCell>
                    <TableCell>{row.Course}</TableCell>
                    <TableCell className="text-right">{row['SDP- students assigned']}</TableCell>
                    <TableCell className="text-right">{row['FDP- Faculties attended training']}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

