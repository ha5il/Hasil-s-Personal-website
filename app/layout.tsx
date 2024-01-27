import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hasil's Personal Website",
  description: "Explore the profile of a distinguished Web Developer, Electrical Engineer, and Poet hailing from Nepal, boasting over 5 years of expertise. Visit to discover more details and get in touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
      <NavBar />
        {children}
        </body>
    </html>
  );
}
