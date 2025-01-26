// src/app/layout.tsx
import { Metadata } from 'next';
import "./globals.css"; // Your global styles
import Nav from './components/site-nav/site-nav';
import Head from 'next/head';

export const metadata: Metadata = {
  title: "My Website",
  description: "My Next.js website with Google Fonts",
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

      <body className="font-public-sans">
        {/* Navigation */}
        <Nav />

        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
