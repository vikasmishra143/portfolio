import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap"
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = "Vikas Mishra, Generative AI and On-Device LLM Engineer";
const description =
  "Vikas Mishra builds LLM systems that run offline on phones and in cars: fine-tuning data, quantized models for Qualcomm NPUs, and the Android code that ships them. Based in Pune, India.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Vikas Mishra",
    "Generative AI Engineer",
    "On-device LLM",
    "Edge AI",
    "RAG",
    "Qualcomm NPU",
    "Android",
    "Tech Mahindra Makers Lab",
    "Pune"
  ],
  authors: [{ name: "Vikas Mishra" }],
  creator: "Vikas Mishra",
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary",
    title,
    description
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable + " " + serif.variable + " " + mono.variable}>
      <body>{children}</body>
    </html>
  );
}
