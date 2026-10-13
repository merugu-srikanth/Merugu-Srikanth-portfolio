import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/scroll";

export const viewport: Viewport = {
  themeColor: "#f4f2ee",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://merugusrikanth.dev"),
  title: "Merugu Srikanth — Full-Stack Developer",
  description:
    "Full-Stack Developer with 4+ years of experience building scalable, production-ready web applications across frontend, backend and database layers. MERN Stack, Next.js, TypeScript, Python, FastAPI, and AI Integration.",
  keywords: [
    "Merugu Srikanth",
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "React",
    "Hyderabad",
  ],
  authors: [{ name: "Merugu Srikanth" }],
  openGraph: {
    title: "Merugu Srikanth — Full-Stack Developer Portfolio",
    description:
      "Full-Stack Developer with 4+ years of experience building scalable web applications, RESTful APIs, admin dashboards, and AI platforms.",
    url: "https://merugusrikanth.dev",
    siteName: "Merugu Srikanth Portfolio",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Merugu Srikanth — Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merugu Srikanth — Full-Stack Developer",
    description:
      "Full-Stack Developer portfolio with talking video, periodic stack, interactive work gallery, and career journey.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:ital,wght@0,300..900;1,300..900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#f4f2ee] text-[#0d0d0d] min-h-screen">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
