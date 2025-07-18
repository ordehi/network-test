import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PostHog Navigation Test",
  description: "Testing PostHog network capture with client-side navigation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                <Link href="/" className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-700">
                  Home
                </Link>
                <Link href="/about" className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                  About
                </Link>
                <Link href="/contact" className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
