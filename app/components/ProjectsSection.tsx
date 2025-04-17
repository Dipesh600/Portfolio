import { FileText, Worm, Music2, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

interface Project {
  projectId: number;
  title: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  url: string;
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
      icon: <FileText className="h-14 w-14" />,
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
      icon: <Worm className="h-14 w-14" />,
      gradientFrom: "from-blue-500",
      gradientTo: "to-primary",
      url: "https://github.com/aryanaditya2003/covid-database"
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
      icon: <Music2 className="h-14 w-14" />,
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
      icon: <Clock className="h-14 w-14" />,
      gradientFrom: "from-primary",
      gradientTo: "to-pink-500",
      url: "https://github.com/aryanaditya2003/clock-angle"
    }
  ];

  return (
    <section id="projects" className="py-12 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.projectId} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group">
      <Card className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group-hover:border-primary cursor-pointer">
        <Link href={`/projects/${project.projectId}`} className="block">
          <div className={`h-36 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center text-white relative`}>
            {project.icon}
            <div className="absolute top-2 right-2 bg-white/10 p-1 rounded-full backdrop-blur-sm">
              <ExternalLink className="h-4 w-4 text-white" />
            </div>
          </div>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-poppins font-semibold text-primary group-hover:underline">{project.title}</h3>
              <span className="text-sm text-neutral-600">{project.period}</span>
            </div>
            <p className="text-neutral-700 mb-4">{project.description}</p>
            <div className="mb-4">
              <ul className="space-y-2 text-neutral-700">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex">
                    <CheckItem text={highlight} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Link>
        
        <div className="px-6 pb-6">
          <div className="grid grid-cols-2 gap-4">
            <Button 
              className="bg-primary text-white hover:bg-primary/90"
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

function CheckItem({ text }: { text: string }) {
  return (
    <>
      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
      <span>{text}</span>
    </>
  );
}

function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
