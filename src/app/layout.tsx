import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";

import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const bZiba = localFont({
  src: [
    {
      path: "../../public/fonts/B Ziba_0.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-bZiba",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" className={`dark ${figtree.variable} ${bZiba.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <div className="flex flex-1 justify-center items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
