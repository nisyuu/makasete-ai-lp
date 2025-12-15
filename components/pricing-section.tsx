import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export function PricingSection() {
  const plans = [
    {
      name: 'スターター',
      description: '個人事業主・小規模ECサイト向け',
      price: '¥9,800',
      period: '/月',
      features: [
        '月間1,000件までの対応',
        'テキストチャット対応',
        '基本的な商品データ連携',
        'メールサポート',
        '分析レポート（月次）',
      ],
      cta: '無料で始める',
      popular: false,
    },
    {
      name: 'ビジネス',
      description: '中小企業・成長中のECサイト向け',
      price: '¥29,800',
      period: '/月',
      features: [
        '月間10,000件までの対応',
        'テキスト + 音声チャット対応',
        '高度な商品データ連携',
        '優先メールサポート',
        '分析レポート（週次）',
        'カスタムデザイン設定',
        'A/Bテスト機能',
      ],
      cta: '無料トライアル',
      popular: true,
    },
    {
      name: 'エンタープライズ',
      description: '大規模ECサイト・複数店舗運営向け',
      price: 'お問い合わせ',
      period: '',
      features: [
        '無制限の対応件数',
        'すべての機能が利用可能',
        '専任サポート担当',
        'SLA保証',
        'カスタム機能開発',
        'オンボーディング支援',
        'API連携サポート',
      ],
      cta: 'お問い合わせ',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            シンプルで分かりやすい料金プラン
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            サイトの規模に合わせて最適なプランをお選びください
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? 'border-primary border-2 shadow-xl scale-105'
                  : 'border-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    人気プラン
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-sm mb-6">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            全プランで14日間の無料トライアル実施中。クレジットカード登録不要。
          </p>
        </div>
      </div>
    </section>
  );
}
