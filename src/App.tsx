import React from 'react';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar.tsx';
import Projects from './components/Projects.tsx';


import './styles.css';



const App: React.FC = () => {
  return (
    <div>
        <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
