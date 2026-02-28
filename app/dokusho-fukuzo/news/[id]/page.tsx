'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { News } from '@/types/dokusho-fukuzo';
import { fetchNews } from '@/lib/dokusho-fukuzo/api';
import { ArrowLeft } from 'lucide-react';

export default function NewsDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    const loadNews = async () => {
      if (!id) return;

      try {
        const data = await fetchNews();
        const current = data.find(item => item.id === id) || null;
        setNews(current);
        if (!current) {
          setError('指定されたニュースが見つかりませんでした。');
        }
      } catch (error) {
        console.error('Error fetching news item:', error);
        setError('ニュースの読み込みに失敗しました。時間をおいてから再度お試しください。'); // Set error message
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-gray-600">読み込み中...</div>
      </div>
    );
  }

  // Display error message if fetching failed
  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-red-600">{error}</p>
        <div className="text-center mt-4">
          <Link href="/dokusho-fukuzo/news" className="text-gray-900 hover:underline">
            ニュース一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-600">ニュースが見つかりませんでした。</p>
        <div className="text-center mt-4">
          <Link href="/dokusho-fukuzo/news" className="text-gray-900 hover:underline">
            ニュース一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/dokusho-fukuzo/news"
        className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>ニュース一覧へ</span>
      </Link>

      <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
        {new Date(news.published_at).toLocaleDateString()}
      </p>

      <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">{news.title}</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {news.content}
        </p>
      </div>
    </div>
  );
}
