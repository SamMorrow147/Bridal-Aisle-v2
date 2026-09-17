import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/app/lib/site';
import { getAllSlugs, getPostBySlug } from '@/app/lib/blog';
import BlogPostContent from '../BlogPostContent';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: 'Not Found' };
  }
  return {
    title: post.seoTitle ?? `${post.title} | Bridal Aisle Boutique Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <main className="page-container">
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <article className="blog-section">
        <div className="blog-container">
          <p className="blog-back">
            <Link href="/blog">← Our Blog</Link>
          </p>
          <div className="blog-post-header">
            <time className="blog-date" dateTime={post.date}>
              {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1>{post.title}</h1>
          </div>
          <BlogPostContent paragraphs={post.paragraphs} blocks={post.blocks} faqs={post.faqs} />
          <p className="blog-back blog-back-bottom">
            <Link href="/blog">← Back to Our Blog</Link>
          </p>
        </div>
      </article>
    </main>
  );
}
