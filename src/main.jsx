/**
 * Codeer - Entry Point
 * Wraps app with providers for theme, SEO, and error handling
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
)
