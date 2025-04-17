import { Code, Bolt, Database, User } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-center mb-12 text-blue-600">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-poppins font-semibold mb-6 flex items-center text-blue-600">
              <Code className="text-blue-600 mr-2 h-6 w-6" /> Programming Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Python", "C++", "Java", "JavaScript", "SQL", "C"].map((language) => (
                <SkillTag key={language} name={language} />
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-poppins font-semibold mb-6 flex items-center text-blue-600">
              <Bolt className="text-blue-600 mr-2 h-6 w-6" /> Testing Frameworks & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Selenium", "JUnit", "TestNG", "Postman", "Appium", "JMeter", "Cucumber"].map((tool) => (
                <SkillTag key={tool} name={tool} />
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-poppins font-semibold mb-6 flex items-center text-blue-600">
              <Database className="text-blue-600 mr-2 h-6 w-6" /> Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {["MySQL", "Excel", "Jira", "Jenkins", "HTML/CSS"].map((tool) => (
                <SkillTag key={tool} name={tool} />
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-poppins font-semibold mb-6 flex items-center text-blue-600">
              <User className="text-blue-600 mr-2 h-6 w-6" /> Soft Skills
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
    <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md flex items-center border border-blue-100">
      <span className="h-3 w-3 rounded-full bg-blue-600 mr-2"></span>
      {name}
    </div>
  );
}
