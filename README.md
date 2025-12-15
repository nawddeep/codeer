# InnovateTech Solutions

A modern, professional full-service digital agency website built with React, Tailwind CSS, and Lucide React.

## Features

- 🎨 Modern dark theme with glassmorphism effects
- ✨ Smooth CSS animations (no external libraries)
- 📱 Fully responsive (mobile-first approach)
- ♿ Accessible (ARIA labels, keyboard navigation, skip links)
- ⚡ Optimized performance with lazy loading
- 🎯 Intersection Observer for scroll animations

## Tech Stack

- React 18.3+ with Vite
- Tailwind CSS
- Lucide React icons
- Pure CSS animations

## Sections

1. Navigation Bar (sticky with blur effect)
2. Hero Section (typing animation, floating elements)
3. Services (6 service cards with hover effects)
4. About (company story, values, animated counters)
5. Portfolio (filterable project gallery)
6. Process (vertical timeline)
7. Testimonials (auto-rotating carousel)
8. Technologies (categorized tech stack)
9. Call-to-Action
10. Contact (form with validation)
11. Footer

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   ├── Portfolio.jsx
│   ├── Process.jsx
│   ├── Testimonials.jsx
│   ├── Technologies.jsx
│   ├── CTA.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   └── useScrollAnimation.js
├── data/
│   └── index.js
├── App.jsx
├── main.jsx
└── index.css
```

## License

MIT
