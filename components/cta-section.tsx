import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-blue-500/10 animate-gradient" />
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/20 mb-6 border border-primary/30 animate-float">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            今すぐAIで
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-gradient">
              売上アップ
            </span>
            を実現
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            AIチャットボットを導入して、顧客対応を効率化できます。
            セットアップが簡単で、すぐに運用を開始できます。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="https://github.com/nisyuu/makasete-ai" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-base px-8 group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 duration-300">
                無料で始める
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link href="https://dokusho-fukuzo.netlify.app/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-base px-8 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all">
                <Play className="mr-2 h-5 w-5" />
                デモを見る
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              無料利用可能
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              カスタマイズ可能
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
