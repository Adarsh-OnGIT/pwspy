'use client';
import { useEffect, useMemo, useState } from 'react';

const API = 'https://rolexcoderz.in/donate/batches_api.php?action=all_batches';
const STUDY = 'https://rolexcoderz.com/RC/?batchId=';

type Batch = { id: string; name: string; batch_id: string; image: string };

export default function Browse() {
  const [batches, setBatches] = useState<Batch[]>([]);
  const [q, setQ] = useState('');
  const [open, setOpen] = useState<Batch | null>(null);

  useEffect(() => {
    fetch(API).then(r => r.json())
      .then(d => setBatches(d.batches ?? []))
      .catch(() => setBatches([]));
  }, []);

  const list = useMemo(
    () => batches.filter(b => b.name.toLowerCase().includes(q.toLowerCase())),
    [batches, q]
  );

  if (open) {
    return (
      <div className="flex h-screen flex-col">
        <div className="flex items-center gap-3 border-b p-2">
          <button onClick={() => setOpen(null)} className="rounded border px-3 py-1">
            ← Back
          </button>
          <span className="truncate text-sm">{open.name}</span>
          <a href={STUDY + open.batch_id} target="_blank" rel="noreferrer"
             className="ml-auto rounded border px-3 py-1 text-sm">
            Open ↗
          </a>
        </div>
        <iframe
          src={STUDY + open.batch_id}
          className="w-full flex-1 border-0"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-4">
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search batches…"
        className="mb-4 w-full rounded border px-3 py-2"
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {list.map(b => (
          <button key={b.id} onClick={() => setOpen(b)} className="rounded border p-2 text-left">
            {b.image && <img src={b.image} alt="" className="mb-2 h-24 w-full rounded object-cover" />}
            <span className="line-clamp-2 text-xs">{b.name}</span>
          </button>
        ))}
      </div>
      {!list.length && <p className="text-sm opacity-60">Loading…</p>}
    </div>
  );
}
