'use client';

import { Card, CardContent } from '@/components/ui/card';
import { UserPlus, Table, Code } from 'lucide-react';
import { useState } from 'react';

export function HowItWorksSection() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'アカウント登録',
      description: 'わずか3分で登録完了。',
      details: '管理画面でチャットボットの設定や分析データを確認できます。',
    },
    {
      number: '02',
      icon: Table,
      title: '商品データを入力',
      description: 'Googleスプレッドシートに商品情報を入力。商品名、価格、説明、画像URLなどを記載します。',
      details: '商品情報は自由にカスタマイズできます。',
    },
    {
      number: '03',
      icon: Code,
      title: 'サイトに埋め込み',
      description: '発行されたscriptタグをHTMLに追加するだけ。1分で導入完了です。',
      details: 'WordPress、Shopify、独自CMSなど、あらゆるサイトに対応しています。',
      code: `<script src="https://chatbot.example.com/embed.js" data-bot-id="your-bot-id"></script>`,
    },
  ];

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedStep(index);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            導入イメージ
            <span className="text-muted-foreground font-normal">（準備中）</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            特別な技術知識は不要。誰でも簡単にAIチャットボットを導入できます
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="text-6xl font-bold text-primary/10">
                          {step.number}
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-2 text-base">
                        {step.description}
                      </p>
                      <p className="text-sm text-muted-foreground/80">
                        {step.details}
                      </p>

                      {step.code && (
                        <div className="mt-4 relative">
                          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                            <code className="text-sm text-slate-100 font-mono">
                              {step.code}
                            </code>
                          </div>
                          <button
                            onClick={() => handleCopy(step.code!, index)}
                            className="absolute top-2 right-2 px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white text-xs rounded transition-colors"
                          >
                            {copiedStep === index ? 'コピー済み!' : 'コピー'}
                          </button>
                        </div>
                      )}
                    </div>
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
