export type Platform = { slug: string; name: string; meta: string; tag: string; url: string; direct: string; external: string };

export const PLATFORMS: Platform[] = [
  { slug: 'pw', name: 'Physics Wallah', meta: 'ALL Classes', tag: 'PW',
    url: 'https://rolexcoderz.com/PW/', direct: 'https://rolexcoderz.com/PW/', external: 'https://rolexcoderz.com/PW/' },
  { slug: 'vt', name: 'Vibrant Academy', meta: 'JEE', tag: 'VT',
    url: 'https://rolexcoderz.com/VT/', direct: 'https://rolexcoderz.com/VT/', external: 'https://rolexcoderz.com/VT/' },
  { slug: 'nt', name: 'Next Toppers', meta: 'Board Exams', tag: 'NT',
    url: 'https://rolexcoderz.com/NT/', direct: 'https://rolexcoderz.com/NT/', external: 'https://rolexcoderz.com/NT/' },
  { slug: 'mj', name: 'Mission Jeet', meta: 'JEE / NEET', tag: 'MJ',
    url: 'https://rolexcoderz.com/MissionJeet/', direct: 'https://rolexcoderz.com/MissionJeet/', external: 'https://rolexcoderz.com/MissionJeet/' },
  { slug: 'pi', name: 'PW OTT — Pi', meta: 'OTT', tag: 'Pi',
    url: 'https://rolexcoderz.com/Pi/', direct: 'https://rolexcoderz.com/Pi/', external: 'https://rolexcoderz.com/Pi/' },
  { slug: 'ar', name: 'English by Aleena Rais', meta: 'Grammar', tag: 'AR',
    url: 'https://rolexcoderz.com/AR/', direct: 'https://rolexcoderz.com/AR/', external: 'https://rolexcoderz.com/AR/' },
];

export const findPlatform = (slug: string) => PLATFORMS.find((p) => p.slug === slug);
