export interface Post {
  title: string;
  slug: string;
  date: string;
  categories: string[];
  tags: string[];
  content: string;
  excerpt: string;
}

export interface PostSummary {
  title: string;
  slug: string;
  date: string;
  categories: string[];
  tags: string[];
  excerpt: string;
}