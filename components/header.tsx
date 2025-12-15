'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageSquare } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Makasete AI</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              機能
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              デモ
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              導入方法
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              料金
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              FAQ
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              ログイン
            </Button>
            <Button size="sm">無料で始める</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              機能
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              デモ
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              導入方法
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              料金
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              FAQ
            </button>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm">
                ログイン
              </Button>
              <Button size="sm">無料で始める</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
