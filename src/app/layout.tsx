import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Providers } from '@/components/providers';
import { MobileTabBar } from '@/components/mobile-tab-bar';
import { site } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

// Bold, modern geometric sans for headlines + the KC wordmark.
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: ['KC Digital', 'digital marketing', 'creators', 'brands', 'campaigns', 'KC ecosystem'],
  openGraph: {
    type: 'website',
    title: site.legalName,
    description: site.description,
    url: site.url,
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfafe' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0b13' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable} ${sora.variable}`}
    >
      <body className="min-h-dvh font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Providers>{children}</Providers>
          <MobileTabBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
