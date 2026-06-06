import type { Metadata } from 'next';
import Image from 'next/image';
import NewsletterForm from '../components/NewsletterForm';

export const metadata: Metadata = {
  title: 'Community | Time Capsule of Sound',
  description:
    'House Music was never just music — it was a movement. Come be part of it.',
  openGraph: {
    title: 'Community | Time Capsule of Sound',
    description: 'Connect with DJs, producers, and fans who live and breathe House Music culture.',
  },
};

/* ─── Social links ─────────────────────────────────────────────────── */
const socialLinks = [
  {
    name: 'Facebook',
    handle: 'TimeCapsuleofSound',
    href: 'https://www.facebook.com/TimeCapsuleofSound',
    description: 'Updates, events, and community posts.',
    color: 'border-blue-500',
  },
  {
    name: 'Twitter / X',
    handle: '@TimeCapofSound',
    href: 'https://x.com/TimeCapofSound',
    description: 'Real-time updates, thoughts, and conversation.',
    color: 'border-tcs-white',
  },
  {
    name: 'Instagram',
    handle: '@TimeCapsuleofSound',
    href: 'https://www.instagram.com/TimeCapsuleofSound/',
    description: 'Behind the scenes, visuals, and culture.',
    color: 'border-pink-500',
  },
  {
    name: 'Twitch',
    handle: 'TimeCapsuleofSound',
    href: 'https://www.twitch.tv/TimeCapsuleofSound',
    description: 'Live streams, DJ sets, and events.',
    color: 'border-purple-500',
  },
  {
    name: 'YouTube',
    handle: 'TimeCapsuleofSound',
    href: 'https://www.youtube.com/TimeCapsuleofSound',
    description: 'VODs, replays, and documentary content.',
    color: 'border-red-500',
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex items-center h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/hero/house_community.png"
          alt="House Music community"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="relative z-10 container-tcs">
          <p className="section-label mb-3">Time Capsule of Sound</p>
          <h1 className="heading-display text-6xl md:text-7xl mb-4">Community</h1>
          <p className="text-tcs-gray-300 text-lg max-w-xl">
            House Music was never just music — it was a movement. Come be part of it.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="section-padding border-b border-tcs-gray-700">
        <div className="container-tcs max-w-3xl">
          <p className="section-label">Welcome</p>
          <h2 className="heading-section mb-6">This Is Your Space.</h2>
          <p className="text-tcs-gray-300 text-lg leading-relaxed mb-4">
            TCS is built by the community, for the community. Whether you&apos;re
            a longtime head or just discovering the sound, you belong here.
          </p>
          <p className="text-tcs-gray-300 leading-relaxed">
            Follow us, connect with us, and help us keep this culture alive. Every
            follow, every share, every conversation keeps House Music moving forward.
          </p>
        </div>
      </section>

      {/* ── Social Section ── */}
      <section className="section-padding border-b border-tcs-gray-700 bg-tcs-surface">
        <div className="container-tcs">
          <p className="section-label">Follow the Movement</p>
          <h2 className="heading-section mb-4">Find Us on Every Platform.</h2>
          <p className="text-tcs-gray-300 mb-10 max-w-2xl">
            Stay connected wherever you spend your time. We&apos;re live on Twitch,
            posting on Instagram, sharing on Facebook, and dropping content everywhere else.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialLinks.map(({ name, handle, href, description, color }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-tcs border-t-2 ${color} p-6 group flex flex-col gap-3`}
              >
                <h3 className="text-tcs-white font-semibold text-lg group-hover:text-tcs-ice transition-colors">
                  {name}
                </h3>
                <p className="text-tcs-ice text-sm font-medium">{handle}</p>
                <p className="text-tcs-gray-500 text-sm flex-1">{description}</p>
                <p className="text-tcs-ice text-sm mt-auto group-hover:text-tcs-ice-glow transition-colors">
                  Follow →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="section-padding border-b border-tcs-gray-700">
        <div className="container-tcs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Stay in the Loop</p>
              <h2 className="heading-section mb-4">Never Miss a Drop.</h2>
              <p className="text-tcs-gray-300 text-lg leading-relaxed">
                Get notified about new streams, events, and archive releases straight
                to your inbox. No spam — just House Music.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* ── Community Highlights ── */}
      <section className="section-padding bg-tcs-surface">
        <div className="container-tcs">
          <p className="section-label">Community Highlights</p>
          <h2 className="heading-section mb-4">The People Behind the Sound.</h2>
          <p className="text-tcs-gray-300 mb-10 max-w-2xl">
            Shoutouts, features, and stories from the TCS community.
            This is your moment — more highlights coming soon.
          </p>
          {/* Placeholder highlight cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {['The DJs', 'The Fans', 'The Creators'].map((group) => (
              <div key={group} className="card-tcs p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-tcs-ice/20 border border-tcs-ice/40 flex items-center justify-center mx-auto mb-4">
                  <span className="text-tcs-ice text-xl">♪</span>
                </div>
                <h3 className="text-tcs-white font-semibold text-lg mb-2">{group}</h3>
                <p className="text-tcs-gray-500 text-sm">
                  Community features coming soon. Follow us to stay updated.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
