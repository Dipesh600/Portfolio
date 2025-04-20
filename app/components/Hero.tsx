"use client";
import { Github, Linkedin, MapPin, Mail, Phone, Download, GraduationCap } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-04-17 at 22.07.06.jpeg";

export default function Hero() {
  const scrollToCertificates = (e: React.MouseEvent) => {
    e.preventDefault();
    const certificatesSection = document.getElementById('certifications');
    if (certificatesSection) {
      certificatesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-card">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-primary/5" />
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Aryan Aditya
            </h1>
            <h2 className="text-xl md:text-2xl font-poppins mb-6 text-foreground/90">
              Software Test Engineer & QA Specialist
            </h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              Passionate about ensuring software quality through comprehensive testing and automation. 
              Specialized in web and mobile application testing using industry-standard tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.linkedin.com/in/aryanaditya2003" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md flex items-center font-medium transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/aryanaditya2003" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-card text-foreground border border-border px-6 py-3 rounded-md flex items-center font-medium transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
              <a 
                href="/Aryancvspecialised (4).pdf" 
                download
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md flex items-center font-medium transition-all hover:bg-secondary/90"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 lg:w-1/3 flex flex-col items-center">
            <div className="relative mb-8 flex justify-center w-full">
              <div className="relative">
                <img 
                  src={profileImage.src} 
                  alt="Aryan Aditya" 
                  className="w-44 h-44 md:w-52 md:h-52 rounded-full border-4 border-card shadow-xl object-cover"
                />
                <button 
                  onClick={scrollToCertificates}
                  className="absolute -bottom-3 -right-3 bg-card text-primary p-3 rounded-full shadow-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                >
                  <GraduationCap className="h-7 w-7" />
                </button>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg shadow-lg p-6 space-y-4 w-full">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Location</div>
                  <div className="font-medium text-foreground">Patna, Bihar, India</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Email</div>
                  <div className="font-medium text-foreground break-all">aryansinghaditya18@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Phone</div>
                  <div className="font-medium text-foreground">+91 9113194954</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
