import React from 'react';
import { Building, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const ExperienceSection = () => {
  const { experience, achievements } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building expertise through hands-on internships and meaningful contributions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                
                {/* Experience Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="group p-6 bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <Building className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Responsibilities */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Key Contributions:</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {responsibility}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Badge 
                        className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 capitalize"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Awards & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Achievements</span>
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900/20 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge 
                      className={`px-3 py-1 text-xs font-semibold ${
                        achievement.type === 'award' 
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                          : achievement.type === 'certification'
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
                          : 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white'
                      }`}
                    >
                      {achievement.type}
                    </Badge>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                      {achievement.organization}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900/20 border-0 shadow-xl">
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Experience <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Summary</span>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    3
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    Internships Completed
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                    2+
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    Years of Development
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
                    5+
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    Technologies Worked With
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;