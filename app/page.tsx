import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* ─── Featured sections data ─────────────────────────────────────── */
const featuredSections = [
  {
    label: 'Live & On Air',
    heading: 'Catch Every Set, Live.',
    body: 'We stream live House Music events, DJ sessions, and exclusive performances on Twitch, YouTube, and beyond. Tune in and feel the room.',
    cta: 'Go to Streams',
    href: '/streams',
    image: '/images/hero/hero-streams.jpg',
    imageAlt: 'DJ performing live',
    reverse: false,
  },
  {
    label: 'The Vault',
    heading: 'Decades of Sound, On Demand.',
    body: 'From the underground warehouses of Chicago to the clubs of New York and London — the mixes that defined House Music are right here. Browse, play, relive.',
    cta: 'Browse Archives',
    href: '/archives',
    image: '/images/hero/hero-archives.jpg',
    imageAlt: 'Vinyl records and archived music',
    reverse: true,
  },
  {
    label: 'Coming Up',
    heading: "Don't Miss What's Next.",
    body: 'Live events, listening parties, and community gatherings. Stay connected and never miss a moment.',
    cta: 'See Events',
    href: '/events',
    image: '/images/hero/hero-events.jpg',
    imageAlt: 'House music event crowd',
    reverse: false,
  },
  {
    label: 'The Community',
    heading: 'House Music Is a Family.',
    body: 'Connect with DJs, producers, and fans who live and breathe this culture. Follow us, join the conversation, and be part of something that never went out of style.',
    cta: 'Join the Community',
    href: '/community',
    image: '/images/hero/hero-community.jpg',
    imageAlt: 'House music community',
    reverse: true,
  },
];

/* ─── Page ────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex items-center min-h-[calc(100vh-64px)] overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero/hero-home.jpg"
          alt="House Music event"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

        {/* Content */}
        <div className="relative z-10 container-tcs py-20">
          <div className="max-w-2xl">
            <p className="section-label mb-6">Time Capsule of Sound</p>
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Unlock the Memories and Rhythm of House.
            </h1>
            <p className="text-tcs-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Your destination for live House Music streams, legendary DJ sets,
              and the stories behind the culture that moved the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/streams" className="btn-primary">
                Watch Live
              </Link>
              <Link href="/archives" className="btn-secondary">
                Explore the Archives
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Sections ── */}
      {featuredSections.map(({ label, heading, body, cta, href, image, imageAlt, reverse }) => (
        <section key={href} className="section-padding border-b border-tcs-gray-700">
          <div className="container-tcs">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? 'lg:[&>*:first-child]:order-last' : ''}`}>

              {/* Text */}
              <div>
                <p className="section-label">{label}</p>
                <h2 className="heading-section mb-5">{heading}</h2>
                <p className="text-tcs-gray-300 text-base md:text-lg leading-relaxed mb-8">
                  {body}
                </p>
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 text-tcs-ice font-medium hover:text-tcs-ice-glow transition-colors duration-150 group"
                >
                  {cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-150" />
                </Link>
              </div>

              {/* Image */}
              <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Bottom CTA strip ── */}
      <section className="section-padding bg-tcs-surface">
        <div className="container-tcs text-center">
          <p className="section-label justify-center flex mb-4">Time Capsule of Sound</p>
          <h2 className="heading-section text-4xl md:text-5xl mb-6">
            Preserving the Sound.<br />Celebrating the Culture.
          </h2>
          <p className="text-tcs-gray-300 text-lg max-w-xl mx-auto mb-10">
            Join thousands of House Music lovers who come here to listen, learn,
            and connect. The history is waiting.
          </p>
          <Link href="/about" className="btn-primary">
            Our Story
          </Link>
        </div>
      </section>
    </>
  );
}
