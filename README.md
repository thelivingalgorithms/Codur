# 🚀 Codur - Code Understanding Made Simple

_"Less time stuck, more time shipping."_

A modern, interactive landing page for **Codur** — the AI-powered developer tool that transforms complex codebases into clear, understandable insights.  
_Built with Next.js, TypeScript, and cutting-edge web technologies._

![Codur Banner](https://img.shields.io/badge/Codur-Developer%20Tool-green?style=for-the-badge)

---

## ✨ Features

- **🌙 Dark Mode Support**
  - System preference detection
  - Smooth theme transitions
  - Persistent theme storage
  - Beautiful dark/light mode toggle

- **🎨 Interactive UI Components**
  - Smooth animations (Framer Motion)
  - Animated counters on scroll
  - Engaging loading states
  - Subtle hover micro-interactions
  - Responsive, mobile-first design

- **📱 Complete Landing Page Sections**
  - Hero with typing animation & graphics
  - Trusted By: Interactive developer personas
  - Comparison: Old way vs Codur way
  - Features: Visualize & Explain, Search & Navigate, History & Trace
  - Testimonials with ratings
  - Call to Action: Email signup
  - Aurora footer with links

- **🎯 Developer Experience**
  - Zero external dependencies (custom SVGs)
  - Single file architecture
  - TypeScript for type safety
  - Performance optimized

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** Radix UI primitives
- **Font:** Google Fonts (Poppins)

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.17.0
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/your-username/codur-website.git
cd codur-website
npm install # or yarn install / pnpm install
```

### Run the development server

```bash
npm run dev # or yarn dev / pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
codur-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles with dark mode
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main landing page
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   └── icons.tsx            # Custom icon components
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── next.config.mjs              # Next.js configuration
└── package.json                 # Dependencies
```

---

## 🎨 Key Components

- **InteractiveCounter** — Animated counters with intersection observer
- **LoadingButton** — Buttons with loading states and animations
- **ScrollToTopButton** — Smooth scroll-to-top
- **ThemeProvider** — Dark/light mode context

**Custom SVG Mockups:**

- CodeSnippetMockup
- SearchInterfaceMockup
- NavigationFlowMockup
- ChatBubble

**Sections:**

- Hero, TrustedBy, Comparison, Features, Testimonials, CTA, Footer

---

## 🎯 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run format   # Format with Prettier
```

---

## 🎨 Customization

- **Colors:** Green accent (`#90ee90`), full dark mode support  
   Edit in `globals.css` and `tailwind.config.ts`
- **Typography:** Poppins (Google Fonts), set in `globals.css`
- **Animations:** Framer Motion & custom CSS, configurable delays/durations

---

## 🚀 Deployment

- **Vercel (Recommended):**
  ```bash
  npm install -g vercel
  vercel --prod
  ```
- **Other:** Netlify, Railway, Docker (Dockerfile included)

---

## 📊 Performance

- ⚡ Fast loading, optimized bundle
- 🎨 60fps animations (Framer Motion)
- 📱 Mobile-first responsive
- 🚀 SEO ready (meta tags, semantic HTML)

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

MIT License — see the [LICENSE](LICENSE) file.

---

## 👥 Authors

- **Ajay D** — Co-founder — [@ajay](#)
- **Tharun S** — Co-founder — [@tharun](#)

---

## 🙏 Acknowledgments

- Next.js Team
- Tailwind CSS
- Framer Motion
- Vercel

---

## 📞 Support

- **Website:** [codur.dev](https://codur.dev)
- **Email:** hello@codur.dev
- **Twitter:** [@codur_dev](https://twitter.com/codur_dev)

---

<div align="center">
    <p>Made with ❤️ by the Codur team</p>
    <p><strong>"Less time stuck, more time shipping."</strong></p>
</div>
