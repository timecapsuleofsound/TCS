import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TwitchEmbed from '../components/TwitchEmbed';

export const metadata: Metadata = {
  title: 'Streams | Time Capsule of Sound',
  description:
    'Live House Music, straight to you. Catch us live on Twitch or watch replays on YouTube — the energy never stops.',
  openGraph: {
    title: 'Streams | Time Capsule of Sound',
    description: 'Live House Music streams, DJ sets, and on-demand replays.',
  },
};

/* ─── Platform cards data ──────────────────────────────────────────── */
const platforms = [
  {
    name: 'Twitch',
    description: 'Live streams & events',
    href: 'https://www.twitch.tv/TimeCapsuleofSound',
    color: 'border-purple-500',
    badge: 'LIVE',
  },
  {
    name: 'YouTube',
    description: 'VODs, replays & interviews',
    href: 'https://www.youtube.com/@TimeCapsuleofSound',
    color: 'border-red-500',
    badge: null,
  },
  {
    name: 'Mixcloud',
    description: 'Archived DJ sets',
    href: 'https://www.mixcloud.com/TimeCapsuleofSound',
    color: 'border-tcs-ice',
    badge: null,
  },
  {
    name: 'SoundCloud',
    description: 'Archived audio tracks',
    href: 'https://soundcloud.com/TimeCapsuleofSound',
    color: 'border-orange-500',
    badge: null,
  },
];

export default function StreamsPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative flex items-center h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/hero/Digital2.png"
          alt="Live DJ performance"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="relative z-10 container-tcs">
          <p className="section-label mb-3">Time Capsule of Sound</p>
          <h1 className="heading-display text-6xl md:text-7xl mb-4">Streams</h1>
          <p className="text-tcs-gray-300 text-lg max-w-xl">
            Live House Music, straight to you. Catch us live on Twitch or watch
            replays on YouTube — the energy never stops.
          </p>
        </div>
      </section>

      {/* ── Live Twitch Section ── */}
      <section className="section-padding border-b border-tcs-gray-700">
        <div className="container-tcs">
          <div className="flex items-center gap-3 mb-2">
            <p className="section-label mb-0">Live Now</p>
            <span className="btn-live text-xs">Live</span>
          </div>
          <h2 className="heading-section mb-3">We&apos;re Live.</h2>
          <p className="text-tcs-gray-300 mb-8 max-w-2xl">
            Tune into our Twitch channel for live DJ sets, events, and exclusive
            broadcasts. Hit the button below to watch live.
          </p>

          {/* Twitch embed — client component handles domain param */}
          <TwitchEmbed channel="TimeCapsuleofSound" />

          <div className="mt-6">
            <a
              href="https://www.twitch.tv/TimeCapsuleofSound"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Watch on Twitch
            </a>
          </div>
        </div>
      </section>

      {/* ── Recent Broadcasts (YouTube) ── */}
      <section className="section-padding border-b border-tcs-gray-700 bg-tcs-surface">
        <div className="container-tcs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="section-label">Recent Broadcasts</p>
              <h2 className="heading-section mb-4">
                Missed the Live Show? Watch the Replay.
              </h2>
              <p className="text-tcs-gray-300 text-lg leading-relaxed mb-8">
                Our latest streams are available on YouTube. Subscribe so you
                never miss a drop.
              </p>
              <a
                href="https://www.youtube.com/TimeCapsuleofSound"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Watch on YouTube
              </a>
            </div>
            <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/hero/hero-about.jpg"
                alt="Concert crowd"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {/* YouTube play hint overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-tcs-red/90 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Multi-Platform Section ── */}
      <section className="section-padding">
        <div className="container-tcs">
          <p className="section-label">Find Us Everywhere</p>
          <h2 className="heading-section mb-4">Stream Your Way.</h2>
          <p className="text-tcs-gray-300 text-lg mb-10 max-w-2xl">
            Whether you&apos;re on Twitch, YouTube, Mixcloud, or SoundCloud —
            TCS is there.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.map(({ name, description, href, color, badge }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-tcs border-t-2 ${color} p-6 group flex flex-col gap-3`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-tcs-white font-semibold text-lg group-hover:text-tcs-ice transition-colors">
                    {name}
                  </h3>
                  {badge && (
                    <span className="text-xs font-bold text-tcs-red border border-tcs-red px-2 py-0.5 rounded-full">
                      {badge}
                    </span>
                  )}
                </div>
                <p className="text-tcs-gray-500 text-sm">{description}</p>
                <p className="text-tcs-ice text-sm mt-auto group-hover:text-tcs-ice-glow transition-colors">
                  Follow →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
