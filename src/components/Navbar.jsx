import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { navLinks, companyInfo } from '../data';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-lg shadow-indigo-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">{companyInfo.name.split(' ')[0]}</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-400 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary px-6 py-2.5 rounded-full text-white font-medium inline-block"
            >
              Get Started
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              className="text-slate-900 dark:text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden glass transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary px-6 py-2.5 rounded-full text-white font-medium inline-block mt-4"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
