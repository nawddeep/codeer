import { Code, Smartphone, Palette, TrendingUp, Cloud, Lightbulb, ArrowUpRight } from 'lucide-react';
import { services } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = {
  Code, Smartphone, Palette, TrendingUp, Cloud, Lightbulb
};

const ServiceCard = ({ service, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const Icon = iconMap[service.icon];

  return (
    <div
      ref={ref}
      className={`group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 card-hover transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-white" />
      </div>
      
      {/* Title with arrow */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{service.title}</h3>
        <ArrowUpRight className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      {/* Description */}
      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-5">{service.description}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.features.map((feature, i) => (
          <span key={i} className="px-2.5 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="services" className="py-24 bg-zinc-50/50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-violet-600 dark:text-violet-400 font-medium mb-3 text-sm tracking-wide uppercase">Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            What we do best
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
            End-to-end digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
