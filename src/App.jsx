import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Community from './components/Community';
import Footer from './components/footer';
import Contact from './components/Contact';
import About from './components/About';
// import Gallery from './components/Gallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Test from './components/Test'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/Gallery" element={<Test />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
