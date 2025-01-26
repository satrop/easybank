import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/site-nav/site-nav";

export const metadata: Metadata = {
  title: "Easybank",
  description: "Easybank landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* Google Fonts link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Site Navigation */}
        <Nav />

        {/* Main Content */}
        <main className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
