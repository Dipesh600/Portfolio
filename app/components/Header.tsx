"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-poppins font-semibold text-primary">Aryan Aditya</h1>
          <p className="text-sm text-neutral-700 font-open-sans">Software Test Engineer</p>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#about" className="font-poppins text-neutral-900 hover:text-primary transition-colors">About</a></li>
            <li><a href="#skills" className="font-poppins text-neutral-900 hover:text-primary transition-colors">Skills</a></li>
            <li><a href="#experience" className="font-poppins text-neutral-900 hover:text-primary transition-colors">Experience</a></li>
            <li><a href="#projects" className="font-poppins text-neutral-900 hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#education" className="font-poppins text-neutral-900 hover:text-primary transition-colors">Education</a></li>
            <li><a href="#contact" className="font-poppins text-neutral-900 hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        <button className="md:hidden text-neutral-900" onClick={toggleMenu} aria-label="Toggle Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-lg absolute w-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="py-3 px-4 space-y-3">
          <li><a href="#about" className="block font-poppins text-neutral-900 hover:text-primary transition-colors py-2" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" className="block font-poppins text-neutral-900 hover:text-primary transition-colors py-2" onClick={closeMenu}>Skills</a></li>
          <li><a href="#experience" className="block font-poppins text-neutral-900 hover:text-primary transition-colors py-2" onClick={closeMenu}>Experience</a></li>
          <li><a href="#projects" className="block font-poppins text-neutral-900 hover:text-primary transition-colors py-2" onClick={closeMenu}>Projects</a></li>
          <li><a href="#education" className="block font-poppins text-neutral-900 hover:text-primary transition-colors py-2" onClick={closeMenu}>Education</a></li>
          <li><a href="#contact" className="block font-poppins text-neutral-900 hover:text-primary transition-colors py-2" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
