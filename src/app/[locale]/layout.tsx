import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Metadata } from 'next';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';
import { workSans } from '@/src/lib/fonts';
import Header from '@/src/components/header';
import Footer from '@/src/components/footer';
import '../globals.css';
import ScrollToTopButton from '@/src/components/scroll-to-top-button';
import LinksNavbar from '@/src/components/links-navbar';

export const metadata: Metadata = {
  title: 'CV - Jhon Mauricio Aguirre Cortés'
};

const RootLayout = async ({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${workSans.className} bg-slate-300 text-sm text-slate-800`}>
        <NextIntlClientProvider>
          <Header />
          {children}

          {/* Visible on Mobile */}
          <LinksNavbar version="bottom" />

          {/* Visible on Desktop */}
          <Footer />
          <ScrollToTopButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
