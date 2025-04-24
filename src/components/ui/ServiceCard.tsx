import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "rounded-[20px] p-6 hover:-translate-y-1 transition-all duration-300 h-full animate-on-scroll",
        className,
      )}
    >
      {icon && (
        <div className="text-corporate-primary mb-4 text-3xl">{icon}</div>
      )}
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
