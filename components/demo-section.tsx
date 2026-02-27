import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Mic } from 'lucide-react';

export function DemoSection() {
  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              実際の動作をご確認ください
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AIチャットボットがどのように動作するか、デモサイトで体験できます
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-background rounded-xl p-8 border-2 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">テキストチャット</h3>
              <p className="text-muted-foreground mb-6">
                商品に関する質問をテキストで入力すると、AIが即座に de 的確な回答を返します。サイズ、色、在庫状況など、あらゆる質問に対応。
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 border-2 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Mic className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">音声チャット</h3>
              <p className="text-muted-foreground mb-6">
                マイクに話しかけるだけで質問可能。AIが音声認識で内容を理解し、音声またはテキストで回答します。
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/demo">
              <Button size="lg" className="text-base px-8 group">
                デモサイトを開く
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
