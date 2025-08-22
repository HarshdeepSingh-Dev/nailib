import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "NailIB - AI-Powered IB Learning",
  description: "Modern educational platform for IB students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jakarta.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
