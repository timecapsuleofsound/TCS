import type { Metadata } from 'next';
import Image from 'next/image';
import ArchivesGrid from '../components/ArchivesGrid';

export const metadata: Metadata = {
  title: 'Archives | Time Capsule of Sound',
  description:
    'The mixes, the sets, the moments. A living library of House Music history, curated and preserved for the culture.',
  openGraph: {
    title: 'Archives | Time Capsule of Sound',
    description: 'Browse hundreds of House Music sets from legendary DJs spanning decades.',
  },
};

export default function ArchivesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex items-center h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/hero/timecapsule.png"
          alt="Vinyl records and archived music"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="relative z-10 container-tcs">
          <p className="section-label mb-3">Time Capsule of Sound</p>
          <h1 className="heading-display text-6xl md:text-7xl mb-4">Archives</h1>
          <p className="text-tcs-gray-300 text-lg max-w-xl">
            The mixes, the sets, the moments. A living library of House Music
            history, curated and preserved for the culture.
          </p>
        </div>
      </section>

      {/* ── Collection ── */}
      <section className="section-padding">
        <div className="container-tcs">
          <p className="section-label">The Collection</p>
          <h2 className="heading-section mb-3">
            Decades of Sound, At Your Fingertips.
          </h2>
          <p className="text-tcs-gray-300 text-lg mb-10 max-w-2xl">
            Browse sets from legendary DJs spanning the roots of House Music to
            the sounds shaping it today. Filter by platform to find your vibe.
          </p>

          {/* Interactive grid — client component */}
          <ArchivesGrid />
        </div>
      </section>

      {/* ── Submit your mix CTA ── */}
      <section className="section-padding bg-tcs-surface border-t border-tcs-gray-700">
        <div className="container-tcs text-center">
          <p className="section-label justify-center flex mb-4">Contribute</p>
          <h2 className="heading-section text-3xl md:text-4xl mb-4">
            Got a Mix Worth Preserving?
          </h2>
          <p className="text-tcs-gray-300 max-w-lg mx-auto mb-8">
            If you have a set that belongs in the archive, reach out. We&apos;re
            always looking to grow the collection.
          </p>
          <a href="mailto:TimeCaps@tcats.com" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
