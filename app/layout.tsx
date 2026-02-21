import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppButton } from "@/components/whatsapp-button";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Fawzy | Portfolio",
  description: "Professional Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
        <Toaster />
        <WhatsAppButton />
      </body>
    </html>
  );
}
