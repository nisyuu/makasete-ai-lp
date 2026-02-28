import { Book, News } from '@/types/dokusho-fukuzo';
import { withRetry } from '@/lib/dokusho-fukuzo/utils';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://makasete-bot-49773544105.asia-northeast1.run.app/api';

export async function fetchBooks(): Promise<Book[]> {
  const fetcher = async () => {
    const response = await fetch(`${API_BASE_URL}/books`);

    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  };
  return withRetry(fetcher, 5, 2000); // Retry 5 times with 2-second delay
}

export async function fetchBookById(id: string): Promise<Book | null> {
  const books = await fetchBooks();
  return books.find(book => book.id === id) || null;
}

export function getUniqueCategories(books: Book[]): string[] {
  const categories = books.map(book => book.category);
  return Array.from(new Set(categories)).filter(Boolean);
}

export async function fetchNews(): Promise<News[]> {
  const fetcher = async () => {
    const response = await fetch(`${API_BASE_URL}/news`);

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    return response.json();
  };
  return withRetry(fetcher, 5, 2000); // Retry 5 times with 2-second delay
}

export async function fetchNewsById(id: string): Promise<News | null> {
  const newsItems = await fetchNews();
  return newsItems.find(news => news.id === id) || null;
}
