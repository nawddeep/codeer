import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CTA = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      
      <div
        ref={ref}
        className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm mb-8">
          <Sparkles className="w-4 h-4" />
          Limited spots available this month
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Start Your <br />
          <span className="text-cyan-300">Next Project?</span>
        </h2>
        
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Let's collaborate to bring your vision to life. Get a free consultation and discover how we can help transform your business.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold flex items-center gap-2 hover:bg-white/90 transition-all hover:scale-105 shadow-lg shadow-black/20"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
