import { Book, Calendar, Circle, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface Stat {
  icon: typeof Book | typeof Calendar | typeof Circle | typeof Users;
  value: string;
  label: string;
}

interface StatsShowcaseProps {
  title: string;
  stats: Stat[];
}

const StatsShowcase = ({ title, stats }: StatsShowcaseProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        const target = parseInt(stat.value.replace(/[^0-9]/g, ''));
        let current = 0;
        const step = Math.ceil(target / 50); // Divide animation into 50 steps
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = current;
            return newCounts;
          });
        }, 30);
      });
    }
  }, [inView, stats]);

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-2xl md:text-4xl font-bold text-center leading-[50px] mb-20">
        {title}
      </h1>
      
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 md:mt-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <Icon className="w-12 h-12 text-red-500 mb-4" />
              <div className="text-lg md:text-3xl font-bold text-red-500">
                {counts[index].toLocaleString()}
                {stat.value.includes('+') ? '+' : ''}
                {stat.value.includes('%') ? '%' : ''}
              </div>
              <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsShowcase;
