'use client';

import { useEffect, useState } from 'react';

const DETAILS = [
  'Santa Claus, 10am–3pm. Bring your camera for photos!',
  'Our community’s favorite Santa from The Woods is back at Bridal Aisle, with reindeer from Johmar Farms and elves Holly & Spice.',
  'https://www.bridalaislemn.com/a-very-marry-day',
].join('\n');

const GOOGLE_CALENDAR = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('A Very Marry Day at Bridal Aisle')}&dates=20261129T160000Z/20261129T210000Z&ctz=${encodeURIComponent('America/Chicago')}&location=${encodeURIComponent('Bridal Aisle, 15825 95th Ave N, Maple Grove, MN 55369')}&details=${encodeURIComponent(DETAILS)}`;

function isApplePhone() {
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

export default function AddToCalendar({ className }: { className?: string }) {
  const [applePhone, setApplePhone] = useState(false);

  useEffect(() => {
    setApplePhone(isApplePhone());
  }, []);

  if (applePhone) {
    return (
      <a className={className} href="/a-very-marry-day/calendar">
        Add to Calendar
      </a>
    );
  }

  return (
    <a className={className} href={GOOGLE_CALENDAR} target="_blank" rel="noopener noreferrer">
      Add to Calendar
    </a>
  );
}
