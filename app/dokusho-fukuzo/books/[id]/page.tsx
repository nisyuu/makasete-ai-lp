'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Book } from '@/types/dokusho-fukuzo';
import { fetchBooks } from '@/lib/dokusho-fukuzo/api';
import { ExternalLink, ArrowLeft } from 'lucide-react';

export default function BookDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [book, setBook] = useState<Book | null>(null);
  const [relatedBooks, setRelatedBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    const loadBook = async () => {
      if (!id) return;

      try {
        const books = await fetchBooks();
        const currentBook = books.find(b => b.id === id);

        if (currentBook) {
          setBook(currentBook);

          const related = books
            .filter(b => b.category === currentBook.category && b.id !== id)
            .slice(0, 4);
          setRelatedBooks(related);
        } else {
          setError('指定された本が見つかりませんでした。'); // Set error if book not found
        }
      } catch (error) {
        console.error('Error fetching book:', error);
        setError('本の読み込みに失敗しました。時間をおいてから再度お試しください。'); // Set error message
      } finally {
        setLoading(false);
      }
    };

    loadBook();
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-red-600">{error}</p>
        <div className="text-center mt-4">
          <Link href="/dokusho-fukuzo/books" className="text-gray-900 hover:underline">
            本一覧へ戻る
          </Link>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">本が見つかりませんでした</h1>
          <Link href="/dokusho-fukuzo/books" className="text-gray-700 hover:text-gray-900 underline">
            本一覧へ戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/dokusho-fukuzo/books"
        className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>本一覧へ戻る</span>
      </Link>

      <div className="mb-16">
        <div className="flex flex-col">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
              {book.category}
            </span>
          </div>

          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            {book.title}
          </h1>

          <p className="text-xl text-gray-700 mb-6">{book.author}</p>

          <div className="text-3xl font-bold text-gray-900 mb-6">
            ¥{parseInt(book.price).toLocaleString()}
          </div>

          {book.description && (
            <p className="text-gray-700 mb-8 leading-relaxed whitespace-pre-wrap">
              {book.description}
            </p>
          )}

          {book.published_at && (
            <p className="text-sm text-gray-600 mb-8">
              発売日: {book.published_at}
            </p>
          )}

          {(book.amazon_link || book.amazon_kindle_link) && (
            <div className="flex flex-col gap-3 w-full md:w-auto">
              {book.amazon_link && (
                <a
                  href={book.amazon_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors w-full md:w-auto"
                >
                  <span>Amazonで見る</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}

              {book.amazon_kindle_link && (
                <a
                  href={book.amazon_kindle_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-500 transition-colors w-full md:w-auto"
                >
                  <span>Kindle版で読む</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {relatedBooks.length > 0 && (
        <section>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">同じカテゴリの本</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {relatedBooks.map((relatedBook) => (
              <Link
                key={relatedBook.id}
                href={`/dokusho-fukuzo/books/${relatedBook.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="p-4">
                    <h3 className="font-serif font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-gray-700 transition-colors">
                      {relatedBook.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{relatedBook.author}</p>
                    <p className="text-lg font-semibold text-gray-900">
                      ¥{parseInt(relatedBook.price).toLocaleString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
