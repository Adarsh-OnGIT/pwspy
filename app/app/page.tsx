'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PLATFORMS } from '@/lib/platforms';
import { hasAccess, msLeft, fmtLeft, grantAccess } from '@/lib/access';

export default function AppHome() {
  const [ok, setOk] = useState<boolean | null>(null);
  const [left, setLeft] = useState('');

  useEffect(() => {
    const tick = () => {
      const a = hasAccess();
      setOk(a);
      setLeft(a ? fmtLeft(msLeft()) : '');
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  if (ok === null) return <main className="min-h-dvh bg-[#07070f]" />;

  return (
    <main className="min-h-dvh bg-[#07070f] px-5 pb-28 pt-8 text-[#f5f5ff]">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between">
          <span className="text-lg font-extrabold">PW<span className="text-emerald-400">Spy</span></span>
          <Link href="/" className="text-xs text-white/50">← Home</Link>
        </div>

        {!ok && <div className="mt-6 rounded-2xl border border-rose-400/30 bg-rose-400/10 p-4 text-sm">Access expired — <Link href="/access" className="font-bold underline">unlock again</Link>.</div>}

        <h1 className="mt-8 text-2xl font-extrabold">Pick your institute.</h1>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {PLATFORMS.map((p) => (
            <Link key={p.slug} href={`/app/${p.slug}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-4 transition hover:border-emerald-400/30 hover:bg-emerald-400/[.05]">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-xs font-black text-[#04120c]">{p.tag}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold">{p.name}</span>
                <span className="block text-[11px] text-white/45">{p.meta}</span>
              </span>
              <span className="text-white/30 transition group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 border-t border-white/10 bg-[#07070f]/90 p-4 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <span className="flex-1 text-xs text-white/60">{ok ? `Access active · ${left}` : 'No active access'}</span>
          <button onClick={() => grantAccess()} className="rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-3 text-xs font-bold text-[#04120c]">Extend 24h</button>
        </div>
      </div>
    </main>
  );
}
