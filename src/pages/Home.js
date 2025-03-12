import { motion } from 'framer-motion';
import '../styles/global.css';

export default function Home() {
  return (
    <div className="home-container">
      <motion.h1 
        className="name-title"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        Hoang Q. Ly
      </motion.h1>

      <div className="description-container">
        <motion.h1 
          className="description"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          Polymath
        </motion.h1>
        
        <motion.h1 
          className="description"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
        >
          Developer
        </motion.h1>
      </div>
    </div>
  );
}
