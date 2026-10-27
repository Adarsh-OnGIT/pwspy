export type Platform = { slug: string; name: string; meta: string; tag: string; url: string };

export const PLATFORMS: Platform[] = [
  { slug: 'pw', name: 'Physics Wallah',  meta: 'ALL Classes', tag: 'PW', url: 'https://rolexcoderz.com/PW/?all=1#my' },
  { slug: 'vt', name: 'Vibrant Academy', meta: 'JEE',         tag: 'VA', url: 'https://rolexcoderz.com/VT' },
  { slug: 'nt', name: 'Next Toppers',    meta: 'Board Exams', tag: 'NT', url: 'https://rolexcoderz.com/NT' },
  { slug: 'mj', name: 'Mission Jeet',    meta: 'JEE / NEET',  tag: 'MJ', url: 'https://rolexcoderz.com/MissionJeet' },
  { slug: 'pi', name: 'PW OTT — Pi',     meta: 'OTT',         tag: 'Pi', url: 'https://rolexcoderz.com/Pi/' },
  { slug: 'ar', name: 'English by Aleena Rais', meta: 'Grammar', tag: 'AR', url: 'https://rolexcoderz.com/AR/' },
];
