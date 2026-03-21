import { Award } from 'lucide-react';

const AwardText = ({ award }: { award: string }) => {
  return (
    <div className="flex w-72 items-center justify-center gap-2 rounded-full border-2 border-yellow-700 bg-yellow-100 py-1 shadow-xs transition-all hover:scale-102 hover:shadow-md xl:py-2">
      <Award
        size={18}
        strokeWidth={2}
        className="text-yellow-700"
      />
      <span className="text-xs font-semibold text-yellow-700 xl:text-sm">{award}</span>
    </div>
  );
};

export default AwardText;
