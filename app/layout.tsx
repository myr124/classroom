import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Test",
  description: "Generated by Next.js",
};
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}
