import { Award, ExternalLink, Clock } from "lucide-react";
import Image from "next/image";
import { Card } from "./ui/card";

interface Certification {
  id: number;
  title: string;
  provider: string;
  hours: string;
  link: string;
  image?: string;
  status: "completed" | "in-progress";
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Web and Mobile Testing with Selenium",
      provider: "Coursera",
      hours: "26 Hours",
      link: "/webMobileTesting.jpg",
      image: "/webMobileTesting.jpg",
      status: "completed"
    },
    {
      id: 2,
      title: "Fundamentals of Management",
      provider: "Coursera",
      hours: "57 Hours",
      link: "/FundamentalsOfManagement.jpg",
      image: "/FundamentalsOfManagement.jpg",
      status: "completed"
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      provider: "GeeksforGeeks",
      hours: "58.5 Hours",
      link: "/GFG.jpg",
      image: "/GFG.jpg",
      status: "completed"
    },
    {
      id: 4,
      title: "Additional Certificate",
      provider: "Professional Development",
      hours: "40 Hours",
      link: "/WhatsApp Image 2025-04-17 at 22.43.14.jpeg",
      image: "/WhatsApp Image 2025-04-17 at 22.43.14.jpeg",
      status: "completed"
    },
    {
      id: 5,
      title: "Advanced Testing Techniques",
      provider: "Udemy",
      hours: "35 Hours",
      link: "#",
      status: "in-progress"
    },
    {
      id: 6,
      title: "Automation Framework Design",
      provider: "Coursera",
      hours: "30 Hours",
      link: "#",
      status: "in-progress"
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification) => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <Card className="group bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary">
      {certification.status === "completed" ? (
        <div className="relative aspect-video">
          <Image
            src={certification.image!}
            alt={certification.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      ) : (
        <div className="aspect-video bg-accent/50 flex items-center justify-center">
          <div className="text-center p-4">
            <Clock className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground">Certificate in Progress</p>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Award className="h-6 w-6 text-primary mr-3" />
          <h3 className="text-lg font-poppins font-semibold text-foreground">{certification.title}</h3>
        </div>
        
        <div className="flex justify-between text-sm text-muted-foreground mb-3">
          <span>{certification.provider}</span>
          <span>{certification.hours}</span>
        </div>
        
        <div className="mt-4">
          {certification.status === "completed" ? (
            <a 
              href={certification.link} 
              className="text-primary hover:text-primary/80 text-sm flex items-center transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-1" /> View Certificate
            </a>
          ) : (
            <span className="text-amber-500 dark:text-amber-400 text-sm flex items-center">
              <Clock className="h-4 w-4 mr-1" /> In Progress
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
