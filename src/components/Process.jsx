import { Search, Map, PenTool, Code, CheckCircle, Rocket } from 'lucide-react';
import { processSteps } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = [Search, Map, PenTool, Code, CheckCircle, Rocket];

const Process = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-24 bg-zinc-50/50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-violet-600 dark:text-violet-400 font-medium mb-3 text-sm tracking-wide uppercase">Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            How we work
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto">
            A proven methodology that ensures successful delivery every time.
          </p>
        </div>

        {/* Process steps - horizontal on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={step.number}
                className="relative p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50"
              >
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center">
                  {step.number}
                </div>
                
                <Icon className="w-6 h-6 text-zinc-400 mb-4" />
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
