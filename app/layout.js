import { Roboto, Poppins, Spline_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
import WhatsAppButton from "../components/WhatsAppButton";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
});

const splineSans = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-spline-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "STEMOrbit - Empowering Young Minds with STEM Solutions",
  description: "Discover the future of education through cutting-edge technology, hands-on learning experiences, and innovative STEM solutions designed to inspire the next generation of innovators.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} ${splineSans.variable} antialiased`}
        style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
      >
        <Navbar />
        <main className="max-md:pt-[calc(3rem+4rem+1rem+env(safe-area-inset-top,0px))] md:pt-36 lg:pt-40">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
