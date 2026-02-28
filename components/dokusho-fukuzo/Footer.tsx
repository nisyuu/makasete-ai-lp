'use client';

import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif font-semibold text-gray-900 mb-4">
              読書福蔵
            </h3>
            <p className="text-sm text-gray-600">
              皆さんの本棚のスキマをお埋めします。いいえ、お金は一銭もいただきません。お客様が満足されたらそれが何よりの報酬でございます。
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">サイトマップ</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/dokusho-fukuzo"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                トップ
              </Link>
              <Link
                href="/dokusho-fukuzo/books"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                本一覧
              </Link>
              <Link
                href="/dokusho-fukuzo/news"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                ニュース
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">開発者アカウント</h4>
            <div className="flex space-x-4">
              <a
                href="https://x.com/nishilyuu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} 読書福蔵. すべての権利を保有します。
          </p>
        </div>
      </div>
    </footer>
  );
}
