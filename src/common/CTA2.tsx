import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowIcon from "../../public/images/north.svg";

const CTA2 = ({ path }) => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="flex justify-center items-center cursor-pointer p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        onClick={() => navigate(path)}
        className="bg-gradient-to-r from-[#FF2C2C] to-[#FF6B6B] rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out w-full max-w-md text-center p-8 relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated Background Circles */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>

        {/* Content */}
        <h3 className="font-bold font-playfair text-white text-3xl mb-4">
          Unlock Your Potential
        </h3>
        <div className="flex justify-center items-center space-x-2">
          <span className="text-white font-semibold text-lg">Start Now</span>
          <motion.img
            src={ArrowIcon}
            alt="Arrow"
            className="w-6 h-6 filter invert"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CTA2;
