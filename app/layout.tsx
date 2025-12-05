import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhd Salihin | Software Engineer Portfolio",
  description: "Portfolio of Muhd Salihin, a Software Engineer specializing in modern web development with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Muhd Salihin | Software Engineer Portfolio",
    description: "Portfolio of Muhd Salihin, a Software Engineer specializing in modern web development with React, Next.js, and TypeScript.",
    url: "https://your-site.vercel.app",
    siteName: "Muhd Salihin Portfolio",
    images: [
      {
        url: "/og-image.jpeg", // This will be your preview image
        width: 1200,
        height: 630,
        alt: "Muhd Salihin Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhd Salihin | Software Engineer Portfolio",
    description: "Portfolio of Muhd Salihin, a Software Engineer specializing in modern web development with React, Next.js, and TypeScript.",
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
