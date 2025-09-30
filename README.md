# Purablis - Medicinal Alternatives Newsletter

A modern React website for Purablis, a weekly newsletter focused on medicinal alternatives, cannabis, CBD, and global investment opportunities.

## 🚀 Features

- **Modern React Architecture** with Vite build tool
- **Responsive Design** with mobile-first approach
- **Multi-page Navigation** with React Router
- **Purple Brand Theme** with consistent styling
- **Interactive Components** including news filters and contact forms
- **Hero Illustration** with custom megaphone design

## 📱 Pages

- **Home** - Hero section with newsletter introduction and subscribe button
- **News** - Weekly news roundup with filtering by THC, CBD, and Global Investor categories
- **About** - Information about Purablis mission and team
- **Contact** - Contact form for inquiries and feedback

## 🛠 Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Emotion** - CSS-in-JS styling
- **React Router** - Client-side routing
- **Framer Motion** - Animation library (available for future use)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary Purple**: `#8B5CF6`
- **Dark Purple**: `#7C3AED`
- **Text Primary**: `#191A23`
- **Background**: `#FFFFFF`

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter

### Logo
- **Purple lotus icon** with "Purablis" text
- **Size**: 80x80px icon, 48px text

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── Logo.jsx
│   │   └── ...
│   ├── layout/           # Layout components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   └── ...
│   └── pages/            # Page components
│       ├── News.jsx
│       ├── About.jsx
│       └── Contact.jsx
├── styles/
│   ├── GlobalStyles.jsx  # Global styles
│   └── theme.js          # Design tokens
├── App.jsx               # Main app component
└── main.jsx              # App entry point
```

## 🌟 Features Details

### News Page
- Filter by newsletter type (THC, CBD, Global Investor)
- Search functionality
- Responsive grid layout
- Color-coded categories

### Contact Form
- Form validation
- Success feedback
- Subject categories
- Responsive design

### Navigation
- React Router integration
- Mobile-responsive hamburger menu
- Logo links to home page

## 🚢 Deployment

To build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📄 License

This project is private and proprietary to Purablis.