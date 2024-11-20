import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Background from "@/components/Background";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hummingbird Labs - Web Design for Local Businesses",
  description:
    "Transform your local business with stunning web design and digital solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
