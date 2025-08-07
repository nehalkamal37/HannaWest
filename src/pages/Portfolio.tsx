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
      tags: ["Html", "Css", "Inventory", "Analytics"],
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
    },
    {
  id: 4,
  title: "Apple Specialty Pharmacy",
  category: "Healthcare Website",
  description: "Modern care with personalized precision. A clean, HIPAA-aligned pharmacy web interface for patients and prescribers.",
  image: "/apple.jpg",
  tags: ["Next.js", "React", "Tailwind CSS", "Healthcare", "HIPAA"],
  fullDescription: `Apple Specialty Pharmacy is a modern healthcare platform designed to provide personalized pharmaceutical services through a clean, user-friendly interface.

Key Features:
• Custom-built UI for patients and prescribers
• Fully responsive design for mobile and desktop
• Modern branding: “Modern Care” and “Personalized Precision”
• Includes sections like Services, Prescriber Portal, Patient Resources, and Privacy Policy
• HIPAA-aware structure ensuring secure handling of sensitive information
• Integrated contact and navigation structure for streamlined communication`,
  technologies: ["Next.js", "React", "Tailwind CSS", "Vercel Hosting"],
  outcome: "Enhanced digital presence for a specialty pharmacy, providing clarity and accessibility for both patients and medical professionals."
},
{
  id: 5,
  title: "EssentialRx",
  category: "Healthcare Platform",
  description: "Redefining in-office medication dispensing through streamlined digital workflows for clinics and physicians.",
  image: "/ess.jpg",
  tags: ["Html", "Css", "Bootstrap", "Workflow Automation", "Physician Portal"],
  fullDescription: `EssentialRx is a web-based healthcare platform focused on improving in-office medication dispensing. It supports physician practices with seamless workflows and automation to optimize medication delivery within clinics.

Key Features:
• Digital-first platform for physician-guided dispensing
• Streamlined in-office workflows to reduce delays
• Addressing challenges in patient engagement and inventory tracking
• Interactive feature sections and workflow case studies
• Built-in support for physician feedback loops
• Clinic-centered UI for easy onboarding and management
• Operating hours support interface (Monday – Saturday, 8AM to 10PM)
• Click-to-call integration for immediate support`,
  technologies: ["Html", "Css", "Bootstrap", "Vercel"],
  outcome: "Transformed traditional medication dispensing workflows into fully digital operations for physician-led practices, boosting speed and reducing paperwork."
}
,
{
  id: 6,
  title: "MediHive Rx",
  category: "Digital Healthcare",
  description: "Maximizing in-office dispensing impact through analytics and automation.",
  image: "/medi.jpg",
  tags: ["Analytics", "Automation", "IOD Services", "Healthcare Tech"],
  fullDescription: `MediHive Rx is a data-driven platform dedicated to enhancing in-office dispensing (IOD) effectiveness. It leverages smart analytics, automation, and decision-making tools to improve medication dispensing outcomes and operational efficiency for medical practices.

Key Highlights:
• Real-time analytics for IOD performance
• Smart dashboards for efficiency tracking
• Automation in physician decision-making
• Strategic insights for better patient outcomes
• Seamless UI with accessible navigation
• Focused on maximizing in-office dispensing impact
• Scalable and tailored for mid-size healthcare providers`,
  technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
  outcome: "Improved in-office dispensing efficiency by 55% and enabled data-backed decision making for physicians."
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