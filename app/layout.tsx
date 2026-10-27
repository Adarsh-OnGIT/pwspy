import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PWSpy — Free access to every batch',
  description: 'Free 24-hour access to PW, Vibrant Academy, Next Toppers, Mission Jeet and more. No signup, no shortener.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#07070f] text-[#f5f5ff] antialiased">{children}</body>
    </html>
  );
}
