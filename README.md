# Personal Site 2027

> A modern, responsive personal portfolio website built with Vite, Bootstrap 5, and deployed to GitHub Pages.

## 🌐 Live Site

**[https://mariotristan.github.io/personal-site-2027/](https://mariotristan.github.io/personal-site-2027/)**

## ✨ Features

### Fully Responsive Design
- Mobile-first approach
- Optimized for desktop, tablet, and mobile devices
- Smooth animations and transitions

### Theme Support
- Dark theme (default)
- Light theme toggle
- Persistent theme preference using localStorage
- Inspired by jarvis-tristan style guide

### Key Sections
- **Hero Section** - Gradient background, SVG avatar, CTAs
- **About** - Professional bio, skills grid, career background
- **Certifications** - AWS, OpenAI, Scrum credentials with links
- **Contact** - Email CTA, social media links
- **Footer** - Social links and copyright

### Design Elements
- Gradient text effects
- Smooth CSS animations (fadeInUp, float, rotate)
- Hover state effects on all interactive elements
- Bootstrap 5 responsive grid
- Semi-transparent backgrounds with proper contrast
- Consistent color scheme throughout

### Performance
- Vite for fast builds
- Optimized bundle sizes
- HTTPS enabled by default
- CDN delivery via GitHub Pages
- Gzipped assets for fast loading

### Development Tools
- ESLint for code quality
- Prettier for code formatting
- GitHub Actions CI/CD
- Automated deployments on push

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/mariotristan/personal-site-2027.git
cd personal-site-2027

# Install dependencies
npm install
```

### Development

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 📁 Project Structure

```
personal-site-2027/
├── public/              # Static assets and HTML entry
│   └── index.html      # Main HTML file
├── src/
│   ├── main.js         # JavaScript entry point
│   └── style.css       # Global styles
├── docs/               # GitHub Pages output (generated)
├── .github/
│   └── workflows/
│       └── deploy.yml  # CI/CD pipeline
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── .eslintrc.js        # ESLint configuration
└── .prettierrc.json    # Prettier configuration
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/style.css`:
```css
:root {
  --primary-color: #3f51b5;
  --secondary-color: #f5b82e;
  --dark-bg: #1a0a0d;
  --light-bg: #ffffff;
}
```

### Content
Edit `public/index.html` to:
- Update hero section text
- Modify about section bio
- Change skill categories
- Update certification links
- Customize contact information

### Sections
Each section is self-contained and can be easily modified:
- Hero section: Lines with id="home"
- About section: Lines with id="about"
- Certifications: Lines with id="certifications"
- Contact: Lines with id="contact"

## 🔐 Security & Best Practices

- ✓ MIT License
- ✓ No hardcoded credentials
- ✓ Branch protection enabled
- ✓ HTTPS enabled by default
- ✓ Regular dependency updates via GitHub

## 📊 Performance

| Metric | Size |
|--------|------|
| HTML | 15.94 KB (4.27 KB gzip) |
| CSS | 237.80 KB (32.37 KB gzip) |
| JS | 80.31 KB (24.11 KB gzip) |
| **Total** | **~334 KB** (~61 KB gzip) |

## 🚀 Deployment

### GitHub Pages
The site auto-deploys to GitHub Pages on every push to `main` via GitHub Actions.

```
Deploy URL: https://mariotristan.github.io/personal-site-2027/
Source: /docs folder in main branch
```

### Manual Deployment
```bash
npm run build    # Generates /docs folder
git add docs/
git commit -m "deploy: Update site"
git push origin main
```

## 🔗 References

- **Quickstart Site**: https://mariotristan.github.io/quickstart/
- **Style Guide**: https://mariotristan.github.io/jarvis-tristan/
- **Vite Docs**: https://vitejs.dev/
- **Bootstrap Docs**: https://getbootstrap.com/docs/5.0/

## 📝 Issues & Backlog

View open issues: https://github.com/mariotristan/personal-site-2027/issues

### Completed
- ✅ Project Setup
- ✅ Navbar & Footer
- ✅ Hero Section
- ✅ About Section
- ✅ Certifications
- ✅ Contact Section

### Remaining
- #9 - Final Styling & Design Refinement
- #10 - Performance & SEO Optimization
- #11 - Production Verification

## 🤝 Contributing

All changes must go through Pull Requests:

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: description of changes"

# Push and create PR
git push -u origin feature/your-feature-name
```

Branch protection requires at least 1 review before merging.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

---

**Built with ❤️ using Vite, Bootstrap, and GitHub Pages**
