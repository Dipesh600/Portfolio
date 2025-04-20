"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

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

  const navigationItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Certificates", "#certifications"],
    ["Contact", "#contact"],
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm border-b border-border ${
        isScrolled ? 'shadow-lg shadow-background/5' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-poppins font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Aryan Aditya
          </h1>
          <p className="text-sm text-muted-foreground font-medium">Software Test Engineer</p>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              {navigationItems.map(([label, href]) => (
                <li key={label}>
                  <a 
                    href={href}
                    className="font-medium text-foreground/90 hover:text-primary transition-colors duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
        
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            className="text-foreground/90 hover:text-primary transition-colors duration-200" 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-background/95 backdrop-blur-sm border-t border-border transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'
        }`}
      >
        <ul className="py-4 px-4 space-y-4">
          {navigationItems.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="block font-medium text-foreground/90 hover:text-primary transition-colors duration-200"
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
