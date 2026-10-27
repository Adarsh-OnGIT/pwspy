'use client';

const KEY = 'pwspy_access';
const HOURS = 24;

export type Access = { token: string; exp: number };

const newToken = () => {
  const a = crypto.getRandomValues(new Uint8Array(8));
  return Array.from(a).map(b => b.toString(16).padStart(2, '0')).join('');
};

export function getAccess(): Access | null {
  try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { return null; }
}

export function hasAccess(): boolean {
  const t = getAccess();
  return !!t && Date.now() < t.exp;
}

export function msLeft(): number {
  const t = getAccess();
  return t ? Math.max(0, t.exp - Date.now()) : 0;
}

export function grantAccess(hours: number = HOURS): Access {
  const payload: Access = { token: newToken(), exp: Date.now() + hours * 3600e3 };
  try { localStorage.setItem(KEY, JSON.stringify(payload)); } catch {}
  return payload;
}

export function clearAccess(): void {
  try { localStorage.removeItem(KEY); } catch {}
}

export function fmtLeft(ms: number): string {
  if (ms <= 0) return 'expired';
  const h = Math.floor(ms / 3600e3);
  const m = Math.floor((ms % 3600e3) / 60e3);
  return h > 0 ? `${h}h ${m}m left` : `${m}m left`;
}
