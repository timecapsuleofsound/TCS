import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Radio, Archive, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Time Capsule of Sound',
  description:
    'Time Capsule of Sound is a House Music destination built to preserve the past, celebrate the present, and inspire the future.',
  openGraph: {
    title: 'About | Time Capsule of Sound',
    description: 'Learn about our mission to preserve and celebrate House Music culture.',
  },
};

const whatWeDo = [
  {
    icon: Radio,
    title: 'Stream Live',
    body: 'We broadcast live DJ sets, events, and exclusive sessions on Twitch and YouTube, bringing the energy of the dance floor directly to you.',
  },
  {
    icon: Archive,
    title: 'Archive the History',
    body: 'Our library of mixes, sets, and recordings grows every week. From the classics to the cutting edge, it\'s all here.',
  },
  {
    icon: Users,
    title: 'Build Community',
    body: 'TCS is a gathering place for DJs, producers, fans, and anyone who believes in the power of House Music to bring people together.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex items-center h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/hero/hero-about.jpg"
          alt="Time Capsule of Sound"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        <div className="relative z-10 container-tcs">
          <p className="section-label mb-3">Time Capsule of Sound</p>
          <h1 className="heading-display text-6xl md:text-7xl mb-4">About TCS</h1>
          <p className="text-tcs-gray-300 text-lg max-w-xl">
            A House Music destination built to preserve the past, celebrate the present,
            and inspire the future.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section-padding border-b border-tcs-gray-700">
        <div className="container-tcs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label">Our Mission</p>
              <h2 className="heading-section mb-6">
                Preserving the Sound.<br />Celebrating the Culture.
              </h2>
              <p className="text-tcs-gray-300 text-lg leading-relaxed mb-4">
                Time Capsule of Sound — a division of TCS — was founded with one
                purpose: to make sure the music that shaped generations is never lost.
              </p>
              <p className="text-tcs-gray-300 leading-relaxed">
                House Music is more than a genre. It&apos;s a language, a community,
                a way of life. We stream it live, archive it, and share it with everyone
                who wants to listen.
              </p>
            </div>
            <div className="relative h-72 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/hero/hero-timecapsule.jpg"
                alt="House Music culture"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-tcs-ice" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section-padding border-b border-tcs-gray-700 bg-tcs-surface">
        <div className="container-tcs max-w-3xl">
          <p className="section-label">Our Story</p>
          <h2 className="heading-section mb-6">From a Vision to a Movement.</h2>
          <div className="space-y-4 text-tcs-gray-300 text-lg leading-relaxed">
            <p>
              It started with a deep love for House Music and a recognition that so
              much of its history was scattered, forgotten, or locked away in dusty
              crates and fading cassettes.
            </p>
            <p>
              TCS was built to change that. We built this platform to create a home
              for the culture — a place where legends are remembered, new artists are
              heard, and the community finds each other.
            </p>
            <p className="text-tcs-white font-medium">
              &ldquo;Unlock the Memories and Rhythm of House.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="section-padding border-b border-tcs-gray-700">
        <div className="container-tcs">
          <p className="section-label">What We Do</p>
          <h2 className="heading-section mb-10">Live. Archive. Connect.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatWeDo.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card-tcs p-8">
                <div className="w-12 h-12 rounded-lg bg-tcs-ice/20 border border-tcs-ice/40 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-tcs-ice" />
                </div>
                <h3 className="text-tcs-white font-semibold text-xl mb-3">{title}</h3>
                <p className="text-tcs-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="section-padding border-b border-tcs-gray-700 bg-tcs-surface">
        <div className="container-tcs max-w-3xl">
          <p className="section-label">Where We&apos;re Going</p>
          <h2 className="heading-section mb-6">The Future of House Music Lives Here.</h2>
          <p className="text-tcs-gray-300 text-lg leading-relaxed mb-4">
            We&apos;re just getting started. TCS will continue to grow — more streams,
            more archives, more community features, and more ways to experience the
            music you love.
          </p>
          <p className="text-tcs-gray-300 leading-relaxed">
            Stay connected. The best is yet to come.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/streams" className="btn-primary">Watch Live</Link>
            <Link href="/archives" className="btn-secondary">Browse Archives</Link>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section-padding">
        <div className="container-tcs text-center">
          <p className="section-label justify-center flex mb-4">Get in Touch</p>
          <h2 className="heading-section text-3xl md:text-4xl mb-4">
            We&apos;d Love to Hear From You.
          </h2>
          <p className="text-tcs-gray-300 max-w-md mx-auto mb-8">
            Have a mix to share? A story to tell? A collaboration in mind? Reach out.
          </p>
          <a href="mailto:TimeCaps@tcats.com" className="btn-primary">
            TimeCaps@tcats.com
          </a>
        </div>
      </section>
    </>
  );
}
