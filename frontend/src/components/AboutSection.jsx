import React from 'react';
import { CheckCircle, Sparkles, Rocket, Brain, Code } from 'lucide-react';
import { Card } from './ui/card';
import { portfolioData } from '../mock';

const AboutSection = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxkYXJrJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NTk1Njc1MjB8MA&ixlib=rb-4.1.0&q=85)'
          }}
        ></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full shadow-lg shadow-cyan-400/50"></div>
          <div className="flex justify-center mt-8">
            <Sparkles className="h-8 w-8 text-cyan-400 animate-pulse" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description with Enhanced Graphics */}
          <div className="space-y-8">
            <Card className="relative group p-8 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 transition-all duration-500">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Brain className="h-8 w-8 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">
                    Who I Am
                  </h3>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {about.description}
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-6 flex items-center">
                    <Rocket className="h-6 w-6 mr-3" />
                    What I Bring to the Table
                  </h3>
                  <div className="grid gap-4">
                    {about.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-4 group/item">
                        <div className="flex-shrink-0 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover/item:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-gray-300 font-medium group-hover/item:text-cyan-400 transition-colors duration-300">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Enhanced Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="group relative p-8 text-center bg-gradient-to-br from-gray-800 via-blue-900/50 to-gray-800 border border-cyan-400/30 shadow-2xl hover:shadow-cyan-400/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">15+</div>
                <p className="text-cyan-300 font-medium">Technologies Mastered</p>
              </div>
              <div className="absolute top-2 right-2 text-cyan-400/30 group-hover:text-cyan-400/60 transition-colors duration-300">
                <Code className="h-6 w-6" />
              </div>
            </Card>
            
            <Card className="group relative p-8 text-center bg-gradient-to-br from-gray-800 via-indigo-900/50 to-gray-800 border border-blue-400/30 shadow-2xl hover:shadow-blue-400/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">4+</div>
                <p className="text-blue-300 font-medium">Projects Completed</p>
              </div>
            </Card>
            
            <Card className="group relative p-8 text-center bg-gradient-to-br from-gray-800 via-purple-900/50 to-gray-800 border border-purple-400/30 shadow-2xl hover:shadow-purple-400/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">3</div>
                <p className="text-purple-300 font-medium">Internships</p>
              </div>
            </Card>
            
            <Card className="group relative p-8 text-center bg-gradient-to-br from-gray-800 via-teal-900/50 to-gray-800 border border-teal-400/30 shadow-2xl hover:shadow-teal-400/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">3</div>
                <p className="text-teal-300 font-medium">Achievements</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Enhanced Vision Statement */}
        <div className="mt-20">
          <Card className="relative group p-12 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 shadow-2xl max-w-5xl mx-auto overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-200 italic leading-relaxed">
                "I believe in creating technology that not only solves problems but inspires innovation and drives meaningful change in how we interact with the digital world."
              </blockquote>
              
              <div className="mt-8 flex justify-center space-x-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-2000"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-4000"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;