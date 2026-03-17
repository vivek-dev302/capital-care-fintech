import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CapitalCare | Fintech",
  description: "Loans, insurance, credit score, and financial tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-slate-950 text-white">
          <div className="pointer-events-none fixed inset-0 -z-10 opacity-70 [background:radial-gradient(1100px_circle_at_20%_10%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(1000px_circle_at_80%_20%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(900px_circle_at_50%_90%,rgba(14,165,233,0.12),transparent_55%)]" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
