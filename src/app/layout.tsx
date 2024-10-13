import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Super duper task",
  description: "fetch nfts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
