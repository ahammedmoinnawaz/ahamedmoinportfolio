interface ProjectChartsProps {
  projectId: number;
}

export default function ProjectCharts({ projectId }: ProjectChartsProps) {
  // Different data visualizations for different projects
  const getChartData = (id: number) => {
    switch (id % 3) {
      case 1:
        // Sales Performance Dashboard
        return {
          type: "line",
          title: "Monthly Sales Trend",
          data: [
            { label: "Jan", value: 12 },
            { label: "Feb", value: 19 },
            { label: "Mar", value: 15 },
            { label: "Apr", value: 25 },
            { label: "May", value: 22 },
            { label: "Jun", value: 30 }
          ]
        };
      case 2:
        // Customer Segmentation
        return {
          type: "pie",
          title: "Customer Segments",
          data: [
            { label: "Premium", value: 25, color: "#1E40AF" },
            { label: "Regular", value: 35, color: "#3B82F6" },
            { label: "Budget", value: 30, color: "#60A5FA" },
            { label: "New", value: 10, color: "#DBEAFE" }
          ]
        };
      default:
        // Hospital Admissions
        return {
          type: "bar",
          title: "Daily Admissions",
          data: [
            { label: "Mon", value: 12 },
            { label: "Tue", value: 15 },
            { label: "Wed", value: 8 },
            { label: "Thu", value: 20 },
            { label: "Fri", value: 18 }
          ]
        };
    }
  };

  const chartData = getChartData(projectId);
  const maxValue = Math.max(...chartData.data.map(d => d.value));

  return (
    <div className="relative h-48 p-4">
      <h5 className="text-sm font-medium text-gray-700 mb-3 text-center">{chartData.title}</h5>
      
      {chartData.type === "line" && (
        <div className="flex items-end justify-between h-32 space-x-2">
          {chartData.data.map((item, index) => (
            <div key={item.label} className="flex flex-col items-center flex-1">
              <div className="relative w-full h-24 flex items-end">
                <div 
                  className="w-full bg-blue-primary rounded-t transition-all duration-1000 ease-out"
                  style={{ height: `${(item.value / maxValue) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      )}

      {chartData.type === "bar" && (
        <div className="flex items-end justify-between h-32 space-x-2">
          {chartData.data.map((item, index) => (
            <div key={item.label} className="flex flex-col items-center flex-1">
              <div className="relative w-full h-24 flex items-end">
                <div 
                  className="w-full bg-blue-primary rounded-t transition-all duration-1000 ease-out"
                  style={{ height: `${(item.value / maxValue) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      )}

      {chartData.type === "pie" && (
        <div className="flex items-center justify-center">
          <div className="w-32 h-32 relative">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              {chartData.data.map((item, index) => {
                const previousTotal = chartData.data.slice(0, index).reduce((sum, p) => sum + p.value, 0);
                const total = chartData.data.reduce((sum, p) => sum + p.value, 0);
                const circumference = 2 * Math.PI * 45;
                const strokeDasharray = `${(item.value / total) * circumference} ${circumference}`;
                const strokeDashoffset = -((previousTotal / total) * circumference);
                
                return (
                  <circle
                    key={item.label}
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={"color" in item ? item.color : "#3B82F6"}
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
      )}
    </div>
  );
}
