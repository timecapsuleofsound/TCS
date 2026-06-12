'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',          href: '/' },
  { label: 'Streams',       href: '/streams' },
  { label: 'Events',        href: '/events' },
  { label: 'Archives',      href: '/archives' },
  { label: 'Time Capsule',  href: '/time-capsule' },
  { label: 'Community',     href: '/community' },
  { label: 'About',         href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const linkClasses = (href: string) =>
    `text-sm font-medium tracking-wide transition-colors duration-150 ${
      isActive(href)
        ? 'text-tcs-ice border-b-2 border-tcs-ice pb-0.5'
        : 'text-tcs-gray-300 hover:text-tcs-white'
    }`;

  const mobileLinkClasses = (href: string) =>
    `block px-4 py-3 text-base font-medium tracking-wide border-b border-tcs-gray-700 transition-colors duration-150 ${
      isActive(href)
        ? 'text-tcs-ice bg-tcs-surface-2'
        : 'text-tcs-gray-300 hover:text-tcs-white hover:bg-tcs-surface-2'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-tcs-surface border-b border-tcs-gray-700">
      <nav className="container-tcs flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Time Capsule of Sound — Home">
          <Image
            src="/images/logo/logo.PNG"
            alt="Time Capsule of Sound"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <span className="hidden sm:block text-tcs-white font-semibold text-sm tracking-wide leading-tight">
            Time Capsule<br />
            <span className="text-tcs-ice text-s">of Sound</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className={linkClasses(href)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-tcs-gray-300 hover:text-tcs-white transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-tcs-surface border-t border-tcs-gray-700">
          <ul>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={mobileLinkClasses(href)}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
