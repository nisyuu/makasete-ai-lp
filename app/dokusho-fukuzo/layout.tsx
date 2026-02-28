import Layout from '@/components/dokusho-fukuzo/Layout';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '読書福蔵',
  description: '皆さんの本棚のスキマをお埋めします。いいえ、お金は一銭もいただきません。お客様が満足されたらそれが何よりの報酬でございます。',
  openGraph: {
    title: '読書福蔵',
    description: '皆さんの本棚のスキマをお埋めします。いいえ、お金は一銭もいただきません。お客様が満足されたらそれが何よりの報酬でございます。',
    images: ['/スクリーンショット_2025-12-16_18.37.16.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '読書福蔵',
    description: '皆さんの本棚のスキマをお埋めします。いいえ、お金は一銭もいただきません。お客様が満足されたらそれが何よりの報酬でございます。',
    images: ['/スクリーンショット_2025-12-16_18.37.16.png'],
  },
};

export default function DokushoFukuzoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DHY3JWPP9M"
        strategy="afterInteractive"
      />
      <Script id="google-analytics-dokusho-fukuzo" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DHY3JWPP9M');
        `}
      </Script>
      <Script 
        src="https://makasete-bot-49773544105.asia-northeast1.run.app/public/widget.js"
        strategy="lazyOnload"
      />
      <Layout>{children}</Layout>
    </>
  );
}
