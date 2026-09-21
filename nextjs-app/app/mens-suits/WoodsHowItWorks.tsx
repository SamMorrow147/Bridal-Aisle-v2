'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function WoodsHowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [motion, setMotion] = useState<'idle' | 'ready' | 'inview'>('idle');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMotion('inview');
      return;
    }

    setMotion('ready');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMotion('inview');
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -4% 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mens-process-section woods-process-section"
      data-motion={motion}
    >
      <h2 className="mens-process-heading">How it works</h2>

      <ol className="woods-steps">
        <li>
          <Link href="/appointments#appointment-5" className="woods-step woods-step-link">
            <span className="woods-step-num">01</span>
            <h3>Book your fitting</h3>
            <p>Come in. We&apos;ll take it from there.</p>
          </Link>
        </li>
        <li>
          <div className="woods-step">
            <span className="woods-step-num">02</span>
            <h3>Pick the look</h3>
            <p>Suit, shirt, tie, and shoes.</p>
          </div>
        </li>
        <li>
          <div className="woods-step">
            <span className="woods-step-num">03</span>
            <h3>Get measured</h3>
            <p>You and the rest of the party.</p>
          </div>
        </li>
        <li>
          <div className="woods-step">
            <span className="woods-step-num">04</span>
            <h3>Try it on</h3>
            <p>Everything gets checked before the wedding.</p>
          </div>
        </li>
        <li>
          <div className="woods-step">
            <span className="woods-step-num">05</span>
            <h3>Get married</h3>
            <p>Return the rentals. Keep the photos.</p>
          </div>
        </li>
      </ol>
    </section>
  );
}
