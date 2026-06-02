import type { Metadata } from "next";
import I18nProvider from "@/components/providers/i18n-provider";
import { Geist, Geist_Mono, Rethink_Sans } from "next/font/google";
import "./globals.css";
import Container from "@/components/layout/container/Container";
import Footer from "@/components/common/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
});

export const metadata: Metadata = {
  title: "Volume Trader",
  description: "Trading Platform",
  icons: {
    icon: [{ url: "/assets/images/Union.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/assets/images/Union.svg", type: "image/svg+xml" }],
    apple: [{ url: "/assets/images/Union.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`min-h-full flex flex-col ${rethinkSans.className}`}
      >
        <I18nProvider>
          <div className="site-horns-layer" aria-hidden>
            <div className="horns-container">
              <div className="horn horn-left" />
              <div className="horn horn-right" />
            </div>
          </div>
          <Container>
            {children}
          </Container>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}