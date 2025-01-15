// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowUp } from 'lucide-react';
// import { Button } from "../../components/naanMudhalvan/ui/button"

// interface ScrollToTopButtonProps {
//   isVisible: boolean;
//   onClick: () => void;
// }

// export function ScrollToTopButton({ isVisible, onClick }: ScrollToTopButtonProps) {
//   return (
//     <motion.div
//       className="fixed bottom-8 right-8"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: isVisible ? 1 : 0 }}
//       transition={{ duration: 0.2 }}
//     >
//       <Button
//         variant="outline"
//         size="icon"
//         className="rounded-full bg-white shadow-md"
//         onClick={onClick}
//         aria-label="Scroll to top"
//       >
//         <ArrowUp className="h-4 w-4" />
//       </Button>
//     </motion.div>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from "./ui/button"

interface ScrollToTopButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

export function ScrollToTopButton({ isVisible, onClick }: ScrollToTopButtonProps) {
  return (
    <motion.div
      className="fixed bottom-8 right-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-white shadow-md"
        onClick={onClick}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </motion.div>
  );
}

