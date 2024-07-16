import { Suspense } from "react";

import Loading from "@/components/loading";
import Articles from "@/components/articles";
import DynamicData from "@/components/dynamicData";

export default async function HomePage() {
  return (
    <>
      <main className="mx-auto min-h-dvh max-w-xs">
        <h1 className="bg-zinc-800 py-4 text-center text-3xl font-extrabold">
          Home page
        </h1>

        <Suspense fallback={<Loading />}>
          <DynamicData />
        </Suspense>

        <Articles />
      </main>
    </>
  );
}
