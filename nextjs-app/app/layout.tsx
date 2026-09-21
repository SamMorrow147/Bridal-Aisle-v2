import type { Metadata } from 'next';
import ErrorBoundary from '@/components/ErrorBoundary';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import SiteChrome from '@/components/SiteChrome';
import { SITE_URL } from '@/app/lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bridal Aisle Boutique | Minnesota\'s Premier Bridal & Formalwear Destination',
  description: 'Say yes to your dream dress today! Over 2,000 designer gowns, suits & accessories. Off-the-rack, personalized appointments. Maple Grove, MN. Book now!',
  keywords: 'bridal shop Minnesota, wedding dresses Minneapolis, off the rack wedding dresses, bridal boutique Maple Grove, mens suits, budget bridal, same day wedding dress',
  authors: [{ name: 'Bridal Aisle Boutique' }],
  creator: 'Bridal Aisle Boutique',
  publisher: 'Bridal Aisle Boutique',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Bridal Aisle Boutique',
    title: 'Bridal Aisle Boutique | Minnesota\'s Premier Bridal & Formalwear Destination',
    description: 'Say yes to your dream dress today! Over 2,000 designer gowns, suits & accessories. Off-the-rack, personalized appointments. Maple Grove, MN.',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'Bridal Aisle Boutique - Minnesota Wedding Dresses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bridal Aisle Boutique | Minnesota\'s Premier Bridal Destination',
    description: 'Say yes to your dream dress today! Over 2,000 designer gowns. Book your appointment now.',
    images: ['/og-image.jpg'], // Same image as OG
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '9_FyoXW5DB2wyhTHkVwh_ZNrxQiDWLGhLqdtetf5liQ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M824358H');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Mailchimp */}
        <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/632d6f51d6b447d5dd0aac702/69e49655636a18d4e1e744996.js");`,
          }}
        />
        {/* End Mailchimp */}
        {/* Favicons & App Icons */}
        <link rel="icon" type="image/png" href="/home/ba-submark-2x-e31c28b4.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/home/ba-submark-2x-e31c28b4.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/home/ba-submark-2x-e31c28b4.png" />
        <link rel="apple-touch-icon" href="/home/ba-submark-2x-e31c28b4.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Fonts */}
        <link rel="stylesheet" href="https://use.typekit.net/yko1pkk.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M824358H"
            height={0}
            width={0}
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <GoogleAnalytics />
        <SiteChrome part="top" />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <SiteChrome part="bottom" />
      </body>
    </html>
  );
}
