import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura — Turn Your Big Idea Into a Stunning Website",
  description:
    "The all-in-one platform that transforms your vision into pixel-perfect digital experiences. Design, build, and launch — faster than ever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Clash Display from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        {/* Gilroy approximation - using General Sans from Fontshare as closest free match */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased noise-bg">{children}</body>
    </html>
  );
}
