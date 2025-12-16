import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shirt, Laptop, Apple, Package } from 'lucide-react';

export function UseCasesSection() {
  const useCases = [
    {
      icon: Shirt,
      industry: 'ファッション・アパレル',
      example: 'サイズ感や素材の質問に即答',
      description: 'お客様：「このジャケット、普段Mサイズですが大丈夫ですか？」\nAI：「こちらのジャケットは少し大きめの作りとなっております。普段Mサイズの方にはSサイズをおすすめしています。」',
    },
    {
      icon: Laptop,
      industry: '家電・電子機器',
      example: 'スペックや互換性の確認をサポート',
      description: 'お客様：「このノートPCで動画編集はできますか？」\nAI：「はい、可能です。16GBのメモリと高性能GPUを搭載しており、フルHD動画の編集に最適です。」',
    },
    {
      icon: Apple,
      industry: '食品・グルメ',
      example: 'アレルギーや賞味期限の質問に対応',
      description: 'お客様：「この商品に小麦は入っていますか？」\nAI：「いいえ、こちらの商品は小麦不使用です。グルテンフリーの原材料のみを使用しております。」',
    },
    {
      icon: Package,
      industry: '雑貨・インテリア',
      example: '商品の使い方や配送について案内',
      description: 'お客様：「この棚の組み立ては難しいですか？」\nAI：「工具不要で約15分で組み立て可能です。詳しい組み立て説明書も付属しています。」',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            幅広い業種で導入可能です
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            商品の特性に合わせて、AIが最適な回答を提供します
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card key={index} className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{useCase.industry}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {useCase.example}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm whitespace-pre-line leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
