import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/aryanaditya2003",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/aryanaditya2003",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:aryansinghaditya18@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      url: "tel:+919113194954",
      label: "Phone"
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 dark:bg-secondary/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-poppins font-semibold">Aryan Aditya</h2>
            <p className="text-muted-foreground mt-2">Software Test Engineer & QA Specialist</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Aryan Aditya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
