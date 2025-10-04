import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';
import { Code, Globe, Gamepad2, Cloud, Database, BarChart3, Zap, Cpu } from 'lucide-react';

const SkillsSection = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: skills.technical.programming,
      gradient: 'from-cyan-500 to-blue-600',
      hoverGlow: 'hover:shadow-cyan-500/30'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: skills.technical.webDevelopment,
      gradient: 'from-blue-500 to-indigo-600',
      hoverGlow: 'hover:shadow-blue-500/30'
    },
    {
      title: 'Game Development',
      icon: Gamepad2,
      skills: skills.technical.gameDevlopment,
      gradient: 'from-purple-500 to-pink-600',
      hoverGlow: 'hover:shadow-purple-500/30'
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: skills.technical.devopsCloud,
      gradient: 'from-teal-500 to-cyan-600',
      hoverGlow: 'hover:shadow-teal-500/30'
    },
    {
      title: 'Tools & Platforms',
      icon: Database,
      skills: skills.technical.toolsPlatforms,
      gradient: 'from-indigo-500 to-purple-600',
      hoverGlow: 'hover:shadow-indigo-500/30'
    },
    {
      title: 'Data Science',
      icon: BarChart3,
      skills: skills.technical.dataScience,
      gradient: 'from-emerald-500 to-teal-600',
      hoverGlow: 'hover:shadow-emerald-500/30'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1650473395434-8674d953ef2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHx0ZWNoJTIwYWJzdHJhY3R8ZW58MHx8fHwxNzU5NTY3NTMwfDA&ixlib=rb-4.1.0&q=85)'
          }}
        ></div>
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-transparent to-blue-900/30"></div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-10 right-20 text-cyan-400/20 animate-bounce-subtle">
          <Cpu className="h-20 w-20" />
        </div>
        <div className="absolute bottom-20 left-20 text-purple-400/20 animate-bounce-subtle animation-delay-2000">
          <Zap className="h-16 w-16" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full shadow-lg shadow-cyan-400/50"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive arsenal spanning multiple domains of cutting-edge technology
          </p>
          
          {/* Animated Decoration */}
          <div className="flex justify-center mt-8 space-x-4">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        {/* Enhanced Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className={`group relative p-8 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-2xl ${category.hoverGlow} transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 overflow-hidden`}>
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Animated Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${category.gradient} text-white mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="px-4 py-2 text-sm bg-gray-800/80 text-gray-300 border-gray-600 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-cyan-300 hover:border-cyan-400/50 hover:scale-110 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Soft Skills */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Qualities</span>
          </h3>
          
          <Card className="relative p-12 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 shadow-2xl max-w-5xl mx-auto overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.soft.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-purple-500/20 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 border border-gray-700/30 hover:border-purple-400/50 overflow-hidden"
                  >
                    {/* Skill Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    
                    <div className="relative z-10">
                      <span className="text-lg font-semibold text-gray-200 group-hover:text-purple-300 transition-colors duration-300 block text-center">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Enhanced Skills Progress Visualization */}
        <div className="mt-20">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Proficiency <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Matrix</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { name: 'Frontend Development', level: 90, gradient: 'from-cyan-500 to-blue-500', glow: 'shadow-cyan-500/30' },
              { name: 'Backend Development', level: 85, gradient: 'from-blue-500 to-indigo-500', glow: 'shadow-blue-500/30' },
              { name: 'Cloud & DevOps', level: 80, gradient: 'from-teal-500 to-cyan-500', glow: 'shadow-teal-500/30' },
              { name: 'Game Development', level: 75, gradient: 'from-purple-500 to-pink-500', glow: 'shadow-purple-500/30' }
            ].map((item, index) => (
              <div key={index} className="group space-y-4 p-6 bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors duration-300">{item.name}</span>
                  <span className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>{item.level}%</span>
                </div>
                <div className="relative w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${item.gradient} h-4 rounded-full transition-all duration-2000 ease-out shadow-lg ${item.glow} relative overflow-hidden`}
                    style={{ width: `${item.level}%` }}
                  >
                    {/* Animated Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
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