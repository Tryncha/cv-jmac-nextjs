import { getLocale, getTranslations } from 'next-intl/server';
import { LocaleOtherStudy, LocaleStudy } from '../types';
import { GRADUATES, MAIN_STUDIES, OTHER_STUDIES } from '../data/studies';
import Details from './details';
import AwardText from './award-text';

const MainStudy = async ({ study }: { study: LocaleStudy }) => {
  const t = await getTranslations();
  const { title, institution, area, thesis, city, award } = study;

  return (
    <>
      <div className="flex flex-col justify-between gap-2 p-4 text-center hover:rounded-sm hover:bg-slate-50 sm:text-left md:py-2">
        {/* Main info and Award info */}
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="flex flex-col">
            <h3 className="text-lg/6 font-semibold">{title}</h3>
            <span>{institution}</span>
            <span>{city}</span>
          </div>
          {award && <AwardText award={award} />}
        </div>

        {/* Area and Thesis info */}
        {(area || thesis) && (
          <div className="flex flex-col">
            {area && (
              <p className="font-medium">
                <span className="font-semibold">{t('Studies.area')}:</span> {area}
              </p>
            )}
            {thesis && (
              <p className="font-medium">
                <span className="font-semibold">{t('Studies.thesis')}:</span> {thesis}
              </p>
            )}
          </div>
        )}
      </div>
      <hr className="border-slate-300 last:border-0" />
    </>
  );
};

const Graduate = ({ study }: { study: LocaleStudy }) => {
  const { title, institution, city } = study;

  return (
    <div className="flex flex-1 flex-col items-center justify-between gap-2 px-4 py-2 text-center hover:rounded-sm hover:bg-slate-50 md:flex-row md:py-2 md:text-left">
      <div className="flex flex-col">
        <h3 className="text-lg/6 font-semibold">{title}</h3>
        <span>{institution}</span>
        <span>{city}</span>
      </div>
    </div>
  );
};

const OtherStudy = ({ study }: { study: LocaleOtherStudy }) => {
  const { title, institution, city, date } = study;

  return (
    <div className="flex flex-1 flex-col items-center justify-between px-4 py-2 text-center hover:rounded-sm hover:bg-slate-50 md:flex-row md:py-2 md:text-left">
      <div className="flex flex-col">
        <h3 className="text-lg/6 font-semibold">{title}</h3>
        <span>{institution}</span>
        <span>{city}</span>
      </div>
      <div className="flex flex-col justify-center font-semibold md:w-1/3 md:items-end">{date}</div>
    </div>
  );
};

const Studies = async () => {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <>
      {/* Main studies */}
      <section>
        <h2 className="px-4 text-center text-2xl font-bold uppercase md:text-left">{t('Studies.educationTitle')}</h2>
        <hr className="my-2 rounded-full border-slate-300" />
        <div className="flex flex-col gap-2">
          {MAIN_STUDIES.map((edu) => (
            <MainStudy
              key={edu.id}
              study={edu[locale]}
            />
          ))}
        </div>
      </section>

      {/* Graduates */}
      <section>
        <h2 className="px-4 text-center text-2xl font-bold uppercase md:text-left">{t('Studies.graduatesTitle')}</h2>
        <hr className="my-2 border-slate-300" />
        <div className="flex flex-col gap-2 xl:flex-row">
          {GRADUATES.map((grd) => (
            <Graduate
              key={grd.id}
              study={grd[locale]}
            />
          ))}
        </div>
      </section>

      {/* Courses and Scientific Conferences */}
      <Details title={t('Studies.otherStudiesTitle')}>
        {OTHER_STUDIES.map((edu) => (
          <OtherStudy
            key={edu.id}
            study={edu[locale]}
          />
        ))}
      </Details>
    </>
  );
};

export default Studies;
