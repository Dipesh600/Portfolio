import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

interface Project {
  projectId: number;
  title: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image: string;
  gradientFrom: string;
  gradientTo: string;
  url: string;
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex gap-2">
      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group">
      <Card className="bg-card border-border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:border-primary">
        <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block">
          <div className={`h-48 relative overflow-hidden bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo}`}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover mix-blend-overlay hover:mix-blend-normal transition-all duration-300"
            />
            <div className="absolute top-2 right-2 bg-background/10 p-1 rounded-full backdrop-blur-sm">
              <ExternalLink className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-poppins font-semibold text-primary group-hover:underline">{project.title}</h3>
              <span className="text-sm text-muted-foreground">{project.period}</span>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="mb-4">
              <ul className="space-y-2 text-muted-foreground">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex">
                    <CheckItem text={highlight} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-accent/50 text-accent-foreground px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Link>
        
        <div className="px-6 pb-6">
          <div className="grid grid-cols-2 gap-4">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href={`/projects/${project.projectId}`}>
                View Details
              </Link>
            </Button>
            
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      projectId: 1,
      title: "SRS on Instagram",
      period: "Oct 2023",
      description: "Prepared Software Requirements and Specifications (SRS) for Instagram, outlining system functionalities, constraints, and performance requirements.",
      highlights: [
        "Applied SDLC and created UML diagrams and DFDs for system visualization",
        "Documented functional and non-functional requirements",
        "Utilized MySQL for database testing and Selenium for UI validation"
      ],
      technologies: ["MySQL", "Selenium", "SRS", "UML"],
      image: "/srs_instagram.jpeg",
      gradientFrom: "from-primary",
      gradientTo: "to-blue-500",
      url: "https://github.com/aryanaditya2003/SRS-on-Instagram"
    },
    {
      projectId: 2,
      title: "Covid Database",
      period: "Feb - Mar 2023",
      description: "Developed a system to retrieve, update, and visualize COVID-19 data efficiently with comprehensive database management.",
      highlights: [
        "Implemented SQL CRUD functionalities for database management",
        "Utilized Python libraries like Pandas for data processing",
        "Designed interactive graphs to visualize COVID-19 trends"
      ],
      technologies: ["Python", "SQL", "Pandas", "Data Visualization"],
      image: "/covid.jpg",
      gradientFrom: "from-blue-500",
      gradientTo: "to-primary",
      url: "https://github.com/aryanaditya2003/covid-database-management"
    },
    {
      projectId: 3,
      title: "Music World",
      period: "May - Jul 2023",
      description: "Created a web application for listening to and downloading songs with an intuitive user interface.",
      highlights: [
        "Built responsive UI using HTML, CSS, and JavaScript",
        "Implemented media playback functionalities",
        "Designed user-friendly interface for music discovery"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX"],
      image: "/music.jpg",
      gradientFrom: "from-pink-500",
      gradientTo: "to-blue-500",
      url: "https://github.com/aryanaditya2003/music-world"
    },
    {
      projectId: 4,
      title: "Clock Angle",
      period: "May - Jul 2024",
      description: "Built a program to calculate the angle between the hour and minute hands of a clock, demonstrating algorithmic thinking.",
      highlights: [
        "Applied string manipulation and mathematical functions",
        "Implemented algorithm to calculate precise angles",
        "Improved logical thinking and problem-solving skills"
      ],
      technologies: ["Python", "Algorithms", "Mathematics"],
      image: "/clock.jpg",
      gradientFrom: "from-primary",
      gradientTo: "to-pink-500",
      url: "https://github.com/aryanaditya2003/Clock-Angle-Problem"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.projectId} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
