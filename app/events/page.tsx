import type { Metadata } from 'next';
import Image from 'next/image';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events | Time Capsule of Sound',
  description:
    'Live shows, listening parties, and community gatherings. Here\'s what\'s coming up.',
  openGraph: {
    title: 'Events | Time Capsule of Sound',
    description: 'Upcoming House Music events, listening parties, and community gatherings.',
  },
};

/* ─── Types ────────────────────────────────────────────────────────── */
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  badge?: 'Free' | 'Online' | 'Sold Out' | 'Get Tickets';
  ticketUrl?: string;
  image?: string;
}

/* ─── Placeholder data — replace with real events ─────────────────── */
const upcomingEvents: Event[] = [
  {
    id: '1',
    title: '36th Annual Chosen Few Picnic & House Music Festival',
    date: 'Saturday, July 11, 2026',
    time: '7:00 AM – 10:00 PM',
    location: 'Jackson Park, Chicago, IL',
    description:
      'Chicago\'s legendary house music celebration returns for its 36th year. Experience the original Chosen Few DJs alongside special guests including DJ Jazzy Jeff, Barbara Tucker, Curtis McClain, DJ Slugo and more. A full day of house music, dancing, culture, food, and community at the birthplace of house music.',
    badge: 'Get Tickets',
    image: '/images/events/chosen-few-2026.png',
  },
  {
    id: '2',
    title: 'Sunday Sessions: Twitch Live Stream',
    date: 'Sunday, June 29, 2026',
    time: '4:00 PM – 8:00 PM',
    location: 'Online — Twitch',
    description:
      'Tune in for four hours of continuous House Music, live on our Twitch channel. Sunday vibes, no cover charge.',
    badge: 'Online',
    ticketUrl: 'https://www.twitch.tv/TimeCapsuleofSound',
    image: '/images/hero/hero-streams.jpg',
  },
];

const pastEvents: Event[] = [
  {
    id: 'p1',
    title: 'TCS Launch Party',
    date: 'Saturday, May 17, 2026',
    time: '8:00 PM – 1:00 AM',
    location: 'Chicago, IL',
    description:
      'The night Time Capsule of Sound officially opened its doors. An unforgettable evening of House Music history.',
  },
  {
    id: 'p2',
    title: 'Warehouse Sessions Vol. 1',
    date: 'Friday, April 4, 2026',
    time: '10:00 PM – 3:00 AM',
    location: 'Chicago, IL',
    description:
      'Raw energy, classic sounds, and a crowd that understood every beat. Volume 1 of an ongoing series.',
  },
];

/* ─── Event Card ───────────────────────────────────────────────────── */
function EventCard({ event, past = false }: { event: Event; past?: boolean }) {
  const badgeColors: Record<string, string> = {
    Free: 'bg-tcs-success/20 text-tcs-success border-tcs-success/40',
    Online: 'bg-tcs-ice/20 text-tcs-ice border-tcs-ice/40',
    'Sold Out': 'bg-tcs-gray-700 text-tcs-gray-500 border-tcs-gray-700',
    'Get Tickets': 'bg-tcs-red/20 text-tcs-red-light border-tcs-red/40',
  };

  return (
    <div className={`card-tcs overflow-hidden ${past ? 'opacity-60' : ''}`}>
      {event.image && !past && (
        <div className="relative h-48 w-full">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tcs-surface via-transparent to-transparent" />
          {event.badge && (
            <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full border ${badgeColors[event.badge]}`}>
              {event.badge}
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        {past && event.badge && (
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${badgeColors[event.badge]}`}>
            {event.badge}
          </span>
        )}
        <h3 className="text-tcs-white font-semibold text-xl mb-4 leading-snug">
          {event.title}
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-tcs-gray-300 text-sm">
            <Calendar size={14} className="text-tcs-ice flex-shrink-0" />
            {event.date}
          </div>
          <div className="flex items-center gap-2 text-tcs-gray-300 text-sm">
            <Clock size={14} className="text-tcs-ice flex-shrink-0" />
            {event.time}
          </div>
          <div className="flex items-center gap-2 text-tcs-gray-300 text-sm">
            <MapPin size={14} className="text-tcs-ice flex-shrink-0" />
            {event.location}
          </div>
        </div>
        <p className="text-tcs-gray-500 text-sm leading-relaxed mb-5">
          {event.description}
        </p>
        {!past && event.ticketUrl && (
          <a
            href={event.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex text-sm"
          >
            {event.badge === 'Online' ? 'Watch Live' : 'Get Tickets'}
            <ExternalLink size={14} />
          </a>
        )}
        {!past && !event.ticketUrl && event.badge === 'Free' && (
          <span className="text-tcs-gray-500 text-sm">Free entry — no ticket required</span>
        )}
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────── */
export default function EventsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex items-center h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/hero/hero-events.jpg"
          alt="House Music event"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="relative z-10 container-tcs">
          <p className="section-label mb-3">Time Capsule of Sound</p>
          <h1 className="heading-display text-6xl md:text-7xl mb-4">Events</h1>
          <p className="text-tcs-gray-300 text-lg max-w-xl">
            Live shows, listening parties, and community gatherings.
            Here&apos;s what&apos;s coming up.
          </p>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="section-padding border-b border-tcs-gray-700">
        <div className="container-tcs">
          <p className="section-label">Upcoming</p>
          <h2 className="heading-section mb-10">What&apos;s On.</h2>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="card-tcs p-10 text-center max-w-lg mx-auto">
              <p className="text-tcs-gray-300 text-lg mb-2">No upcoming events right now.</p>
              <p className="text-tcs-gray-500 text-sm">
                Check back soon — something is always in the works.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Past Events ── */}
      <section className="section-padding bg-tcs-surface">
        <div className="container-tcs">
          <p className="section-label">Past Events</p>
          <h2 className="heading-section mb-3">Where We&apos;ve Been.</h2>
          <p className="text-tcs-gray-300 mb-10 max-w-xl">
            A look back at the events that brought the community together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} past />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
