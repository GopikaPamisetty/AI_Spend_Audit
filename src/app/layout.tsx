import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  metadataBase: new URL(
    "https://ai-spend-audit-peach.vercel.app"
  ),

  title:
    "AI Spend Audit",

  description:
    "Audit your AI stack, identify overspending, and discover cheaper alternatives in minutes.",

  openGraph: {

    title:
      "AI Spend Audit",

    description:
      "Stop overspending on AI tools. Discover smarter pricing plans and optimize your AI stack instantly.",

    url:
      "https://ai-spend-audit-peach.vercel.app",

    siteName:
      "AI Spend Audit",

    locale: "en_US",

    type: "website",
  },

  twitter: {

    card:
      "summary_large_image",

    title:
      "AI Spend Audit",

    description:
      "Analyze your AI subscriptions and uncover hidden savings opportunities.",

  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">

        {children}

      </body>

    </html>
  );
}
