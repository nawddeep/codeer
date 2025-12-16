import { Search, Map, PenTool, Code, CheckCircle, Rocket } from 'lucide-react';
import { processSteps } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = [Search, Map, PenTool, Code, CheckCircle, Rocket];

const ProcessStep = ({ step, index, isLast }) => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const Icon = iconMap[index];

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center z-10 shadow-lg shadow-indigo-500/30">
          <Icon className="w-6 h-6 text-white" />
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500/20 mt-4" />
        )}
      </div>
      
      <div className="pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">Step {step.number}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
        <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section-padding relative overflow-hidden bg-white dark:bg-transparent">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/[0.03] dark:bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 block">How We Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A proven methodology that ensures successful project delivery every time.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
