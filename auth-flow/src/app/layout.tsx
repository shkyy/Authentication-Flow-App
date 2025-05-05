import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Authentication App',
  description: 'Next.js Authentication flow with Zustand'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}