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
  title: "Koolab",
  description: "A super web application",
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
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        <Navbar />
        <ChakraProvider>{children}</ChakraProvider>
        <Footer />
      </body>
    </html>
  );
}
