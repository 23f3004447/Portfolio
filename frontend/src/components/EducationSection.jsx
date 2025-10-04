import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const EducationSection = () => {
  const { education } = portfolioData;

  const getGradientByType = (type) => {
    switch (type) {
      case 'primary':
        return 'from-blue-500 to-blue-600';
      case 'secondary':
        return 'from-indigo-500 to-indigo-600';
      case 'school':
        return 'from-blue-600 to-blue-700';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Educational <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic excellence and continuous learning across multiple domains
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${getGradientByType(edu.type)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-start space-x-6 flex-1">
                    {/* Icon */}
                    <div className={`flex-shrink-0 p-4 rounded-full bg-gradient-to-r ${getGradientByType(edu.type)} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <GraduationCap className="h-8 w-8" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center space-x-2 mt-2">
                          <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                            {edu.institution}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 flex-wrap gap-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-gray-600 dark:text-gray-400 font-medium">
                            {edu.duration}
                          </span>
                        </div>
                        
                        {edu.cgpa && (
                          <Badge 
                            variant="outline" 
                            className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 font-semibold text-sm px-3 py-1"
                          >
                            CGPA: {edu.cgpa}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Type Badge */}
                  <Badge 
                    className={`bg-gradient-to-r ${getGradientByType(edu.type)} text-white border-0 px-4 py-2 font-semibold capitalize group-hover:scale-105 transition-transform duration-300`}
                  >
                    {edu.type === 'primary' ? 'Bachelor\'s' : edu.type === 'secondary' ? 'Bachelor\'s' : 'Secondary'}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Academic Achievements Summary */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900/20 border-0 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Academic <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Highlights</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  8.57
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Current CGPA<br />
                  <span className="text-sm text-gray-500 dark:text-gray-400">B.Tech CSE</span>
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  8.04
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Current CGPA<br />
                  <span className="text-sm text-gray-500 dark:text-gray-400">B.Sc Data Science</span>
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
                  2027
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Expected Graduation<br />
                  <span className="text-sm text-gray-500 dark:text-gray-400">Dual Degree Program</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;