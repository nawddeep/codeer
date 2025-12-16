import { Code, Smartphone, Palette, TrendingUp, Cloud, Lightbulb, ArrowRight } from 'lucide-react';
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
      className={`glass-card rounded-2xl p-8 card-hover group transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6">{service.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {service.features.map((feature, i) => (
          <span key={i} className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20">
            {feature}
          </span>
        ))}
      </div>
      
      <a href="#contact" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium group/link">
        Learn More
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

const Services = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-slate-50/50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-900/50 dark:to-slate-900 transition-colors duration-300" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 block">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
