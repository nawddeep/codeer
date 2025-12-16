import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CTA = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-24 bg-zinc-900 dark:bg-zinc-950">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to build something great?
        </h2>
        
        <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
          Let us discuss your project. We will get back to you within 24 hours.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-zinc-900 rounded-full font-medium flex items-center gap-2 hover:bg-zinc-100 transition-colors"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border border-zinc-700 text-white rounded-full font-medium hover:border-zinc-500 transition-colors"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
