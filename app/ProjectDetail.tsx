import { useEffect, useState } from 'react';
import { useLocation, useRoute, Link } from 'wouter';
import { ArrowLeft, Github, ExternalLink, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Project detail page with URL parameter
export default function ProjectDetail() {
  const [, params] = useRoute('/projects/:projectId');
  const [, setLocation] = useLocation();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch project data based on the ID
    if (params && params.projectId) {
      const projectId = parseInt(params.projectId);
      
      // For the purpose of this demo, we're using the same project data as in ProjectsSection
      // In a real application, you might want to fetch this from an API
      const projectData = getProjectById(projectId);
      
      if (projectData) {
        setProject(projectData);
        setLoading(false);
      } else {
        // Project not found, redirect to 404
        setLocation('/not-found');
      }
    }
  }, [params, setLocation]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-100 min-h-screen">
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-poppins font-semibold text-primary">Aryan Aditya</h1>
            <p className="text-sm text-neutral-700 font-open-sans">Software Test Engineer</p>
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/#about" className="font-poppins text-neutral-900 hover:text-primary transition-colors">About</a></li>
              <li><a href="/#projects" className="font-poppins font-medium text-primary">Projects</a></li>
              <li><a href="/#contact" className="font-poppins text-neutral-900 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          className="mb-6 text-neutral-600 hover:text-primary transition-colors"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className={`h-48 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center`}>
            <div className="text-white text-6xl">{project.icon}</div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl font-poppins font-bold text-primary">{project.title}</h1>
                <p className="text-neutral-600 mt-1">{project.period}</p>
              </div>
              <Button 
                className="mt-4 md:mt-0 bg-primary text-white hover:bg-primary/90"
                asChild
              >
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <h2 className="text-xl font-semibold mb-4">Key Highlights</h2>
                <ul className="space-y-3 mb-6">
                  {project.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-green-100 text-green-600 p-1 rounded-full mt-1 mr-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-neutral-700">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-semibold mb-4">Project Challenges</h2>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  During the development of this project, several challenges were encountered 
                  and successfully overcome, including implementation of complex algorithms, 
                  optimization of performance, and ensuring cross-platform compatibility.
                </p>

                <h2 className="text-xl font-semibold mb-4">Lessons Learned</h2>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  This project provided valuable learning opportunities in areas such as 
                  problem-solving, team collaboration, and technical implementation strategies,
                  enhancing my overall skillset as a developer and tester.
                </p>
              </div>

              <div>
                <Card className="bg-neutral-50 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech: string, index: number) => (
                        <span key={index} className="bg-neutral-200 text-neutral-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mb-4">Project Timeline</h3>
                    <p className="text-neutral-700 mb-6">{project.period}</p>

                    <h3 className="text-lg font-semibold mb-4">External Resources</h3>
                    <div className="space-y-3">
                      <a 
                        href={project.url}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        GitHub Repository
                      </a>
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center text-primary hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-neutral-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-poppins font-semibold">Aryan Aditya</h2>
              <p className="text-neutral-400 mt-2">Software Test Engineer & QA Specialist</p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/aryanaditya2003" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aryanaditya2003" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
            <p>© {new Date().getFullYear()} Aryan Aditya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Function to get project data by ID
// This could be replaced with an API call in a real application
function getProjectById(id: number) {
  const projects = [
    {
      id: 1,
      title: "SRS on Instagram",
      period: "Oct 2023",
      description: "This comprehensive Software Requirements Specification (SRS) for Instagram outlines the system functionalities, constraints, and performance requirements of the platform. The project involved in-depth analysis of Instagram's features and user interactions to create a detailed documentation that serves as a blueprint for development and testing.",
      highlights: [
        "Applied SDLC and created UML diagrams and DFDs for system visualization",
        "Documented functional and non-functional requirements with detailed use cases",
        "Utilized MySQL for database testing and Selenium for UI validation",
        "Conducted thorough requirement gathering and stakeholder interviews",
        "Implemented test cases based on the specifications to ensure proper functionality"
      ],
      technologies: ["MySQL", "Selenium", "SRS", "UML", "DFD", "SDLC"],
      icon: "📄",
      gradientFrom: "from-primary",
      gradientTo: "to-blue-500",
      url: "https://github.com/aryanaditya2003/SRS-on-Instagram"
    },
    {
      id: 2,
      title: "Covid Database",
      period: "Feb - Mar 2023",
      description: "The COVID-19 Database project is a comprehensive system designed to efficiently retrieve, update, and visualize COVID-19 data. It features robust database management capabilities and intuitive data visualization tools to help analyze pandemic trends and statistics across different regions and time periods.",
      highlights: [
        "Implemented SQL CRUD functionalities for efficient database management",
        "Utilized Python libraries like Pandas for data processing and cleaning",
        "Designed interactive graphs to visualize COVID-19 trends over time",
        "Created a user-friendly interface for data exploration and analysis",
        "Implemented data validation to ensure accuracy of COVID-19 statistics"
      ],
      technologies: ["Python", "SQL", "Pandas", "Data Visualization", "Database Management"],
      icon: "🦠",
      gradientFrom: "from-blue-500",
      gradientTo: "to-primary",
      url: "https://github.com/aryanaditya2003/covid-database"
    },
    {
      id: 3,
      title: "Music World",
      period: "May - Jul 2023",
      description: "Music World is a feature-rich web application for listening to and downloading songs with an intuitive user interface. The platform offers a seamless music discovery experience with personalized recommendations, playlist creation, and social sharing functionality. Users can explore a vast library of tracks across different genres and artists.",
      highlights: [
        "Built responsive UI using HTML, CSS, and JavaScript for all screen sizes",
        "Implemented media playback functionalities with custom controls",
        "Designed user-friendly interface for efficient music discovery",
        "Created a robust search system with filtering and sorting options",
        "Implemented user authentication and playlist management features"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX", "Media API", "Responsive Design"],
      icon: "🎵",
      gradientFrom: "from-pink-500",
      gradientTo: "to-blue-500",
      url: "https://github.com/aryanaditya2003/music-world",
      demoUrl: "https://music-world-demo.netlify.app"
    },
    {
      id: 4,
      title: "Clock Angle",
      period: "May - Jul 2024",
      description: "Clock Angle is an innovative program that calculates the precise angle between the hour and minute hands of an analog clock at any given time. This project demonstrates algorithmic thinking and mathematical precision, with applications in educational settings and problem-solving exercises. The algorithm handles edge cases and ensures accurate calculations for all possible time inputs.",
      highlights: [
        "Applied string manipulation and mathematical functions for precise calculations",
        "Implemented algorithm to calculate angles between clock hands with high accuracy",
        "Improved logical thinking and problem-solving skills through algorithmic challenges",
        "Created an intuitive interface for users to input different times",
        "Developed comprehensive testing to ensure calculation accuracy"
      ],
      technologies: ["Python", "Algorithms", "Mathematics", "Geometry", "Problem Solving"],
      icon: "🕰️",
      gradientFrom: "from-primary",
      gradientTo: "to-pink-500",
      url: "https://github.com/aryanaditya2003/clock-angle"
    }
  ];
  
  return projects.find(project => project.id === id);
}