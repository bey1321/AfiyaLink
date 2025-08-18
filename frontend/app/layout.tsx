import type { Metadata } from "next";
import "./globals.css";
import { gotham } from "../common/fonts/fonts";
import Navbar from "./_layout/navbar";
import Footer from "./_layout/footer";

export const metadata: Metadata = {
  title: "Afiyalink",
  description: "Inclusive Digital Health Assistant for All",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${gotham.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
