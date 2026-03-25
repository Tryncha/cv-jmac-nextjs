const Separator = () => {
  return (
    <div className="relative mt-1 hidden w-5 flex-col items-center justify-end gap-0.5 xl:flex">
      <div className="absolute top-0 size-3 rounded-full bg-slate-700" />
      <div className="h-full w-0.5 bg-slate-700" />
      <div className="mt-0.5 h-2 w-0.5 bg-slate-700 opacity-75" />
      <div className="mt-0.5 h-2 w-0.5 bg-slate-700 opacity-50" />
      <div className="mt-0.5 h-2 w-0.5 bg-slate-700 opacity-25" />
    </div>
  );
};

export default Separator;
