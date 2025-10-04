import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, Star, Rocket, Monitor } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const ProjectsSection = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: Monitor },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'game', label: 'Games', icon: Gamepad2 },
    { id: 'cloud', label: 'Cloud', icon: Cloud }
  ];
  
  const getProjectCategory = (technologies) => {
    const techStr = technologies.join(' ').toLowerCase();
    if (techStr.includes('unity') || techStr.includes('unreal') || techStr.includes('game')) return 'game';
    if (techStr.includes('docker') || techStr.includes('aws') || techStr.includes('cloud')) return 'cloud';
    if (techStr.includes('react') || techStr.includes('vue') || techStr.includes('flask')) return 'web';
    return 'web';
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => getProjectCategory(project.technologies) === activeFilter);

  // Enhanced project images with tech backgrounds
  const projectImages = [
    "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHx0ZWNoJTIwYWJzdHJhY3R8ZW58MHx8fHwxNzU5NTY3NTMwfDA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHx0ZWNoJTIwYWJzdHJhY3R8ZW58MHx8fHwxNzU5NTY3NTMwfDA&ixlib=rb-4.1.0&q=85",
    "https://images.pexels.com/photos/34147370/pexels-photo-34147370.jpeg",
    "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxkYXJrJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NTk1Njc1MjB8MA&ixlib=rb-4.1.0&q=85"
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1510906594845-bc082582c8cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NTk1Njc1MjB8MA&ixlib=rb-4.1.0&q=85)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 via-transparent to-gray-900/80"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 text-blue-400/20">
          <Rocket className="h-16 w-16 animate-bounce-subtle" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full shadow-lg shadow-blue-400/50"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions across web development, cloud computing, and interactive experiences
          </p>
        </div>

        {/* Enhanced Filter Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap gap-4 bg-gray-900/80 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-gray-700/50">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`group px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 transform scale-105'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/60 border border-gray-600/30 hover:border-blue-400/50'
                  }`}
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">{category.label}</span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group relative overflow-hidden bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-3 hover:scale-105 transition-all duration-500">
              {/* Project Image with Overlay Effects */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={projectImages[index] || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-0 px-3 py-1 flex items-center space-x-1 shadow-lg">
                      <Star className="h-3 w-3 fill-current" />
                      <span className="font-bold">Featured</span>
                    </Badge>
                  </div>
                )}
                
                {/* Enhanced Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {project.github && (
                      <Button 
                        size="lg" 
                        className="bg-gray-900/90 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 hover:scale-110 transition-all duration-200 shadow-xl border border-gray-600/50"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 hover:scale-110 transition-all duration-200 shadow-xl"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Enhanced Project Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="text-xs text-cyan-400 border-cyan-400/50 bg-cyan-400/10">
                      {project.organization}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                {/* Enhanced Technologies */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Tag className="h-5 w-5 text-blue-400" />
                    <span className="text-sm font-semibold text-blue-400">Tech Stack:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-gray-800/80 text-gray-300 border-gray-600/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-blue-300 hover:border-blue-400/50 hover:scale-105 transition-all duration-300 cursor-pointer px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Enhanced Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  {project.github && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.link && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <Card className="relative p-12 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 shadow-2xl max-w-4xl mx-auto overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Collaborate?</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                I'm always excited to work on groundbreaking projects and transform innovative ideas into reality.
              </p>
              <Button 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-4 rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30"
              >
                Let's Build Something Extraordinary
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;