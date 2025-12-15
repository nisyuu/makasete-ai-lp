import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">
              ECサイトの売上を最大化する新しい方法
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            AIが24時間、
            <br />
            <span className="text-primary">お客様の質問に対応</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            音声とテキストで対応するAI販売員が、商品の相談から購入までをサポート。scriptタグを1行追加するだけで、今すぐECサイトに導入できます。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="text-base px-8 group">
              無料で始める
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              <Play className="mr-2 h-5 w-5" />
              デモを見る
            </Button>
          </div>

          <div className="relative rounded-xl overflow-hidden border shadow-2xl bg-gradient-to-br from-background to-muted/20">
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play className="h-12 w-12 text-primary" />
                </div>
                <p className="text-muted-foreground">チャットボットのデモ画像</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
