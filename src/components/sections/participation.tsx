import { PARTICIPATION } from '../../data/participation';
import { getIntlConfig } from '../../lib/utils';
import Details from '../details';
import Separator from '../separator';

const Participation = async () => {
  const { t, locale } = await getIntlConfig();

  return (
    <Details title={t('Participation.title')}>
      {PARTICIPATION.map((part) => (
        <div
          key={part.id}
          className="my-2 flex flex-col gap-4 px-4 py-2 hover:rounded-sm hover:bg-slate-50 xl:flex-row"
        >
          <div className="flex flex-col xl:w-1/4">
            <h3 className="text-lg/6 font-semibold">{part[locale].institution}</h3>
            <span className="font-medium">{part[locale].city}</span>
          </div>
          <Separator />
          <div className="flex flex-col xl:w-3/4">
            <span className="font-semibold">{part[locale].type}</span>
            <h3 className="mb-1 text-lg/6 font-bold">{part[locale].title}</h3>
            <div>
              <span className="font-semibold">{t('App.student')}: </span>
              <span className="font-medium">{part[locale].student}</span>
            </div>
            <div>
              <span className="font-semibold">{t('App.director.singular')}: </span>
              {part[locale].director.url ? (
                <a
                  href={part[locale].director.url ? part[locale].director.url : ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-800 underline transition-colors hover:text-blue-600"
                >
                  {part[locale].director.name}
                </a>
              ) : (
                <span className="font-medium">{part[locale].director.name}</span>
              )}
            </div>
            <hr className="my-2 border-slate-300" />
            <div>
              <span className="font-semibold">{t('App.participation')}: </span>
              <span className="font-medium">{part[locale].participation}</span>
            </div>
          </div>
        </div>
      ))}
    </Details>
  );
};

export default Participation;
