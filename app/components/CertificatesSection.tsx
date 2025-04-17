import Image from "next/image";
import { Card, CardContent } from "../components/ui/card";

const certificates = [
  {
    id: 1,
    title: "Web & Mobile Testing",
    image: "/webMobileTesting.jpg",
    status: "completed"
  },
  {
    id: 2,
    title: "Fundamentals of Management",
    image: "/FundamentalsOfManagement.jpg",
    status: "completed"
  },
  {
    id: 3,
    title: "GeeksforGeeks Certificate",
    image: "/GFG.jpg",
    status: "completed"
  },
  {
    id: 4,
    title: "Additional Certificate",
    image: "/WhatsApp Image 2025-04-17 at 22.43.14.jpeg",
    status: "completed"
  },
  {
    id: 5,
    title: "Advanced Testing Techniques",
    status: "in-progress"
  },
  {
    id: 6,
    title: "Automation Framework Design",
    status: "in-progress"
  }
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certificates & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.id} className="overflow-hidden">
              <CardContent className="p-6">
                {cert.status === "completed" ? (
                  <div className="relative aspect-video mb-4">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-neutral-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">🎓</div>
                      <p className="text-neutral-500">Certificate in Progress</p>
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <div className="flex items-center">
                  {cert.status === "completed" ? (
                    <span className="text-green-600 flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Completed
                    </span>
                  ) : (
                    <span className="text-amber-600 flex items-center">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                      In Progress
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 