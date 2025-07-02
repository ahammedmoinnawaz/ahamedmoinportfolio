import { education, certifications } from "@/lib/data";
import { GraduationCap, Award, Medal, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EducationSection() {
  const getEducationIcon = (type: string) => {
    switch (type) {
      case "bachelor":
        return <GraduationCap className="text-2xl" />;
      case "diploma":
        return <Award className="text-2xl" />;
      case "secondary":
        return <Medal className="text-2xl" />;
      default:
        return <GraduationCap className="text-2xl" />;
    }
  };

  const getCertificationIcon = (type: string) => {
    switch (type) {
      case "course":
        return <Award className="text-white text-xl" />;
      case "certificate":
        return <Medal className="text-white text-xl" />;
      case "recommendation":
        return <Star className="text-white text-xl" />;
      default:
        return <Award className="text-white text-xl" />;
    }
  };

  const getGradientClass = (index: number) => {
    const gradients = [
      "bg-gradient-to-br from-royal-blue to-blue-primary",
      "bg-gradient-to-br from-blue-primary to-blue-light",
      "bg-gradient-to-br from-blue-light to-navy-blue"
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div key={index} className={`${getGradientClass(index)} rounded-xl shadow-lg p-8 text-white hover:shadow-xl transition-shadow`}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {getEducationIcon(edu.type)}
                </div>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-blue-very-light mb-3">{edu.field}</p>
                <p className="font-semibold mb-2">{edu.institution}</p>
                <p className="text-sm text-blue-very-light mb-4">{edu.location}</p>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-sm">Completed: {edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border-2 border-blue-primary rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${index === 0 ? 'bg-blue-primary' : index === 1 ? 'bg-blue-light' : 'bg-navy-blue'} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  {getCertificationIcon(cert.type)}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{cert.issuer}</p>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-blue-primary hover:text-royal-blue text-sm font-medium"
                >
                  {cert.type === "recommendation" ? "Read Recommendation" : 
                   cert.type === "certificate" ? "View Certificate" : "Verify Certificate"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
