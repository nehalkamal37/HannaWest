import teamPhoto from '../assets/team-photo.jpg';

const About = () => {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in-left">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              About HannaWest Solutions
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Headquartered in Memphis, TN, HannaWest Solutions helps businesses 
                streamline operations through cutting-edge software and expert virtual 
                assistant consulting.
              </p>
              
              <p>
                Whether you're building a custom tool or looking to scale with remote 
                support, our team delivers tailored, scalable solutions that grow with 
                your business. We combine technical excellence with strategic insights 
                to drive meaningful results.
              </p>
              
              <p>
                Our commitment to quality, security, and client success has made us 
                a trusted partner for businesses across various industries, from 
                healthcare to technology startups.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg bg-gradient-card hover:shadow-soft transition-all duration-300"
                >
                  <div className="text-3xl font-playfair font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
              <img 
                src={teamPhoto}
                alt="HannaWest Solutions Team"
                className="relative rounded-2xl shadow-large w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;