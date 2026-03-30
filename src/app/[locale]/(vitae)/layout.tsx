import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';

import Header from '@/src/components/header';
import LinksNavbar from '@/src/components/links-navbar';
import Footer from '@/src/components/footer';
import ScrollToTopButton from '@/src/components/scroll-to-top-button';

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
    <>
      <Header />
      {children}

      {/* Visible on Mobile */}
      <LinksNavbar version="bottom" />

      {/* Visible on Desktop */}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default RootLayout;
