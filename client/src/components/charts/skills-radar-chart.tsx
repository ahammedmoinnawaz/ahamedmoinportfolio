export default function SkillsRadarChart() {
  const skills = [
    { name: "Power BI", level: 90 },
    { name: "Excel", level: 85 },
    { name: "SQL", level: 70 },
    { name: "Data Viz", level: 88 },
    { name: "Analysis", level: 87 },
    { name: "Reporting", level: 83 }
  ];

  return (
    <div className="relative h-80 p-4">
      <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Skills Assessment</h4>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={skill.name} className="flex items-center justify-between">
            <div className="w-20 text-sm text-gray-600">{skill.name}</div>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-primary h-3 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
            <div className="w-10 text-sm text-gray-600 text-right">{skill.level}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
