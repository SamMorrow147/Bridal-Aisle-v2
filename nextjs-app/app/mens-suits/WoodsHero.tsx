import Link from 'next/link';

export default function WoodsHero() {
  return (
    <section className="mens-suits-hero woods-hero">
      <div className="woods-hero-bg" aria-hidden="true" />
      <div className="mens-hero-overlay woods-hero-overlay" />
      <div
        className="woods-hero-fg"
        role="img"
        aria-label="Groom in a charcoal suit fastening a cufflink"
      />
      <div className="mens-hero-content">
        <div className="woods-hero-copy">
          <h1 className="mens-hero-title">
            For the Groom,<br />the Groomsmen<br />&amp; The Great North
          </h1>
        </div>
        <div className="woods-hero-cta">
          <Link href="/appointments#appointment-5" className="woods-cta-btn">
            Book Your Fitting
          </Link>
        </div>
      </div>
    </section>
  );
}
