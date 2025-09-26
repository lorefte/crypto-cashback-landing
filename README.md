# CryptoCashback Landing Page

A sleek, modern landing page for a crypto cashback shopping extension. Built with React, Tailwind CSS, and Framer Motion for smooth animations.

## Features

- **Modern Design**: Clean, professional design following the provided design system
- **Crypto-Focused**: Emphasizes cryptocurrency rewards and built-in wallet functionality
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations and hover effects using Framer Motion
- **Trust Signals**: Social proof, testimonials, and security certifications
- **Call-to-Actions**: Clear CTAs for extension download and waitlist signup

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Hero section with main CTA
│   ├── HowItWorks.jsx      # 3-step process explanation
│   ├── Features.jsx        # Feature highlights
│   ├── TrustSignals.jsx    # Testimonials and social proof
│   └── Footer.jsx          # Footer with links and final CTA
├── App.jsx                 # Main app component
├── main.jsx               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## Design System

The landing page follows the comprehensive design system defined in `design_system_json.json`:

- **Colors**: Primary (indigo), Secondary (emerald), Accent (amber) with crypto-specific colors
- **Typography**: Poppins for headings, Inter for body text
- **Spacing**: Consistent spacing scale and container widths
- **Components**: Reusable button, card, and input styles
- **Animations**: Smooth transitions and hover effects

## Key Sections

1. **Hero Section**: Main value proposition with crypto rewards focus
2. **How It Works**: 3-step process with visual demonstrations
3. **Features**: Detailed feature explanations with security emphasis
4. **Trust Signals**: User testimonials, store partnerships, and certifications
5. **Footer**: Final CTA and comprehensive link structure

## Customization

The design system is easily customizable through the Tailwind config and component props. Key areas for customization:

- Colors in `tailwind.config.js`
- Content in component files
- Animations in Framer Motion components
- Layout spacing and typography

## Browser Support

- Chrome (recommended for extension)
- Firefox
- Safari
- Edge

## License

This project is for demonstration purposes. Please ensure you have proper licensing for any commercial use.
