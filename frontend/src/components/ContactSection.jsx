import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, User, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { portfolioData } from '../mock';

const ContactSection = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (frontend-only)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store in localStorage for demo purposes
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };
      submissions.push(newSubmission);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      gradient: 'from-cyan-500 to-blue-600',
      glow: 'hover:shadow-cyan-500/30'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      gradient: 'from-blue-500 to-indigo-600',
      glow: 'hover:shadow-blue-500/30'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: '#',
      gradient: 'from-purple-500 to-pink-600',
      glow: 'hover:shadow-purple-500/30'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-transparent to-blue-900/40"></div>
        
        {/* Animated Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse animation-delay-4000"></div>
        
        {/* Floating Contact Icons */}
        <div className="absolute top-20 right-20 text-cyan-400/20">
          <MessageCircle className="h-20 w-20 animate-bounce-subtle" />
        </div>
        <div className="absolute bottom-20 left-20 text-purple-400/20">
          <User className="h-16 w-16 animate-bounce-subtle animation-delay-2000" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full shadow-lg shadow-cyan-400/50"></div>
          <p className="mt-6 text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Let's collaborate and create something extraordinary together.
          </p>
          
          {/* Animated Connection Icons */}
          <div className="flex justify-center mt-10 space-x-6">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Get in <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm always excited to discuss innovative projects, explore new technologies, or simply have an engaging conversation about the future of development.
              </p>
            </div>
            
            {/* Enhanced Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className={`group relative p-8 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-2xl ${info.glow} transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden`}>
                    {/* Card Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                    
                    <a 
                      href={info.href}
                      className="relative flex items-center space-x-6"
                      {...(info.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${info.gradient} text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{info.label}</p>
                        <p className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mt-1">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>
            
            {/* Enhanced Social Links */}
            <div className="pt-8">
              <h4 className="text-2xl font-bold text-white mb-6">Follow My Journey</h4>
              <div className="flex space-x-6">
                <a 
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-blue-500/30 transform hover:scale-125 hover:-translate-y-2 transition-all duration-300 border border-gray-700/50 hover:border-blue-400/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 rounded-2xl"></div>
                  <Linkedin className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors duration-200 relative z-10" />
                </a>
                <a 
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-gray-500/30 transform hover:scale-125 hover:-translate-y-2 transition-all duration-300 border border-gray-700/50 hover:border-gray-400/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 rounded-2xl"></div>
                  <Github className="h-8 w-8 text-gray-400 group-hover:text-white transition-colors duration-200 relative z-10" />
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <Card className="relative p-10 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-2xl overflow-hidden">
            {/* Form Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
            
            <form onSubmit={handleSubmit} className="relative space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">
                  Send a <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Message</span>
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="bg-gray-800/80 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 h-12 text-lg"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-gray-800/80 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 h-12 text-lg"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="subject" className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="bg-gray-800/80 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 h-12 text-lg"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you."
                  className="bg-gray-800/80 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 resize-none text-lg"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-4 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border border-cyan-400/30"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-3">
                    <Send className="h-6 w-6" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </Card>
        </div>
        
        {/* Enhanced Footer */}
        <div className="mt-24 pt-12 border-t border-gray-700/50 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-2000"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-4000"></div>
            </div>
          </div>
          <p className="text-gray-400 text-lg">
            © 2025 <span className="text-cyan-400 font-semibold">{personal.name}</span>. Crafted with React, Tailwind CSS, and endless creativity ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;