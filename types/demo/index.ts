export interface Book {
  id: string;
  title: string;
  author: string;
  price: string;
  category: string;
  image_url: string;
  description: string;
  amazon_link: string;
  amazon_kindle_link?: string;
  published_at: string;
}

export interface News {
  id: string;
  title: string;
  content: string;
  published_at: string;
}
