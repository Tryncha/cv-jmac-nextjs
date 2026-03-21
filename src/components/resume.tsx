import { getLocale, getTranslations } from 'next-intl/server';
import RESUME from '../data/resume';

const Resume = async () => {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <section>
      <h2 className="px-4 text-center text-2xl font-bold uppercase md:text-left">{t('Resume.title')}</h2>
      <hr className="my-2 border-slate-300" />
      <p className="px-4 text-justify whitespace-pre-line">{RESUME[locale].description}</p>
    </section>
  );
};

export default Resume;
