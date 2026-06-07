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
    title: 'The Candy Store Mix Show from December 29, 1997 on WNYU 89.1 FM',
    artist: 'TCS DJ Collective',
    platform: 'Mixcloud',
    duration: '1h 45m',
    recorded: 'December 29, 1997 (archived 2018)',
    era: '2020s',
    url: 'https://www.mixcloud.com/randy_h35/the-candy-store-mix-show-from-december-29-1997-on-wnyu-891-fm/',
  },
  {
    id: '2',
    title: 'The Candy Store ft. DJ Cosmo 89.1 FM WNYU, NYC 11-20-2000\' (Manny\'z Tapez)',
    artist: 'TCS DJ Collective',
    platform: 'SoundCloud',
    duration: '1h 48m',
    recorded: 'November 20, 2000 (archived 2024)',
    era: '2020s',
    url: 'https://soundcloud.com/djmtraxxx/the-candy-store-ft-dj-cosmo-891-fm-wnyu-nyc-11-20-2000-mannyz-tapez',
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
    title: 'Tony\'s Clubhouse - From the Vault (Miss Tina mix)',
    artist: 'DJ Tony Ton',
    platform: 'Mixcloud',
    duration: '1h 28m',
    recorded: '1994 (archived 2021)',
    era: '1990s',
    url: 'https://www.mixcloud.com/tonysclubhouse/fromthevault-clubhouse-archive-miss-tina/',
  },
  {
    id: '5',
    title: 'THE CANDY STORE 89.1 WNYU',
    artist: 'TCS DJ Collective',
    platform: 'SoundCloud',
    duration: '1h 35m',
    recorded: '',
    era: '1990s',
    url: 'https://soundcloud.com/rsadrp/sets/the-candy-store-89-1-wnyu',
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
  {
    id: '7',
    title: 'One Nation Under House Music (Tribute to The Candy Store T.O Sweet & DJ Rio)',
    artist: 'DJ Sole Heaven',
    platform: 'Mixcloud',
    duration: '2h 56m',
    recorded: '(archived 2013)',
    era: '1990s',
    url: 'https://www.mixcloud.com/DJSoleHeaven/dj-sole-heaven-one-nation-under-house-music-tribute-to-the-candy-store-to-sweet-dj-rio/',
  },
  {
    id: '8',
    title: 'Tony Humphries - The Candy Store Mix Show WNYU 89.1 May 8, 2000',
    artist: 'Tony Humphries',
    platform: 'Mixcloud',
    duration: '50:19m',
    recorded: 'May 8, 2000 (archived 2021)',
    era: 'late 1990s-2000s',
    url: 'https://www.mixcloud.com/randy_h35/tony-humphries-the-candy-store-mix-show-wnyu-891-may-8-2000/',
  },
  {
    id: '10',
    title: 'Deep in the House Vol. 1',
    artist: 'TCS DJ Collective',
    platform: 'Mixcloud',
    duration: '1h 45m',
    recorded: '2024',
    era: '2020s',
    url: 'https://www.mixcloud.com/TimeCapsuleofSound',
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
