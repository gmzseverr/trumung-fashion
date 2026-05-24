import type { Metadata } from "next";
import { Inter, Khand,Shippori_Mincho  } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const khand = Khand({ 
  subsets: ["latin"], 
  weight: ["400", "600"], 
  variable: "--font-khand" 
});
const shippori = Shippori_Mincho({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-shippori" 
});

export const metadata: Metadata = {
  title: "Trümung - Fashion",
  description: "Minimalist fashion store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${khand.variable} ${shippori.variable} h-full`}>
      <body className="h-full antialiased bg-[--background] text-[--foreground]">
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}