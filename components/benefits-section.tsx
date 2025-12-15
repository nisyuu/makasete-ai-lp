import { Clock, TrendingUp, DollarSign, Users } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      stat: '75%',
      label: '削減',
      title: '問い合わせ対応時間を大幅削減',
      description: 'よくある質問にAIが自動で回答。スタッフは複雑な案件に集中できます。',
    },
    {
      icon: TrendingUp,
      stat: '35%',
      label: '向上',
      title: 'コンバージョン率の向上',
      description: '疑問をその場で解決することで、カゴ落ちを防ぎ購入率が向上します。',
    },
    {
      icon: DollarSign,
      stat: '60%',
      label: '削減',
      title: '人件費を大幅にカット',
      description: '24時間対応でも追加の人員は不要。コストを抑えながらサービス向上。',
    },
    {
      icon: Users,
      stat: '92%',
      label: '満足度',
      title: '顧客満足度の向上',
      description: '即座に回答が得られることで、お客様の満足度が大きく向上します。',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            導入で得られる効果
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AIチャットボットがもたらす具体的なビジネスインパクト
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="mb-4">
                  <div className="text-4xl font-bold text-primary mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {benefit.label}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              平均して初月から効果を実感
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              導入企業の90%以上が、1ヶ月以内に問い合わせ対応の効率化を実感。
              投資回収期間は平均3ヶ月です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
