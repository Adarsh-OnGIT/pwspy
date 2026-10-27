'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PLATFORMS } from '@/lib/platforms';
import { hasAccess, msLeft, fmtLeft, clearAccess } from '@/lib/access';

export default function Home() {
  const [active, setActive] = useState(false);
  const [left, setLeft] = useState('');

  useEffect(() => {
    const tick = () => {
      const ok = hasAccess();
      setActive(ok);
      setLeft(ok ? fmtLeft(msLeft()) : '');
    };
    tick();
    const iv = setInterval(tick, 30000);
    return () => clearInterval(iv);
  }, []);

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#07070f] text-[#f5f5ff]">
      <div className="pointer-events-none absolute -left-56 -top-64 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,.22),transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-56 -right-48 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,.18),transparent_65%)]" />
      <div className="relative mx-auto w-full max-w-3xl px-5 pb-16 pt-8">
        <header className="flex items-center justify-between"><span className="text-lg font-extrabold tracking-tight">PW<span className="text-emerald-400">Spy</span></span><a href="https://t.me/+R2qw9858zEoyNDQ1" target="_blank" rel="noopener" className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80">Telegram</a></header>
        <section className="mt-12 animate-[fadeUp_.6s_ease-out_both]"><span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-300">Free access · 24 hours</span><h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">Unlock every batch,<br /><span className="text-emerald-300">completely free.</span></h1><p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">No signup. No shortener. One tap and you&apos;re inside — lectures, notes and DPPs for the next 24 hours.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href={active ? '/app' : '/access'} className="flex min-h-[56px] flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 text-base font-bold text-[#04120c] shadow-[0_12px_40px_rgba(52,211,153,.35)]">{active ? `Access Active — Open · ${left}` : 'Get Access →'}</Link>{active && <button onClick={() => { clearAccess(); setActive(false); }} className="min-h-[56px] rounded-full border border-white/15 px-6 text-sm font-semibold text-white/70">Reset</button>}</div></section>
        <section className="mt-14"><p className="mb-4 text-[11px] font-bold uppercase tracking-[.2em] text-white/40">select_platform</p><div className="grid gap-3 sm:grid-cols-2">{PLATFORMS.map((p) => <a key={p.slug} href={p.url} target="_blank" rel="noopener" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-4 transition hover:border-emerald-400/30 hover:bg-emerald-400/[.05]"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-xs font-black text-[#04120c]">{p.tag}</span><span className="min-w-0 flex-1"><span className="block truncate text-sm font-bold">{p.name}</span><span className="block text-[11px] text-white/45">{p.meta}</span></span><span className="text-white/30 transition group-hover:translate-x-1">→</span></a>)}</div></section>
        <footer className="mt-16 border-t border-white/10 pt-6 text-[11px] text-white/35">PWSpy // 2026</footer>
      </div>
    </main>
  );
}
