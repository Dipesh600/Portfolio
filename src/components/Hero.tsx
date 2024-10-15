import React, { useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (h1Ref.current) {
      const { left, top, width, height } = h1Ref.current.getBoundingClientRect();
      const x = e.clientX - left; // Get mouse X position relative to h1
      const y = e.clientY - top;  // Get mouse Y position relative to h1
      const centerX = width / 2;
      const centerY = height / 2;

      // Calculate the angle and intensity for the gradient based on mouse position
      const angle = (x - centerX) / centerX * 30; // Horizontal shift factor (adjust for sensitivity)
      const intensity = (y - centerY) / centerY * 30; // Vertical shift factor

      // Apply gradient shift
      h1Ref.current.style.backgroundPosition = `${50 + angle}% ${50 + intensity}%`;
    }
  };

  return (
    <section id="hero" className="hero" onMouseMove={handleMouseMove}>
      <div className="hero-content">
        <h1 ref={h1Ref} className="hover-gradient-text">Hi! I am Dipesh Chaudhary</h1>
        <h2>B.Tech CSE Student | Web Developer</h2>
        <br />

        <p>
          Passionate about creating modern and responsive web applications using
          cutting-edge technologies like React and TypeScript. Let’s build
          something amazing together!
        </p>
        <br />
        
        <a href="#contact" className="hero-btn">Get in Touch</a>
      </div>
    </section>
  );
};

export default Hero;
