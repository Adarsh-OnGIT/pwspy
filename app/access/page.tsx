'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAccess, grantAccess } from '@/lib/access';

export default function AccessPage() {
  const router = useRouter();
  const [next, setNext] = useState('/app');
  const [title, setTitle] = useState('Access Granted');
  const [sub, setSub] = useState('Unlocking…');

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const dest = sp.get('next') || '/app';
    const force = sp.get('force') === '1';
    setNext(dest);

    const existing = getAccess();
    const active = !!existing && Date.now() < existing.exp;

    if (active && !force) {
      setTitle('Already Active');
      setSub('Valid till ' + new Date(existing!.exp).toLocaleString());
    } else {
      grantAccess();
      setTitle('Access Granted');
      setSub('Unlocked for the next 24 hours. No shortener, no waiting.');
    }

    const t = setTimeout(() => router.replace(dest), active && !force ? 1400 : 1800);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <main className="grid min-h-dvh place-items-center bg-[#07070f] px-6 text-[#f5f5ff]">
      <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-gradient-to-b from-[#12121f] to-[#0b0b16] p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,.6)]">
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 text-4xl text-[#04120c] shadow-[0_12px_40px_rgba(52,211,153,.45)] animate-[pop_.6s_cubic-bezier(.34,1.56,.64,1)_both]">✓</div>
        <h1 className="mt-6 text-2xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{sub}</p>
        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 animate-[fill_1.8s_linear_forwards]" /></div>
        <button onClick={() => router.replace(next)} className="mt-6 w-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 py-3.5 text-sm font-bold text-[#04120c]">Open now →</button>
      </div>
    </main>
  );
}
