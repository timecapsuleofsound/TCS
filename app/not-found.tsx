import Link from 'next/link';
import { ArrowLeft, Music } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-tcs-black">
      <div className="container-tcs text-center py-20">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-tcs-surface border border-tcs-gray-700 flex items-center justify-center mx-auto mb-8">
          <Music size={32} className="text-tcs-ice" />
        </div>

        {/* 404 display */}
        <p className="text-tcs-ice text-sm font-semibold tracking-widest uppercase mb-4">
          404 — Not Found
        </p>
        <h1
          className="mb-4 text-white leading-none tracking-wide"
          style={{ fontFamily: 'var(--font-bebas-neue)', fontSize: 'clamp(4rem, 12vw, 8rem)' }}
        >
          This Track Got Lost.
        </h1>
        <p className="text-tcs-gray-300 text-lg max-w-md mx-auto mb-10">
          Looks like this page doesn&apos;t exist — but the music never stops.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link href="/" className="btn-primary">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <Link href="/streams" className="btn-secondary">
            Watch Live
          </Link>
          <Link href="/archives" className="btn-secondary">
            Browse Archives
          </Link>
        </div>

        {/* Quick nav */}
        <p className="text-tcs-gray-500 text-sm">
          Or jump to:{' '}
          {[
            { label: 'Events', href: '/events' },
            { label: 'Time Capsule', href: '/time-capsule' },
            { label: 'Community', href: '/community' },
            { label: 'About', href: '/about' },
          ].map(({ label, href }, i, arr) => (
            <span key={href}>
              <Link href={href} className="text-tcs-ice hover:text-tcs-ice-glow transition-colors">
                {label}
              </Link>
              {i < arr.length - 1 && <span className="mx-2 text-tcs-gray-700">·</span>}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
