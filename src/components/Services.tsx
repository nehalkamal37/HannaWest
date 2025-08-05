import { Code, Bot, Smartphone, Database, Users, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Code,
      title: "Software Development",
      description: "Powerful custom solutions tailored to your business needs",
      features: [
        "Custom business applications (web & mobile)",
        "API integrations & automation",
        "HIPAA-compliant solutions"
      ],
      bgGradient: "from-primary/10 to-accent/10"
    },
    {
      id: 2,
      icon: Bot,
      title: "Virtual Assistant Consultancy",
      description: "Expert guidance for scaling with remote support",
      features: [
        "Staffing and process setup",
        "Workflow optimization", 
        "Remote assistant integration"
      ],
      bgGradient: "from-accent/10 to-primary/10"
    }
  ];

  const additionalFeatures = [
    { icon: Smartphone, text: "Mobile-First Design" },
    { icon: Database, text: "Secure Data Management" },
    { icon: Users, text: "Team Collaboration Tools" },
    { icon: Settings, text: "Process Automation" }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 fade-in-up">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
            We deliver cutting-edge solutions that transform the way you work, 
            combining technical expertise with strategic consulting.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card ${index === 0 ? 'fade-in-left' : 'fade-in-right'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-6`}>
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-playfair font-semibold text-center text-foreground mb-8">
            Our Expertise Includes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;