import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { portfolioData } from '../mock';

const AboutSection = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900/20 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {about.description}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  What I Bring to the Table
                </h3>
                <div className="grid gap-3">
                  {about.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 text-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-blue-100 font-medium">Technologies Mastered</p>
              </div>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">4+</h3>
                <p className="text-indigo-100 font-medium">Projects Completed</p>
              </div>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-blue-700 to-blue-800 text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">3</h3>
                <p className="text-blue-100 font-medium">Internships</p>
              </div>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-blue-800 to-indigo-800 text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">3</h3>
                <p className="text-blue-100 font-medium">Achievements</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border-0 shadow-xl max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 italic leading-relaxed">
              "I believe in creating technology that not only solves problems but inspires innovation and drives meaningful change in how we interact with the digital world."
            </blockquote>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;