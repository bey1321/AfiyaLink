import type { Metadata } from "next";
import "./globals.css";
import { gotham } from "../common/fonts/fonts";
import Header from "./_components/header";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title: "Afiyalink",
  description: "Inclusive Digital Health Assistant for All",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${gotham.variable} font-sans antialiased`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
