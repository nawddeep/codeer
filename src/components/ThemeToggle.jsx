/**
 * Theme Toggle Button
 * Animated sun/moon toggle with smooth transitions
 */

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-xl bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/50 
                 border border-slate-700/50 dark:border-slate-700/50 
                 flex items-center justify-center
                 hover:border-indigo-500/50 hover:bg-indigo-500/10
                 transition-all duration-300 group overflow-hidden"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        {/* Sun icon */}
        <Sun 
          className={`absolute inset-0 w-5 h-5 text-amber-400 transition-all duration-500 
            ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
        />
        {/* Moon icon */}
        <Moon 
          className={`absolute inset-0 w-5 h-5 text-indigo-400 transition-all duration-500
            ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
        />
      </div>
      
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
        ${isDark ? 'bg-indigo-500/10' : 'bg-amber-500/10'}`} 
      />
    </button>
  );
};

export default ThemeToggle;
