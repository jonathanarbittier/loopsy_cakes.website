import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loopsy Cakes | Custom Cakes & Desserts",
  description: "Custom cakes and desserts made from scratch for every occasion. Explore flavors and send a cake inquiry to Loopsy Cakes.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
