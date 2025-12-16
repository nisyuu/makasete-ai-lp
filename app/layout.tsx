import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Makasete AI - ECサイトの売上を最大化するAIチャットボット',
  description: '音声とテキストで対応するAI販売員が、商品の相談から購入までをサポート。簡単にECサイトへ導入できます。個人事業主や中小企業に最適なソリューションです。',
  keywords: ['AIチャットボット', 'ECサイト', 'AI販売員', '音声チャット', '売上向上', 'カスタマーサポート'],
  openGraph: {
    title: 'Makasete AI - ECサイトの売上を最大化',
    description: 'AIチャットボットで24時間お客様対応。簡単導入で売上アップを実現',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makasete AI - ECサイトの売上を最大化',
    description: 'AIチャットボットで24時間お客様対応。簡単導入で売上アップを実現',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
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
