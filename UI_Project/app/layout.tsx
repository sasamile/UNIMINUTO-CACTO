import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ReactLenis } from "lenis/react"
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <ReactLenis root options={{ lerp: 0.08 }}> */}
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
          <Toaster richColors />
        </body>
      {/* </ReactLenis> */}
    </html>
  );
}
