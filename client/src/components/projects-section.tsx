import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { businessImpact } from "@/lib/data";
import ProjectCharts from "@/components/charts/project-charts";
import type { Project } from "@shared/schema";

export default function ProjectsSection() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects/featured"]
  });

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">Loading projects...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing real-world data analysis projects that demonstrate my ability to transform 
            complex data into actionable business insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              {project.imageUrl && (
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-very-light text-royal-blue">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mb-4">
                  <ProjectCharts projectId={project.id} />
                </div>
                <div className="flex justify-between items-center">
                  {project.liveUrl && (
                    <Button variant="ghost" size="sm" className="text-blue-primary hover:text-royal-blue">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ROI Calculator Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Business Impact Calculator</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-royal-blue mb-2">{businessImpact.costSavings}</div>
              <div className="text-gray-600">Cost Savings Identified</div>
              <div className="text-sm text-gray-500 mt-1">Through data optimization</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-primary mb-2">{businessImpact.efficiencyImprovement}</div>
              <div className="text-gray-600">Efficiency Improvement</div>
              <div className="text-sm text-gray-500 mt-1">Average across projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-light mb-2">{businessImpact.timeSaved}</div>
              <div className="text-gray-600">Weekly Time Saved</div>
              <div className="text-sm text-gray-500 mt-1">Through automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
