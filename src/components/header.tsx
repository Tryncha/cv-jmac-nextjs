import { Link } from '../i18n/navigation';
import { BlockLogo } from './icons/personal-icons';
import { ibmPlexSerif } from '../lib/fonts';
import LinksNavbar from './links-navbar';
import { getIntlConfig } from '../lib/utils';

const Header = async () => {
  const { t } = await getIntlConfig();

  return (
    <header className="absolute inset-x-0 top-0 z-10 flex w-full flex-col items-center justify-between border-b border-slate-300 bg-slate-200 shadow-md xl:flex-row xl:px-4">
      <section className="flex justify-center gap-2 px-12 py-1 md:py-0 xl:p-0">
        {/* Logo */}
        <Link
          href="/"
          className="hidden transition-transform hover:scale-105 md:block"
        >
          <BlockLogo size="80" />
        </Link>

        {/* Name and Academic Titles */}
        <div className="flex flex-col justify-center gap-1 sm:gap-0">
          <Link
            href="/"
            className={`${ibmPlexSerif.className} px-4 text-center text-xl/6 font-bold text-slate-900 uppercase transition-all hover:text-slate-600 sm:px-0 sm:text-2xl md:text-left md:text-3xl`}
          >
            Jhon Mauricio Aguirre Cortés
          </Link>
          <span className="inline text-center text-xs font-medium md:text-sm xl:text-left">{t('Header.titles')}</span>
        </div>
      </section>

      {/* This component is only visible on sm (640px) */}
      {/* For xs (380px) see version='footer' inside its file */}
      <LinksNavbar version="header" />
    </header>
  );
};

export default Header;
