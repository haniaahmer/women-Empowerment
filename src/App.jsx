// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs'
import SingleProg from './pages/SingleProg';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Podcasts from './pages/Podcasts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
           <Route path="/Events" element={<Events />} />
            <Route path="/singleProgram" element={<SingleProg />} />
            <Route path="/Contact" element={<ContactUs/>} />
            <Route path="/Join" element={<SignUp/>} />
            <Route path="/login" element={<SignIn/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/Podcast" element={<Podcasts/>} />
      </Routes>
    </Router>
  );
}

export default App;
