import { getIntlConfig } from '../../lib/utils';
import { WORK_EXPERIENCE } from '../../data/work-experience';
import Details from '../details';
import Separator from '../separator';

const WorkExperience = async () => {
  const { t, locale } = await getIntlConfig();

  return (
    <Details title={t('WorkExperience.title')}>
      {WORK_EXPERIENCE.map((work) => (
        <div
          key={work.id}
          className="my-2 flex flex-col gap-4 px-4 py-2 hover:rounded-sm hover:bg-slate-50 xl:flex-row"
        >
          <div className="flex flex-col xl:w-1/4">
            <h3 className="text-lg/6 font-semibold">{work[locale].institution}</h3>
            <span className="font-medium">{work[locale].city}</span>
          </div>
          <Separator />
          <div className="flex flex-col xl:w-3/4">
            <h3 className="text-lg/6 font-bold">{work[locale].title}</h3>
            <ul className="mt-1 ml-4 list-disc">
              {work[locale].subjects && (
                <li className="font-medium text-green-900">
                  {t('WorkExperience.teachingText')}: {work[locale].subjects.join(', ')}
                </li>
              )}
              {work[locale].description.map((desc) => (
                <li key={`${work[locale].title}-${desc}`}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Details>
  );
};

export default WorkExperience;
