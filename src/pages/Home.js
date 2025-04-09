import { motion } from 'framer-motion';
import '../styles/global.css';
import './Home.css';

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="home-page">
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
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
            >
              The
            </motion.h1>

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

          <div className="arrow-container">
          <motion.h2
            className="why-polymath"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Why polymath? 
          </motion.h2>

          <motion.h2
            className="arrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            ↓        
          </motion.h2>
          </div>
          
        </div>
      </section>

      <section className='polymath'>
        <div className="page">  
          <motion.h2
            className="polymath-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
What is polymath? Why did I choose the word polymath?

A polymath is an expert in multiple fields, classic examples of a polymath includes Leonardo Da Vinci who excelled in art, science, and engineering. 

Polymath is a word describes what I desire to become, not what I already am. Putting "the polymath developer" in my portfolio website might seem like an arrogant move, but also shows the determination I have in achieving this title, to put my name next to other famous classical polymaths.           </motion.h2>
        </div> 
      </section>
    </>
  );
}
