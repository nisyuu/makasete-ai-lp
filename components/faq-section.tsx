import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export function FAQSection() {
  const faqs = [
    {
      question: '導入にはどのくらいの時間がかかりますか？',
      answer:
        'アカウント登録から導入まで、最短30分で完了します。スプレッドシートに商品データを入力し、発行されたscriptタグをサイトに追加するだけです。技術的な知識がなくても簡単に導入できます。',
    },
    {
      question: '無料トライアル期間中に解約できますか？',
      answer:
        'はい、トライアル期間中はいつでも解約可能です。クレジットカードの登録も不要なので、料金が発生することはありません。安心してお試しいただけます。',
    },
    {
      question: 'どのようなECサイトに対応していますか？',
      answer:
        'WordPress、Shopify、BASE、独自CMSなど、HTMLを編集できるあらゆるECサイトに対応しています。scriptタグを追加できるサイトであれば導入可能です。',
    },
    {
      question: '商品データの更新はどのように行いますか？',
      answer:
        'Googleスプレッドシート上で商品情報を編集するだけで、自動的にチャットボットに反映されます。エクセル感覚で簡単に更新でき、プログラミング知識は一切不要です。',
    },
    {
      question: 'AIはどのような質問に答えられますか？',
      answer:
        '商品の特徴、価格、サイズ、在庫状況、配送方法、返品ポリシーなど、スプレッドシートに登録された情報に基づいて回答します。また、一般的な商品の使い方や比較についても対応可能です。',
    },
    {
      question: '音声チャットの精度はどのくらいですか？',
      answer:
        '最新の音声認識技術を使用しており、日本語の認識精度は95%以上です。騒音がある環境でも高精度で音声を認識し、自然な会話が可能です。',
    },
    {
      question: '複数のサイトで利用できますか？',
      answer:
        'はい、ビジネスプラン以上であれば、複数サイトでご利用いただけます。各サイトごとに異なる商品データを設定することも可能です。',
    },
    {
      question: 'サポート体制について教えてください',
      answer:
        '全プランでメールサポートを提供しています。ビジネスプラン以上では優先サポート、エンタープライズプランでは専任担当者によるサポートが受けられます。',
    },
    {
      question: 'セキュリティ対策はされていますか？',
      answer:
        'はい、すべての通信はSSL/TLSで暗号化されており、個人情報保護法に準拠した運用を行っています。また、定期的なセキュリティ監査も実施しています。',
    },
    {
      question: '月の対応件数を超えた場合はどうなりますか？',
      answer:
        'プラン上限を超えた場合、追加料金で対応を継続できます。また、次月のプランアップグレードも可能です。上限に近づいた際には事前に通知いたします。',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            よくある質問
          </h2>
          <p className="text-lg text-muted-foreground">
            導入前の疑問にお答えします
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-background"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            その他のご質問がございましたら、お気軽にお問い合わせください
          </p>
          <Button variant="outline">お問い合わせ</Button>
        </div>
      </div>
    </section>
  );
}
