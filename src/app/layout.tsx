import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Translation by Alphaloops",
  description: "Quickly translate any text to multiple languages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-lvh ${noto.className}`}>
        <header className="px-20 py-8">
          <h1 className="text-2xl font-bold">Translation by Alphaloops</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
