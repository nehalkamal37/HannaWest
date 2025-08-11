import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
   <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300">
  <div className="container-custom section-padding">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      {/* Company Info */}
      <div className="space-y-5">
        <h3 className="text-2xl font-playfair font-bold tracking-wide text-white">
          HannaWest Solutions
        </h3>
        <p className="text-gray-400 leading-relaxed">
          Streamlining business operations through cutting-edge software and expert virtual assistant consulting.
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-5">
        <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Contact</h4>
        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-indigo-400" />
            <span>1337 Whitewater Rd<br />Memphis, Tennessee 38117</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-indigo-400" />
            <a href="tel:+19016970621" className="hover:text-indigo-300 transition-colors">
              +1 (901) 697-0621
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-indigo-400" />
            <a href="mailto:m.a.hannalla@gmail.com" className="hover:text-indigo-300 transition-colors">
              m.a.hannalla@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-5">
        <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/#services" className="hover:text-indigo-300 transition-colors">Services</Link></li>
          <li><Link to="/portfolio" className="hover:text-indigo-300 transition-colors">Portfolio</Link></li>
          <li><Link to="/#about" className="hover:text-indigo-300 transition-colors">About Us</Link></li>
          <li><Link to="/#contact" className="hover:text-indigo-300 transition-colors">Contact</Link></li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="space-y-5">
        <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Follow Us</h4>
        <div className="flex gap-4">
          <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-500 transition-colors">
            <Linkedin className="h-5 w-5 text-white" />
          </a>
          <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-500 transition-colors">
            <Facebook className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
      <p>© 2025 HannaWest Solutions. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        {/*
        <Link to="/privacy" className="hover:text-indigo-300 transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-indigo-300 transition-colors">Terms of Service</Link>
        */}
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
