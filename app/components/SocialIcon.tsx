import {
  siFacebook,
  siX,
  siInstagram,
  siTwitch,
  siYoutube,
  siSpotify,
  siTiktok,
} from 'simple-icons';

const iconMap: Record<string, { path: string }> = {
  facebook:   siFacebook,
  'twitter / x': siX,
  x:          siX,
  instagram:  siInstagram,
  twitch:     siTwitch,
  youtube:    siYoutube,
  spotify:    siSpotify,
  tiktok:     siTiktok,
};

interface SocialIconProps {
  platform: string;
  size?: number;
  className?: string;
}

export default function SocialIcon({ platform, size = 20, className = '' }: SocialIconProps) {
  const icon = iconMap[platform.toLowerCase()];
  if (!icon) return null;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-label={platform}
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
