import postsData from '@/content/blog/posts.json';

export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'list'; items: string[] }
  | { type: 'takeaways'; heading?: string; items: string[] }
  | { type: 'cta'; text: string; href: string; label: string };

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  seoTitle?: string;
  paragraphs?: string[];
  blocks?: BlogBlock[];
  faqs?: BlogFaq[];
};

export function getAllPosts(): BlogPost[] {
  return [...(postsData.posts as BlogPost[])].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return (postsData.posts as BlogPost[]).find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return (postsData.posts as BlogPost[]).map((p) => p.slug);
}
