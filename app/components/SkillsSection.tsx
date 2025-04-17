import { Code, Bolt, Database, User } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-center mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-poppins font-semibold mb-6 flex items-center">
              <Code className="text-primary mr-2 h-6 w-6" /> Programming Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Python", "C++", "Java", "JavaScript", "SQL", "C"].map((language) => (
                <SkillTag key={language} name={language} />
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-poppins font-semibold mb-6 flex items-center">
              <Bolt className="text-primary mr-2 h-6 w-6" /> Testing Frameworks & Bolt
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Selenium", "JUnit", "TestNG", "Postman", "Appium", "JMeter", "Cucumber"].map((tool) => (
                <SkillTag key={tool} name={tool} />
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-poppins font-semibold mb-6 flex items-center">
              <Database className="text-primary mr-2 h-6 w-6" /> Bolt & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {["MySQL", "Excel", "Jira", "Jenkins", "HTML/CSS"].map((tool) => (
                <SkillTag key={tool} name={tool} />
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-poppins font-semibold mb-6 flex items-center">
              <User className="text-primary mr-2 h-6 w-6" /> Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Problem-Solving", "Creativity", "Project Management", "Adaptability", "Communication"].map((skill) => (
                <SkillTag key={skill} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillTag({ name }: { name: string }) {
  return (
    <div className="bg-neutral-100 text-neutral-900 px-4 py-2 rounded-md flex items-center">
      <span className="h-3 w-3 rounded-full bg-primary mr-2"></span>
      {name}
    </div>
  );
}
