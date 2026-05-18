import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


export const metadata = {
  title: "IntelliDish",
  description: "AI powered recipe generator.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        <main className="min-h-screen">{children}</main>

        <footer className="py-8 px-4 border-t">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="IntelliDish Logo"
                  width={48}
                  height={48}
                  className="w-14"
                />
              </div>
              <p className="text-stone-500 text-sm">
                Made with 💗 by Pauline Oraro
              </p>
            </div>
          </footer>
      </body>
    </html>
  );
}
