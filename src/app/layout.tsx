import type { Metadata } from "next";
import { Mulish, Alegreya } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mulish.variable} ${alegreya.variable}`}>
      <body>{children}</body>
    </html>
  );
}
