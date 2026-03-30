import Resume from '@/src/components/resume';
import Studies from '@/src/components/studies';
import WorkExperience from '@/src/components/work-experience';
import Direction from '@/src/components/direction';
import Participation from '@/src/components/participation';

const HomePage = () => {
  return (
    <main className="flex flex-col gap-4 border-x border-slate-300 bg-white pt-28 pb-16 shadow-sm sm:px-4 sm:pt-18 md:pt-36 md:pb-8 xl:mx-12 xl:px-12 xl:pt-32">
      <Resume />
      <Studies />
      <WorkExperience />
      <Direction />
      <Participation />
    </main>
  );
};

export default HomePage;
