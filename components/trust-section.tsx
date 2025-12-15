import { ShoppingBag, MessageCircle, Store, Shirt } from 'lucide-react';

export function TrustSection() {
  const stats = [
    { label: '導入サイト数', value: '500+' },
    { label: '月間対応数', value: '100万+' },
    { label: '顧客満足度', value: '98%' },
    { label: '平均応答時間', value: '< 1秒' },
  ];

  const industries = [
    { icon: Shirt, label: 'ファッション' },
    { icon: ShoppingBag, label: '雑貨' },
    { icon: Store, label: '家電' },
    { icon: MessageCircle, label: '食品' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-6">
            幅広い業種で導入実績があります
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{industry.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
