import Resume from '@/src/components/sections/resume';
import Studies from '@/src/components/sections/studies';
import WorkExperience from '@/src/components/sections/work-experience';
import Direction from '@/src/components/sections/direction';
import Participation from '@/src/components/sections/participation';
import { ExternalLink } from 'lucide-react';
import { Link } from '@/src/i18n/navigation';

//  sm:  px-4, pt-18
//  md: pt-36, pb-8
//  lg: pt-36, pb-8
//  xl: px-12, pt-32, mx-12
// 2xl: px-12, pt-32, mx-12

const HomePage = () => {
  return (
    <main className="flex flex-col gap-4 border-x border-slate-300 bg-white pt-28 pb-16 shadow-sm sm:px-4 sm:pt-18 md:pt-36 md:pb-8 xl:mx-12 xl:px-12 xl:pt-32">
      <div className="absolute top-28 right-28 hidden justify-end xl:flex">
        <Link
          href="/lightmirror"
          className="flex w-xs items-center justify-center gap-2 rounded-full border border-slate-300 bg-slate-300 py-1 text-lg font-bold text-slate-700 transition-all hover:cursor-pointer hover:bg-slate-200"
        >
          ¡Conoce sobre mi spin off!
          <ExternalLink size={20} />
        </Link>
      </div>
      <Resume />
      <Studies />
      <WorkExperience />
      <Direction />
      <Participation />
    </main>
  );
};

export default HomePage;
