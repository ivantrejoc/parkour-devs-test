import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import  SessionProvider  from "./SessionProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Employees Register App",
  description: "Employees Register App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <main className="h-screen flex flex-col justify-center items-center">
          <SessionProvider>
          <Navbar />
          {children}
          </SessionProvider>
        
        </main>
      </body>
    </html>
  );
}
