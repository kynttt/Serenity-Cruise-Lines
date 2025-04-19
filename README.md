# Serenity Cruise Lines

A modern, responsive web application for Serenity Cruise Lines, built with Vue 3 and Tailwind CSS. This project showcases luxury cruise experiences with a focus on user experience and visual appeal.

## 🚀 Features

- Responsive design for all screen sizes
- Dynamic navigation with scroll-aware behavior
- Modern UI components with smooth transitions
- Route-based styling and theming
- Mobile-first approach

## 🛠️ Tech Stack

- Vue 3
- TypeScript
- Tailwind CSS
- Vue Router
- Lucide Icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v7 or higher)

## 🚀 Getting Started

1. Clone the repository
```bash
git clone [your-repository-url]
cd serenity-cruise-lines
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📁 Project Structure

```
serenity-cruise-lines/
├── src/
│   ├── assets/          # Static assets (images, fonts)
│   ├── components/      # Vue components
│   │   ├── about/      # About page components
│   │   ├── cruise/     # Cruise page components
│   │       
│   ├── router/         # Vue Router configuration
│   ├── styles/         # Global styles and Tailwind config
│   └── views/          # Page components
├── public/             # Public static files
└── package.json        # Project dependencies and scripts
```

## 🗺️ Available Routes


### About Page (`/about`)
- Company information
- Mission and vision
- Team section
- Company values

### Cruise Page (`/cruise`)
- Cruise categories
- Adventure cruises
- Featured experiences
- Inclusive packages

## 🎨 Design System

The project uses a consistent design system with:

### Colors
- Primary: `#062E4B`
- Secondary: `#404040`
- White: `#FFFFFF`
- txtPrimary-color': `#0A0A0A`

### Typography
- Headings: Cormorant Garamond
- Body: Switzer

### Spacing
- Consistent spacing scale using Tailwind's spacing utilities
- Responsive padding and margins for different screen sizes

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development Guidelines

1. Component Naming
   - Use PascalCase for component names
   - Prefix shared components with 'Base'
   - Use descriptive names that reflect component purpose

2. Styling
   - Use Tailwind CSS classes
   - Follow mobile-first approach
   - Maintain consistent spacing using Tailwind's spacing scale

3. TypeScript
   - Use TypeScript for type safety
   - Define interfaces for component props
   - Use type inference where possible

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- All contributors who have helped shape this project
