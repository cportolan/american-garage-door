import { DM_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "American Garage Door",
  description: "Trusted mobile locksmith and garage door repair services you can count on. Serving homes, businesses, and vehicles with fast, professional support.",
  keywords: ["garage door repair", "locksmith services", "mobile locksmith", "garage door installation", "emergency locksmith", "residential locksmith", "commercial locksmith", "vehicle locksmith"],
  icons: {
    icon: "/imgs/logo.png",
  },
  openGraph: {
    title: "American Garage Door",
    description: "Trusted mobile locksmith and garage door repair services you can count on. Serving homes, businesses, and vehicles with fast, professional support.",
    // url: "https://americangaragedoor.com",
    siteName: "American Garage Door",
    images: [
      {
        // url: "https://americangaragedoor.com/imgs/logo.png",
        width: 1200,
        height: 630,
        alt: "American Garage Door Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
