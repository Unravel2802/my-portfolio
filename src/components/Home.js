// Home.js
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li><Link to="/about" className="text-blue-500 hover:underline">About Me</Link></li>
          <li><Link to="/projects" className="text-blue-500 hover:underline">Projects</Link></li>
          <li><Link to="/contact" className="text-blue-500 hover:underline">Contact</Link></li>
          <li><Link to="/mljournal" className="text-blue-500 hover:underline">Machine Learning Journal</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
