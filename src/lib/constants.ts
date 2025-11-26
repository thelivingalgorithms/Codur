/**
 * Application constants and configuration values
 */

export const APP_CONSTANTS = {

  ANIMATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
  },

  
  BREAKPOINTS: {
    MOBILE: "(max-width: 768px)",
    TABLET: "(min-width: 768px) and (max-width: 1024px)",
    DESKTOP: "(min-width: 1024px)",
  },


  Z_INDEX: {
    DROPDOWN: 10,
    STICKY: 20,
    FIXED: 30,
    MODAL_BACKDROP: 40,
    MODAL: 50,
    POPOVER: 60,
    TOOLTIP: 70,
  },

  
  API: {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL || "https://api.codur.com",
    ENDPOINTS: {
      CONTACT: "/contact",
      DEMO: "/demo",
      NEWSLETTER: "/newsletter",
    },
  },
} as const;

export const ARIA_LABELS = {
  CLOSE_MENU: "Close mobile menu",
  OPEN_MENU: "Open mobile menu",
  MAIN_NAVIGATION: "Main navigation",
  SKIP_TO_CONTENT: "Skip to main content",
  HOME_LINK: "Go to homepage",
} as const;
