import React, { useState } from 'react';
import { Target, BookOpen, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const goals = [{
  icon: Target,
  title: 'Enhancing Training Scale',
  description: 'Training over 30,000 students across 18 specialized courses, focusing on industry-relevant skills.',
  value: 30000, // Adjusted number value
  subtext: '18 specialized courses',
  details: [
    { img: '/images/achivements/Training_Scale/1.jpg', alt: 'University 1', link: 'https://university1.com' },
    { img: '/images/achivements/Training_Scale/2.jpg', alt: 'University 2', link: 'https://university2.com' },
    { img: '/images/achivements/Training_Scale/3.jpg', alt: 'University 3', link: '4ttps://university3.com' },
    { img: '/images/achivements/Training_Scale/4.jpg', alt: 'University 4', link: 'https://university3.com' },
    { img: '/images/achivements/Training_Scale/5.jpg', alt: 'University 5', link: 'https://university3.com' },
   
  ],
},
{
  icon: BookOpen,
  title: 'Expanding Reach',
  description: 'Expanding our reach to additional colleges to provide students with a robust learning experience.',
  value: 500, // Adjusted number value
  subtext: 'Colleges and universities',
  details: [
    { img: '/images/achivements/university_logo/ALAGAPPA UNIVERSITY.png', alt: 'University 4', link: 'https://university4.com' },
    { img: '/images/achivements/university_logo/ANNAMALAI UNIVERSITY.png', alt: 'University 5', link: 'https://university5.com' },
    { img: '/images/achivements/university_logo/BHARATHIAR UNIVERSITY.png', alt: 'University 6', link: 'https://university6.com' },
    { img: '/images/achivements/university_logo/BHARATHIDASAN UNIVERSITY.png', alt: 'University 5', link: 'https://university5.com' },
    { img: '/images/achivements/university_logo/MADURAI KAMARAJ UNIVERSITY.png', alt: 'University 5', link: 'https://university5.com' },
    { img: '/images/achivements/university_logo/MANONMANIAM SUNDARANAR UNIVERSITY.png', alt: 'University 5', link: 'https://university5.com' },
    { img: '/images/achivements/university_logo/MOTHER TERESA UNIVERSITY.png', alt: 'University 5', link: 'https://university5.com' },
    { img: '/images/achivements/university_logo/PERIYAR UNIVERSITY.png', alt: 'University 5', link: 'https://university5.com' },
    { img: '/images/achivements/university_logo/THIRUVALLUVAR UNIVERSITY.png', alt: 'University 5', link: 'https://university5.com' },
    { img: '/images/achivements/university_logo/UNIVERSITY OF MADRAS.png', alt: 'University 5', link: 'https://university5.com' },
  ],
},
{
  icon: Users,
  title: 'Enhancing Career Readiness',
  description: 'Enhancing career readiness by connecting students with top corporates for internships and placements.',
  value: 10000, // Adjusted number value
  subtext: 'Internships and placements',
  details: [
    { img: '/images/achivements/golden-source.png', alt: 'University 7', link: 'https://university7.com'  },
    { img: '/images/achivements/Ace.png', alt: 'University 8', link: 'https://university8.com' },
    { img: '/images/achivements/bsv.png', alt: 'University 9', link: 'https://university9.com' },
    { img: '/images/achivements/csm.png', alt: 'University 8', link: 'https://university8.com' },
    { img: '/images/achivements/in.png', alt: 'University 9', link: 'https://university9.com' },
    { img: '/images/achivements/plastic-for-change.png', alt: 'University 9', link: 'https://university9.com' },
    { img: '/images/achivements/wipro.png', alt: 'University 8', link: 'https://university8.com' },
  
  ],
},
];

export function Future({ f_data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="relative group bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32 overflow-hidden">
  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-2xl lg:text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
      >
        {f_data.what_we_doing}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-xl leading-8 text-gray-600"
      >
       Building on this success, Rareminds is taking the program to new heights this year by:
      </motion.p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
    >
     <dl className="grid grid-cols-1 gap-8 lg:grid-cols-1">
  {goals.map((goal, index) => (
    <div key={goal.title} className="relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 * (index + 4) }}
        whileHover={{ scale: 1.05 }}
        className="relative overflow-hidden rounded-2xl w-[60%] bg-white p-8 shadow-lg ring-1 ring-gray-200/50 hover:shadow-xl transition-all duration-300 mx-auto cursor-pointer"
        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
      >
        <dt className="flex items-center justify-center gap-x-4">
          <goal.icon className="h-12 w-12 flex-none text-blue-600" />
          <span className="text-xl font-semibold leading-7 text-gray-900">
            {goal.title}
          </span>
        </dt>
        <dd className="mt-4 text-base leading-7 text-gray-600 text-center">
          {goal.description}
        </dd>
      </motion.div>

      {/* Animated image section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-4 w-full mx-auto p-4 rounded-lg overflow-hidden"
      >
        <div className="flex space-x-6 overflow-hidden">
          {goal.details.map((detail, i) => (
            <motion.div
              key={i}
              className="relative sm:w-[200px] sm:h-[120px] flex-shrink-0 overflow-hidden rounded-lg"
              initial={{ x: 100 }}
              animate={{ x: [-100, 0, 100] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              <motion.img
                src={detail.img}
                alt={detail.alt}
                className="object-contain w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  ))}
</dl>
    </motion.div>
  </div>
</div>

  );
}
