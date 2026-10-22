import type { Metadata, Viewport } from "next";
import { Noto_Sans_Tamil, Rajdhani } from "next/font/google";
import "./globals.css";

const tamil = Noto_Sans_Tamil({
  subsets: ["tamil", "latin"],
  variable: "--font-tamil",
  display: "swap",
});

const latin = Rajdhani({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saaralmess.tamilbusiness.in"),
  title: {
    default: "சாரல் மெஸ் | Saaral Mess – Tenkasi · Courtallam",
    template: "%s | Saaral Mess",
  },
  description:
    "தென்காசி–குற்றாலம் பகுதியில் வீட்டு சுவை, அம்மா கைப்பக்குவத்தில் அசைவ உணவு. மட்டன் சாப்பாடு, சிக்கன் சாப்பாடு, மீன் சாப்பாடு மற்றும் உளுந்தம்பருப்பு சோறு.",
  keywords: [
    "best non veg hotel in Tenkasi",
    "Tenkasi non veg hotel",
    "Courtallam food",
    "வீட்டு சுவை",
    "அம்மா கைப்பக்குவம்",
    "கறி கடை",
    "mutton meals Tenkasi",
    "chicken meals Courtallam",
    "fish meals Tenkasi",
    "Saaral Mess",
  ],
  openGraph: {
    title: "சாரல் மெஸ் | Saaral Mess",
    description:
      "வீட்டு சுவை • அம்மா கைப்பக்குவம் • தென்காசி - குற்றாலம் பக்கம், குத்துக்கல்வலசை",
    type: "website",
    locale: "ta_IN",
    images: ["/images/saaral-mess-og.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "சாரல் மெஸ் | Saaral Mess",
    description: "வீட்டு சுவை, அம்மா கைப்பக்குவம் - Tenkasi - Courtallam side.",
    images: ["/images/saaral-mess-og.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#7f1d0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ta">
      <body
        className={`${tamil.variable} ${latin.variable} bg-[#fff8e8] text-[#3c160b] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
