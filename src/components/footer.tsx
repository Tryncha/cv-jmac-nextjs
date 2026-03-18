import { getTranslations } from 'next-intl/server';
import LocaleSelector from './locale-selector';
import { MapPin } from 'lucide-react';

const Footer = async () => {
  const t = await getTranslations();

  return (
    <footer className="absolute inset-x-0 bottom-0 z-30 hidden w-full justify-between border-t border-slate-300 bg-slate-200 px-2 py-1 shadow-sm md:flex">
      {/* Page info */}
      <section className="flex flex-col justify-center overflow-auto">
        <small className="font-medium text-nowrap text-slate-500 italic">
          &copy; {t('Footer.design')}:{' '}
          <a
            href="https://github.com/Tryncha"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:font-bold"
          >
            Tryncha
          </a>
          , {new Date().getFullYear()}
        </small>
        <small className="font-medium text-nowrap text-slate-500 italic">
          &copy; {t('Footer.info')}:{' '}
          <span className="transition-all hover:font-bold">Jhon Mauricio Aguirre Cortés</span>,{' '}
          {new Date().getFullYear()}
        </small>
      </section>

      {/* Location and Locale */}
      <section className="flex justify-center gap-4 p-1">
        <div className="flex items-center gap-1">
          <MapPin
            size={18}
            strokeWidth={1.5}
          />
          <span className="font-medium">{t('Header.address')}</span>
        </div>

        <LocaleSelector />
      </section>
    </footer>
  );
};

export default Footer;
