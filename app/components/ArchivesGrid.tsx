'use client';

import { useState } from 'react';
import { Clock, Calendar, ExternalLink, Music } from 'lucide-react';

type Platform = 'Mixcloud' | 'SoundCloud' | 'YouTube';

interface Mix {
  id: string;
  title: string;
  artist: string;
  platform: Platform;
  duration: string;
  recorded: string;
  era: string;
  url: string;
}

const platformColors: Record<Platform, string> = {
  Mixcloud:  'bg-tcs-ice/20 text-tcs-ice border-tcs-ice/40',
  SoundCloud: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
  YouTube:   'bg-red-500/20 text-red-400 border-red-500/40',
};

/* ─── Placeholder mixes — replace with real data ──────────────────── */
const mixes: Mix[] = [
  {
    id: '1',
    title: 'Deep in the House Vol. 1',
    artist: 'TCS DJ Collective',
    platform: 'Mixcloud',
    duration: '1h 45m',
    recorded: '2024',
    era: '2020s',
    url: 'https://www.mixcloud.com/TimeCapsuleofSound',
  },
  {
    id: '2',
    title: 'Saturday Night Chicago Sessions',
    artist: 'DJ Archivex',
    platform: 'SoundCloud',
    duration: '2h 10m',
    recorded: '2023',
    era: '2020s',
    url: 'https://soundcloud.com/TimeCapsuleofSound',
  },
  {
    id: '3',
    title: 'Golden Era House — 90s Classics',
    artist: 'TCS Vault',
    platform: 'YouTube',
    duration: '3h 00m',
    recorded: '1994 (remastered 2022)',
    era: '1990s',
    url: 'https://www.youtube.com/TimeCapsuleofSound',
  },
  {
    id: '4',
    title: 'Underground Chicago: The Early Days',
    artist: 'The Founding Set',
    platform: 'Mixcloud',
    duration: '1h 20m',
    recorded: '1988 (archived 2021)',
    era: '1980s',
    url: 'https://www.mixcloud.com/TimeCapsuleofSound',
  },
  {
    id: '5',
    title: 'House Goes Global — London & NYC',
    artist: 'Various Artists',
    platform: 'SoundCloud',
    duration: '2h 30m',
    recorded: '1997',
    era: '1990s',
    url: 'https://soundcloud.com/TimeCapsuleofSound',
  },
  {
    id: '6',
    title: 'Warehouse Revival Mix',
    artist: 'DJ Archivex',
    platform: 'YouTube',
    duration: '1h 55m',
    recorded: '2010',
    era: '2010s',
    url: 'https://www.youtube.com/TimeCapsuleofSound',
  },
];

const filters: Array<'All' | Platform> = ['All', 'Mixcloud', 'SoundCloud', 'YouTube'];

export default function ArchivesGrid() {
  const [active, setActive] = useState<'All' | Platform>('All');

  const filtered = active === 'All' ? mixes : mixes.filter((m) => m.platform === active);

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${
              active === f
                ? 'bg-tcs-ice text-tcs-black border-tcs-ice'
                : 'bg-transparent text-tcs-gray-300 border-tcs-gray-700 hover:border-tcs-ice hover:text-tcs-ice'
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-tcs-gray-500 text-sm self-center">
          {filtered.length} {filtered.length === 1 ? 'mix' : 'mixes'}
        </span>
      </div>

      {/* Mix cards */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((mix) => (
            <div key={mix.id} className="card-tcs p-5 flex flex-col gap-4">
              {/* Icon + platform badge */}
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-tcs-surface-2 flex items-center justify-center flex-shrink-0">
                  <Music size={18} className="text-tcs-ice" />
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${platformColors[mix.platform]}`}>
                  {mix.platform}
                </span>
              </div>

              {/* Title + artist */}
              <div>
                <h3 className="text-tcs-white font-semibold leading-snug mb-1">
                  {mix.title}
                </h3>
                <p className="text-tcs-gray-500 text-sm">{mix.artist}</p>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-tcs-gray-500 text-xs">
                <span className="flex items-center gap-1">
                  <Clock size={11} /> {mix.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={11} /> {mix.recorded}
                </span>
                <span className="inline-block px-2 py-0.5 rounded text-tcs-gray-500 bg-tcs-surface-2 text-xs">
                  {mix.era}
                </span>
              </div>

              {/* CTA */}
              <a
                href={mix.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-tcs-ice text-sm font-medium hover:text-tcs-ice-glow transition-colors"
              >
                Listen Now <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="card-tcs p-10 text-center max-w-lg mx-auto">
          <p className="text-tcs-gray-300 mb-2">No mixes found for that filter.</p>
          <p className="text-tcs-gray-500 text-sm">
            Try a different platform or{' '}
            <button onClick={() => setActive('All')} className="text-tcs-ice hover:underline">
              browse all
            </button>
            .
          </p>
        </div>
      )}
    </>
  );
}
