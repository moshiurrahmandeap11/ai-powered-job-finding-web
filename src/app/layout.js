import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout/ClientLayout";
import ClientProvider from "./api/ClientProvider/ClientProvider";
import ClientOnly from "./ClientOnly/ClientOnly";
import  { Toaster } from 'react-hot-toast';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CareerCrafter",
  description: "Craft your success story",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProvider>
          <ClientOnly>
            <ClientLayout>{children} <Toaster /></ClientLayout>
          </ClientOnly>
        </ClientProvider>
      </body>
    </html>
  );
}
