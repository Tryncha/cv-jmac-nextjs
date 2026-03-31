import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';
import Header from '@/src/components/lightmirror/header';
import Footer from '@/src/components/lightmirror/footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'Metadata' });

  return {
    title: t('lightmirror.title')
  };
}

const RootLayout = async ({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) => {
  const t = await getTranslations();
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
