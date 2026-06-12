import Link from 'next/link';
import SocialIcon from './SocialIcon';

const navLinks = [
  { label: 'Home',          href: '/' },
  { label: 'Streams',       href: '/streams' },
  { label: 'Events',        href: '/events' },
  { label: 'Archives',      href: '/archives' },
  { label: 'Time Capsule',  href: '/time-capsule' },
  { label: 'Community',     href: '/community' },
  { label: 'About',         href: '/about' },
];

const socialLinks = [
  { label: 'Facebook',    href: 'https://www.facebook.com/TimeCapsuleofSound'   },
  { label: 'Twitter / X', href: 'https://x.com/TimeCapofSound'                  },
  { label: 'Instagram',   href: 'https://www.instagram.com/TimeCapsuleofSound/' },
  { label: 'Twitch',      href: 'https://www.twitch.tv/TimeCapsuleofSound'      },
  { label: 'YouTube',     href: 'https://www.youtube.com/@TimeCapsuleofSound'   },
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
            <p className="heading-section text-2xl mb-2">Time Capsule<br />of Sound</p>
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
              href="mailto:TimeCapS@tcats.com"
              className="text-tcs-gray-300 text-sm hover:text-tcs-ice transition-colors duration-150 block mb-6"
            >
              TimeCapS@tcats.com
            </a>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-tcs-gray-500 hover:text-tcs-ice transition-colors duration-150"
                >
                  <SocialIcon platform={label} size={20} />
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
