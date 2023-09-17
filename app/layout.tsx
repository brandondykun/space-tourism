import "./globals.css";
import type { Metadata } from "next";
import { Bellefair, Barlow_Condensed } from "next/font/google";

export const bellfair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
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
      <body className={bellfair.className}>{children}</body>
    </html>
  );
}
