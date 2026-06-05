'use client';

import { useEffect, useRef } from 'react';

interface TwitchEmbedProps {
  channel: string;
}

export default function TwitchEmbed({ channel }: TwitchEmbedProps) {
  const hostname =
    typeof window !== 'undefined' ? window.location.hostname : 'localhost';

  const src = `https://player.twitch.tv/?channel=${channel}&parent=${hostname}&autoplay=false&muted=false`;

  return (
    <div className="w-full rounded-lg overflow-hidden border border-tcs-gray-700 bg-tcs-surface">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={src}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          title={`${channel} live on Twitch`}
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>
      {/* Fallback / empty state shown below the embed */}
      <div className="px-6 py-4 border-t border-tcs-gray-700">
        <p className="text-tcs-gray-500 text-sm">
          Not live right now? Follow us on Twitch to get notified the moment we
          go live.{' '}
          <a
            href={`https://www.twitch.tv/${channel}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tcs-ice hover:text-tcs-ice-glow"
          >
            Follow on Twitch →
          </a>
        </p>
      </div>
    </div>
  );
}
