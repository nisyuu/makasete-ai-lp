import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export function PricingSection() {
  const plans = [
    {
      name: 'でまかせプラン',
      description: '開発者向け',
      price: '無料',
      period: '',
      features: [
        'オープンソースからご自身で構築',
        '自由にカスタマイズ可能',
      ],
      cta: '無料で始める',
      ctaHref: 'https://github.com/nisyuu/makasete-ai',
      popular: false,
    },
    {
      name: 'おまかせプラン',
      description: '個人事業主・小規模ECサイト向け',
      price: '準備中',
      period: '',
      features: [
        'AIチャットボット構築サポート',
        ''
      ],
      cta: 'お問い合わせ',
      ctaHref: 'https://docs.google.com/forms/d/e/1FAIpQLScKzEYvBRXxZnmciBOWAoq9hTjQjswoxDAqkiIVHfw6mR2Ynw/viewform?usp=dialog',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            シンプルで分かりやすい料金プラン
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            サイトの規模に合わせて最適なプランをお選びください
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group transition-all duration-300 border-2 border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 bg-card/50 backdrop-blur-sm`}
            >
              <CardHeader className="text-center pb-8 relative z-10">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-sm mb-6">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.ctaHref ? (
                  <a href={plan.ctaHref} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="w-full transition-all duration-300 hover:bg-primary/10"
                      variant="outline"
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </a>
                ) : (
                  <Button
                    className="w-full transition-all duration-300 hover:bg-primary/10"
                    variant="outline"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
