import Link from 'next/link';

type WoodsWordmarkProps = {
  href?: string;
  size?: 'nav' | 'footer' | 'mobile';
};

export default function WoodsWordmark({ href = '/mens-suits', size = 'nav' }: WoodsWordmarkProps) {
  return (
    <Link href={href} className={`woods-wordmark woods-wordmark-${size}`}>
      <span className="woods-wordmark-name">The Woods</span>
      <span className="woods-wordmark-sub">Men&apos;s Suits</span>
    </Link>
  );
}
