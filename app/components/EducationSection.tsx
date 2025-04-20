import { CalendarIcon, MapPinIcon, Award } from "lucide-react";

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
}

export default function EducationSection() {
  const education: EducationItem[] = [
    {
      id: 1,
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      period: "Since 2022",
      location: "Punjab, India",
      score: "CGPA: 6.5"
    },
    {
      id: 2,
      degree: "Intermediate",
      institution: "Prakritik Public School",
      period: "2020 - 2022",
      location: "Patna, Bihar",
      score: "Percentage: 81%"
    },
    {
      id: 3,
      degree: "Matriculation",
      institution: "DAV Public School, Walmi",
      period: "2019 - 2020",
      location: "Patna, Bihar",
      score: "Percentage: 88%"
    }
  ];

  return (
    <section id="education" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative pl-8 ${index < education.length - 1 ? 'pb-12' : 'pb-0'} timeline-item`}
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-border"></div>
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-3">
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-2 md:mb-0">{item.degree}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{item.period}</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h4 className="text-lg font-poppins text-foreground">{item.institution}</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Award className="h-4 w-4 mr-1" />
                      <span>{item.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
