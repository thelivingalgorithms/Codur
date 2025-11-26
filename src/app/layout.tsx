import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  title: "Codur - Less time stuck, more time shipping.",
  description:
    "From repo-wide overviews to line-by-line clarity, Codur gives you the context you need to move faster in the era of AI-generated and legacy code.",
  keywords: [
    "code analysis",
    "developer tools",
    "AI code",
    "legacy code",
    "code context",
    "developer productivity",
  ],
  authors: [{ name: "Codur Team" }],
  creator: "Codur",
  publisher: "Codur",
  metadataBase: new URL("https://codur.com"),
  openGraph: {
    title: "Codur - Less time stuck, more time shipping.",
    description:
      "From repo-wide overviews to line-by-line clarity, Codur gives you the context you need to move faster in the era of AI-generated and legacy code.",
    url: "https://codur.com",
    siteName: "Codur",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codur",
    description:
      "From repo-wide overviews to line-by-line clarity, Codur gives you the context you need to move faster in the era of AI-generated and legacy code.",
    creator: "@codur",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.className,
          poppins.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
