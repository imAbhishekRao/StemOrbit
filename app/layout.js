import { Rubik, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "STEMOrbit - Empowering Young Minds with STEM Solutions",
  description: "Discover the future of education through cutting-edge technology, hands-on learning experiences, and innovative STEM solutions designed to inspire the next generation of innovators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${poppins.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-rubik), sans-serif' }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
