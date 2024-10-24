import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "North Star",
  description: "Plan your future career with North Star!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
