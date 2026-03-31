import { Link } from '@/src/i18n/navigation';
import { getIntlConfig } from '@/src/lib/utils';
import { ArrowLeft } from 'lucide-react';

const Header = async () => {
  const { t } = await getIntlConfig();

  return (
    <header className="flex items-center gap-4 border-slate-300 bg-slate-800 px-4 py-2 shadow-md">
      <Link
        href="/"
        title="Volver atrás"
        className="text-white"
      >
        <ArrowLeft size={24} />
      </Link>
      <h2 className="font-dm-serif-text text-2xl font-semibold text-white">{t('LightMirror.title')}</h2>
    </header>
  );
};

export default Header;
