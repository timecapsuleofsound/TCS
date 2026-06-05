import Link from 'next/link';

const navLinks = [
  { label: 'Home',          href: '/' },
  { label: 'Streams',       href: '/streams' },
  { label: 'Events',        href: '/events' },
  { label: 'Archives',      href: '/archives' },
  { label: 'Time Capsule',  href: '/time-capsule' },
  { label: 'Community',     href: '/community' },
  { label: 'About',         href: '/about' },
];

// Inline SVG social icons (lucide-react v1 removed branded icons)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const TwitchIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  { label: 'Facebook',   href: 'https://www.facebook.com/TimeCapsuleofSound', Icon: FacebookIcon },
  { label: 'Twitter / X',href: 'https://x.com/TimeCapofSound',                Icon: XIcon },
  { label: 'Instagram',  href: 'https://www.instagram.com/TimeCapsuleofSound/',Icon: InstagramIcon },
  { label: 'Twitch',     href: 'https://www.twitch.tv/TimeCapsuleofSound',     Icon: TwitchIcon },
  { label: 'YouTube',    href: 'https://www.youtube.com/TimeCapsuleofSound',   Icon: YouTubeIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-tcs-surface-2 border-t border-tcs-gray-700 mt-auto">
      <div className="container-tcs py-12">

        {/* Top row: brand + nav + social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <p className="heading-section text-2xl mb-2">TIME CAPSULE<br />OF SOUND</p>
            <p className="text-tcs-gray-500 text-sm leading-relaxed">
              Preserving the Sound.<br />Celebrating the Culture.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="section-label mb-4">Navigate</p>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-tcs-gray-300 text-sm hover:text-tcs-ice transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="section-label mb-4">Connect</p>
            <a
              href="mailto:TimeCaps@tcats.com"
              className="text-tcs-gray-300 text-sm hover:text-tcs-ice transition-colors duration-150 block mb-6"
            >
              TimeCaps@tcats.com
            </a>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-tcs-gray-500 hover:text-tcs-ice transition-colors duration-150"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-tcs" />

        {/* Bottom row: copyright */}
        <p className="text-tcs-gray-500 text-xs text-center">
          © {year} Time Capsule of Sound. A Division of TCS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
