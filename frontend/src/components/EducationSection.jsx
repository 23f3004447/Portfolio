import React from 'react';
import { GraduationCap, MapPin, Calendar, Trophy, BookOpen, Award } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const EducationSection = () => {
  const { education } = portfolioData;

  const getGradientByType = (type) => {
    switch (type) {
      case 'primary':
        return { gradient: 'from-cyan-500 to-blue-600', glow: 'hover:shadow-cyan-500/30' };
      case 'secondary':
        return { gradient: 'from-blue-500 to-indigo-600', glow: 'hover:shadow-blue-500/30' };
      case 'school':
        return { gradient: 'from-purple-500 to-pink-600', glow: 'hover:shadow-purple-500/30' };
      default:
        return { gradient: 'from-gray-500 to-gray-600', glow: 'hover:shadow-gray-500/30' };
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-transparent to-blue-900/30"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating Educational Icons */}
        <div className="absolute top-20 left-20 text-cyan-400/20">
          <BookOpen className="h-16 w-16 animate-bounce-subtle" />
        </div>
        <div className="absolute bottom-20 right-20 text-purple-400/20">
          <Award className="h-12 w-12 animate-bounce-subtle animation-delay-2000" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Educational <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full shadow-lg shadow-cyan-400/50"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Academic excellence and continuous learning across multiple cutting-edge domains
          </p>
          
          {/* Animated Academic Icons */}
          <div className="flex justify-center mt-8 space-x-6">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse animation-delay-2000">
              <Trophy className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => {
            const theme = getGradientByType(edu.type);
            return (
              <Card key={index} className={`group relative overflow-hidden bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-2xl ${theme.glow} transform hover:-translate-y-3 hover:scale-105 transition-all duration-500`}>
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Animated Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/5 to-transparent rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative p-10">
                  <div className="flex items-start justify-between flex-wrap gap-6">
                    <div className="flex items-start space-x-8 flex-1">
                      {/* Enhanced Icon */}
                      <div className={`flex-shrink-0 p-6 rounded-2xl bg-gradient-to-r ${theme.gradient} text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl`}>
                        <GraduationCap className="h-10 w-10" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center space-x-3 mb-4">
                            <MapPin className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                            <span className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                              {edu.institution}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-6 flex-wrap gap-3">
                          <div className="flex items-center space-x-3">
                            <Calendar className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-400 font-medium text-lg">
                              {edu.duration}
                            </span>
                          </div>
                          
                          {edu.cgpa && (
                            <Badge 
                              className={`bg-gradient-to-r ${theme.gradient} text-white border-0 px-4 py-2 font-bold text-sm hover:scale-110 transition-transform duration-300 shadow-lg`}
                            >
                              CGPA: {edu.cgpa}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Type Badge */}
                    <Badge 
                      className={`bg-gray-800/80 backdrop-blur-sm text-cyan-400 border border-cyan-400/50 px-6 py-3 font-bold capitalize hover:scale-110 hover:bg-cyan-400/10 transition-all duration-300 text-sm`}
                    >
                      {edu.type === 'primary' ? 'Bachelor\'s Degree' : edu.type === 'secondary' ? 'Bachelor\'s Degree' : 'High School'}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Academic Achievements Summary */}
        <div className="mt-24">
          <Card className="relative p-12 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 shadow-2xl overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                Academic <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Excellence</span>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-10">
                <div className="group text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      8.57
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors duration-300">
                      Current CGPA
                    </p>
                    <span className="text-sm text-gray-400 block mt-2">B.Tech Computer Science</span>
                  </div>
                </div>
                
                <div className="group text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      8.04
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                      Current CGPA
                    </p>
                    <span className="text-sm text-gray-400 block mt-2">B.Sc Data Science & Applications</span>
                  </div>
                </div>
                
                <div className="group text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      2027
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-200 group-hover:text-purple-400 transition-colors duration-300">
                      Expected Graduation
                    </p>
                    <span className="text-sm text-gray-400 block mt-2">Dual Degree Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;