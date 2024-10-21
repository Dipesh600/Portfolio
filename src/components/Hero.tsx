import React, { useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
useEffect(() => {
const title = document.querySelector('.hero-title');
const subtitle = document.querySelector('.hero-subtitle');
const description = document.querySelector('.hero-description');
if (title) {
title.classList.add('animate-title');
    }
if (subtitle) {
subtitle.classList.add('animate-subtitle');
    }
if (description) {
description.classList.add('animate-description');
    }
  }, []);

return (
<section id="hero" className="hero">
<div className="hero-content">
<h1 className="hero-title">Hi! I am Dipesh Chaudhary</h1>
<h2 className="hero-subtitle">B.Tech CSE Student | Web Developer</h2>
<p className="hero-description">
          Passionate about creating modern and responsive web applications using
          cutting-edge technologies like React and TypeScript. Let’s build something amazing together!
</p>
<a href="#contact" className="hero-btn">Get in Touch</a>
</div>
</section>
  );
};

export default Hero;