export type Platform = { slug: string; name: string; meta: string; tag: string; url: string; direct: string; external: string };

export const PLATFORMS: Platform[] = [
  { slug: 'pw', name: 'Physics Wallah', meta: 'ALL Classes', tag: 'PW',
    url: 'https://pw.classx.co.in/?all=1#my', direct: 'https://pw.classx.co.in/?all=1#my', external: 'https://pw.classx.co.in/?all=1#my' },
  { slug: 'vt', name: 'Vibrant Academy', meta: 'JEE', tag: 'VT',
    url: 'https://vibrantacademy.classx.co.in/?all=1#my', direct: 'https://vibrantacademy.classx.co.in/?all=1#my', external: 'https://vibrantacademy.classx.co.in/?all=1#my' },
  { slug: 'nt', name: 'Next Toppers', meta: 'Board Exams', tag: 'NT',
    url: 'https://nexttoppers.classx.co.in/?all=1#my', direct: 'https://nexttoppers.classx.co.in/?all=1#my', external: 'https://nexttoppers.classx.co.in/?all=1#my' },
  { slug: 'mj', name: 'Mission Jeet', meta: 'JEE / NEET', tag: 'MJ',
    url: 'https://missionjeet.classx.co.in/?all=1#my', direct: 'https://missionjeet.classx.co.in/?all=1#my', external: 'https://missionjeet.classx.co.in/?all=1#my' },
  { slug: 'pi', name: 'PW OTT — Pi', meta: 'OTT', tag: 'Pi',
    url: 'https://pwott.classx.co.in/', direct: 'https://pwott.classx.co.in/', external: 'https://pwott.classx.co.in/' },
  { slug: 'ar', name: 'English by Aleena Rais', meta: 'Grammar', tag: 'AR',
    url: 'https://aleenarais.classx.co.in/', direct: 'https://aleenarais.classx.co.in/', external: 'https://aleenarais.classx.co.in/' },
];

export const findPlatform = (slug: string) => PLATFORMS.find((p) => p.slug === slug);
