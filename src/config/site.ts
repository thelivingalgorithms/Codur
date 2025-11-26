import {
  SiteConfig,
  NavigationItem,
  HeroContent,
  AnimationConfig,
} from "@/types";

export const siteConfig: SiteConfig = {
  name: "Codur",
  description:
    "From repo-wide overviews to line-by-line clarity, Codur gives you the context you need to move faster in the era of AI-generated and legacy code.",
  url: "https://codur.com",
  ogImage: "/og.jpg",
  links: {
    github: "https://github.com/codur",
    twitter: "https://twitter.com/codur",
    linkedin: "https://linkedin.com/company/codur",
  },
};

export const navigationItems: NavigationItem[] = [
  {
    name: "Platform",
    href: "/platform",
    hasDropdown: true,
    items: [
      { name: "Overview", href: "/platform" },
      { name: "Features", href: "/platform/features" },
      { name: "Integrations", href: "/platform/integrations" },
    ],
  },
  {
    name: "Use Cases",
    href: "/use-cases",
    hasDropdown: true,
    items: [
      { name: "Legacy Code", href: "/use-cases/legacy-code" },
      { name: "AI-Generated Code", href: "/use-cases/ai-code" },
      { name: "Code Reviews", href: "/use-cases/code-reviews" },
    ],
  },
  {
    name: "About",
    href: "/about",
    hasDropdown: false,
  },
  {
    name: "Pricing",
    href: "/pricing",
    hasDropdown: false,
  },
];

export const heroContent: HeroContent = {
  title: "Less time stuck, more time shipping.",
  description:
    "From repo-wide overviews to line-by-line clarity, Codur gives you the context you need to move faster in the era of AI-generated and legacy code.",
  primaryButton: {
    text: "Get A Demo",
    href: "/demo",
  },
  secondaryButton: {
    text: "Learn More",
    href: "/learn-more",
  },
};

export const animationConfig: AnimationConfig = {
  staggerChildren: 0.2,
  duration: 0.5,
  stiffness: 100,
  damping: 10,
};
