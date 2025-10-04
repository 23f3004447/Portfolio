import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const HeroSection = () => {
  const { personal } = portfolioData;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Tech Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYWJzdHJhY3R8ZW58MHx8fHwxNzU5NTY3NTMwfDA&ixlib=rb-4.1.0&q=85)'
          }}
        ></div>
        
        {/* Animated Geometric Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-screen filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-screen filter blur-xl animate-pulse animation-delay-4000"></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 text-cyan-400/30 text-6xl animate-bounce-subtle">
          <Code className="h-16 w-16" />
        </div>
        <div className="absolute bottom-20 right-10 text-blue-400/30 text-6xl animate-bounce-subtle animation-delay-2000">
          <Zap className="h-16 w-16" />
        </div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Image with Glow Effect */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-75 group-hover:opacity-100 animate-pulse blur-xl"></div>
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-cyan-400/50 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
              <img 
                src={personal.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Main Content with Glow Effects */}
          <div className="space-y-8 max-w-4xl">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
                {personal.name}
              </h1>
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-200 drop-shadow-lg">
                  {personal.title}
                </h2>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                {personal.tagline}
              </p>
            </div>

            {/* Animated CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-4 rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 border border-cyan-400/30"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  Hire Me
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-200" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group relative border-2 border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-10 py-4 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50"
              >
                <Download className="mr-2 h-6 w-6 group-hover:-translate-y-1 transition-transform duration-200" />
                Download CV
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center space-x-8 mt-12">
              <a 
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gray-800/80 backdrop-blur-sm rounded-full shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-125 hover:-translate-y-2 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                <Github className="h-8 w-8 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200 relative z-10" />
              </a>
              <a 
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gray-800/80 backdrop-blur-sm rounded-full shadow-2xl hover:shadow-blue-500/30 transform hover:scale-125 hover:-translate-y-2 transition-all duration-300 border border-gray-700/50 hover:border-blue-400/50"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                <Linkedin className="h-8 w-8 text-gray-300 group-hover:text-blue-400 transition-colors duration-200 relative z-10" />
              </a>
              <a 
                href={`mailto:${personal.email}`}
                className="group relative p-4 bg-gray-800/80 backdrop-blur-sm rounded-full shadow-2xl hover:shadow-purple-500/30 transform hover:scale-125 hover:-translate-y-2 transition-all duration-300 border border-gray-700/50 hover:border-purple-400/50"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                <Mail className="h-8 w-8 text-gray-300 group-hover:text-purple-400 transition-colors duration-200 relative z-10" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center shadow-lg shadow-cyan-400/30">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-cyan-400 text-sm font-medium">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;