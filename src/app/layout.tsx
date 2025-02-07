// src/app/layout.tsx
import { Metadata } from 'next';
import "./globals.css";
import Nav from './components/site-nav/site-nav';
import Hero from './components/hero/Hero';
import Footer from './components/site-footer/Footer';
import Head from 'next/head';
import WhyUse from './components/WhyUse/WhyUse';
import Articles from './components/Articles/Articles';

export const metadata: Metadata = {
  title: "Easybank",
  description: "Easybank, where managing your finances is easy"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        {/* Add Google Fonts here */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="font-public-sans flex flex-col min-h-screen">
        <main className='mx-auto max-w-[1440px]'>
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
