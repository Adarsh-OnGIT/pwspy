export type Platform = {
  slug: string;
  name: string;
  url: string;
};

export const PLATFORMS: Platform[] = [];

export function findPlatform(slug: string) {
  return PLATFORMS.find((platform) => platform.slug === slug);
}
