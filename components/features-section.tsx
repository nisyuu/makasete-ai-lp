import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, MessageSquare, Code, Table2, Zap, Package } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: MessageSquare,
      title: 'テキストチャット対応',
      description: 'お客様がテキストで質問すると、AIが商品情報をもとに最適な回答を提供します。',
    },
    {
      icon: Mic,
      title: '音声チャット対応',
      description: '音声入力にも対応。話しかけるだけで商品の相談ができ、音声で回答を受け取れます。',
    },
    {
      icon: Code,
      title: '簡単導入',
      description: 'HTMLにscriptタグを1行追加するだけ。既存サイトの変更は一切不要です。',
    },
    {
      icon: Table2,
      title: 'スプレッドシート連携',
      description: '商品データはGoogleスプレッドシートで管理。エクセル感覚で簡単に更新できます。',
    },
    {
      icon: Package,
      title: 'あらゆる商品に対応',
      description: 'ファッション、家電、食品、雑貨など、どんな商品カテゴリーにも対応可能です。',
    },
    {
      icon: Zap,
      title: '24時間365日稼働',
      description: '人手不足の心配なし。深夜でも早朝でも、いつでもお客様対応が可能です。',
    },
  ];

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            充実の機能でECサイトを強化
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AIチャットボットがお客様の質問に的確に回答し、購買体験を向上させます
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group bg-card/50 backdrop-blur-sm hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
