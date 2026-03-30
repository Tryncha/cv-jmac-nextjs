'use client';

import { useState } from 'react';
import { useIntlConfig } from '@/src/lib/utils';
import { PresentationPageTab } from '@/src/types';
import Articles from '@/src/components/articles';
import Presentations from '@/src/components/presentations';
import Media from '@/src/components/media';

const PublicationsPage = () => {
  const { t } = useIntlConfig();

  const [tab, setTab] = useState<PresentationPageTab>('articles');

  const availableTabs: Array<{ label: string; value: PresentationPageTab }> = [
    { label: t('Publications.tabs.articles'), value: 'articles' },
    { label: t('Publications.tabs.presentations'), value: 'presentations' },
    { label: t('Publications.tabs.media'), value: 'media' }
  ];

  return (
    <main className="flex flex-col gap-4 border-x border-slate-300 bg-white pt-28 pb-16 shadow-sm sm:px-4 sm:pt-18 md:pt-36 md:pb-8 xl:mx-12 xl:px-12 xl:pt-32">
      {/* Buttons */}
      <div className="flex overflow-x-auto rounded-sm border-b border-slate-300 py-2">
        {availableTabs.map((tabItem) => (
          <button
            key={tabItem.value}
            onClick={() => setTab(tabItem.value)}
            className={`${tab === tabItem.value ? 'bg-slate-200' : 'bg-slate-100'} flex-1 cursor-pointer border-slate-300 px-8 text-lg font-bold uppercase nth-[2]:border-x sm:text-2xl`}
          >
            {tabItem.label}
          </button>
        ))}
      </div>

      {/* Selected tab */}
      {tab === 'articles' && <Articles />}
      {tab === 'presentations' && <Presentations />}
      {tab === 'media' && <Media />}
    </main>
  );
};

export default PublicationsPage;
