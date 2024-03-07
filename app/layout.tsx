import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteConfig from "@/config/site";
import NavBar from "./ui/components/Navbar/NavBar";
import Footer from "./ui/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SiteConfig.siteName,
  description: SiteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={`${SiteConfig.lang}`} dir={`${SiteConfig.dir}`}>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
