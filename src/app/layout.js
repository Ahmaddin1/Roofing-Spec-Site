import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { siteUrl } from "@/data/services";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Summit Roofing Co. | Roofing Done Right",
  description:
    "Conversion-focused roofing website built to showcase modern design, trust signals, and lead generation for residential roofing companies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-[#1A1A1A]">
        <SmoothScroll>
          <div className="flex min-h-full flex-col">
            <Navbar />
            <main className="flex-1 pt-28 md:pt-32">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
