import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categories = ['All', 'Web', 'Mobile', 'Design'];

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-zinc-100 dark:bg-zinc-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-2">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="px-2 py-1 text-xs rounded bg-white/20 text-white backdrop-blur-sm">
                {tech}
              </span>
            ))}
          </div>
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
      </div>
      
      {/* Info */}
      <span className="text-xs font-medium text-violet-600 dark:text-violet-400 uppercase tracking-wide">{project.category}</span>
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-zinc-500 mt-1 line-clamp-2">{project.description}</p>
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
    <section id="portfolio" className="py-24 bg-zinc-50/50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <p className="text-violet-600 dark:text-violet-400 font-medium mb-3 text-sm tracking-wide uppercase">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              Selected work
            </h2>
          </div>
          
          {/* Filter tabs */}
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
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
