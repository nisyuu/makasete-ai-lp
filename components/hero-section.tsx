import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 animate-gradient" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-primary/20 border border-primary/30 rounded-full animate-slide-up backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary mr-2 animate-pulse" />
            <span className="text-sm font-medium text-primary">
              ECサイトの売上を最大化する新しい方法
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            AIが24時間、
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-gradient">
              お客様の質問に対応
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            音声とテキストで対応するAI販売員が、商品の相談から購入までをサポート。scriptタグを1行追加するだけで、今すぐECサイトに導入できます。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-base px-8 group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 duration-300">
              無料で始める
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="https://dokusho-fukuzo.netlify.app/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-base px-8 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all">
                <Play className="mr-2 h-5 w-5" />
                デモを見る
              </Button>
            </Link>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
            <div className="aspect-video bg-gradient-to-br from-slate-900 via-black to-slate-800 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
              <div className="text-center p-8 relative z-10 animate-float">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center border border-primary/30 backdrop-blur-sm">
                  <Play className="h-12 w-12 text-primary" />
                </div>
                <p className="text-muted-foreground">チャットボットのデモ画像</p>
              </div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-ping" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
