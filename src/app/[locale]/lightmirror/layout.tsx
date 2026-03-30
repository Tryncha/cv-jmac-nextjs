import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'Metadata' });

  return {
    title: t('lightmirror.title')
  };
}

const RootLayout = async ({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return children;
};

export default RootLayout;
