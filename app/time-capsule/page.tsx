import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Time Capsule | Time Capsule of Sound',
  description:
    'House Music didn\'t just arrive — it was built, beat by beat, in basements, warehouses, and clubs across the world. This is where we keep those stories.',
  openGraph: {
    title: 'The Time Capsule | Time Capsule of Sound',
    description: 'Explore the history and legacy of House Music — the sets, the eras, the moments.',
  },
};

/* ─── Timeline eras ────────────────────────────────────────────────── */
const eras = [
  {
    decade: '1980s',
    label: 'The Beginning — Chicago & New York',
    description:
      'House Music was born in the basements and warehouses of Chicago. Rooted in soul, disco, and funk, early House gave a voice to communities that mainstream radio ignored. The Warehouse, The Music Box, and The Power Plant became the epicentre of a revolution.',
  },
  {
    decade: '1990s',
    label: 'The Explosion — House Goes Global',
    description:
      'The sound crossed oceans. London, New York, Detroit, and Amsterdam picked up the signal and made it their own. Acid House, Deep House, and Progressive House splintered into dozens of sub-genres, each carrying the original spirit into new territories.',
  },
  {
    decade: '2000s',
    label: 'The Evolution — Electronic Takes Over',
    description:
      'House Music became the backbone of a global electronic music culture. Festivals, superclubs, and DJ residencies brought the sound to millions. The 808 and the Roland TR-909 became cultural icons, their patterns embedded in the DNA of modern music.',
  },
  {
    decade: '2010s',
    label: 'The Renaissance — The Culture Reclaims Itself',
    description:
      'A new generation of DJs and producers looked back to move forward. Deep House and Afro-House brought the roots back to the surface. The culture reclaimed its identity — spiritual, communal, and unapologetically Black.',
  },
  {
    decade: '2020s',
    label: 'The Now — House Is Everywhere',
    description:
      'House Music is no longer underground — it\'s everywhere. Yet the soul remains. From Afrobeats-influenced House to the underground warehouse scenes still thriving globally, the music continues to evolve while honouring what came before.',
  },
];

/* ─── Defining moments ─────────────────────────────────────────────── */
const moments = [
  {
    title: 'The Warehouse, Chicago — 1977',
    description:
      'DJ Frankie Knuckles takes up residency at The Warehouse. The sound he creates — a blend of soul, disco, and electronic — becomes the foundation of House Music.',
    era: '1980s',
  },
  {
    title: 'Roland TR-909 — 1983',
    description:
      'The drum machine that defined a genre. Cheap, widely available, and with a sound that became the heartbeat of House Music worldwide.',
    era: '1980s',
  },
  {
    title: 'House Music Goes to London — 1988',
    description:
      'The Second Summer of Love. Acid House sweeps through the UK, igniting a cultural movement that transforms British nightlife forever.',
    era: '1990s',
  },
  {
    title: 'Daft Punk — Homework — 1997',
    description:
      'House Music hits the mainstream without compromising its soul. A watershed moment that introduced millions of new listeners to the genre.',
    era: '1990s',
  },
  {
    title: 'Afro House Rises — 2015',
    description:
      'South African and West African producers reimagine House Music through an African lens. Black Coffee, Culoe de Song, and others bring a new spiritual depth to the genre.',
    era: '2010s',
  },
  {
    title: 'TCS Opens the Vault — 2024',
    description:
      'Time Capsule of Sound launches, dedicated to archiving, streaming, and celebrating the full history of House Music for the next generation.',
    era: '2020s',
  },
];

export default function TimeCapsulePage() {
  return (
    <>
      {/* ── Immersive Hero ── */}
      <section className="relative flex items-center min-h-[60vh] overflow-hidden">
        <Image
          src="/images/hero/hero-timecapsule.jpg"
          alt="House Music history"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Darker overlay for drama */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-tcs-black" />
        <div className="relative z-10 container-tcs py-20 text-center mx-auto">
          <p className="section-label justify-center flex mb-6">Time Capsule of Sound</p>
          <h1 className="heading-display text-6xl md:text-7xl lg:text-8xl mb-6 max-w-4xl mx-auto">
            The Time Capsule
          </h1>
          <p className="text-tcs-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            House Music didn&apos;t just arrive — it was built, beat by beat, in
            basements, warehouses, and clubs across the world. This is where we
            keep those stories.
          </p>
        </div>
      </section>

      {/* ── Origin Section ── */}
      <section className="section-padding border-b border-tcs-gray-700">
        <div className="container-tcs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label">The Origin</p>
              <h2 className="heading-section mb-6">Where It All Started.</h2>
              <p className="text-tcs-gray-300 text-lg leading-relaxed mb-6">
                Born in Chicago in the early 1980s, House Music was a revolution
                dressed in rhythm. It gave a voice to communities that had been
                silenced, and a dance floor to everyone who felt like an
                outsider.
              </p>
              <p className="text-tcs-gray-300 leading-relaxed mb-8">
                Time Capsule of Sound exists to honour that legacy — to keep the
                flame alive for the next generation of listeners, dancers, and
                creators. Every mix in our archive is a chapter in this story.
                Every stream is a connection to something bigger than the music.
              </p>
              <Link
                href="/archives"
                className="inline-flex items-center gap-2 text-tcs-ice font-medium hover:text-tcs-ice-glow transition-colors group"
              >
                Explore the Archives
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-80 lg:h-[480px] rounded-lg overflow-hidden">
              <Image
                src="/images/hero/hero-archives.jpg"
                alt="Vinyl records — the roots of House Music"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-tcs-ice" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Defining Moments ── */}
      <section className="section-padding border-b border-tcs-gray-700 bg-tcs-surface">
        <div className="container-tcs">
          <p className="section-label">Defining Moments</p>
          <h2 className="heading-section mb-4">The Sets That Shaped the Sound.</h2>
          <p className="text-tcs-gray-300 mb-10 max-w-2xl">
            These are the nights, the machines, the DJs, and the moments that
            changed everything. Curated from the TCS collection — every entry
            here is a chapter in House Music&apos;s story.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {moments.map((moment) => (
              <div key={moment.title} className="card-tcs p-6 flex flex-col gap-3">
                <span className="text-xs font-semibold text-tcs-ice border border-tcs-ice/40 bg-tcs-ice/10 px-2.5 py-1 rounded-full w-fit">
                  {moment.era}
                </span>
                <h3 className="text-tcs-white font-semibold leading-snug">
                  {moment.title}
                </h3>
                <p className="text-tcs-gray-500 text-sm leading-relaxed flex-1">
                  {moment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section-padding border-b border-tcs-gray-700">
        <div className="container-tcs">
          <p className="section-label">The Timeline</p>
          <h2 className="heading-section mb-4">A History of House.</h2>
          <p className="text-tcs-gray-300 mb-12 max-w-2xl">
            Explore the decades. From the birth of the 808 to the global stages
            of today — House Music&apos;s story is one of resilience, innovation,
            and pure soul.
          </p>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Centre line — desktop only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-tcs-gray-700 -translate-x-px" />

            <div className="space-y-10">
              {eras.map((era, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={era.decade} className="relative lg:grid lg:grid-cols-2 lg:gap-12 items-start">
                    {/* Dot */}
                    <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-tcs-ice border-2 border-tcs-black z-10" />

                    {/* Content — alternates sides on desktop */}
                    <div className={`card-tcs p-6 ${isLeft ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="heading-section text-4xl text-tcs-ice">
                          {era.decade}
                        </span>
                        <span className="text-tcs-gray-500 text-sm font-medium">
                          {era.label}
                        </span>
                      </div>
                      <p className="text-tcs-gray-300 text-sm leading-relaxed">
                        {era.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section-padding bg-tcs-surface">
        <div className="container-tcs text-center">
          <p className="section-label justify-center flex mb-4">Keep Exploring</p>
          <h2 className="heading-section text-4xl md:text-5xl mb-6">
            The History Lives in the Music.
          </h2>
          <p className="text-tcs-gray-300 max-w-xl mx-auto mb-10">
            Every mix in the TCS archive is a window into a moment in time.
            Browse the collection and listen for yourself.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/archives" className="btn-primary">
              Browse the Archives
            </Link>
            <Link href="/streams" className="btn-secondary">
              Watch Live
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
