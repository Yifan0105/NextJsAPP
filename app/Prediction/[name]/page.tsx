interface Params {
  param: { name: string };
}

export default function Page({ params }: { params: Params }) {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      {params.param.name}
    </main>
  );
}
