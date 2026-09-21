import Link from 'next/link';

type WoodsWordmarkProps = {
  href?: string;
  size?: 'nav' | 'footer' | 'mobile';
  hideSub?: boolean;
};

export default function WoodsWordmark({ href = '/mens-suits', size = 'nav', hideSub = false }: WoodsWordmarkProps) {
  return (
    <Link href={href} className={`woods-wordmark woods-wordmark-${size}`}>
      <span className="woods-wordmark-name">The Woods</span>
      {!hideSub && <span className="woods-wordmark-sub">Suits</span>}
    </Link>
  );
}
