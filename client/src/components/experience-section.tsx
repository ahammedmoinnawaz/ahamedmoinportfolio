import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-primary mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-light"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="flex items-center">
                {index % 2 === 0 ? (
                  // Left side
                  <>
                    <div className="flex-1 pr-8 text-right">
                      <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-primary">
                        <div className="text-blue-primary font-semibold">{exp.period}</div>
                        <h3 className="text-xl font-bold text-gray-900 mt-2">{exp.title}</h3>
                        <div className="text-royal-blue font-medium">{exp.company} ({exp.location})</div>
                        <p className="text-gray-600 mt-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4 justify-end">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="bg-blue-very-light text-royal-blue">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-blue-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="flex-1 pl-8"></div>
                  </>
                ) : (
                  // Right side
                  <>
                    <div className="flex-1 pr-8"></div>
                    <div className="w-4 h-4 bg-blue-light rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="flex-1 pl-8">
                      <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-blue-light">
                        <div className="text-blue-primary font-semibold">{exp.period}</div>
                        <h3 className="text-xl font-bold text-gray-900 mt-2">{exp.title}</h3>
                        <div className="text-royal-blue font-medium">{exp.company} ({exp.location})</div>
                        <p className="text-gray-600 mt-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="bg-blue-very-light text-royal-blue">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
