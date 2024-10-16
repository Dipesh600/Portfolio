import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <h3>Let's Connect!</h3>
          <ul className="social-links">
            <li>
              <a href="https://www.linkedin.com/in/dipesh--chaudhary//" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/Dipesh600" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/idomakefunofeverything" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/dipeshchaudhary" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: dipeshch040313@gmail.com</p>
          <p>Phone: +91 852 112 9540</p>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2024 Dipesh Chaudhary. All rights reserved.</p>
          <p id='quotes'>"Turning ideas into digital experiences."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
