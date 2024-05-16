export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-lg text-center font-medium tracking-tight text-primary uppercase w-fit flex items-center justify-center gap-5 mb-8">
      <div className="w-2 h-2 ring-1 ring-offset-4 rounded-full bg-primary bing" />
      {title}
      <div className="w-2 h-2 ring-1 ring-offset-4 rounded-full bg-primary bing" />
    </h1>
  );
};
