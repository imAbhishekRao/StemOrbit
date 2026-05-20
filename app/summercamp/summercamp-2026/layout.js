import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Summer Camp 2026 | STEMOrbit",
  description:
    "STEMOrbit STEM Summer Camp — Grades 1–10, three batches (June and July), 10 AM–12 PM. Grade-based groups with tailored activities. Fees from ₹1800. Sunny Enclave, Kharar.",
};

const robotoScope =
  "[&_h1]:![font-family:inherit] [&_h2]:![font-family:inherit] [&_h3]:![font-family:inherit] [&_h4]:![font-family:inherit] [&_h5]:![font-family:inherit] [&_h6]:![font-family:inherit] [&_p]:![font-family:inherit]";

export default function SummerCamp2026Layout({ children }) {
  return <div className={`${roboto.className} ${robotoScope}`}>{children}</div>;
}
