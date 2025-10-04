// Mock data for portfolio website
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Full-Stack Developer & Game Designer",
    tagline: "Motivated tech enthusiast crafting innovative solutions",
    email: "your.email@example.com",
    phone: "+91 XXXXX XXXXX",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    location: "Chennai, India",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  
  about: {
    description: "Motivated and adaptable tech enthusiast with hands-on experience in full-stack development, cloud deployment, and game design. Passionate about creating innovative solutions that bridge the gap between complex technology and user-friendly experiences.",
    highlights: [
      "3+ Years of Development Experience",
      "Cloud Architecture & DevOps",
      "Full-Stack Web Development",
      "Game Development Expertise"
    ]
  },

  skills: {
    technical: {
      programming: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS", "SQL"],
      webDevelopment: ["Flask", "Vue.js", "TypeScript", "Tailwind CSS", "REST APIs", "Jinja2"],
      gameDevlopment: ["Unity", "Unreal Engine", "2D/3D Game Design"],
      devopsCloud: ["AWS EC2", "S3", "CloudWatch", "Terraform", "Jenkins CI/CD", "Docker"],
      toolsPlatforms: ["VS Code", "Git/GitHub", "Postman", "Firebase", "Redis", "MySQL", "SQLite"],
      dataScience: ["NumPy", "Pandas", "Matplotlib", "Data Visualization"]
    },
    soft: ["Problem-solving", "Documentation", "Collaboration", "Adaptability", "Leadership", "Communication"]
  },

  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Jerusalem College of Engineering",
      duration: "2023 - 2027",
      cgpa: "8.57",
      type: "primary"
    },
    {
      degree: "B.Sc in Data Science and Applications",
      institution: "Indian Institutes of Technology",
      duration: "2023 - 2027",
      cgpa: "8.04",
      type: "secondary"
    },
    {
      degree: "High School",
      institution: "Sri Chaitanya Techno School",
      duration: "2023",
      cgpa: "83%",
      type: "school"
    }
  ],

  projects: [
    {
      title: "Parking App",
      organization: "IIT",
      duration: "May 2025 - July 2025",
      description: "Full-stack web application using Flask and SQLite with real-time reservation management, admin dashboards, and user authentication system.",
      technologies: ["Flask", "SQLite", "HTML/CSS", "JavaScript", "Python"],
      github: "https://github.com/23f3004447/Parking-App.git",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&h=400&fit=crop",
      featured: true
    },
    {
      title: "Kimai Cloud Migration Project",
      organization: "TechForce",
      duration: "June 2025",
      description: "Comprehensive cloud deployment solution using Docker containerization, Terraform infrastructure as code, and AWS EC2 for scalable hosting.",
      technologies: ["Docker", "Terraform", "AWS EC2", "DevOps", "CI/CD"],
      github: "https://github.com/angelinedev/Cloud-Migration-Project.git",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      featured: true
    },
    {
      title: "3D Endless Runner",
      organization: "DigAmenD",
      duration: "July 2024",
      description: "Unity 3D game featuring advanced player mechanics, obstacle generation, and performance optimization for smooth gameplay experience.",
      technologies: ["Unity", "C#", "3D Modeling", "Game Physics"],
      link: "https://drive.google.com/...",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      featured: false
    },
    {
      title: "Sympo-25 College Symposium Website",
      organization: "Tech Team Project",
      duration: "2025",
      description: "Modern React + Vite website with Tailwind CSS, featuring smooth animations, interactive FAQ section, and responsive design.",
      technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      link: "https://technovanza.vercel.app",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      featured: false
    }
  ],

  achievements: [
    {
      title: "Encrypt ID Competition",
      organization: "IIT",
      year: "2024",
      type: "competition",
      description: "Successfully participated in cybersecurity competition"
    },
    {
      title: "First Prize in Paper Presentation",
      organization: "ISTE Student Chapter",
      year: "2024",
      type: "award",
      description: "Won first place in technical paper presentation"
    },
    {
      title: "Foundation Certification",
      organization: "Indian Institutes of Technology",
      year: "2024",
      type: "certification",
      description: "Completed foundation level certification program"
    }
  ],

  experience: [
    {
      title: "Intern",
      company: "SBV Technologies",
      location: "Chennai",
      duration: "July 2025",
      type: "internship",
      responsibilities: [
        "Contributed to full-stack development projects",
        "Collaborated with senior developers on client solutions",
        "Implemented responsive web interfaces"
      ]
    },
    {
      title: "Project Intern",
      company: "TechForce",
      location: "Chennai",
      duration: "June 2025",
      type: "internship",
      responsibilities: [
        "Led cloud migration project using AWS services",
        "Implemented DevOps practices and CI/CD pipelines",
        "Worked with containerization and infrastructure as code"
      ]
    },
    {
      title: "Intern",
      company: "Digamend",
      location: "Chennai",
      duration: "June 2024 - July 2024",
      type: "internship",
      responsibilities: [
        "Developed 3D games using Unity engine",
        "Optimized game performance and user experience",
        "Collaborated with design team on game mechanics"
      ]
    }
  ]
};

export default portfolioData;