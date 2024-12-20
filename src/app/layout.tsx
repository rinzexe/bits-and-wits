import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold">
              bits and wits
            </h1>
            <h3>
              <i className="text-neutral-400">
              float32 type bitwise representation
              </i>
            </h3>
            <p className="text-red-500 md:hidden text-center px-4">
              This application is not supported on mobile devices. Please use a desktop browser.
            </p>
          </div>
          <div className="hidden md:block">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}