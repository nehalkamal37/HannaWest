import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-4">
                HannaWest Solutions
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Streamlining business operations through cutting-edge software 
                and expert virtual assistant consulting.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  1337 Whitewater Rd<br />
                  Memphis, Tennessee 38117
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/80 flex-shrink-0" />
                <a 
                  href="tel:+19016970621" 
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
                >
                  +1 (901) 697-0621
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/80 flex-shrink-0" />
                <a 
                  href="mailto:m.a.hannalla@gmail.com" 
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
                >
                  m.a.hannalla@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link 
                to="/#services" 
                className="block text-primary-foreground/80 hover:text-white transition-colors duration-300"
              >
                Services
              </Link>
              <Link 
                to="/portfolio" 
                className="block text-primary-foreground/80 hover:text-white transition-colors duration-300"
              >
                Portfolio
              </Link>
              <Link 
                to="/#about" 
                className="block text-primary-foreground/80 hover:text-white transition-colors duration-300"
              >
                About Us
              </Link>
              <Link 
                to="/#contact" 
                className="block text-primary-foreground/80 hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 HannaWest Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/privacy" 
              className="text-primary-foreground/60 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-primary-foreground/60 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;