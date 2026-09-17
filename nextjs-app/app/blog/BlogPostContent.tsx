import Link from 'next/link';
import FAQ from '@/components/FAQ';
import type { BlogBlock, BlogFaq } from '@/app/lib/blog';

function BlogBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2 key={i} className="blog-post-heading">
                {block.text}
              </h2>
            );
          case 'paragraph':
            return <p key={i}>{block.text}</p>;
          case 'list':
            return (
              <ul key={i} className="blog-post-list">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case 'table':
            return (
              <div key={i} className="blog-table-wrap">
                <table className="blog-table">
                  <thead>
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, cellIndex) => (
                          <td key={`${row[0]}-${cellIndex}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'takeaways':
            return (
              <div key={i} className="blog-takeaways">
                {block.heading ? <h3>{block.heading}</h3> : null}
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          case 'cta':
            return (
              <div key={i} className="blog-cta">
                <p>{block.text}</p>
                <Link href={block.href} className="appointment-cta-btn">
                  {block.label}
                </Link>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

export default function BlogPostContent({
  paragraphs,
  blocks,
  faqs,
}: {
  paragraphs?: string[];
  blocks?: BlogBlock[];
  faqs?: BlogFaq[];
}) {
  return (
    <>
      <div className="blog-post-body">
        {blocks && blocks.length > 0 ? (
          <BlogBlocks blocks={blocks} />
        ) : (
          paragraphs?.map((text) => <p key={text}>{text}</p>)
        )}
      </div>
      {faqs && faqs.length > 0 ? (
        <section className="blog-faq" aria-labelledby="blog-faq-heading">
          <h2 id="blog-faq-heading" className="blog-post-heading">
            Frequently Asked Questions
          </h2>
          <FAQ faqs={faqs} />
        </section>
      ) : null}
    </>
  );
}
