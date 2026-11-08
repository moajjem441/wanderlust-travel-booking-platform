import {Josefin_Sans,Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const josefin=Josefin_Sans({
  variable:"--font-josefin-sans",
  subsets:["latin"]
})

export const metadata = {
  title: "Wanderlust-Travel booking platform",
  description: "Travel booking platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefin.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning={true}>
        <Navbar></Navbar>
        
        <main>
          {children}
        </main>
         <Footer></Footer>
         <Toaster />

        </body>
    </html>
  );
}
