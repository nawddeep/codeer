import { technologies } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categoryColors = {
  Frontend: 'from-blue-500 to-cyan-500',
  Backend: 'from-green-500 to-emerald-500',
  Database: 'from-orange-500 to-amber-500',
  Mobile: 'from-purple-500 to-pink-500',
  Cloud: 'from-indigo-500 to-violet-500',
  Design: 'from-rose-500 to-red-500'
};

const TechCard = ({ tech, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`glass-card rounded-xl p-4 text-center card-hover group transition-all duration-500 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${categoryColors[tech.category]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <span className="text-white font-bold text-lg">{tech.name.charAt(0)}</span>
      </div>
      <div className="text-white font-medium text-sm">{tech.name}</div>
      <div className="text-slate-500 text-xs mt-1">{tech.category}</div>
    </div>
  );
};

const Technologies = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-indigo-400 font-medium mb-4 block">Tech Stack</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Technologies <span className="gradient-text">We Use</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We leverage the latest technologies to build scalable, performant solutions.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
