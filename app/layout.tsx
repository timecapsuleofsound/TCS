import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Time Capsule of Sound | House Music Destination",
    template: "%s | Time Capsule of Sound",
  },
  description:
    "Unlock the memories and rhythm of House. Live streams, legendary DJ sets, and the history of House Music — all in one place.",
  keywords: ["house music", "DJ sets", "live streams", "archives", "Twitch", "Mixcloud"],
  metadataBase: new URL(
    process.env.SITE_URL || "https://tcs-rust.vercel.app"
  ),
  openGraph: {
    title: "Time Capsule of Sound",
    description:
      "Unlock the memories and rhythm of House. Live streams, legendary DJ sets, and the history of House Music.",
    siteName: "Time Capsule of Sound",
    type: "website",
    images: [{ url: "/images/logo/logo.PNG", width: 300, height: 300, alt: "TCS Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TimeCapofSound",
    title: "Time Capsule of Sound",
    description: "Unlock the memories and rhythm of House.",
    images: ["/images/logo/logo.PNG"],
  },
  icons: {
    icon: "/images/logo/logo.PNG",
    apple: "/images/logo/logo.PNG",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-tcs-black text-tcs-white antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
