import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "The Woods Brand Guide",
  description: "Internal brand guide for The Woods at Bridal Aisle. Not linked from the public site.",
  robots: { index: false, follow: false },
};

const COLORS = [
  { name: 'Forest', hex: '#24362C', use: 'Page background, header, buttons' },
  { name: 'Bone', hex: '#F1EADF', use: 'Wordmark, text on dark' },
  { name: 'Brass', hex: '#A99A6F', use: "Men's Suits line, rules, labels" },
  { name: 'Walnut', hex: '#57402F', use: 'Rent section' },
  { name: 'Black', hex: '#1C1C1A', use: 'Own Your Suit, footer' },
];

const MULTI_COLOR = [
  {
    name: 'Dark backgrounds',
    detail: 'Bone and brass',
    file: 'the-woods-logo-on-dark',
    well: 'dark',
  },
  {
    name: 'Light backgrounds',
    detail: 'Forest and walnut',
    file: 'the-woods-logo-on-light',
    well: 'light',
  },
];

const SOLID = [
  { name: 'Forest', hex: '#24362C', file: 'the-woods-logo-solid-forest', well: 'light' },
  { name: 'Bone', hex: '#F1EADF', file: 'the-woods-logo-solid-bone', well: 'dark' },
  { name: 'Brass', hex: '#A99A6F', file: 'the-woods-logo-solid-brass', well: 'dark' },
  { name: 'Walnut', hex: '#57402F', file: 'the-woods-logo-solid-walnut', well: 'light' },
];

function LogoFile({
  name,
  detail,
  file,
  well,
}: {
  name: string;
  detail: string;
  file: string;
  well: string;
}) {
  return (
    <figure>
      <div className={`woods-guide-download-preview woods-guide-download-${well}`}>
        <img
          src={`/mens-suits/logo/${file}.svg`}
          alt={`${name} Woods lockup`}
          width={2528}
          height={1964}
        />
      </div>
      <figcaption>
        {name}
        <span>{detail}</span>
      </figcaption>
      <div className="woods-guide-download-links">
        <a href={`/mens-suits/logo/${file}.svg`} download>SVG</a>
        <a href={`/mens-suits/logo/${file}.png`} download>PNG</a>
      </div>
    </figure>
  );
}

export default function WoodsBrandGuidePage() {
  return (
    <main className="woods-guide">
      <div className="woods-guide-inner">
        <h1>The Woods brand guide</h1>
        <p className="woods-guide-lede">
          Share this page at <span>/mens-suits/brand-guide</span>. It is not in the menu, the footer, or the sitemap.
        </p>

        <section>
          <h2>Lockup</h2>
          <p>
            Trees, then The Woods, then Men&apos;s Suits, then by Bridal Aisle. Header, footer, and the phone menu use the multi-color mark on dark. Files are transparent, and the text is outlined.
          </p>

          <h3 className="woods-guide-download-heading">Multi-color</h3>
          <div className="woods-guide-downloads">
            {MULTI_COLOR.map((logo) => (
              <LogoFile key={logo.file} {...logo} />
            ))}
          </div>

          <h3 className="woods-guide-download-heading">Solid</h3>
          <div className="woods-guide-downloads">
            {SOLID.map((logo) => (
              <LogoFile key={logo.file} {...logo} detail={logo.hex} />
            ))}
          </div>

          <div className="woods-guide-rules">
            <div>
              <h3>Use</h3>
              <ul>
                <li>Multi-color on the site: bone and brass on forest, walnut, or black.</li>
                <li>Multi-color on bone or white: forest trees and name, walnut lines.</li>
                <li>A solid file when the whole mark has to be one ink.</li>
                <li>Bone and brass solids on dark. Forest and walnut solids on light.</li>
              </ul>
            </div>
            <div>
              <h3>Leave out</h3>
              <ul>
                <li>Suits on its own, or A department of Bridal Aisle.</li>
                <li>Men&apos;s Suits beside The Woods instead of under it.</li>
                <li>The trees without the words.</li>
                <li>Colors outside this set.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Color</h2>
          <ul className="woods-guide-swatches">
            {COLORS.map((color) => (
              <li key={color.hex}>
                <span className="woods-guide-chip" style={{ background: color.hex }} />
                <span className="woods-guide-swatch-name">{color.name}</span>
                <span className="woods-guide-hex">{color.hex}</span>
                <span className="woods-guide-use">{color.use}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Type</h2>
          <div className="woods-guide-type">
            <p className="woods-guide-specimen-name">The Woods</p>
            <p className="woods-guide-specimen-meta">Libre Caslon Display. The name only.</p>
            <p className="woods-guide-specimen-headline">For the Groom, the Groomsmen</p>
            <p className="woods-guide-specimen-meta">Playfair Display. Page headlines.</p>
          </div>
        </section>

        <section>
          <h2>Partner logos</h2>
          <p>Show them in white on the dark section they belong to. Don&apos;t redraw them or set them in another typeface.</p>
          <div className="woods-guide-partners">
            <figure>
              <div className="woods-guide-partner-well woods-guide-partner-walnut">
                <Image src="/home/dubois-logo.png" alt="DuBois Formalwear" width={160} height={80} />
              </div>
              <figcaption>DuBois. Rent section only.</figcaption>
            </figure>
            <figure>
              <div className="woods-guide-partner-well woods-guide-partner-black">
                <Image src="/home/psf-logo.png" alt="Pure Silk Fabrics" width={180} height={80} />
              </div>
              <figcaption>Pure Silk. Own Your Suit.</figcaption>
            </figure>
            <figure>
              <div className="woods-guide-partner-well woods-guide-partner-black">
                <Image src="/home/allure-suits-tuxedos.png" alt="Allure Suits & Tuxedos" width={180} height={80} />
              </div>
              <figcaption>Allure. Own Your Suit, beside Pure Silk.</figcaption>
            </figure>
          </div>
        </section>
      </div>
    </main>
  );
}
