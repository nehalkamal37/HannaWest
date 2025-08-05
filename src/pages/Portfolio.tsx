import { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import medisearchProject from '../assets/medisearch-project.jpg';
import { Description } from '@radix-ui/react-toast';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Medisearch",
      category: "Healthcare Software",
      description: "Comprehensive healthcare platform with advanced drug search capabilities, insurance integration, and analytics dashboard.",
      image: medisearchProject,
      tags: ["React", "Node.js", "HIPAA Compliant", "Healthcare"],
      fullDescription: `Medisearch is a comprehensive healthcare software solution designed to streamline medical operations and enhance patient care. The platform features an advanced drug search system that allows healthcare providers to quickly find medication information, check interactions, and verify insurance coverage.

      Key features include:
      • Advanced drug database with real-time updates
      • Insurance verification and coverage checking
      • Comprehensive analytics dashboard for medical insights
      • HIPAA-compliant secure data handling
      • Integration with major healthcare systems
      • Mobile-responsive design for on-the-go access

      The platform has significantly reduced manual work for medical staff and improved patient care efficiency across multiple healthcare facilities.`,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
      outcome: "Reduced manual work by 75% and improved patient processing time by 50%"
    },
    {
      id: 2,
      title: "Axiom Management System",
      category: "Web Application",
      description: "Innovative Management Solutions for Modern Healthcare Empowering healthcare practices with tailored support and operational excellence.",
     // description: "Full-featured e-commerce solution with inventory management, payment processing, and analytics.",
      image: "/axio.jpg",
      tags: ["React", "Stripe", "Inventory", "Analytics"],
      fullDescription: "A complete e-commerce platform built for modern businesses...",
      technologies: ["React", "Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      outcome: "Increased sales conversion by 40% and reduced cart abandonment by 30%"
    },
    {
      id: 3,
      title: "California Rheumatology Institute",
      category: "Business Management",
      description: "Comprehensive Rehumatology Care for a Healthier ,pain-free life",
     // description: "Comprehensive dashboard for managing virtual assistant workflows and team collaboration.",
      image: "/reh.jpg",
      tags: ["Dashboard", "Team Management", "Workflows", "Analytics"],
      fullDescription: "An intuitive dashboard designed to optimize virtual assistant operations...",
      technologies: ["Vue.js", "Firebase", "Chart.js", "Vuetify"],
      outcome: "Improved team productivity by 60% and reduced project turnaround time by 35%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-hero">
        <div className="container-custom px-4 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Our Work
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Discover the innovative solutions we've built for businesses across various industries.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="portfolio-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="text-white font-medium mb-4 ml-4 flex items-center space-x-2 hover:text-accent transition-colors duration-300"
                    >
                      <span>View Details</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-playfair font-bold text-foreground mb-2">
                    {selectedProject.title}
                  </h2>
                  <span className="text-accent font-medium">{selectedProject.category}</span>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {selectedProject.fullDescription}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, idx: number) => (
                      <span 
                        key={idx}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Project Outcome</h4>
                  <p className="text-muted-foreground">{selectedProject.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;