import { Clock, TrendingUp, DollarSign, Users } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: '問い合わせ対応時間を大幅削減',
      description: 'よくある質問にAIが自動で回答。スタッフは複雑な案件に集中できます。',
    },
    {
      icon: TrendingUp,
      title: 'コンバージョン率の向上',
      description: '疑問をその場で解決することで、カゴ落ちを防ぎ購入率が向上します。',
    },
    {
      icon: DollarSign,
      title: '人件費を大幅にカット',
      description: '24時間対応でも追加の人員は不要。コストを抑えながらサービス向上。',
    },
    {
      icon: Users,
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
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
