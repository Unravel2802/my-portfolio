import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 md:px-20 lg:px-32">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hoang Quoc Ly</h1>
        <p className="text-xl text-gray-700">Computer Science & Mathematics at UMass Amherst</p>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-600">
            Passionate about building scalable full-stack applications, leveraging data-driven insights, and exploring emerging technologies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Skills & Technologies</h2>
          <p className="text-gray-600">
            React, Tailwind CSS, Python, JavaScript, Node.js, SQL, Docker, AWS
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-10"
      >
        <Button>
          <Link to="/projects">View My Projects</Link>
        </Button>
      </motion.section>
    </div>
  );
}