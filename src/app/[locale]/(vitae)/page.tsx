import Resume from '@/src/components/sections/resume';
import Studies from '@/src/components/sections/studies';
import WorkExperience from '@/src/components/sections/work-experience';
import Direction from '@/src/components/sections/direction';
import Participation from '@/src/components/sections/participation';
import ButtonToPage from '@/src/components/lightmirror/button-to-page';

//  sm:  px-4, pt-18
//  md: pt-36, pb-8
//  lg: pt-36, pb-8
//  xl: px-12, pt-32, mx-12
// 2xl: px-12, pt-32, mx-12

const HomePage = () => {
  return (
    <main className="flex flex-col gap-4 border-x border-slate-300 bg-white pt-28 pb-16 shadow-sm sm:px-4 sm:pt-18 md:pt-36 md:pb-8 xl:mx-12 xl:px-12 xl:pt-32">
      {/* Light Mirror link button */}
      {/* Only available on xl (1536px) */}
      <div className="absolute top-28 right-28 hidden justify-end xl:flex">
        <ButtonToPage />
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
