"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Logo,
  CentralIcon,
  GreenIcon,
  YellowIcon,
  PinkIcon,
  BlueIcon,
  ProfessionalAvatar,
} from "@/components/icons";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Search,
  Clock,
  Sparkles,
  Heart,
} from "lucide-react";


const MotionSvg = motion.svg;

const CodeSnippetMockup = () => (
  <MotionSvg
    viewBox="0 0 320 180"
    className="h-auto w-full"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <defs>
      <linearGradient id="editorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#0a0a0a" />
      </linearGradient>
    </defs>
    <rect width="320" height="180" rx="8" fill="url(#editorGradient)" />
    <rect width="320" height="28" rx="8" fill="#2d2d2d" />
    <circle cx="12" cy="14" r="3" fill="#ff5f57">
      <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="24" cy="14" r="3" fill="#ffbd2e">
      <animate attributeName="opacity" values="1;0.6;1" dur="2s" begin="0.2s" repeatCount="indefinite" />
    </circle>
    <circle cx="36" cy="14" r="3" fill="#28ca42">
      <animate attributeName="opacity" values="1;0.6;1" dur="2s" begin="0.4s" repeatCount="indefinite" />
    </circle>
    <text x="50" y="18" className="code-comment code-editor-text">
      src/components/Sidebar.tsx
    </text>
    <text x="12" y="45" className="code-keyword code-editor-text">
      import
    </text>
    <text x="50" y="45" className="code-import code-editor-text">
      React
    </text>
    <text x="80" y="45" className="code-keyword code-editor-text">
      from
    </text>
    <text x="110" y="45" className="code-string code-editor-text">
      &apos;react&apos;
    </text>
    <text x="12" y="65" className="code-keyword code-editor-text">
      const
    </text>
    <text x="45" y="65" className="code-function code-editor-text">
      Sidebar
    </text>
    <text x="85" y="65" className="code-normal code-editor-text">
      =
    </text>
    <text x="95" y="65" className="code-normal code-editor-text">
      () =&gt;
    </text>
    <text x="130" y="65" className="code-normal code-editor-text">
      &#123;
    </text>
    <text x="24" y="85" className="code-keyword code-editor-text">
      return
    </text>
    <text x="70" y="85" className="code-normal code-editor-text">
      &#40;
    </text>
    <text x="36" y="105" className="code-import code-editor-text">
      &lt;div
    </text>
    <text x="65" y="105" className="code-string code-editor-text">
      className
    </text>
    <text x="110" y="105" className="code-normal code-editor-text">
      =
    </text>
    <text x="118" y="105" className="code-string code-editor-text">
      &quot;sidebar&quot;
    </text>
    <text x="165" y="105" className="code-import code-editor-text">
      &gt;
    </text>
    <text x="48" y="125" className="code-normal code-editor-text">
      Navigation Menu
    </text>
    <text x="36" y="145" className="code-import code-editor-text">
      &lt;/div&gt;
    </text>
    <text x="24" y="165" className="code-normal code-editor-text">
      &#41;;
    </text>
  </MotionSvg>
);

const SearchInterfaceMockup = () => (
  <svg viewBox="0 0 360 240" className="h-auto w-full">
    <rect
      width="360"
      height="240"
      rx="12"
      fill="white"
      stroke="#e5e7eb"
      strokeWidth="2"
    />
    <rect width="360" height="50" rx="12" fill="#f8fafc" />
    <circle cx="30" cy="25" r="8" fill="#6b7280" />
    <path d="M26 21 L34 29 M34 21 L26 29" stroke="white" strokeWidth="2" />
    <text
      x="50"
      y="30"
      className="code-editor-text font-poppins"
      fill="#6b7280"
    >
      Search files, functions, components...
    </text>
    <rect
      x="20"
      y="70"
      width="320"
      height="35"
      rx="6"
      fill="#dbeafe"
      opacity="0.5"
    />
    <text
      x="30"
      y="85"
      className="code-editor-text font-poppins font-semibold"
      fill="#1e40af"
    >
      calculateTotal
    </text>
    <text
      x="30"
      y="98"
      className="code-editor-text font-poppins"
      fill="#6b7280"
      fontSize="10"
    >
      src/utils/math.ts • Used in 3 files
    </text>
    <rect x="20" y="115" width="320" height="35" rx="6" fill="#f3f4f6" />
    <text
      x="30"
      y="130"
      className="code-editor-text font-poppins font-semibold"
      fill="#374151"
    >
      UserProfile
    </text>
    <text
      x="30"
      y="143"
      className="code-editor-text font-poppins"
      fill="#6b7280"
      fontSize="10"
    >
      src/components/User/Profile.tsx
    </text>
    <rect x="20" y="160" width="320" height="35" rx="6" fill="#f3f4f6" />
    <text
      x="30"
      y="175"
      className="code-editor-text font-poppins font-semibold"
      fill="#374151"
    >
      validateEmail
    </text>
    <text
      x="30"
      y="188"
      className="code-editor-text font-poppins"
      fill="#6b7280"
      fontSize="10"
    >
      src/utils/validation.ts • Used in 5 files
    </text>
    <circle cx="320" cy="60" r="20" fill="#3b82f6" opacity="0.1" />
  </svg>
);

const NavigationFlowMockup = () => (
  <svg viewBox="0 0 280 160" className="h-auto w-full">
    <rect
      width="280"
      height="160"
      rx="12"
      fill="white"
      stroke="#e5e7eb"
      strokeWidth="1"
    />
    <rect x="20" y="20" width="120" height="50" rx="8" fill="#fef3c7" />
    <text
      x="30"
      y="35"
      className="code-editor-text font-poppins font-semibold"
      fill="#92400e"
      fontSize="11"
    >
      calculateTotal()
    </text>
    <text
      x="30"
      y="48"
      className="code-editor-text font-poppins"
      fill="#b45309"
      fontSize="9"
    >
      math.ts:15
    </text>
    <text
      x="30"
      y="58"
      className="code-editor-text font-poppins"
      fill="#b45309"
      fontSize="9"
    >
      3 usages
    </text>
    <path
      d="M150 45 L180 45"
      stroke="#6b7280"
      strokeWidth="2"
      markerEnd="url(#arrowhead)"
    />
    <rect x="190" y="15" width="80" height="25" rx="4" fill="#dcfce7" />
    <text
      x="200"
      y="30"
      className="code-editor-text font-poppins"
      fill="#166534"
      fontSize="9"
    >
      CartPage.tsx:42
    </text>
    <rect x="190" y="45" width="80" height="25" rx="4" fill="#dcfce7" />
    <text
      x="200"
      y="60"
      className="code-editor-text font-poppins"
      fill="#166534"
      fontSize="9"
    >
      OrderSummary.tsx:28
    </text>
    <rect x="190" y="75" width="80" height="25" rx="4" fill="#dcfce7" />
    <text
      x="200"
      y="90"
      className="code-editor-text font-poppins"
      fill="#166534"
      fontSize="9"
    >
      CheckoutForm.tsx:89
    </text>
    <rect x="20" y="120" width="240" height="25" rx="6" fill="#f1f5f9" />
    <text
      x="30"
      y="135"
      className="code-editor-text font-poppins"
      fill="#475569"
      fontSize="10"
    >
      ⌘ + Click to jump to definition
    </text>
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="0"
        refY="3.5"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
      </marker>
    </defs>
  </svg>
);

const JumpToDefinitionMockup = () => (
  <svg viewBox="0 0 250 80" className="h-auto w-full">
    <rect
      width="250"
      height="80"
      rx="12"
      fill="white"
      stroke="#e5e7eb"
      strokeWidth="1"
    />
    <circle cx="24" cy="40" r="16" fill="#90ee90" />
    <circle cx="24" cy="35" r="6" fill="white" />
    <path
      d="M14 50c0-5.523 4.477-10 10-10s10 4.477 10 10v6H14v-6z"
      fill="white"
    />
    <text
      x="52"
      y="30"
      className="code-editor-text font-poppins font-semibold"
      fill="#374151"
      fontSize="12"
    >
      Function: calculateTotal
    </text>
    <text
      x="52"
      y="45"
      className="code-editor-text font-poppins"
      fill="#6b7280"
      fontSize="10"
    >
      Defined in: src/utils/math.ts:15
    </text>
    <text
      x="52"
      y="58"
      className="code-editor-text font-poppins"
      fill="#6b7280"
      fontSize="10"
    >
      Jump to definition →
    </text>
    <path
      d="M210 35 L225 40 L210 45"
      stroke="#6b7280"
      strokeWidth="2"
      fill="#6b7280"
    />
  </svg>
);

const AIInsightsMockup = () => (
  <svg viewBox="0 0 300 200" className="h-auto w-full">
    <rect
      width="300"
      height="200"
      rx="12"
      fill="#fdf4ff"
      stroke="#e879f9"
      strokeWidth="1"
    />
    <rect width="300" height="40" rx="12" fill="#f3e8ff" />
    <text
      x="20"
      y="25"
      className="code-editor-text font-poppins font-semibold"
      fill="#7c2d92"
      fontSize="14"
    >
      🤖 AI Insights
    </text>
    <text
      x="20"
      y="60"
      className="code-editor-text font-poppins font-semibold"
      fill="#6b7280"
      fontSize="11"
    >
      Strength Signals
    </text>
    <rect
      x="20"
      y="70"
      width="200"
      height="8"
      rx="4"
      fill="#e879f9"
      opacity="0.6"
    />
    <rect
      x="20"
      y="85"
      width="240"
      height="8"
      rx="4"
      fill="#e879f9"
      opacity="0.6"
    />
    <rect
      x="20"
      y="100"
      width="180"
      height="8"
      rx="4"
      fill="#e879f9"
      opacity="0.6"
    />
    <text
      x="20"
      y="130"
      className="code-editor-text font-poppins font-semibold"
      fill="#6b7280"
      fontSize="11"
    >
      Weakness Signals
    </text>
    <rect x="20" y="140" width="160" height="8" rx="4" fill="#f3e8ff" />
    <rect x="20" y="155" width="140" height="8" rx="4" fill="#f3e8ff" />
    <circle cx="260" cy="25" r="15" fill="#7c3aed" />
    <text
      x="260"
      y="30"
      textAnchor="middle"
      fill="white"
      className="code-editor-text font-poppins font-bold"
      fontSize="12"
    >
      AI
    </text>
    <circle cx="250" cy="120" r="25" fill="#e879f9" opacity="0.1" />
    <circle cx="50" cy="170" r="15" fill="#7c3aed" opacity="0.1" />
  </svg>
);

const QueryHistoryMockup = () => (
  <svg viewBox="0 0 250 120" className="h-auto w-full">
    <rect
      width="250"
      height="120"
      rx="12"
      fill="white"
      stroke="#e5e7eb"
      strokeWidth="1"
    />
    <text
      x="20"
      y="25"
      className="code-editor-text font-poppins font-semibold"
      fill="#374151"
      fontSize="12"
    >
      Query History
    </text>
    <rect x="20" y="40" width="60" height="24" rx="12" fill="#dbeafe" />
    <text
      x="50"
      y="55"
      textAnchor="middle"
      className="code-editor-text font-poppins font-medium"
      fill="#1e40af"
      fontSize="10"
    >
      React
    </text>
    <rect x="90" y="40" width="70" height="24" rx="12" fill="#f3f4f6" />
    <text
      x="125"
      y="55"
      textAnchor="middle"
      className="code-editor-text font-poppins font-medium"
      fill="#374151"
      fontSize="10"
    >
      Next.js
    </text>
    <rect x="170" y="40" width="60" height="24" rx="12" fill="#fef3c7" />
    <text
      x="200"
      y="55"
      textAnchor="middle"
      className="code-editor-text font-poppins font-medium"
      fill="#92400e"
      fontSize="10"
    >
      TypeScript
    </text>
    <rect x="20" y="75" width="50" height="24" rx="12" fill="#dcfce7" />
    <text
      x="45"
      y="90"
      textAnchor="middle"
      className="code-editor-text font-poppins font-medium"
      fill="#166534"
      fontSize="10"
    >
      hooks
    </text>
    <rect x="80" y="75" width="80" height="24" rx="12" fill="#fce7f3" />
    <text
      x="120"
      y="90"
      textAnchor="middle"
      className="code-editor-text font-poppins font-medium"
      fill="#be185d"
      fontSize="10"
    >
      components
    </text>
  </svg>
);

const TeamActivityMockup = () => (
  <svg viewBox="0 0 280 80" className="h-auto w-full">
    <rect
      width="280"
      height="80"
      rx="12"
      fill="white"
      stroke="#e5e7eb"
      strokeWidth="1"
    />
    <text
      x="20"
      y="25"
      className="code-editor-text font-poppins font-semibold"
      fill="#374151"
      fontSize="12"
    >
      Team Activity
    </text>
    <g>
      <circle cx="200" cy="40" r="16" fill="#3b82f6" />
      <circle cx="200" cy="35" r="6" fill="white" />
      <path
        d="M190 50c0-5.523 4.477-10 10-10s10 4.477 10 10v6h-20v-6z"
        fill="white"
      />
      <circle cx="225" cy="40" r="16" fill="#10b981" />
      <circle cx="225" cy="35" r="6" fill="white" />
      <path
        d="M215 50c0-5.523 4.477-10 10-10s10 4.477 10 10v6h-20v-6z"
        fill="white"
      />
      <circle cx="250" cy="40" r="16" fill="#f59e0b" />
      <circle cx="250" cy="35" r="6" fill="white" />
      <path
        d="M240 50c0-5.523 4.477-10 10-10s10 4.477 10 10v6h-20v-6z"
        fill="white"
      />
    </g>
    <circle cx="175" cy="40" r="4" fill="#10b981" />
    <text
      x="20"
      y="45"
      className="code-editor-text font-poppins"
      fill="#6b7280"
      fontSize="10"
    >
      3 team members active
    </text>
    <circle cx="25" cy="58" r="6" fill="#6b7280" />
    <path d="M22 55 L28 61 M28 55 L22 61" stroke="white" strokeWidth="1" />
    <text
      x="40"
      y="63"
      className="code-editor-text font-poppins"
      fill="#9ca3af"
      fontSize="9"
    >
      Last updated: 2 min ago
    </text>
  </svg>
);

const ChatBubble = ({
  message,
  isUser,
  className,
}: {
  message: string;
  isUser: boolean;
  className?: string;
}) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.02 }}
    className={`max-w-xs rounded-2xl p-4 shadow-2xl backdrop-blur-sm transition-all duration-300 ${isUser ? "ml-auto bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-200" : "bg-white/90 text-gray-800 shadow-gray-300/50 ring-1 ring-gray-200/50"} ${className || ""}`}
  >
    <p className="font-poppins text-sm leading-relaxed">{message}</p>
  </motion.div>
);

const FeatureMockup = () => (
  <MotionSvg
    viewBox="0 0 280 80"
    className="h-auto w-full"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <defs>
      <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f9fafb" />
      </linearGradient>
      <filter id="cardShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="0" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect
      width="280"
      height="80"
      rx="12"
      fill="url(#cardGradient)"
      stroke="#e5e7eb"
      strokeWidth="1"
      filter="url(#cardShadow)"
    />
    <circle cx="24" cy="40" r="16" fill="#90ee90">
      <animate attributeName="r" values="16;17;16" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="24" cy="35" r="6" fill="white" />
    <path
      d="M14 50c0-5.523 4.477-10 10-10s10 4.477 10 10v6H14v-6z"
      fill="white"
    />
    <rect x="52" y="20" width="140" height="8" rx="4" fill="#e5e7eb" />
    <rect x="52" y="35" width="100" height="6" rx="3" fill="#d1d5db" />
    <rect x="52" y="48" width="80" height="6" rx="3" fill="#d1d5db" />
    <rect x="220" y="30" width="40" height="20" rx="10" fill="#90ee90" />
    <text
      x="240"
      y="42"
      textAnchor="middle"
      fill="#000"
      className="code-editor-text font-poppins font-semibold"
    >
      View
    </text>
  </MotionSvg>
);


function Header() {
  const navItems = ["Platform", "Use Cases", "About", "Pricing"];
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100/50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Logo className="h-7 w-7 text-black" />
            <span className="font-poppins text-2xl font-bold text-black">
              Codur
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="group flex items-center gap-1 font-poppins text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-black"
              >
                {item}
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </a>
            ))}
          </nav>
        </div>
        <div>
          <Button className="button-primary font-poppins font-semibold">
            Get A Demo
          </Button>
        </div>
      </div>
    </header>
  );
}


function AnimatedHeroGraphic() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <motion.div
      className="relative flex h-full min-h-[400px] w-full items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute left-1/2 top-1/2 h-[1px] w-32 -translate-x-[160px] -translate-y-1/2 border-t border-dashed border-gray-400"></div>
      <div className="absolute left-1/2 top-1/2 h-[1px] w-32 -translate-x-[-32px] -translate-y-1/2 border-t border-dashed border-gray-400"></div>
      <div className="absolute left-1/2 top-1/2 h-32 w-[1px] -translate-x-1/2 -translate-y-[160px] border-l border-dashed border-gray-400"></div>
      <div className="absolute left-1/2 top-1/2 h-32 w-[1px] -translate-x-1/2 -translate-y-[-32px] border-l border-dashed border-gray-400"></div>

      <motion.div
        variants={itemVariants}
        className="floating-animation absolute z-10"
      >
        <CentralIcon className="h-20 w-20 drop-shadow-lg" />
      </motion.div>
      <motion.div variants={itemVariants} className="absolute -translate-y-32">
        <PinkIcon className="h-10 w-10 drop-shadow-md" />
      </motion.div>
      <motion.div variants={itemVariants} className="absolute translate-y-32">
        <BlueIcon className="h-10 w-10 drop-shadow-md" />
      </motion.div>
      <motion.div variants={itemVariants} className="absolute -translate-x-32">
        <GreenIcon className="h-10 w-10 drop-shadow-md" />
      </motion.div>
      <motion.div variants={itemVariants} className="absolute translate-x-32">
        <YellowIcon className="h-10 w-10 drop-shadow-md" />
      </motion.div>
    </motion.div>
  );
}


function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center pt-20">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-poppins text-5xl font-extrabold leading-tight tracking-tight text-black md:text-7xl">
            &ldquo;Less time stuck, more time shipping.&rdquo;
          </h1>
          <p className="max-w-xl font-poppins text-lg leading-relaxed text-gray-600">
            From repo-wide overviews to line-by-line clarity, Codur gives you
            the context you need to move faster in the era of AI-generated and
            legacy code.
          </p>
          <div className="mt-2">
            <Button
              size="lg"
              className="button-secondary font-poppins font-semibold"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -m-8 rounded-2xl border border-gray-200/50" />
          <div className="absolute inset-0 -m-16 rounded-2xl border border-gray-200/30" />
          <AnimatedHeroGraphic />
        </div>
      </div>
    </section>
  );
}





function ComparisonSection() {
  const oldWay = [
    "Re-reading the same confusing functions over and over",
    "Ignoring context hidden deep in the repo",
    "Missing connections between components and dependencies",
    "Onboarding with slow, manual code walkthroughs",
    "Letting unclear AI-generated or legacy code slow teams down",
  ];

  const newWay = [
    "Instant explanations for any code snippet",
    "Repo-wide understanding with visual maps",
    "Clear connections between functions, imports, and components",
    "Faster onboarding with automated project overviews",
    "AI that makes codebases transparent, not more cluttered",
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:gap-8">
        <motion.div
          className="hover-lift rounded-xl border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-2 font-poppins text-xl font-bold text-gray-900">
            The old way
          </h3>
          <ul className="mt-6 space-y-4">
            {oldWay.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                <span className="font-poppins leading-relaxed text-gray-600">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="hover-lift rounded-xl border-2 border-green-400 bg-white p-8 shadow-md transition-shadow duration-300 hover:shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="mb-2 font-poppins text-xl font-bold text-gray-900">
            The Codur way
          </h3>
          <ul className="mt-6 space-y-4">
            {newWay.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="font-poppins font-medium leading-relaxed text-gray-800">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}


function VisualizeExplainSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-gray-50 to-white py-24 sm:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 lg:grid-cols-2">
        <motion.div
          className="order-2 flex flex-col gap-6 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <h3 className="font-poppins text-sm font-bold uppercase tracking-wider text-blue-600">
              Visualize & Explain
            </h3>
          </div>

          <h2 className="font-poppins text-4xl font-bold leading-tight text-black md:text-5xl">
            &ldquo;Put your entire codebase in front of your eyes and
            mind.&rdquo;
          </h2>

          <p className="max-w-xl font-poppins text-lg leading-relaxed text-gray-600">
            Codur transforms complex repositories into clear visuals and
            explanations, making onboarding faster, debugging easier, and
            collaboration seamless.
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 opacity-75 blur"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Button
                size="lg"
                className="relative button-primary hover-lift font-poppins font-semibold"
              >
                Try Visualization
              </Button>
            </motion.div>

            <a
              href="#"
              className="group inline-flex items-center gap-2 px-6 py-3 font-poppins font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              Watch Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative order-1 h-[500px] w-full lg:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, rotate: -2 },
              visible: { opacity: 1, y: 0, rotate: 0 },
            }}
            whileHover={{ rotate: 1, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0 w-[85%] overflow-hidden rounded-lg border border-gray-300/50 shadow-2xl backdrop-blur-sm ring-1 ring-black/5"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            }}
          >
            <CodeSnippetMockup />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, x: 20 },
              visible: { opacity: 1, scale: 1, x: 0 },
            }}
            className="absolute right-0 top-[20%] z-10"
          >
            <ChatBubble
              message="Hi there! I see you're working on the Sidebar component. Need help understanding the structure?"
              isUser={false}
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, x: -20 },
              visible: { opacity: 1, scale: 1, x: 0 },
            }}
            className="absolute right-8 top-[45%] z-10"
          >
            <ChatBubble message="Yes, that would be great!" isUser={true} />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 right-0 w-[90%] overflow-hidden rounded-lg border border-gray-200/50 bg-white/95 shadow-2xl backdrop-blur-md ring-1 ring-gray-100/50"
          >
            <FeatureMockup />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 opacity-30 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


function SearchNavigateSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-slate-50 to-gray-50 py-24 sm:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 lg:grid-cols-2">
        <motion.div
          className="relative order-1 h-[500px] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, rotate: 2 },
              visible: { opacity: 1, y: 0, rotate: 0 },
            }}
            className="absolute left-0 top-0 w-[90%] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
          >
            <SearchInterfaceMockup />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, x: -20 },
              visible: { opacity: 1, scale: 1, x: 0 },
            }}
            className="absolute right-0 top-[30%] z-10 w-[70%]"
          >
            <NavigationFlowMockup />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -40, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            className="absolute bottom-0 left-[15%] w-[75%] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl"
          >
            <JumpToDefinitionMockup />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="absolute right-1/4 top-1/3"
          >
            <div className="floating-animation h-24 w-24 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 opacity-30"></div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="absolute bottom-1/4 left-1/4"
          >
            <div
              className="floating-animation h-16 w-16 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 opacity-20"
              style={{ animationDelay: "1s" }}
            ></div>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-2 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <h3 className="font-poppins text-sm font-bold uppercase tracking-wider text-yellow-600">
              Search & Navigate
            </h3>
          </div>

          <h2 className="font-poppins text-4xl font-bold leading-tight text-black md:text-5xl">
            Stop getting lost in endless files.
          </h2>

          <p className="max-w-xl font-poppins text-lg leading-relaxed text-gray-600">
            Codur lets you search smarter and navigate repositories visually,
            jumping between functions, imports, and components with ease.
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="button-primary hover-lift font-poppins font-semibold"
            >
              Try Smart Search
            </Button>

            <a
              href="#"
              className="group inline-flex items-center gap-2 px-6 py-3 font-poppins font-semibold text-yellow-600 transition-colors hover:text-yellow-700"
            >
              See Navigation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HistoryTraceSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 py-24 sm:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 lg:grid-cols-2">
        <motion.div
          className="order-2 flex flex-col gap-6 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
            <h3 className="font-poppins text-sm font-bold uppercase tracking-wider text-purple-600">
              History & Trace
            </h3>
          </div>

          <h2 className="font-poppins text-4xl font-bold leading-tight text-black md:text-5xl">
            Never lose context again.
          </h2>

          <p className="max-w-xl font-poppins text-lg leading-relaxed text-gray-600">
            Codur&apos;s history panel keeps track of your searches,
            explanations, and navigations so you can retrace steps and revisit
            insights instantly.
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="button-primary hover-lift font-poppins font-semibold"
            >
              Explore History
            </Button>

            <a
              href="#"
              className="group inline-flex items-center gap-2 px-6 py-3 font-poppins font-semibold text-purple-600 transition-colors hover:text-purple-700"
            >
              See Timeline
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative order-1 h-[500px] w-full lg:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, rotate: -1 },
              visible: { opacity: 1, y: 0, rotate: 0 },
            }}
            className="absolute left-0 top-0 w-[75%] overflow-hidden rounded-lg border border-purple-200 shadow-xl"
          >
            <AIInsightsMockup />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, x: 20 },
              visible: { opacity: 1, scale: 1, x: 0 },
            }}
            className="absolute right-0 top-[35%] z-10 w-[60%]"
          >
            <QueryHistoryMockup />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -40, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            className="absolute bottom-0 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl"
          >
            <TeamActivityMockup />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="absolute right-1/3 top-1/4"
          >
            <div className="floating-animation h-20 w-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 opacity-40"></div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="left-1/5 absolute bottom-1/3"
          >
            <div
              className="floating-animation h-16 w-16 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 opacity-30"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <motion.div
          className="testimonial-quote"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mx-auto max-w-4xl font-poppins text-3xl font-extrabold leading-tight text-black md:text-4xl lg:text-5xl xl:text-6xl">
            We stopped wasting hours puzzling over legacy code. Codur explains
            it instantly, so our team ships faster and smarter.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6 flex gap-4">
            {/* Founder Avatar 1 - Ajay D */}
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg ring-4 ring-white">
                <ProfessionalAvatar className="h-16 w-16" />
              </div>
              <div className="absolute -inset-2 rounded-full border-2 border-blue-200 opacity-50"></div>
            </div>

            {/* Founder Avatar 2 - Tharun S */}
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-green-400 to-green-500 shadow-lg ring-4 ring-white">
                <svg
                  className="h-16 w-16"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32" cy="32" r="32" fill="#10b981" />
                  <circle cx="32" cy="26" r="8" fill="#ffffff" />
                  <path
                    d="M20 44c0-6.627 5.373-12 12-12s12 5.373 12 12v8H20v-8z"
                    fill="#ffffff"
                  />
                  <circle
                    cx="32"
                    cy="26"
                    r="8"
                    fill="rgba(0,0,0,0.1)"
                    opacity="0.2"
                  />
                  <path
                    d="M20 44c0-6.627 5.373-12 12-12s12 5.373 12 12v8H20v-8z"
                    fill="rgba(0,0,0,0.1)"
                    opacity="0.1"
                  />
                </svg>
              </div>
              <div className="absolute -inset-2 rounded-full border-2 border-green-200 opacity-50"></div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-poppins text-xl font-bold text-black">
              — Ajay D & Tharun S
            </p>
            <p className="font-poppins text-base font-medium text-gray-600">
              Founders, Codur
            </p>
            <div className="mt-3 flex items-center justify-center gap-1">
              {/* Star ratings */}
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 fill-current text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-24 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-gray-200/50 bg-white/80 p-8 text-center shadow-2xl backdrop-blur-sm sm:p-12 lg:p-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background decorative elements */}
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-3xl">
            <div className="floating-particle absolute -left-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br from-green-200/30 to-blue-200/30 blur-xl"></div>
            <div
              className="floating-particle absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-purple-200/30 to-pink-200/30 blur-xl"
              style={{ animationDelay: "2s" }}
            ></div>
            <div className="floating-animation absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-100/20 to-green-100/20 blur-lg"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              className="mb-6 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="mr-3 h-8 w-8 text-green-500" />
              <span className="font-poppins text-sm font-bold uppercase tracking-wider text-green-600">
                Ready to Ship Faster?
              </span>
              <Sparkles className="ml-3 h-8 w-8 text-green-500" />
            </motion.div>

            <motion.h2
              className="mb-6 font-poppins text-4xl font-extrabold leading-tight text-black md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Start understanding instantly.
            </motion.h2>

            <motion.p
              className="mx-auto mb-10 max-w-2xl font-poppins text-xl leading-relaxed text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your shortcut from confusing code to complete clarity.
            </motion.p>

            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="button-primary hover-lift px-8 py-4 font-poppins text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get a Demo
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="hover-lift border-2 border-gray-300 px-8 py-4 font-poppins text-lg font-semibold text-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:border-gray-400 hover:bg-gray-50 hover:shadow-xl"
              >
                View Our Pricing
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-6 font-poppins text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Setup in 2 minutes</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const productLinks = [
    "Visualize & Explain",
    "Search & Navigate",
    "History & Trace",
    "AI Assistant",
  ];
  const companyLinks = ["About", "LinkedIn", "Advisory"];
  const resourceLinks = ["Blog", "Downloads", "Learn"];

  return (
    <footer className="relative overflow-hidden bg-black text-gray-300">
      {/* Enhanced Aurora Background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* Primary Aurora Glows */}
        <div className="aurora-glow-1 absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-gradient-to-tr from-emerald-900/30 via-teal-800/20 to-black opacity-60 blur-3xl"></div>
        <div className="aurora-glow-2 absolute bottom-0 right-0 h-[650px] w-[650px] translate-x-1/2 translate-y-1/4 rounded-full bg-gradient-to-tr from-sky-900/30 via-blue-800/20 to-black opacity-60 blur-3xl"></div>

        {/* Secondary Aurora Glows */}
        <div
          className="aurora-glow-1 absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-900/20 via-violet-800/15 to-transparent opacity-40 blur-2xl"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="aurora-glow-2 absolute bottom-1/4 right-1/3 h-[350px] w-[350px] translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-tr from-green-900/25 via-emerald-800/15 to-transparent opacity-50 blur-2xl"
          style={{ animationDelay: "7s" }}
        ></div>

        {/* Floating Particles */}
        <div className="floating-particle absolute left-1/3 top-1/4 h-2 w-2 rounded-full bg-emerald-400/40"></div>
        <div
          className="floating-particle absolute right-1/4 top-1/2 h-1 w-1 rounded-full bg-blue-400/50"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="floating-particle absolute bottom-1/3 left-1/4 h-1.5 w-1.5 rounded-full bg-purple-400/30"
          style={{ animationDelay: "6s" }}
        ></div>
        <div
          className="floating-particle absolute bottom-1/4 right-1/3 h-1 w-1 rounded-full bg-teal-400/40"
          style={{ animationDelay: "9s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 pb-12 pt-24">
        <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.a
              href="#"
              className="group flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <Logo className="h-7 w-7 text-white transition-colors duration-300 group-hover:text-emerald-400" />
              <span className="font-poppins text-2xl font-bold text-white transition-colors duration-300 group-hover:text-emerald-400">
                Codur
              </span>
            </motion.a>

            <motion.p
              className="mt-6 max-w-md font-poppins leading-relaxed text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Codur helps developers and teams instantly understand and navigate
              code using the repos you already own. Yeah, it&apos;s pretty neat.
            </motion.p>

            <motion.div
              className="mt-8 flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[...Array(1)].map((_, i) => (
                <div
                  key={i}
                  className="hover-lift flex h-10 w-80 items-center justify-center rounded-md border border-gray-700/30 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/60"
                >
                  <span className="font-poppins text-sm font-semibold text-gray-400">
                    The Living Algorithms
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="mb-4 font-poppins font-semibold text-white">
                Product
              </h3>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="footer-link group inline-flex items-center font-poppins transition-all duration-300 hover:text-emerald-400"
                    >
                      {link}
                      <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="mb-4 font-poppins font-semibold text-white">
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="footer-link group inline-flex items-center font-poppins transition-all duration-300 hover:text-sky-400"
                    >
                      {link}
                      <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="mb-4 font-poppins font-semibold text-white">
                Resources
              </h3>
              <ul className="space-y-3">
                {resourceLinks.map((link, index) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="footer-link group inline-flex items-center font-poppins transition-all duration-300 hover:text-purple-400"
                    >
                      {link}
                      <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="relative z-10 mt-24 flex flex-col items-center gap-4 border-t border-gray-800/50 pt-8 sm:flex-row sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="font-poppins text-sm text-gray-500">
            &copy; {new Date().getFullYear()} - Codur, Inc.
          </p>
          <p className="flex items-center gap-1 font-poppins text-sm text-gray-500">
            Made with
            <Heart className="h-4 w-4 animate-pulse fill-current text-red-500" />
            <Heart
              className="h-4 w-4 animate-pulse fill-current text-red-500"
              style={{ animationDelay: "0.5s" }}
            />
            <Heart
              className="h-4 w-4 animate-pulse fill-current text-red-500"
              style={{ animationDelay: "1s" }}
            />
          </p>
          <a
            href="#"
            className="footer-link font-poppins text-sm text-gray-500 transition-colors hover:text-emerald-400 hover:text-white"
          >
            Privacy Policy
          </a>
        </motion.div>
      </div>
    </footer>
  );
}


export default function HomePage() {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        <HeroSection />
        <ComparisonSection />
        <VisualizeExplainSection />
        <SearchNavigateSection />
        <HistoryTraceSection />
        <TestimonialSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
