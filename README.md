# Makasete AI - Landing Page & Demo

ECサイトの売上を最大化するAIチャットボット「Makasete AI」のランディングページ、およびデモサイト「読書福蔵」のプロジェクトです。

## 🚀 技術スタック

### 言語・フレームワーク
- **Language**: [TypeScript](https://www.typescriptlang.org/) ^5.7.2
- **Frontend Framework**: [Next.js](https://nextjs.org/) (App Router) ^16.1.6
- **Library**: [React](https://react.dev/) ^19.0.0

### スタイリング・UI
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) ^3.4.16
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (based on [Radix UI](https://www.radix-ui.com/))
- **Icons**: [Lucide React](https://lucide.dev/) ^0.446.0, [React Icons](https://react-icons.github.io/react-icons/) ^5.5.0
- **Animations**: [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)

### フォーム・バリデーション
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) ^7.53.0
- **Validation**: [Zod](https://zod.dev/) ^3.23.8

### パッケージ管理・ビルド
- **Package Manager**: [pnpm](https://pnpm.io/) ^10.29.3
- **Deployment**: [Netlify](https://www.netlify.com/)

## 🏗️ システム構成

### 構成概要
本プロジェクトは、Next.jsのApp Routerを採用したシングルリポジトリ構成です。

- **Landing Page**: ルートディレクトリ (`app/page.tsx`)
- **Demo Site (読書福蔵)**: `/dokusho-fukuzo` パス配下 (`app/dokusho-fukuzo/`)

### 外部連携
- **API**: 外部のデータ提供API (`https://your-api-url.com/api`)
  - 本の一覧、ニュース記事の取得に使用
- **AI Widget**: Makasete AI 自体のボットウィジェット (`widget.js`) をデモページに統合
- **Analytics**: Google Tag Manager (G-ZLDXLJSPQ4 / G-DHY3JWPP9M)

## 🛠️ 開発ガイド

### セットアップ
```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

### ビルド
```bash
pnpm build
```

### フォルダ構造
- `app/`: Next.js App Router のページとレイアウト
- `components/`: UIコンポーネント（`ui/` は shadcn/ui）
- `lib/`: ユーティリティ関数やAPIクライアント
- `public/`: 静的資産（画像、ファビコン等）
- `types/`: 型定義ファイル
