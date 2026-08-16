import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/ui/whatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.azadhossen.com"),
  title: "Azad Hossen - Freelance Web Designer & Web Developer",
  description:
    "Azad Hossen is a Freelance Web Designer & Web Developer crafting modern digital experiences that inspire and convert.",
  alternates: {
    canonical: "https://www.azadhossen.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.azadhossen.com/",
    title: "Azad Hossen - Freelance Web Designer & Web Developer",
    description:
      "Azad Hossen is a Freelance Web Designer & Web Developer crafting modern digital experiences that inspire and convert.",
    siteName: "Azad Hossen",
    images: [
      {
        url: "https://www.azadhossen.com/azad-1.png",
        width: 1200,
        height: 630,
        alt: "Azad Hossen - Freelance Web Designer & Web Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azad Hossen - Freelance Web Designer & Web Developer",
    description:
      "Azad Hossen is a Freelance Web Designer & Web Developer crafting modern digital experiences that inspire and convert.",
    images: ["https://www.azadhossen.com/azad-1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children} <WhatsAppButton />
      </body>
    </html>
  );
}
