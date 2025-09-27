import { SVGProps } from "react";

export interface NavigationItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  items?: NavigationItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  links: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface HeroContent {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export interface AnimationConfig {
  staggerChildren: number;
  duration: number;
  stiffness: number;
  damping: number;
}
