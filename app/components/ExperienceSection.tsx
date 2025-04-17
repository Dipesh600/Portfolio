import { CalendarIcon, MapPinIcon, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const experience = {
    title: "Software Testing Intern",
    company: "Prodigy InfoTech",
    period: "Sep 2024 - Nov 2024",
    location: "Remote",
    responsibilities: [
      "Designed, executed, and analyzed test cases for real-world applications, ensuring software reliability and performance.",
      "Gained expertise in manual and automated testing techniques, including functional, regression, unit, and performance testing.",
      "Completed three hands-on projects, implementing testing strategies like black-box testing, white-box testing, and automated test scripting.",
      "Developed and automated test scripts using Java and Python, leveraging frameworks like Selenium WebDriver."
    ],
    technologies: ["Selenium", "JUnit", "Postman", "Java", "Python"]
  };

  return (
    <section id="experience" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-center mb-12">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 pb-12 timeline-item">
            <div className="absolute left-0 top-0 w-1 h-full bg-neutral-200"></div>
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
            
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-poppins font-semibold text-primary mb-2 md:mb-0">{experience.title}</h3>
                <div className="flex items-center text-sm text-neutral-600">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{experience.period}</span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h4 className="text-lg font-poppins mb-2 md:mb-0">{experience.company}</h4>
                <div className="flex items-center text-sm text-neutral-600">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span>{experience.location}</span>
                </div>
              </div>
              
              <ul className="mt-4 space-y-3 text-neutral-700">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
