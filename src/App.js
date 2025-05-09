import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Goals from './pages/Goals';
import Contact from './pages/Contact';
import MLJournal from './pages/MLJounal';
import Navbar from './components/shared/Navbar';
import Experience from './pages/Experience';

import './styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mljournal" element={<MLJournal />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
