export type Platform = {
  slug: string;
  name: string;
  tag: string;
  url: string;      // iframe target
  direct: string;   // same as url
  external: string; // new-tab target
};

export const PLATFORMS: Platform[] = [
  {
    slug: 'pw',
    name: 'Physics Wallah',
    tag: 'All Classes',
    url: 'https://rolexcoderz.com/PW/?all=1#my',
    direct: 'https://rolexcoderz.com/PW/?all=1#my',
    external: 'https://rolexcoderz.com/PW/?all=1#my',
  },
  {
    slug: 'vt',
    name: 'Vibrant Academy',
    tag: 'JEE',
    url: 'https://rolexcoderz.com/VT',
    direct: 'https://rolexcoderz.com/VT',
    external: 'https://rolexcoderz.com/VT',
  },
  {
    slug: 'nt',
    name: 'Next Toppers',
    tag: 'Board Exams',
    url: 'https://rolexcoderz.com/NT',
    direct: 'https://rolexcoderz.com/NT',
    external: 'https://rolexcoderz.com/NT',
  },
  {
    slug: 'missionjeet',
    name: 'Mission Jeet',
    tag: 'JEE / NEET',
    url: 'https://rolexcoderz.com/MissionJeet',
    direct: 'https://rolexcoderz.com/MissionJeet',
    external: 'https://rolexcoderz.com/MissionJeet',
  },
  {
    slug: 'ar',
    name: 'English Speaking — Aleena Rais',
    tag: 'Grammar',
    url: 'https://rolexcoderz.com/AR/',
    direct: 'https://rolexcoderz.com/AR/',
    external: 'https://rolexcoderz.com/AR/',
  },
  {
    slug: 'pi',
    name: 'PW OTT — Pi',
    tag: 'OTT',
    url: 'https://rolexcoderz.com/Pi/',
    direct: 'https://rolexcoderz.com/Pi/',
    external: 'https://rolexcoderz.com/Pi/',
  },
];
