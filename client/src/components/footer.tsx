import { personalInfo } from "@/lib/data";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">{personalInfo.name}</div>
            <p className="text-gray-400 mb-4 max-w-md">
              Data Analyst passionate about transforming raw data into actionable business insights 
              through advanced analytics and compelling visualizations.
            </p>
            <div className="flex space-x-4">
              <a 
                href={personalInfo.linkedin} 
                className="text-gray-400 hover:text-blue-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin size={24} />
              </a>
              <a 
                href={personalInfo.github} 
                className="text-gray-400 hover:text-blue-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={24} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-gray-400 hover:text-blue-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("#about")}
                  className="text-gray-400 hover:text-blue-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#skills")}
                  className="text-gray-400 hover:text-blue-primary transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#projects")}
                  className="text-gray-400 hover:text-blue-primary transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#blog")}
                  className="text-gray-400 hover:text-blue-primary transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#contact")}
                  className="text-gray-400 hover:text-blue-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Data Analysis</span></li>
              <li><span className="text-gray-400">Dashboard Creation</span></li>
              <li><span className="text-gray-400">Data Visualization</span></li>
              <li><span className="text-gray-400">Business Intelligence</span></li>
              <li><span className="text-gray-400">Excel Automation</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {personalInfo.name}. All rights reserved. Built with passion for data and analytics.</p>
        </div>
      </div>
    </footer>
  );
}
