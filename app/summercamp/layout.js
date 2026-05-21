import { Roboto, Spline_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata = {
  title: "Summer Camp 2026 | STEMOrbit",
  description:
    "STEMOrbit STEM Summer Camp — Grades 1–10, three batches (June and July), 10 AM–12 PM. Grade-based groups with tailored activities. Fees from ₹1800. Sunny Enclave, Kharar.",
};

const robotoScope =
  "[&_h1]:![font-family:inherit] [&_h3]:![font-family:inherit] [&_h4]:![font-family:inherit] [&_h5]:![font-family:inherit] [&_h6]:![font-family:inherit] [&_p]:![font-family:inherit]";

export default function SummerCampLayout({ children }) {
  return (
    <div id="summercamp-page-wrapper" className={`${roboto.className} ${robotoScope}`}>
      <style dangerouslySetInnerHTML={{__html: `
        #summercamp-page-wrapper h2 {
          font-family: ${splineSans.style.fontFamily} !important;
          font-weight: 700 !important;
          text-align: center !important;
          letter-spacing: 0 !important;
          margin-bottom: 2.5rem !important;
        }
        /* Mobile defaults */
        @media (max-width: 1023px) {
          #summercamp-page-wrapper h2 {
            font-size: 40px !important;
            line-height: 1.2 !important;
          }
        }
        /* Desktop specific sizes based on design */
        @media (min-width: 1024px) {
          #summercamp-page-wrapper h2 {
            font-size: 70px !important;
            line-height: 47px !important;
            margin-bottom: 3.5rem !important;
          }
        }
      `}} />
      {children}
    </div>
  );
}
