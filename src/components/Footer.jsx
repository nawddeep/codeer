import { Sparkles, Linkedin, Twitter, Instagram, Github, ArrowUp } from 'lucide-react';
import { companyInfo, navLinks } from '../data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Linkedin, href: companyInfo.social.linkedin },
    { icon: Twitter, href: companyInfo.social.twitter },
    { icon: Instagram, href: companyInfo.social.instagram },
    { icon: Github, href: companyInfo.social.github }
  ];

  const quickLinks = navLinks.filter(l => l.name !== 'Home');

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 pt-20 pb-8 transition-colors duration-300">
      <div className="absolute inset-0 bg-slate-50 dark:bg-gradient-to-t dark:from-slate-950 dark:to-slate-900/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">{companyInfo.name.split(' ')[0]}</span>
            </a>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
              {companyInfo.tagline}. {companyInfo.description}
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-indigo-500 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li>{companyInfo.email}</li>
              <li>{companyInfo.phone}</li>
              <li>{companyInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-300 dark:border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 hover:scale-110 transition-transform z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
