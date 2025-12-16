import { useEffect, useState } from 'react';
import { ArrowRight, Play, ChevronDown, Zap } from 'lucide-react';
import { companyInfo } from '../data';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = companyInfo.tagline;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-[#fafaf9] dark:bg-[#0a0a0f]" />
      
      {/* Subtle accent blob */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/8 via-blue-500/5 to-transparent dark:from-violet-500/15 dark:via-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-violet-500/10 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 text-sm font-medium">
          <Zap className="w-3.5 h-3.5" />
          Now accepting projects for Q1 2025
        </div>

        {/* Main heading - large and bold */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          <span className="text-zinc-900 dark:text-zinc-100">We craft</span>
          <br />
          <span className="gradient-text">{typedText || 'digital'}</span>
          <span className="text-violet-500 animate-pulse">_</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed">
          {companyInfo.description}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-primary px-7 py-3.5 rounded-full text-white font-medium flex items-center gap-2 group relative z-10"
          >
            <span className="relative z-10">Start a project</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('#portfolio')}
            className="btn-secondary px-7 py-3.5 rounded-full text-zinc-700 dark:text-zinc-300 font-medium flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            See our work
          </button>
        </div>

        {/* Stats - horizontal layout */}
        <div className="flex flex-wrap gap-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          {[
            { value: '250+', label: 'Projects shipped' },
            { value: '98%', label: 'Client satisfaction' },
            { value: '6yrs', label: 'In business' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{stat.value}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('#services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
