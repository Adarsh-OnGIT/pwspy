'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { findPlatform } from '@/lib/platforms';
import { hasAccess } from '@/lib/access';

export default function EmbedPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const platform = findPlatform(slug);

  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!platform) { router.replace('/app'); return; }
    if (!hasAccess()) { router.replace(`/access?next=/app/${platform.slug}`); return; }
    setReady(true);
  }, [platform, router]);

  if (!platform || !ready) return <main className="min-h-dvh bg-[#07070f]" />;

  return (
    <main className="flex min-h-dvh flex-col bg-[#07070f] text-[#f5f5ff]">
      <div className="flex h-14 shrink-0 items-center gap-3 border-b border-white/10 px-4">
        <Link href="/app" aria-label="Back" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-sm">←</Link>
        <span className="min-w-0 flex-1 truncate text-sm font-bold">{platform.name}</span>
        <a href={platform.external} target="_blank" rel="noopener" className="rounded-full border border-white/15 px-3 py-2 text-[11px] font-semibold text-white/75">New tab ↗</a>
      </div>

      {failed ? (
        <div className="grid flex-1 place-items-center p-6 text-center">
          <div className="max-w-sm rounded-3xl border border-white/10 bg-white/[.03] p-6">
            <p className="text-sm text-white/70">Ye site iframe me nahi khul rahi.</p>
            <a href={platform.external} target="_blank" rel="noopener" className="mt-4 inline-block rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-sm font-bold text-[#04120c]">Open in new tab</a>
          </div>
        </div>
      ) : (
        <iframe
          src={platform.direct}
          title={platform.name}
          onError={() => setFailed(true)}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture; clipboard-write"
          allowFullScreen
          className="min-h-0 w-full flex-1 border-0"
        />
      )}
    </main>
  );
}
