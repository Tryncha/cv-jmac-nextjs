import React from 'react';
import { getIntlConfig } from '../lib/utils';
import { INVESTIGATION } from '../data/investigation';
import Separator from './separator';

const Investigation = async () => {
  const { t, locale } = await getIntlConfig();

  const VISIBLE_LINES = 5;

  return (
    <section>
      <h2 className="px-4 text-center text-2xl font-bold uppercase md:text-left">{t('Investigation.title')}</h2>
      <hr className="my-2 border-slate-300" />
      <div className="flex flex-col gap-2">
        {INVESTIGATION.map((inv) => (
          <React.Fragment key={inv.id}>
            <div className="my-2 flex flex-col gap-4 px-4 py-2 hover:rounded-sm hover:bg-slate-50 xl:flex-row">
              <div className="flex flex-col xl:w-1/4">
                <h3 className="text-lg/6 font-semibold">{inv[locale].institution}</h3>
                <span className="font-medium">{inv[locale].location}</span>
              </div>
              <Separator />
              <div className="flex flex-col xl:w-3/4">
                <span className="font-medium">{inv[locale].area}</span>
                <a
                  href={inv.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg/6 font-bold text-blue-800 underline transition-colors hover:text-blue-600"
                >
                  {inv[locale].groupName}
                </a>
                <span className="font-medium">{inv[locale].department}</span>
                <span className="font-medium">
                  {t('App.director.singular')}: {inv[locale].director}
                </span>
                <h3 className="mt-2 text-lg/6 font-semibold">{t('Investigation.lines')}: </h3>
                <ul className="ml-4 list-disc">
                  {inv[locale].lines.slice(0, VISIBLE_LINES).map((line) => (
                    <li key={`${line}-${inv.id}`}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
            <hr className="my-2 border-slate-300 xl:hidden" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Investigation;
