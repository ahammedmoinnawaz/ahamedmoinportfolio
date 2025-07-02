import { personalInfo, metrics } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Data-Driven Problem Solver</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Entry-level Data Analyst with hands-on experience in Power BI, Excel, and data visualization. 
              I specialize in cleaning, analyzing, and visualizing data to support critical business decisions. 
              With internship experience and successful freelance projects, I bring a unique blend of technical 
              skills and business acumen to every project.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Based in {personalInfo.location}, I'm passionate about transforming complex datasets into clear, 
              actionable insights. I thrive in collaborative environments and am seeking opportunities to 
              grow while delivering value to global teams, whether remote or in-office.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-very-light rounded-lg">
                <div className="text-2xl font-bold text-royal-blue">{metrics.projectsCompleted}</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-blue-very-light rounded-lg">
                <div className="text-2xl font-bold text-royal-blue">{metrics.toolsMastered}</div>
                <div className="text-sm text-gray-600">Tools Mastered</div>
              </div>
              <div className="text-center p-4 bg-blue-very-light rounded-lg">
                <div className="text-2xl font-bold text-royal-blue">{metrics.clientSatisfaction}</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-blue-very-light rounded-lg">
                <div className="text-2xl font-bold text-royal-blue">{metrics.languagesSpoken}</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional Data Analyst Workspace" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
            
            {/* Floating achievement cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg animate-float">
              <div className="text-sm font-semibold text-royal-blue">Power BI Expert</div>
              <div className="text-xs text-gray-500">Certified Professional</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-sm font-semibold text-royal-blue">Excel Advanced</div>
              <div className="text-xs text-gray-500">VBA & Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
