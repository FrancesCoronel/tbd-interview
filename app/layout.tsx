import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "The Los Alamos Research App",
  description:
    "The Los Alamos Research App (LARA) allows scientists collaborate and manage sensitive research related to the creation of the first atomic bomb."
};

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"]
});

// import IBM Plex Mono font from Google Fonts

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibm_plex_mono.className}>
      <body>{children}</body>
    </html>
  );
}
