import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/headersComponents/Header";
import Footer from "@/components/footersComponents/Footer";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['400', '700']
 });

export const metadata: Metadata = {
  title: "Bmg Clone",
  description: "Pagina criada com referências do bnco Bmg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

