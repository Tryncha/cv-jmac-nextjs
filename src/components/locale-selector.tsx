'use client';

import Image from 'next/image';
import { Locale, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { capitalizeWord } from '../lib/utils';

const LocaleButton = ({ localeOption }: { localeOption: Locale }) => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  function changeLocale(newLocale: Locale) {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.replace(newPathname);
  }

  return (
    <button
      className="z-30 flex cursor-pointer gap-1 border-slate-300 px-2 py-1"
      onClick={() => changeLocale(localeOption)}
    >
      <Image
        src={`/icons/locales/${localeOption}.png`}
        alt={`${capitalizeWord(locale)} Language Flag`}
        width={16}
        height={20}
      />
      <span className="font-semibold uppercase">{localeOption}</span>
    </button>
  );
};

const LocaleSelector = () => {
  const locale = useLocale();

  return (
    <div className="relative flex rounded-xl border-2 border-slate-300 bg-slate-300">
      {/* Selection indicator / Thumb */}
      <div
        className={`${
          locale === 'en' ? 'left-0' : 'left-[50%]'
        } absolute top-0 z-20 h-full w-1/2 rounded-xl border border-slate-300 bg-slate-50/40`}
      />

      {(['en', 'es'] as Locale[]).map((loc) => (
        <LocaleButton
          key={loc}
          localeOption={loc}
        />
      ))}
    </div>
  );
};

export default LocaleSelector;
