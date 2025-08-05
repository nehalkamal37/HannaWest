import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/portfolio' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const element = document.getElementById(href.slice(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-soft' 
          : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="container-custom px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-playfair font-bold text-primary hover:text-primary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
            aria-label="HannaWest Solutions - Return to homepage"
          >
            HannaWest Solutions
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-colors duration-300 hover:text-primary relative group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 ${
                  location.pathname === item.href || 
                  (item.href === '/' && location.pathname === '/')
                    ? 'text-primary' 
                    : 'text-foreground'
                }`}
                aria-current={
                  location.pathname === item.href || 
                  (item.href === '/' && location.pathname === '/') 
                    ? 'page' 
                    : undefined
                }
              >
                {item.name}
                <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-[calc(100%-1rem)]"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav 
            className="py-4 border-t border-border/50"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block py-3 px-4 font-medium transition-colors duration-300 hover:text-primary hover:bg-primary/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  location.pathname === item.href || 
                  (item.href === '/' && location.pathname === '/')
                    ? 'text-primary bg-primary/5' 
                    : 'text-foreground'
                }`}
                aria-current={
                  location.pathname === item.href || 
                  (item.href === '/' && location.pathname === '/') 
                    ? 'page' 
                    : undefined
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;