import Footer from "@/components/footer";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Planner",
  description: "Plan your future career with Career Planner!",
  icons: [{ rel: "icon", url: "/compass.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
