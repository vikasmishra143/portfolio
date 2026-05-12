import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikas Mishra | AI Engineer and Android Developer",
  description:
    "Premium developer portfolio for Vikas Mishra, Associate Software Engineer building AI-powered Android applications, edge AI systems, and production-grade GenAI pipelines.",
  keywords: [
    "Vikas Mishra",
    "AI Engineer",
    "Android Developer",
    "Edge AI",
    "GenAI",
    "RAG",
    "Qualcomm NPU",
    "Makers Lab",
    "Tech Mahindra"
  ],
  authors: [{ name: "Vikas Mishra" }],
  creator: "Vikas Mishra",
  openGraph: {
    title: "Vikas Mishra | AI Engineer and Android Developer",
    description:
      "AI-powered Android applications, edge AI systems, and production-grade GenAI pipelines.",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Mishra | AI Engineer and Android Developer",
    description:
      "Building AI-powered Android applications, edge AI systems, and production-grade GenAI pipelines."
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
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
