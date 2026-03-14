import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Makasete AI - スプレッドシートで管理できるAIチャットボット",
  description:
    "スプレッドシートで管理ができるAIチャットボット。簡単にお客様のサイトへ導入できます。",
  keywords: [
    "AIチャットボット",
    "ECサイト",
    "AI販売員",
    "音声チャット",
    "スプレッドシート",
    "カスタマーサポート",
  ],
  openGraph: {
    title: "Makasete AI - スプレッドシートで管理できるAIチャットボット",
    description:
      "AIチャットボットで24時間お客様対応。簡単導入で売上アップを実現",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/ogp-dokusho-fukuzo.png",
        width: 1200,
        height: 630,
        alt: "Makasete AI - スプレッドシートで管理できるAIチャットボット",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Makasete AI - スプレッドシートで管理できるAIチャットボット",
    description:
      "AIチャットボットで24時間お客様対応。簡単導入で売上アップを実現",
    images: [
      {
        url: "/ogp-dokusho-fukuzo.png",
        alt: "Makasete AI - スプレッドシートで管理できるAIチャットボット",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="dark">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZLDXLJSPQ4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZLDXLJSPQ4');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
