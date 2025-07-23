// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Events from './pages/Events';

import SingleProg from './pages/SingleProg';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
           <Route path="/Events" element={<Events />} />
            <Route path="/singleProgram" element={<SingleProg />} />
      </Routes>
    </Router>
  );
}

export default App;
