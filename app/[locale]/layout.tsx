import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useLocale } from "next-intl";
import "./globals.css";
import Navbar from "@/components/navbar/NavBar";
import { notFound } from "next/navigation";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My app",
  description: "a simple usefull web app",
};
interface RootLayoutPage {
  children: React.ReactNode;
  params: { locale: string };
}
export default function RootLayout({ children, params }: RootLayoutPage) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar />
        <ChakraProvider>{children}</ChakraProvider>
        <Footer />
      </body>
    </html>
  );
}
