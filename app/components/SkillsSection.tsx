import { 
  Code, 
  Bolt, 
  Database, 
  User, 
  BrainCircuit, 
  FileCode,
  Coffee,
  Binary,
  Cpu,
  Server,
  TestTube,
  Gauge,
  Bug,
  Smartphone,
  Globe,
  Table2,
  GitBranch,
  FileJson,
  BrainCog,
  Puzzle,
  Lightbulb,
  ClipboardList,
  Workflow,
  MessageSquare
} from "lucide-react";

interface SkillTagProps {
  name: string;
  icon?: React.ReactNode;
}

function SkillTag({ name, icon }: SkillTagProps) {
  return (
    <span className="bg-accent/50 text-accent-foreground px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-accent flex items-center gap-2">
      {icon}
      {name}
    </span>
  );
}

export default function SkillsSection() {
  const programmingLanguages = [
    { name: "Python", icon: <FileCode className="h-4 w-4" /> },
    { name: "C++", icon: <Binary className="h-4 w-4" /> },
    { name: "Java", icon: <Coffee className="h-4 w-4" /> },
    { name: "JavaScript", icon: <BrainCircuit className="h-4 w-4" /> },
    { name: "SQL", icon: <Database className="h-4 w-4" /> },
    { name: "C", icon: <Cpu className="h-4 w-4" /> }
  ];

  const testingTools = [
    { name: "Selenium", icon: <Globe className="h-4 w-4" /> },
    { name: "JUnit", icon: <TestTube className="h-4 w-4" /> },
    { name: "TestNG", icon: <Bug className="h-4 w-4" /> },
    { name: "Postman", icon: <FileJson className="h-4 w-4" /> },
    { name: "Appium", icon: <Smartphone className="h-4 w-4" /> },
    { name: "JMeter", icon: <Gauge className="h-4 w-4" /> },
    { name: "Cucumber", icon: <Server className="h-4 w-4" /> }
  ];

  const toolsPlatforms = [
    { name: "MySQL", icon: <Database className="h-4 w-4" /> },
    { name: "Excel", icon: <Table2 className="h-4 w-4" /> },
    { name: "Jenkins", icon: <GitBranch className="h-4 w-4" /> },
    { name: "HTML/CSS", icon: <Code className="h-4 w-4" /> }
  ];

  const softSkills = [
    { name: "Problem-Solving", icon: <Puzzle className="h-4 w-4" /> },
    { name: "Creativity", icon: <Lightbulb className="h-4 w-4" /> },
    { name: "Project Management", icon: <ClipboardList className="h-4 w-4" /> },
    { name: "Adaptability", icon: <Workflow className="h-4 w-4" /> },
    { name: "Communication", icon: <MessageSquare className="h-4 w-4" /> }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-background via-background/50 to-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-card border border-border rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
            <h3 className="text-xl font-poppins font-semibold mb-6 flex items-center">
              <Code className="text-primary mr-2 h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Programming Languages
              </span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {programmingLanguages.map((lang) => (
                <SkillTag key={lang.name} name={lang.name} icon={lang.icon} />
              ))}
            </div>
          </div>
          
          <div className="group bg-card border border-border rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
            <h3 className="text-xl font-poppins font-semibold mb-6 flex items-center">
              <Bolt className="text-primary mr-2 h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Testing Frameworks & Tools
              </span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {testingTools.map((tool) => (
                <SkillTag key={tool.name} name={tool.name} icon={tool.icon} />
              ))}
            </div>
          </div>
          
          <div className="group bg-card border border-border rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
            <h3 className="text-xl font-poppins font-semibold mb-6 flex items-center">
              <Database className="text-primary mr-2 h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Tools & Platforms
              </span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {toolsPlatforms.map((tool) => (
                <SkillTag key={tool.name} name={tool.name} icon={tool.icon} />
              ))}
            </div>
          </div>
          
          <div className="group bg-card border border-border rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
            <h3 className="text-xl font-poppins font-semibold mb-6 flex items-center">
              <User className="text-primary mr-2 h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Soft Skills
              </span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
