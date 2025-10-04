import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const ProjectsSection = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'web', 'game', 'cloud', 'mobile'];
  
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

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions across web development, cloud computing, and game design
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? 'default' : 'ghost'}
                className={`px-6 py-2 rounded-full transition-all duration-300 capitalize ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 px-3 py-1 flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span className="font-semibold">Featured</span>
                    </Badge>
                  </div>
                )}
                
                {/* Overlay Links */}
                <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <Button 
                      size="sm" 
                      className="bg-white/90 text-gray-800 hover:bg-white hover:scale-105 transition-all duration-200"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.link && (
                    <Button 
                      size="sm" 
                      className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-200"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="text-xs text-gray-500 dark:text-gray-400">
                      {project.organization}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Tag className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                  {project.github && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
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
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transform hover:scale-105 transition-all duration-200"
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900/20 border-0 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Collaboration?</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I'm always excited to work on innovative projects and bring creative ideas to life.
            </p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Build Something Amazing
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;