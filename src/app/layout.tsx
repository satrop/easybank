// src/app/layout.tsx
import { Metadata } from 'next';
import { Public_Sans } from "next/font/google";
import Nav from './components/site-nav/site-nav';
import Hero from './components/hero/Hero';
import Footer from './components/site-footer/Footer';
import WhyUse from './components/WhyUse/WhyUse';
import Articles from './components/Articles/Articles';
import "./globals.css";

// Load the Google Font using next/font/google
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Easybank - test 2",
  description: "Easybank, where managing your finances is easy"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={publicSans.className}>
      <body className="font-public-sans flex flex-col min-h-screen">
        <main className='mx-auto w-full max-w-[1440px]'>
          <Nav />
          <Hero />
          <WhyUse />
          <Articles />
          <Footer />
        </main>
      </body>
    </html>
  );
}
