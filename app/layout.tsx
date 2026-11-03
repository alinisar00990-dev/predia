import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "PREDIA — Powerful tools. Beautifully simple.",
  description: "Work smarter with premium PDF, image and text tools by PREDIA.",
  metadataBase: new URL("https://predia.app")
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}