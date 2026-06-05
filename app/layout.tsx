import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Time Capsule of Sound | House Music Destination",
  description:
    "Unlock the memories and rhythm of House. Live streams, legendary DJ sets, and the history of House Music — all in one place.",
  keywords: ["house music", "DJ sets", "live streams", "archives", "Twitch", "Mixcloud"],
  openGraph: {
    title: "Time Capsule of Sound",
    description:
      "Unlock the memories and rhythm of House. Live streams, legendary DJ sets, and the history of House Music.",
    siteName: "Time Capsule of Sound",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TimeCapofSound",
    title: "Time Capsule of Sound",
    description: "Unlock the memories and rhythm of House.",
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
        {children}
      </body>
    </html>
  );
}
