import { skills } from "@/lib/data";
import SkillsRadarChart from "@/components/charts/skills-radar-chart";
import ProficiencyChart from "@/components/charts/proficiency-chart";
import { BarChart3, PieChart, Wrench } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proficient in modern data analysis tools and technologies with hands-on experience 
            in real-world projects and continuous learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Data Analysis Tools */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-primary rounded-lg flex items-center justify-center mr-4">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Data Analysis</h3>
            </div>
            <div className="space-y-3">
              {skills.dataAnalysis.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="skill-bar-fill bg-blue-primary h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-light rounded-lg flex items-center justify-center mr-4">
                <PieChart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Visualization</h3>
            </div>
            <div className="space-y-3">
              {skills.visualization.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="skill-bar-fill bg-blue-light h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mr-4">
                <Wrench className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Tools & Tech</h3>
            </div>
            <div className="space-y-3">
              {skills.tools.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="skill-bar-fill bg-navy-blue h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Skills Assessment Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SkillsRadarChart />
            </div>
            <div>
              <ProficiencyChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
