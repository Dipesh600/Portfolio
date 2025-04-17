import { Github, Linkedin, MapPin, Mail, Phone, Download } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-04-17 at 22.07.06.jpeg";

export default function Hero() {
  return (
    <section id="about" className="bg-gradient-to-r from-primary to-blue-500 text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-poppins font-bold mb-4">Aryan Aditya</h1>
            <h2 className="text-xl md:text-2xl font-poppins mb-6">Software Test Engineer & QA Specialist</h2>
            <p className="text-lg mb-8">
              Passionate about ensuring software quality through comprehensive testing and automation. 
              Specialized in web and mobile application testing using industry-standard tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.linkedin.com/in/aryanaditya2003" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-primary px-6 py-3 rounded-md flex items-center font-poppins font-semibold transition-all hover:shadow-lg"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/aryanaditya2003" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md flex items-center font-poppins font-semibold transition-all hover:bg-white hover:text-primary"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
              <a 
                href="/Aryancvspecialised (4).pdf" 
                download
                className="bg-primary text-white px-6 py-3 rounded-md flex items-center font-poppins font-semibold transition-all hover:bg-primary/90"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 lg:w-1/3 flex flex-col items-center">
            <div className="relative mb-6">
              <img 
                src={profileImage.src} 
                alt="Aryan Aditya" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-white text-primary p-2 rounded-full shadow-lg">
                <Github className="h-6 w-6" />
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm w-full p-6 rounded-lg shadow-lg text-neutral-800">
              <div className="flex items-center mb-4 gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-neutral-600 text-sm">Location</div>
                  <div className="font-medium">Patna, Bihar, India</div>
                </div>
              </div>
              
              <div className="flex items-center mb-4 gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-neutral-600 text-sm">Email</div>
                  <div className="font-medium break-all">aryansinghaditya18@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-neutral-600 text-sm">Phone</div>
                  <div className="font-medium">+91 9113194954</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
