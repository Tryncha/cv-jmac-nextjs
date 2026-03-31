import { getIntlConfig } from '@/src/lib/utils';
import Details from '../details';
import { DIRECTION } from '@/src/data/direction';
import Separator from '../separator';

const Direction = async () => {
  const { t, locale } = await getIntlConfig();

  return (
    <Details title={t('Direction.title')}>
      {DIRECTION.map((act) => (
        <div
          key={act.id}
          className="my-2 flex flex-col gap-4 px-4 py-2 hover:rounded-sm hover:bg-slate-50 xl:flex-row"
        >
          <div className="flex flex-col xl:w-1/4">
            <h3 className="text-lg/6 font-semibold">{act[locale].institution}</h3>
            <span className="font-medium">{act[locale].city}</span>
          </div>
          <Separator />
          <div className="flex flex-col xl:w-3/4">
            <span className="font-semibold">{act[locale].type}</span>
            <h3 className="mb-1 text-lg/6 font-bold">{act[locale].name}</h3>
            <div>
              <span className="font-semibold">{t('Direction.student')}: </span>
              <span className="font-medium">{act[locale].student}</span>
            </div>
            {act[locale].participation && (
              <>
                <hr className="my-2 border-slate-300" />
                <div>
                  <span className="font-semibold">{t('App.participation')}: </span>
                  <span className="font-medium">{act[locale].participation}</span>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </Details>
  );
};

export default Direction;
