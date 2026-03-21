const Details = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <details>
      <summary className="my-2 border-b border-slate-300 px-4 pb-2 text-center text-2xl font-bold uppercase transition-colors hover:cursor-pointer hover:text-slate-900 md:text-left">
        {title}
      </summary>
      <div className="flex flex-col gap-2">{children}</div>
    </details>
  );
};

export default Details;
