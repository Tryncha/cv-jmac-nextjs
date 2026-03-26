'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from '@/src/i18n/navigation';
import { useIntlConfig } from '@/src/lib/utils';

const PublicationsPage = () => {
  const { t } = useIntlConfig();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [tab, setTab] = useState(searchParams.get('tab') || '');

  const availableTabs = [
    { label: t('Publications.tabs.articles'), value: 'articles' },
    { label: t('Publications.tabs.presentations'), value: 'presentations' },
    { label: t('Publications.tabs.media'), value: 'media' }
  ];

  function changeTab(newTab: string) {
    setTab(newTab);
    const newSearchParams = new URLSearchParams(searchParams);

    if (newTab) {
      newSearchParams.set('tab', newTab);
    } else {
      newSearchParams.delete('tab');
    }

    replace(`${pathname}?${newSearchParams.toString()}`);
  }

  useEffect(() => {
    if (!tab) changeTab('articles');
  }, [tab]);

  return (
    <main className="flex flex-col gap-2 border-x border-slate-300 bg-white pt-28 pb-16 shadow-sm sm:px-4 sm:pt-18 md:pt-36 md:pb-8 xl:mx-12 xl:px-12 xl:pt-32">
      {/* Buttons */}
      <div className="flex overflow-x-auto rounded-sm py-2">
        {availableTabs.map((tabItem) => (
          <button
            key={tabItem.value}
            onClick={() => changeTab(tabItem.value)}
            className={`${tab === tabItem.value ? 'bg-slate-200' : 'bg-slate-100'} flex-1 cursor-pointer border-slate-300 px-8 text-lg font-bold uppercase nth-[2]:border-x sm:text-2xl`}
          >
            {tabItem.label}
          </button>
        ))}
      </div>
      <hr className="border-slate-300" />

      {/* Selected tab */}
      {tab === 'articles' && <section>Articles</section>}
      {tab === 'presentations' && <section>Presentations</section>}
      {tab === 'media' && <section>Media</section>}
    </main>
  );
};

export default PublicationsPage;

// Alternative without "use client";

// import { Link } from '@/src/i18n/navigation';
// import { getIntlConfig } from '@/src/lib/utils';

// const PublicationsPage = async ({
//   searchParams
// }: {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }) => {
//   const { t } = await getIntlConfig();
//   const { tab = 'articles' } = await searchParams;

//   const availableTabs = [
//     { label: t('Publications.tabs.articles'), value: 'articles' },
//     { label: t('Publications.tabs.presentations'), value: 'presentations' },
//     { label: t('Publications.tabs.media'), value: 'media' }
//   ];

//   return (
//     <main className="flex flex-col gap-4 border-x border-slate-300 bg-white pt-28 pb-16 shadow-sm sm:px-4 sm:pt-18 md:pt-36 md:pb-8 xl:mx-12 xl:px-12 xl:pt-32">
//       <div className="flex overflow-x-auto rounded-sm border-b border-slate-300 py-2">
//         {availableTabs.map((tabItem) => (
//           <Link
//             key={tabItem.value}
//             href={`/publications?tab=${tabItem.value}`}
//             className={`${tab === tabItem.value ? 'bg-slate-200' : 'bg-slate-100'} flex-1 cursor-pointer border-slate-300 px-8 text-lg font-bold uppercase nth-[2]:border-x sm:text-2xl`}
//           >
//             {tabItem.label}
//           </Link>
//         ))}
//       </div>
//       {/* {tab === 'articles' && <Articles />}
//       {tab === 'presentations' && <Presentations />}
//       {tab === 'media' && <Media />} */}
//     </main>
//   );
// };

// export default PublicationsPage;
