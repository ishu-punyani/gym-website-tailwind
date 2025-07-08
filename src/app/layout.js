'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useIsMobile from "./hooks/useIsMobile";
import HeaderMsite from "./components/HeaderMsite";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const isMobile = useIsMobile();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        { isMobile ? <HeaderMsite /> : <Header />}  
        <main className="flex flex-col min-h-screen pt-[90px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
