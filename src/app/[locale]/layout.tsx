import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';
import { workSans } from '@/src/lib/fonts';
import Header from '@/src/components/header';
import Footer from '@/src/components/footer';
import ScrollToTopButton from '@/src/components/scroll-to-top-button';
import LinksNavbar from '@/src/components/links-navbar';
import Providers from '@/src/components/providers';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import '../globals.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description')
  };
}

const RootLayout = async ({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <Analytics />
      <SpeedInsights />
      <body className={`${workSans.className} bg-slate-300 text-sm text-slate-800`}>
        <NextIntlClientProvider>
          <Providers>
            <Header />
            {children}

            {/* Visible on Mobile */}
            <LinksNavbar version="bottom" />

            {/* Visible on Desktop */}
            <Footer />
            <ScrollToTopButton />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
