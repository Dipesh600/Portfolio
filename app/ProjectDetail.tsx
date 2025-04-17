import { useEffect, useState } from 'react';
import { ArrowLeft, Github, ExternalLink, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

// Project detail page with URL parameter
export default function ProjectDetail() {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch project data based on the ID
    if (params && params.projectId) {
      const projectId = parseInt(params.projectId as string);
      
      // For the purpose of this demo, we're using the same project data as in ProjectsSection
      // In a real application, you might want to fetch this from an API
      const projectData = getProjectById(projectId);
      
      if (projectData) {
        setProject(projectData);
        setLoading(false);
      } else {
        // Project not found, redirect to 404
        router.push('/not-found');
      }
    }
  }, [params, router]);

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
          onClick={() => router.back()}
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
                <h2 className="text-xl font-poppins font-semibold mb-4">Overview</h2>
                <p className="text-neutral-700 mb-6">{project.description}</p>
                
                <h2 className="text-xl font-poppins font-semibold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech: string, index: number) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-poppins font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside text-neutral-700 mb-6">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="mb-2">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-poppins font-semibold mb-4">Project Links</h3>
                    
                    <div className="space-y-4">
                      <Button 
                        className="w-full bg-[#333] text-white hover:bg-[#444]"
                        asChild
                      >
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Github className="mr-2 h-5 w-5" />
                          GitHub Repository
                        </a>
                      </Button>
                      
                      {project.demoUrl && (
                        <Button 
                          className="w-full bg-primary text-white hover:bg-primary/90"
                          asChild
                        >
                          <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <ExternalLink className="mr-2 h-5 w-5" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-poppins font-semibold mb-4">Connect with Me</h3>
                      <div className="flex space-x-4">
                        <a 
                          href="https://github.com/aryanaditya2003" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-neutral-700 hover:text-primary transition-colors"
                        >
                          <Github className="h-6 w-6" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/aryan-aditya-3b5b5b1b3/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-neutral-700 hover:text-primary transition-colors"
                        >
                          <Linkedin className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to get project by ID
function getProjectById(id: number) {
  // This is the same data as in ProjectsSection
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment processing.",
      period: "Jan 2023 - Mar 2023",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart functionality",
        "Secure payment processing with Stripe",
        "Order management and tracking"
      ],
      url: "https://github.com/aryanaditya2003/ecommerce",
      demoUrl: "https://ecommerce-demo.aryanaditya.com",
      icon: "🛍️",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-600"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality, task categorization, and progress tracking.",
      period: "Apr 2023 - Jun 2023",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      features: [
        "Drag-and-drop task organization",
        "Task categorization and filtering",
        "Progress tracking and analytics",
        "Collaborative workspaces",
        "Real-time updates with Firebase"
      ],
      url: "https://github.com/aryanaditya2003/task-manager",
      demoUrl: "https://task-manager.aryanaditya.com",
      icon: "✅",
      gradientFrom: "from-green-500",
      gradientTo: "to-teal-600"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
      period: "Jul 2023 - Aug 2023",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS Grid"],
      features: [
        "Current weather conditions",
        "5-day weather forecast",
        "Location search and favorites",
        "Weather data visualization",
        "Responsive design for all devices"
      ],
      url: "https://github.com/aryanaditya2003/weather-dashboard",
      demoUrl: "https://weather.aryanaditya.com",
      icon: "🌤️",
      gradientFrom: "from-yellow-500",
      gradientTo: "to-orange-600"
    }
  ];
  
  return projects.find(project => project.id === id);
}