import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import './assets/css/style.scss'
  
const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight:['100','200','300','400','500','600','700','800','900']
});


export const metadata: Metadata = {
  title: "WIT LAB",
  description: "WIT LAB",
  icons:'/icon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
    
      </body>
    </html>
  );
}
