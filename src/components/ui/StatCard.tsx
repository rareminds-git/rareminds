import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon?: ReactNode;
  number: string;
  description: string;
  subtext?: string;
  className?: string;
}

const StatCard = ({
  icon,
  number,
  description,
  subtext,
  className,
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-on-scroll",
        className,
      )}
    >
      {icon && <div className="text-red-600 mb-4">{icon}</div>}
      <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
        {number}
      </h3>
      <p className="text-gray-700 font-medium mb-1">{description}</p>
      {subtext && <p className="text-sm text-gray-500">{subtext}</p>}
    </div>
  );
};

export default StatCard;
