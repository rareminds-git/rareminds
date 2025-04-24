import { useState } from "react";

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  company: string;
  contact?: string;
}

const TestimonialCard = ({
  content,
  author,
  position,
  company,
  contact,
}: TestimonialCardProps) => {
  const [expanded, setExpanded] = useState(false);

  // If content is long, truncate it for initial display
  const isLongContent = content.length > 200;
  const truncatedContent =
    isLongContent && !expanded ? content.slice(0, 200) + "..." : content;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 animate-on-scroll">
      <div className="mb-4 text-rareminds-purple">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6">{truncatedContent}</p>

      {isLongContent && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-rareminds-purple font-medium hover:text-rareminds-accent mb-4"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      <div className="border-t border-gray-200 pt-4">
        <h4 className="font-semibold text-rareminds-dark">{author}</h4>
        <p className="text-gray-600">{position}</p>
        <p className="text-gray-500">{company}</p>
        {contact && <p className="text-sm text-gray-500 mt-1">{contact}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
