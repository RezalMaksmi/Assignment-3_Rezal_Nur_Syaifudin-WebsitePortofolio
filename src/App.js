
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Navbar from './layouts/Navbar';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Skills } from './pages/Skills';
import { Interest } from './pages/Interest';
import { Awards } from './pages/Awards';
import Footer from './layouts/Footer';


function App() {

  return (
    <div className="App">
        <Navbar />
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="experience" element={<Experience />} />
              <Route path="skills" element={<Skills />} />
              <Route path="interest" element={<Interest />} />
              <Route path="awards" element={<Awards />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
