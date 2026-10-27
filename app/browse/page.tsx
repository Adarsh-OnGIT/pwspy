'use client';

import { useEffect, useMemo, useState } from 'react';

const API = 'https://rolexcoderz.in/donate/batches_api.php?action=all_batches';
const STUDY = 'https://rolexcoderz.com/RC/?batchId=';

type Batch = {
  id: string;
  name: string;
  batch_id: string;
  image: string;
};

export default function BrowsePage() {
  const [batches, setBatches] = useState<Batch[]>([]);
  const [q, setQ] = useState('');
  const [open, setOpen] = useState<Batch | null>(null);
  const [err, setErr] = useState('');

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((d) => setBatches(d.batches ?? []))
      .catch(() => setErr('Could not load batches'));
  }, []);

  const list = useMemo(
    () => batches.filter((b) => b.name.toLowerCase().includes(q.trim().toLowerCase())),
    [batches, q]
  );

  if (open) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-white">
        <div className="flex items-center gap-3 border-b p-2">
          <button onClick={() => setOpen(null)} className="rounded border px-3 py-1 text-sm">
            ← Back
          </button>
          <span className="truncate text-sm font-medium">{open.name}</span>
          <a
            href={STUDY + open.batch_id}
            target="_blank"
            rel="noreferrer"
            className="ml-auto rounded border px-3 py-1 text-sm"
          >
            Open ↗
          </a>
        </div>
        <iframe src={STUDY + open.batch_id} className="w-full flex-1 border-0" allowFullScreen />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl p-4">
      <h1 className="mb-4 text-xl font-bold">Batches</h1>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search batches..."
        className="mb-4 w-full rounded-lg border px-4 py-2 outline-none"
      />

      {err && <p className="mb-4 text-sm text-red-500">{err}</p>}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((b) => (
          <button
            key={b.id}
            onClick={() => setOpen(b)}
            className="overflow-hidden rounded-xl border p-2 text-left transition hover:shadow-md"
          >
            {b.image ? (
              <img src={b.image} alt="" className="mb-2 h-24 w-full rounded-lg object-cover" />
            ) : (
              <div className="mb-2 h-24 w-full rounded-lg bg-neutral-200" />
            )}
            <span className="line-clamp-2 text-xs font-medium">{b.name}</span>
          </button>
        ))}
      </div>

      {!list.length && !err && <p className="text-sm opacity-60">Loading...</p>}
    </div>
  );
}
