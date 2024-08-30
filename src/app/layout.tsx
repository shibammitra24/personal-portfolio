import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";

const inter = Inter({ subsets: ["latin"] });

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL(`https://shibammitra.com`),
  title: "Shibam Mitra | Portfolio",
  description: "UI/UX Designer and Web developer",
  openGraph: {
    title: "Shibam Mitra | Portfolio",
    description: "UI/UX Designer and Web developer",
    type: "website",
    url: process.env.SITE_URL,
    siteName: "Shibam Mitra Portfolio",
  },
  twitter: {
    title: "Shibam Mitra | Portfolio",
    description: "UI/UX Designer and Web developer",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} select-none`}>
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}
