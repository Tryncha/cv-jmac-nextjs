import { getIntlConfig } from '@/src/lib/utils';

const Footer = async () => {
  const { t } = await getIntlConfig();

  return (
    <footer className="border-t border-slate-300 bg-slate-200 py-4 text-center text-xs font-medium text-slate-600 shadow-xs sm:text-sm">
      <span>
        &copy; Light Mirror Tech {new Date().getFullYear()}. {t('Media.copyright')}
      </span>
    </footer>
  );
};

export default Footer;
