import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categories = ['All', 'Web', 'Mobile', 'Design'];

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl glass-card card-hover transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="text-indigo-400 text-sm font-medium mb-2">{project.category}</span>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 text-xs rounded-full bg-white/10 text-white">
              {tech}
            </span>
          ))}
        </div>
        
        <button className="inline-flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-indigo-400">
          View Case Study
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, isVisible] = useScrollAnimation();

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-950/30 to-slate-900" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-indigo-400 font-medium mb-4 block">Our Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore our portfolio of successful projects that have helped businesses achieve their goals.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                  : 'glass-card text-slate-300 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
