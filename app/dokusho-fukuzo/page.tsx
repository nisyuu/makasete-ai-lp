'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Book, News } from "@/types/dokusho-fukuzo";
import { fetchBooks, fetchNews } from "@/lib/dokusho-fukuzo/api";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<News[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        const sorted = [...data].sort(
          (a, b) =>
            new Date(b.published_at).getTime() -
            new Date(a.published_at).getTime()
        );
        setNews(sorted.slice(0, 3));
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setNewsLoading(false);
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

  return (
    <div>
      <section className="bg-gradient-to-br from-neutral-100 to-stone-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            DOKUSHO FUKUZO
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            皆さんの本棚のスキマをお埋めします。いいえ、お金は一銭もいただきません。お客様が満足されたらそれが何よりの報酬でございます。
          </p>
          <Link
            href="/dokusho-fukuzo/books"
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span>本を探す</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                ニュース
              </p>
              <h2 className="text-3xl font-serif font-bold text-gray-900">
                最新ニュース
              </h2>
            </div>
            <Link
              href="/dokusho-fukuzo/news"
              className="inline-flex items-center space-x-2 text-gray-900 font-semibold hover:translate-x-1 transition-transform"
            >
              <span>すべてのニュースを見る</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {newsLoading ? (
            <div className="text-gray-600">ニュースを読み込み中...</div>
          ) : news.length === 0 ? (
            <div className="text-gray-600">まだニュースがありません。</div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {news.map((item) => (
                <Link
                  key={item.id}
                  href={`/dokusho-fukuzo/news/${item.id}`}
                  className="bg-neutral-50 border border-gray-100 rounded-2xl p-6 hover:border-gray-300 hover:bg-white transition-colors"
                >
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(item.published_at).toLocaleDateString()}
                  </p>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">{item.content}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-neutral-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
            注目の本
          </h2>
          {books.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              まだ本が登録されていません。
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {books.map((book) => (
                <Link key={book.id} href={`/dokusho-fukuzo/books/${book.id}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="p-4">
                      <h3 className="font-serif font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-gray-700 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {book.author}
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        ¥{parseInt(book.price).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
