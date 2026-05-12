# 🚀 3D Developer Portfolio

A modern, interactive 3D developer portfolio website built with cutting-edge web technologies. This portfolio showcases projects, skills, experience, and provides an engaging way to connect with potential employers and collaborators.

**Live Demo:** [portfolio-ten-green-cfc13id4x9.vercel.app](https://portfolio-ten-green-cfc13id4x9.vercel.app)

---

## ✨ Features

- **3D Interactive Experience** - Immersive 3D graphics and animations using Three.js
- **Responsive Design** - Seamlessly adapts to all device sizes and screen orientations
- **Smooth Animations** - Elegant transitions and motion effects with Framer Motion
- **Modern UI Components** - Professional Material Design Bootstrap React UI Kit integration
- **Email Integration** - Direct contact form with EmailJS for instant communication
- **Interactive Timeline** - Visual representation of professional experience
- **Tilt Effects** - Interactive card hover effects with React Tilt
- **Dynamic Routing** - Multi-page navigation with React Router
- **Performance Optimized** - Built with Vite for lightning-fast development and production builds
- **Code Quality** - ESLint configured for consistent, high-quality code standards

---

## 🛠️ Tech Stack

### Frontend Framework & Rendering
- **React** (v18.2.0) - JavaScript library for building user interfaces
- **React DOM** (v18.2.0) - React package for working with the DOM
- **React Router DOM** (v6.20.1) - Client-side routing and navigation

### 3D Graphics & Animation
- **Three.js** (v0.158.0) - JavaScript 3D library for creating 3D graphics
- **React Three Fiber** (v8.15.11) - React renderer for Three.js
- **React Three Drei** (v9.88.13) - Useful helpers and abstractions for React Three Fiber
- **Maath** (v0.10.7) - Math utilities for 3D applications

### Animation & Effects
- **Framer Motion** (v10.16.16) - Modern animation library for React
- **React Tilt** (v1.0.2) - Parallax tilt effect component

### UI & Styling
- **Tailwind CSS** (v3.3.5) - Utility-first CSS framework for rapid UI development
- **MDB React UI Kit** (v8.0.0) - Material Design Bootstrap React components
- **ClassNames** (v2.5.1) - Utility for conditional className management
- **PostCSS** (v8.4.31) - Tool for transforming CSS with JavaScript plugins
- **Autoprefixer** (v10.4.16) - Automatically adds vendor prefixes to CSS

### Communication
- **EmailJS** (@emailjs/browser v4.4.1) - Send emails directly from the browser

### Development Tools
- **Vite** (v4.5.0) - Next generation frontend build tool
- **@vitejs/plugin-react** (v4.1.1) - Vite plugin for React
- **ESLint** (v8.53.0) - JavaScript code quality tool
- **ESLint Plugin React** (v7.33.2) - React-specific linting rules
- **ESLint Plugin React Hooks** (v4.6.0) - Linting rules for React Hooks
- **ESLint Plugin React Refresh** (v0.4.4) - ESLint plugin for React Refresh

### Language Composition
- **JavaScript** - 85.6% (Core application logic)
- **CSS** - 13.6% (Styling and animations)
- **HTML** - 0.8% (Markup)

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components (Navbar, Hero, About, etc.)
│   ├── App.jsx              # Main application component with routing
│   ├── main.jsx             # React DOM entry point
│   ├── styles.js            # Shared styling constants and Tailwind utilities
│   └── index.css            # Global styles and animations
├── public/                  # Static assets
├── dist/                    # Production build output
├── index.html               # HTML entry point
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── .gitignore              # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **pnpm** package manager

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Shreyas04venom/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
# or
pnpm install
```

### Development

3. **Start the development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (Vite default port)

### Production Build

4. **Build for production:**
```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.

5. **Preview the production build:**
```bash
npm run preview
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot module replacement |
| `npm run build` | Create optimized production build |
| `npm run lint` | Check code quality and consistency with ESLint |
| `npm run preview` | Preview the production build locally |

---

## 🔧 Configuration

### Vite
The project uses Vite for rapid development and optimized builds. Configure via `vite.config.js`.

### Tailwind CSS
Customize the design system, colors, and utilities in `tailwind.config.js`.

### ESLint
Code quality rules are configured in `.eslintrc` to maintain consistent code standards.

### EmailJS Setup
To enable the contact form functionality, you need to:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service and email template
3. Obtain your Service ID, Template ID, and Public Key
4. Add these credentials to your environment variables

For detailed setup instructions, see [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) and [QUICK_START_FIREBASE.md](./QUICK_START_FIREBASE.md).

---

## 📱 Responsive Design

This portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1280px and up)

---

## 🌟 Key Components

- **Navbar** - Navigation bar with smooth scrolling
- **Hero** - Eye-catching hero section with 3D background effects
- **About** - Personal introduction and overview
- **Experience** - Professional work experience with timeline visualization
- **Tech** - Technology stack and skills showcase
- **Works** - Portfolio projects and showcased work
- **Feedbacks** - Testimonials and client feedback carousel
- **Contact** - Contact form with email integration
- **StarsCanvas** - Animated 3D stars background effect

---

## 🎨 Design Features

- **Dark Theme** - Professional dark color scheme for modern aesthetic
- **3D Interactions** - Interactive 3D elements that respond to user input
- **Smooth Animations** - Page transitions and element animations
- **Interactive Cards** - Tilt effect on project and skill cards
- **Custom Fonts** - Beautiful typography for enhanced readability

---

## 📞 Contact Form

The contact form is powered by **EmailJS**, enabling visitors to send messages directly from the portfolio without a backend server.

**Features:**
- Form validation
- Real-time feedback
- Email notification to the portfolio owner
- Responsive design

---

## 🚀 Deployment

The portfolio is optimized for deployment on various platforms:

- **Vercel** - Recommended for seamless React/Vite deployment
- **Netlify** - Alternative serverless hosting
- **GitHub Pages** - Static site hosting
- **AWS, Google Cloud, Azure** - Enterprise hosting options

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

---

## 📄 Resume

A resume file is included in the repository for easy download and reference:
- **File:** `Deloitte_Resume.pdf`
- **Location:** Repository root

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome! Feel free to:
- Fork the repository
- Create a feature branch
- Submit a pull request
- Open an issue for bugs or feature requests

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- **Three.js Community** - For excellent 3D graphics library
- **React Community** - For powerful UI framework
- **Tailwind CSS** - For utility-first CSS framework
- **Vercel** - For hosting and deployment platform
- All contributors and supporters

---

## 📧 Get In Touch

Have questions or want to collaborate? Feel free to reach out through:

- **Portfolio Contact Form:** [Submit via portfolio](https://portfolio-ten-green-cfc13id4x9.vercel.app)
- **GitHub:** [@Shreyas04venom](https://github.com/Shreyas04venom)

---

**Made with ❤️ by Shreyas**

*Last Updated: May 2026*
