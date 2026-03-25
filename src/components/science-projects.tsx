import { LocaleProject } from '../types';
import { getIntlConfig } from '../lib/utils';
import { PROJECTS } from '../data/projects';
import Separator from './separator';

const ScienceProjectItem = ({ project }: { project: LocaleProject }) => {
  const { title, institution, city, description } = project;

  return (
    <>
      <div className="my-2 flex flex-col gap-4 px-4 py-2 hover:rounded-sm hover:bg-slate-50 xl:flex-row">
        <div className="flex flex-col xl:w-1/4">
          <h3 className="text-lg/6 font-semibold">{institution}</h3>
          <span className="font-medium">{city}</span>
        </div>
        <Separator />
        <div className="flex flex-col xl:w-3/4">
          <h3 className="text-lg/6 font-bold">{title}</h3>
          <ul className="mt-1 ml-4 list-disc">
            {description.map((desc) => (
              <li key={`${title}-${desc}`}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="my-2 border-slate-300 xl:hidden" />
    </>
  );
};

const ScienceProjects = async () => {
  const { t, locale } = await getIntlConfig();

  return (
    <section>
      <h2 className="px-4 text-center text-2xl font-bold uppercase md:text-left">{t('ScienceProjects.title')}</h2>
      <hr className="my-2 rounded-full border-slate-300" />
      <div className="flex flex-col gap-2">
        {PROJECTS.map((proj) => (
          <ScienceProjectItem
            key={proj.id}
            project={proj[locale]}
          />
        ))}
      </div>
    </section>
  );
};

export default ScienceProjects;
