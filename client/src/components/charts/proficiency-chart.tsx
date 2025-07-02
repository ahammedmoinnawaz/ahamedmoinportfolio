export default function ProficiencyChart() {
  const proficiencyData = [
    { level: "Expert", percentage: 30, color: "#1E40AF" },
    { level: "Advanced", percentage: 45, color: "#3B82F6" },
    { level: "Intermediate", percentage: 20, color: "#60A5FA" },
    { level: "Learning", percentage: 5, color: "#DBEAFE" }
  ];

  return (
    <div className="relative h-80 p-4">
      <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Proficiency Breakdown</h4>
      
      {/* Visual representation */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {proficiencyData.map((item, index) => {
              const previousTotal = proficiencyData.slice(0, index).reduce((sum, p) => sum + p.percentage, 0);
              const circumference = 2 * Math.PI * 45;
              const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -((previousTotal / 100) * circumference);
              
              return (
                <circle
                  key={item.level}
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="10"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000 ease-out"
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-2">
        {proficiencyData.map((item) => (
          <div key={item.level} className="flex items-center justify-between">
            <div className="flex items-center">
              <div 
                className="w-4 h-4 rounded-full mr-3" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600">{item.level}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
