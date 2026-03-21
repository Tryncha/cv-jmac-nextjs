import Resume from '@/src/components/resume';
import Studies from '@/src/components/studies';

const HomePage = () => {
  return (
    <main className="flex flex-col gap-8 border-x border-slate-300 bg-white pt-28 pb-16 shadow-sm sm:px-4 sm:pt-18 md:pt-36 md:pb-8 xl:mx-12 xl:px-12 xl:pt-32">
      <Resume />
      <Studies />
    </main>
  );
};

export default HomePage;
