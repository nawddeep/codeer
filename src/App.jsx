/**
 * InnovateTech Solutions - Main Application
 * A modern, professional digital agency website
 * Built with React 18, Tailwind CSS, and Lucide React
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Technologies from './components/Technologies';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Loading Screen Component
 * Displays animated logo and loading dots for 1.5 seconds
 */
const LoadingScreen = () => (
  <div 
    className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50"
    role="status"
    aria-label="Loading website"
  >
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center animate-pulse">
        <span className="text-2xl font-bold text-white">I</span>
      </div>
      <div className="flex gap-1 justify-center" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

/**
 * Main App Component
 * Orchestrates all sections and handles initial loading state
 */
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load time for smooth entrance
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Skip link for keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Navbar />
      
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <Testimonials />
        <Technologies />
        <CTA />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
