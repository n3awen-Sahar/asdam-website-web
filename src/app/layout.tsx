import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "ASDAM Technical Glass | Premium Architectural Glass Saudi Arabia",
  description:
    "ASDAM Technical Glass Company – Over 30 years of excellence in premium architectural glass manufacturing. IGU, Tempered, Laminated, Low-E, and Decorative Glass. Trusted across Saudi Arabia.",
  keywords:
    "ASDAM glass, technical glass Saudi Arabia, architectural glass, IGU, tempered glass, laminated glass, low-e glass, Vision 2030, Jeddah glass manufacturer",
  openGraph: {
    title: "ASDAM Technical Glass – Beyond Glass, Building Dreams",
    description:
      "Premium technical glass manufacturing since 1990. Trusted across Saudi Arabia.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
