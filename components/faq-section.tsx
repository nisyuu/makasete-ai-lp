import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            よくある質問
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            導入前の疑問にお答えします
          </p>

          <div className="text-center">
            <p className="text-muted-foreground mb-6 text-lg">
              その他のご質問がございましたら、お気軽にお問い合わせください
            </p>
            <Link href="https://aiform.nisyuu.com/view/PgMRN033hK9QkongeWWS" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
