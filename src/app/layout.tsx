import type { Metadata } from "next";
import "./globals.scss";
import { getResetStyles } from '@stihl-design-system/components/partials';


export const metadata: Metadata = {
  title: "STIHL Quickstart Template",
  description: "This repository offers a collection of basic page templates with our design system, providing ready-to-use layouts to ensure consistency and efficiency across projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{getResetStyles()}</head>
      <body>{children}</body>
    </html>
  );
}
