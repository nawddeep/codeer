import { Target, Users, Zap, Award } from 'lucide-react';
import { stats, companyInfo } from '../data';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';

const values = [
  { icon: Target, title: 'Mission-Driven', description: 'Every project aligns with your business goals' },
  { icon: Users, title: 'Client-Focused', description: 'Your success is our top priority' },
  { icon: Zap, title: 'Innovation', description: 'Cutting-edge solutions for modern challenges' },
  { icon: Award, title: 'Excellence', description: 'Quality and attention to detail in everything' }
];

const StatCard = ({ stat, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
    </div>
  );
};

const About = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/[0.03] dark:bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/[0.03] dark:bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 block">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About <span className="gradient-text">{companyInfo.name.split(' ')[0]}</span>
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg">
              <p>
                Founded in {companyInfo.founded}, we've grown from a small startup to a leading digital agency, 
                helping businesses of all sizes transform their digital presence.
              </p>
              <p>
                Our team of passionate developers, designers, and strategists work together to deliver 
                exceptional results. We believe in the power of technology to solve real-world problems 
                and create meaningful experiences.
              </p>
              <p>
                {companyInfo.description}
              </p>
            </div>
          </div>

          <div
            ref={valuesRef}
            className={`grid grid-cols-2 gap-6 transition-all duration-700 ${
              valuesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card rounded-2xl p-6 card-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
