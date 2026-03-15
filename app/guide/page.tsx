import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Headphones,
  Zap,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "導入ガイド | Makasete AI",
  description:
    "Makasete AIの導入手順を分かりやすく解説します。スプレッドシートひとつで、あなたのサイトにAI接客を導入する4つのステップをご紹介。",
};

const slides = [
  {
    title: "Makasete AI 導入ガイド",
    subtitle: "スプレッドシートで始める、一歩先のAI接客",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Makasete AI 導入ガイド
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          スプレッドシートで始める、一歩先のAI接客
        </p>
      </div>
    ),
  },
  {
    title: "Makasete AI とは？",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Makasete AI とは？
        </h2>
        <p className="text-2xl font-semibold">
          スプレッドシートひとつで、チャットボットを自由自在に管理。
        </p>
        <p className="text-xl leading-relaxed text-muted-foreground">
          プログラミングの知識がなくても、使い慣れた
          <span className="text-foreground font-bold">スプレッドシート</span>
          を更新するだけで、AIの知識やキャラクターを自由自在に変えられるチャットボットです。
        </p>
      </div>
    ),
  },
  {
    title: "1. 4つの大きな特徴",
    content: (
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          1. 4つの大きな特徴
        </h2>
        <ul className="space-y-4 text-lg md:text-xl">
          <li className="flex items-start">
            <span className="bg-primary/20 text-primary p-2 rounded-lg mr-4 mt-1 shrink-0">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </span>
            <div>
              <span className="font-bold">更新がとにかく簡単</span>
              <p className="text-muted-foreground text-base md:text-lg">
                商品情報やFAQはシートを書き換えるだけ。エンジニアの手を借りずに即座に反映。
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-primary/20 text-primary p-2 rounded-lg mr-4 mt-1 shrink-0">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </span>
            <div>
              <span className="font-bold">スプレッドシートがDBに</span>
              <p className="text-muted-foreground text-base md:text-lg">
                シートのデータはAPI経由で取得可能。他サービスとの連携も柔軟です。
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-primary/20 text-primary p-2 rounded-lg mr-4 mt-1 shrink-0">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </span>
            <div>
              <span className="font-bold">「声」で話せる</span>
              <p className="text-muted-foreground text-base md:text-lg">
                最新の音声合成技術により、温かみのある声で接客。テキスト入力の手間も省けます。
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-primary/20 text-primary p-2 rounded-lg mr-4 mt-1 shrink-0">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </span>
            <div>
              <span className="font-bold">お待たせしません</span>
              <p className="text-muted-foreground text-base md:text-lg">
                独自のストリーミング技術で、AIの回答待ち時間を最小限に。
              </p>
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "2. なぜ Makasete AI なのか？",
    content: (
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          2. なぜ Makasete AI なのか？
        </h2>
        <div className="overflow-hidden rounded-xl border bg-card">
          <table className="w-full text-left">
            <thead className="bg-muted/50 text-sm md:text-base">
              <tr>
                <th className="p-4 font-bold border-b">比較項目</th>
                <th className="p-4 font-bold border-b text-primary">
                  Makasete AI
                </th>
                <th className="p-4 font-bold border-b text-muted-foreground text-xs md:text-base">
                  他社ツール
                </th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-base">
              {[
                {
                  label: "導入コスト",
                  our: "圧倒的に安い",
                  other: "高額な初期費用",
                },
                {
                  label: "更新の手軽さ",
                  our: "シートのみ",
                  other: "管理画面の学習",
                },
                { label: "導入速度", our: "最短即日〜", other: "数週間〜" },
                {
                  label: "操作感",
                  our: "使い慣れたツール",
                  other: "専用ツールの習得",
                },
              ].map((row, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="p-4 font-medium">{row.label}</td>
                  <td className="p-4 text-primary font-bold">● {row.our}</td>
                  <td className="p-4 text-muted-foreground">△ {row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: "3. こんなお悩みを解決します",
    content: (
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          3. こんなお悩みを解決します
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "接客の質を上げたい",
              desc: "24時間365日、AIが丁寧におすすめ商品を提案。どんなときでもチャンスを逃しません。",
            },
            {
              title: "問い合わせ対応を減らしたい",
              desc: "よくある質問に自動回答。スタッフが本当に集中すべき業務に時間を使えます。",
            },
            {
              title: "導入に時間をかけたくない",
              desc: "スプレッドシートに情報を整理するだけで、すぐに接客をスタート。",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-primary/20 bg-primary/5"
            >
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "4. 活用のイメージ",
    content: (
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          4. 活用のイメージ
        </h2>
        <div className="space-y-4 text-lg md:text-xl">
          <div className="p-4 rounded-lg bg-secondary/50 border-l-4 border-primary">
            <span className="font-bold text-primary">ネットショップ：</span>
            「予算5,000円でプレゼントを探して」といった相談に答え、最適な商品を提案。
          </div>
          <div className="p-4 rounded-lg bg-secondary/50 border-l-4 border-primary">
            <span className="font-bold text-primary">クリニック・サロン：</span>
            営業時間やアクセス、初めての方へのメニュー案内を、音声対話で分かりやすく。
          </div>
          <div className="p-4 rounded-lg bg-secondary/50 border-l-4 border-primary">
            <span className="font-bold text-primary">企業サイト：</span>
            複雑なサービス内容を、お客様の疑問に合わせて対話形式で一つずつ丁寧に説明。
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "5. セキュリティ",
    content: (
      <div className="space-y-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary flex items-center justify-center">
          <ShieldCheck className="mr-3 w-8 h-8 md:w-10 md:h-10 text-primary" />
          5. セキュリティ
        </h2>
        <p className="text-xl">
          お客様の大切なデータを守るため、セキュリティに配慮した設計をしています。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-xl border bg-card">
            <h3 className="font-bold mb-2 flex items-center text-sm md:text-base">
              <CheckCircle2 className="mr-2 w-5 h-5 text-primary shrink-0" />
              安心のシステム
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              サービスには高いセキュリティを持つGoogle社の製品(Google
              Cloud)を採用しています。
            </p>
          </div>
          <div className="p-6 rounded-xl border bg-card">
            <h3 className="font-bold mb-2 flex items-center text-sm md:text-base">
              <CheckCircle2 className="mr-2 w-5 h-5 text-primary shrink-0" />
              環境の選択が可能
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              Makasete AIの提供する環境での稼働はもちろん、お客様自身のGoogle
              Cloud環境への導入・運用も可能です。
            </p>
          </div>
          <div className="p-6 rounded-xl border bg-card">
            <h3 className="font-bold mb-2 flex items-center text-sm md:text-base">
              <CheckCircle2 className="mr-2 w-5 h-5 text-primary shrink-0" />
              アクセス制限
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              シートの共有設定は専用アカウントのみに限定可能。外部への不必要な情報漏洩を防ぎます。
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "6. 充実のサポート体制",
    content: (
      <div className="space-y-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary flex items-center justify-center">
          <Headphones className="mr-3 w-8 h-8 md:w-10 md:h-10 text-primary" />
          6. 充実のサポート体制
        </h2>
        <p className="text-xl">設定に不安がある方も、ご安心ください。</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {[
            {
              title: "初期設定代行",
              desc: "シートの構成からチャットボットの性格付けまでを代行して設定。",
            },
            {
              title: "運用アドバイス",
              desc: "どんなプロンプトやデータを入れると良いかサポート。",
            },
            {
              title: "個別相談",
              desc: "可能な限りご要望にお応えします。お気軽にご相談ください。",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex-1 p-6 rounded-xl border bg-card hover:border-primary/50 transition-colors"
            >
              <h3 className="font-bold mb-2 text-sm md:text-base">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "7. 準備するのは「スプレッドシート」だけ",
    content: (
      <div className="space-y-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          7. 準備するのは「スプレッドシート」だけ
        </h2>
        <p className="text-xl">
          AIに教えたい内容を、シートに書き込むだけで準備完了です。
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center text-left max-w-3xl mx-auto">
          <div className="flex-1 p-6 rounded-xl border bg-card">
            <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <Zap className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">プロンプトシート</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              「あなたは親切な店員です」といったAIの性格や話し方を決めます。
            </p>
          </div>
          <div className="flex-1 p-6 rounded-xl border bg-card">
            <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">知識用シート</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              商品名、FAQなどを、カテゴリごとに自由に管理できます。
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "8. 導入の4ステップ",
    content: (
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          8. 導入の4ステップ
        </h2>
        <div className="relative border-l-2 border-primary/30 ml-4 space-y-6 md:space-y-10">
          {[
            {
              step: "1",
              title: "お問い合わせ",
              desc: "お問い合わせフォームよりご連絡ください。1営業日以内にご返信します。",
            },
            {
              step: "2",
              title: "ヒアリング・お見積もり",
              desc: "導入目的をヒアリングし、最適なプランをご提案します。",
            },
            {
              step: "3",
              title: "ボット発行 & シート共有",
              desc: "専用のチャットボットと管理用シートをお渡しします。",
            },
            {
              step: "4",
              title: "サイトへ導入",
              desc: "発行された1行のコードをサイトに貼り付けるだけで接客開始！",
            },
          ].map((item, i) => (
            <div key={i} className="relative pl-10">
              <span className="absolute -left-[21px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                {item.step}
              </span>
              <h3 className="text-lg md:text-2xl font-bold">{item.title}</h3>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "まとめ",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
        <h2 className="text-4xl font-bold text-primary">まとめ</h2>
        <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
          Makasete AI は、
          <br />
          <span className="text-foreground font-bold underline decoration-primary">
            「だれでも」「手軽に」「高品質な」
          </span>
          <br />
          AI接客を導入できるツールです。
        </p>
        <p className="text-lg md:text-xl text-muted-foreground">
          難しいことはAIにまかせて、
          <br />
          あなたは「どんなおもてなしをしたいか」を考えるだけ。
        </p>
      </div>
    ),
  },
  {
    title: "さあ、始めましょう！",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold">さあ、始めましょう！</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            href="https://aiform.nisyuu.com/view/PgMRN033hK9QkongeWWS"
            target="_blank"
          >
            <Button
              size="lg"
              className="text-lg md:text-xl px-12 py-8 h-auto shadow-xl shadow-primary/25"
            >
              お問い合わせはこちら
            </Button>
          </Link>
          <Link href="/dokusho-fukuzo">
            <Button
              size="lg"
              variant="outline"
              className="text-lg md:text-xl px-12 py-8 h-auto"
            >
              デモを体験する
            </Button>
          </Link>
        </div>
      </div>
    ),
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            トップへ戻る
          </Link>
          <div className="text-sm font-medium text-muted-foreground">
            Makasete AI 導入ガイド
          </div>
        </div>
      </nav>

      {/* Slide Container */}
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll pt-16">
        {slides.map((slide, index) => (
          <section
            key={index}
            className="snap-start h-screen flex items-center justify-center p-4 md:p-12 relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container max-w-5xl bg-card border shadow-2xl rounded-3xl p-6 md:p-16 h-[75vh] md:h-[70vh] flex flex-col justify-center relative z-10 transition-all hover:border-primary/30 duration-500 overflow-y-auto">
              {slide.content}

              {/* Slide Number */}
              <div className="absolute bottom-6 md:bottom-8 right-8 md:right-12 text-muted-foreground/50 font-mono text-xs md:text-sm">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </div>
            </div>

            {/* Hint for scrolling */}
            {index === 0 && (
              <div className="absolute bottom-10 inset-x-0 animate-bounce flex flex-col items-center text-muted-foreground pointer-events-none">
                <span className="text-xs mb-2">スクロールして進む</span>
                <ChevronLeft className="rotate-[-90deg] w-6 h-6" />
              </div>
            )}
          </section>
        ))}
      </main>

      {/* Navigation Hint Mobile */}
      <div className="fixed bottom-4 right-4 md:hidden pointer-events-none opacity-50">
        <div className="bg-primary/20 p-2 rounded-full backdrop-blur-sm">
          <ChevronRight className="rotate-90 w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
