# Muhd Salihin - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel

## Features

- ⚡ Fast and optimized with Next.js App Router
- 🎨 Beautiful UI with Tailwind CSS
- 📱 Fully responsive design
- 🌙 Dark mode support
- ♿ Accessible components
- 🚀 Ready for deployment on Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/muhdsalihin-portfolio.git
cd muhdsalihin-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

The easiest way to deploy this portfolio is using Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will auto-detect Next.js and configure the build settings
4. Click "Deploy"

Your portfolio will be live in minutes!

### Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/muhdsalihin-portfolio)

## Customization

### Update Personal Information

1. Edit components in `/components` directory:
   - `Hero.tsx` - Your name and introduction
   - `About.tsx` - About section content
   - `Skills.tsx` - Your technical skills
   - `Projects.tsx` - Your project showcase
   - `Contact.tsx` - Contact links and email

2. Update metadata in `app/layout.tsx`

3. Replace placeholder links with your actual social media profiles

## Project Structure

```
muhdsalihin-portfolio/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Projects.tsx     # Projects section
│   └── Contact.tsx      # Contact section
└── public/              # Static assets
```

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)
