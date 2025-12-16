/**
 * 404 Not Found Page
 * Displayed when users navigate to non-existent routes
 */

import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <span className="text-8xl font-bold gradient-text">404</span>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-3">
          Page Not Found
        </h1>
        
        <p className="text-slate-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Home className="w-5 h-5" />
            Go Home
          </a>
          
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-slate-600 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
