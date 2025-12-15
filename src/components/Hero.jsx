import { useEffect, useState } from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
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
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />
      </div>

      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-indigo-300">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for new projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">We Build</span>
              <br />
              <span className="gradient-text">{typedText}</span>
              <span className="animate-pulse">|</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl">
              {companyInfo.description} Partner with us to create exceptional digital experiences that drive growth and innovation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="btn-secondary px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                View Our Work
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-white">250+</div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div>
                <div className="text-3xl font-bold text-white">6+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl animate-pulse-glow" />
              <div className="absolute inset-4 glass-card rounded-2xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 animate-float"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center animate-float shadow-lg shadow-cyan-500/30">
                <span className="text-3xl font-bold text-white">AI</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center animate-float shadow-lg shadow-purple-500/30" style={{ animationDelay: '-2s' }}>
                <span className="text-2xl font-bold text-white">UX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('#services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
