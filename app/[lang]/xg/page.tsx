import { Suspense } from "react";

import Covers from "@/components/covers";
import Loading from "@/components/loading";
import DynamicData from "@/components/dynamicData";

type Props = { params: { lang: string } };
export default function XgPage({ params }: Props) {
  const { lang } = params;

  return (
    <main className="mx-auto min-h-dvh max-w-xs">
      <h1 className="bg-zinc-800 py-4 text-center text-3xl font-extrabold">
        XG page
      </h1>

      <Suspense fallback={<Loading />}>
        <DynamicData />
      </Suspense>

      {/* <Suspense fallback={<Loading />}> */}
        <Covers lang={lang} />
      {/* </Suspense> */}
    </main>
  );
}
