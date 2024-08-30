import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shibam Mitra | Contact",
  description: "Contact Shibam Mitra",
  openGraph: {
    title: "Shibam Mitra | Contact",
    description: "Contact Shibam Mitra",
    type: "website",
    url: process.env.SITE_URL,
    siteName: "Shibam Mitra Portfolio",
  },
  twitter: {
    title: "Shibam Mitra | Contact",
    description: "Contact Shibam Mitra",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
