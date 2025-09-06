import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const metadata: Metadata = {
  title: {
    default: "Zycure Biotech | Innovative Healthcare Solutions",
    template: "%s | Zycure Biotech",
  },
  description:
    "Zycure Biotech and Zychor Biologicals specialize in Orthopedics, Plastic Surgery, and Chronic Wound Management with pan-India operations.",
  keywords: [
    "Zycure Biotech",
    "Zychor Biologicals",
    "Pharma Company India",
    "Orthopedics",
    "Wound Care",
    "Plastic Surgery Pharma",
  ],
  openGraph: {
    title: "Zycure Biotech | Innovative Healthcare Solutions",
    description:
      "Leading pharma company in India with expertise in Ortho, Plastic Surgery, and Wound Care.",
    url: "https://yourdomain.com",
    siteName: "Zycure Biotech",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zycure Biotech",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zycure Biotech | Innovative Healthcare Solutions",
    description:
      "Innovating healthcare in Ortho, Plastic Surgery, and Chronic Wound Management.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
