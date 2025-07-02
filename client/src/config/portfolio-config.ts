/**
 * Portfolio Configuration File
 * 
 * This file contains all the editable content for the portfolio.
 * To update the portfolio in the future:
 * 1. Edit the values in this file
 * 2. Save the file
 * 3. The portfolio will automatically update
 * 
 * Note: When editing, maintain the structure and data types
 */

export const portfolioConfig = {
  // Personal Information - Edit these to update contact details
  personalInfo: {
    name: "Ahammed Moin Nawaz",
    title: "Data Analyst & Business Intelligence Specialist",
    location: "Bellary, Karnataka",
    phone: "+91-8762218913",
    email: "ahammedmoinnawaz@gmail.com",
    linkedin: "https://www.linkedin.com/in/ahammed-moin-nawaz-a-65169025a/",
    github: "https://github.com/ahammedmoinnawaz",
    portfolio: "yourportfolio.link",
    objective: "Passionate Data Analyst with proven expertise in Power BI, Excel Advanced Analytics, and Data Visualization. Experienced in transforming complex datasets into actionable business insights through internships and successful freelance projects. Skilled in data cleaning, statistical analysis, and creating compelling dashboards that drive strategic decision-making. Seeking opportunities to leverage analytical skills and contribute to data-driven organizations, both remotely and in collaborative office environments."
  },

  // Core Skills - Add/remove skills and adjust proficiency levels (0-100)
  coreSkills: [
    { name: "SQL", level: 85, icon: "🗄️" },
    { name: "Python", level: 78, icon: "🐍" },
    { name: "Excel Advanced", level: 92, icon: "📊" },
    { name: "Microsoft Power BI", level: 95, icon: "📈" },
    { name: "Tableau", level: 82, icon: "📋" }
  ],

  // Professional Metrics - Update these numbers as you grow
  metrics: {
    projectsCompleted: "15+",
    toolsMastered: "8+",
    clientSatisfaction: "100%",
    languagesSpoken: "4"
  },

  // Business Impact - Update with real achievements
  businessImpact: {
    costSavings: "$12K+",
    efficiencyImprovement: "30%",
    timeSaved: "40hrs"
  },

  // Theme Colors - Customize the portfolio appearance
  theme: {
    primary: "#1E40AF", // Royal Blue
    secondary: "#3B82F6", // Blue Primary
    accent: "#60A5FA", // Blue Light
    background: "#F8FAFC", // Light Gray
    text: "#1F2937" // Dark Gray
  },

  // Social Links - Add/remove social media profiles
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/ahammed-moin-nawaz-a-65169025a/",
    github: "https://github.com/ahammedmoinnawaz",
    email: "ahammedmoinnawaz@gmail.com",
    phone: "+91-8762218913"
  },

  // Site Configuration
  siteConfig: {
    title: "Ahammed Moin Nawaz - Data Analyst Portfolio",
    description: "Professional Data Analyst specializing in Power BI, Excel Analytics, and Business Intelligence. View my projects and expertise.",
    keywords: ["Data Analyst", "Power BI", "Excel", "SQL", "Python", "Tableau", "Business Intelligence"],
    author: "Ahammed Moin Nawaz"
  }
};

// Helper function to get configuration values
export const getConfig = () => portfolioConfig;

// Helper function to update configuration (for future admin panel)
export const updateConfig = (newConfig: Partial<typeof portfolioConfig>) => {
  Object.assign(portfolioConfig, newConfig);
};