import "./globals.css";
import type { Metadata } from "next";
import { Bellefair, Barlow_Condensed } from "next/font/google";
import Navbar from "./components/Navbar";

export const bellfair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bellfair",
});
export const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
  display: "swap",
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Space Tourism Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bellfair.variable} ${barlow.variable} bg-dark-blue`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
