import React from 'react';
import { Battery, Sprout, Dna, Heart, ShoppingBag, Brain, MonitorSmartphone, Briefcase, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

// Util to combine class names
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

// Interfaces
interface SectorCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  className?: string;
  description?: string;
}

interface Program {
  title: string;
}

interface ProgramListProps {
  programs: Program[];
}

interface CTAButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}




// SectorCard Component
const SectorCard = ({ title, icon, color, description }: SectorCardProps) => {
  
  return (
    <div className="relative group">
      <div className={'sector-card h-full rounded-2xl border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer'}>
        <div className="p-6 flex flex-col items-center text-center">
          <div className={" bg-red-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-all duration-300"}>
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
      {description && (
        <div className="absolute left-0 top-full z-10 mt-2 w-80 p-4 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
          <h4 className="text-lg font-semibold mb-2">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      )}
    </div>
  );
};

// ProgramList Component
const ProgramList = ({ programs }: ProgramListProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Sample Programs</h2>
      <ul className="space-y-3">
        {programs.map((program, index) => (
          <li
            key={index}
            className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm animate-slide-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0 " />
            <span>{program.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// CTAButton Component
const CTAButton = ({ children, variant,onClick }: CTAButtonProps) => {
  const base = 'px-6 py-3 font-semibold rounded-2xl  transition duration-300';
  const styles = variant === 'primary'
     ? 'bg-red-500 text-white border-b-4 border-red-300 hover:bg-red-600'
    : 'border border-gray-300 border-b-4 border-gray-300  hover:bg-gray-100';

  return (
    <button className={`${base} ${styles}`} onClick={onClick}>
      {children}
    </button>
  );
};

// Main Component: SectorExpertise
const SectorExpertise = () => {
  const samplePrograms = [
    { title: "AI for Arts & Science Students" },
    { title: "EV Battery Management" },
    { title: "Organic Farming & Food Preservation" },
    { title: "Growth Hacking & Digital Marketing" },
    { title: "Career Counselling Blueprint (Grades 9–12)" }
  ];

  const sectorData = [
    {
      title: "EV & Battery Tech",
      icon: <Battery className="h-8 w-8 text-white" />,
      color: "bg-academy-blue",
      description: "Our EV & Battery Tech programs focus on cutting-edge electric vehicle technology, battery management systems, and sustainable energy solutions."
    },
    {
      title: "AgriTech",
      icon: <Sprout className="h-8 w-8 text-white" />,
      color: "bg-academy-green",
      description: "AgriTech programs combine traditional farming knowledge with modern technology for sustainable agriculture, precision farming, and food security."
    },
    {
      title: "Biotech",
      icon: <Dna className="h-8 w-8 text-white" />,
      color: "bg-academy-purple",
      description: "Our Biotech curriculum covers genomics, bioinformatics, pharmaceutical research, and healthcare innovations using biological systems."
    },
    {
      title: "Healthcare",
      icon: <Heart className="h-8 w-8 text-white" />,
      color: "bg-academy-red",
      description: "Healthcare programs focus on medical technology, patient care innovations, healthcare management, and digital health solutions."
    },
    {
      title: "Retail & BFSI",
      icon: <ShoppingBag className="h-8 w-8 text-white" />,
      color: "bg-academy-orange",
      description: "Retail & Banking, Financial Services and Insurance (BFSI) programs cover digital transformation, fintech, customer experience, and data analytics."
    },
    {
      title: "Psychology & Communication",
      icon: <Brain className="h-8 w-8 text-white" />,
      color: "bg-academy-teal",
      description: "Our Psychology & Communication courses develop emotional intelligence, effective communication strategies, and understanding human behavior."
    },
    {
      title: "AI, ML & Prompt Engineering",
      icon: <MonitorSmartphone className="h-8 w-8 text-white" />,
      color: "bg-academy-yellow",
      description: "Learn artificial intelligence, machine learning algorithms, prompt engineering, and how to build AI applications across various industries."
    },
    {
      title: "Corporate Training",
      icon: <Briefcase className="h-8 w-8 text-white" />,
      color: "bg-academy-blue",
      description: "Corporate Training programs tailored for businesses looking to upskill their workforce in emerging technologies and soft skills."
    }
  ];
  const navigate = useNavigate();
  const handleViewGovernmentProjects = () => {
    navigate('/govt/ViewGovtProject');
  };
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-academy-blue animate-fade-in">
            CROSS-SECTOR EXPERTISE
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 animate-fade-in">
            Not Just Training. <span className="font-bold">Transformation.</span>
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Sectors We Cover</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {sectorData.map((sector, index) => (
              <SectorCard
                key={index}
                title={sector.title}
                icon={sector.icon}
                color={sector.color}
                description={sector.description}
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <ProgramList programs={samplePrograms} />
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 animate-fade-in">
          <CTAButton variant="primary">
            Request Sample Curriculum by Sector
          </CTAButton>
          <CTAButton variant="secondary" onClick={handleViewGovernmentProjects }>
            View Government Projects
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default SectorExpertise;
