import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';
import { Code, Globe, Gamepad2, Cloud, Database, BarChart3 } from 'lucide-react';

const SkillsSection = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: skills.technical.programming,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: skills.technical.webDevelopment,
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Game Development',
      icon: Gamepad2,
      skills: skills.technical.gameDevlopment,
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: skills.technical.devopsCloud,
      gradient: 'from-blue-700 to-blue-800'
    },
    {
      title: 'Tools & Platforms',
      icon: Database,
      skills: skills.technical.toolsPlatforms,
      gradient: 'from-indigo-600 to-indigo-700'
    },
    {
      title: 'Data Science',
      icon: BarChart3,
      skills: skills.technical.dataScience,
      gradient: 'from-blue-800 to-indigo-800'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning multiple domains of technology
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="group p-6 bg-white dark:bg-gray-900 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.gradient} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:scale-105 transition-all duration-200 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Professional <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Qualities</span>
          </h3>
          
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900/20 border-0 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.soft.map((skill, index) => (
                <div
                  key={index}
                  className="group p-4 bg-white dark:bg-gray-900/50 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Skills Progress Visualization */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Proficiency <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Overview</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Frontend Development', level: 90 },
              { name: 'Backend Development', level: 85 },
              { name: 'Cloud & DevOps', level: 80 },
              { name: 'Game Development', level: 75 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{item.name}</span>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;