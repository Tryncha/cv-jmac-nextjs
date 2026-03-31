import { Link } from '@/src/i18n/navigation';
import { getIntlConfig } from '@/src/lib/utils';
import { ExternalLink } from 'lucide-react';

const ButtonToPage = async () => {
  const { t } = await getIntlConfig();

  return (
    <Link
      href="/lightmirror"
      className="flex w-xs items-center justify-center gap-2 rounded-full border border-slate-300 bg-slate-300 py-1 text-lg font-bold text-slate-700 transition-all hover:cursor-pointer hover:bg-slate-200"
    >
      {t('LightMirror.linkText')}
      <ExternalLink size={20} />
    </Link>
  );
};

export default ButtonToPage;
