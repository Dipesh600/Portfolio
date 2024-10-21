import React, { useState, useEffect } from 'react';
import './About.css';
import image from './Assets/man.png';


const About: React.FC = () => {
  const [showFullText, setShowFullText] = useState(false); // State to toggle "Read More"
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to track screen size

  // Effect to handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Small screens <= 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/cv.docx`; // Correct path
    link.download = 'Dipesh_Chaudhary_CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm <strong>Dipesh Chaudhary</strong>, currently pursuing my B.Tech in Computer Science and Engineering. 
            I'm passionate about web development, coding, and creating user-friendly digital experiences. My expertise lies in frontend development, 
            particularly in <strong>React</strong> and <strong>TypeScript</strong>.
          </p>
          {(!isSmallScreen || showFullText) && (
            <p>
              Aside from academics, I love working on personal projects, solving real-world problems through tech, 
              and contributing to open-source projects. I am dedicated to honing my skills as a full-stack developer 
              and am excited to collaborate with teams on meaningful projects.
            </p>
          )}
          {isSmallScreen && (
            <button 
              className="read-more-btn" 
              onClick={() => setShowFullText(!showFullText)}
            >
              {showFullText ? 'Read Less' : 'Read More'}
            </button>
          )}
          <button className="about-btn" onClick={handleCVDownload}>
            Download CV
          </button>
        </div>
        <div className="about-image">
          <img src={image} alt="Man" className="man-illustration" />
        </div>
      </div>
    </section>
  );
};

export default About;
