import { RESUME } from '../data-old/resume';
import { getIntlConfig } from '../lib/utils';

const Resume = async () => {
  const { t, locale } = await getIntlConfig();

  return (
    <section>
      <h2 className="px-4 text-center text-2xl font-bold uppercase md:text-left">{t('Resume.title')}</h2>
      <hr className="my-2 border-slate-300" />
      <p className="px-4 text-justify whitespace-pre-line">{RESUME[locale].description}</p>
    </section>
  );
};

export default Resume;
