import type { Metadata } from 'next';
import Link from 'next/link';
import AddToCalendar from '@/components/AddToCalendar';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'A Very Marry Day | Bridal Aisle Boutique',
  description:
    'Sunday, Nov. 29 at Bridal Aisle in Maple Grove. Santa Claus 10am–3pm, with reindeer from Johmar Farms and elves Holly & Spice. November is also our anniversary month.',
  alternates: {
    canonical: '/a-very-marry-day',
  },
  openGraph: {
    title: 'A Very Marry Day at Bridal Aisle',
    description:
      'Sunday, Nov. 29. Santa Claus 10am–3pm. Bring your camera for photos.',
    url: `${SITE_URL}/a-very-marry-day`,
  },
};

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'A Very Marry Day at Bridal Aisle',
  startDate: '2026-11-29T10:00:00-06:00',
  endDate: '2026-11-29T15:00:00-06:00',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  image: [
    `${SITE_URL}/november-event/santa.jpg`,
    `${SITE_URL}/november-event/bride.jpg`,
  ],
  location: {
    '@type': 'Place',
    name: 'Bridal Aisle',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '15825 95th Ave N',
      addressLocality: 'Maple Grove',
      addressRegion: 'MN',
      postalCode: '55369',
      addressCountry: 'US',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Bridal Aisle Boutique',
    url: SITE_URL,
    telephone: '+1-763-220-2319',
  },
  description:
    'Our community’s favorite Santa from The Woods is back at Bridal Aisle this year, joined by reindeer from Johmar Farms and his favorite singing elves, Holly & Spice.',
};

export default function VeryMarryDayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <main className="marry-page">
        <section className="marry-hero">
          <figure className="marry-polaroid marry-polaroid-left">
            <img src="/november-event/santa.jpg" alt="Santa holding a young girl" />
            <figcaption>Nov. 29</figcaption>
          </figure>
          <div className="marry-intro">
            <p className="marry-kicker">Sunday, Nov. 29</p>
            <h1 className="marry-title">
              <span>A Very</span>
              <span>Marry Day</span>
            </h1>
            <p className="marry-where">at Bridal Aisle</p>
            <p className="marry-when">Santa Claus, 10am – 3pm</p>
            <p className="marry-note">Bring your camera for photos!</p>
            <AddToCalendar className="marry-btn" />
          </div>
          <figure className="marry-polaroid marry-polaroid-right">
            <img src="/november-event/bride.jpg" alt="Bride in the snow holding a winter bouquet" />
            <figcaption>Anniversary</figcaption>
          </figure>
        </section>

        <section className="marry-details">
          <div>
            <h2>The day</h2>
            <p>
              Our community’s favorite Santa from The Woods is back at Bridal Aisle this year, joined by reindeer from Johmar Farms and his favorite singing elves, Holly &amp; Spice!
            </p>
            <p>
              Plus: games for the kids (and kids at heart), food trucks, tours of our store, and more!
            </p>
          </div>
          <div>
            <p className="marry-script">Brides</p>
            <h2>November is also Bridal Aisle’s anniversary month!</h2>
            <p>
              We are celebrating with discounted{' '}
              <Link href="/appointments">weekday VIP appointments</Link> (upon availability), vendor giveaways &amp; bride swag.
            </p>
            <p>
              Purchase a dress, suit, or secure your wedding date for suit rentals and you will be entered to win our Grand Prize! Winner will be announced at our event!
            </p>
            <p>
              A percentage of all of our November proceeds will be donated to one of our favorite charities!{' '}
              <a href="https://inspireandflourish.org" target="_blank" rel="noopener noreferrer">Inspire &amp; Flourish | Pet Rescue</a>.
            </p>
          </div>
        </section>

        <section className="marry-visit">
          <p>15825 95th Ave N</p>
          <p>Maple Grove, MN 55369</p>
          <p>
            <a href="tel:7632202319">763-220-2319</a>
          </p>
        </section>
      </main>
    </>
  );
}
