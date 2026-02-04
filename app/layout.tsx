import type { Metadata } from "next";
import { Google_Sans_Code } from "next/font/google";

import "@/app/globals.css";
import Layout from "@/layout/Layout";

const googleSans = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zustand Store",
  description: "Builded by ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSans.className} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
