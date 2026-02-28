'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchNews } from "@/lib/dokusho-fukuzo/api";
import { News } from "@/types/dokusho-fukuzo";

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        const sorted = [...data].sort(
          (a, b) =>
            new Date(b.published_at).getTime() -
            new Date(a.published_at).getTime()
        );
        setNewsItems(sorted);
      } catch (err) {
        console.error(err);
        setError(
          "ニュースの取得に失敗しました。しばらくしてから再度お試しください。"
        );
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-gray-600">読み込み中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          ニュース
        </p>
        <h1 className="text-4xl font-serif font-bold text-gray-900">
          ニュース一覧
        </h1>
      </div>

      {newsItems.length === 0 ? (
        <div className="text-center py-12 text-gray-600">
          ニュースはまだありません。
        </div>
      ) : (
        <div className="space-y-6">
          {newsItems.map((news) => (
            <Link
              key={news.id}
              href={`/dokusho-fukuzo/news/${news.id}`}
              className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <p className="text-sm text-gray-500 mb-2">
                {new Date(news.published_at).toLocaleDateString()}
              </p>
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-3">
                {news.title}
              </h2>
              <p className="text-gray-600 line-clamp-3">{news.content}</p>
              <span className="mt-4 inline-flex text-gray-900 font-medium">
                続きを読む →
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
