import { Motorcycles } from "@/app/ui/motorcycles/motorcycles";
import { CardWrapperSkeleton } from "@/app/ui/motorcycles/skeletons";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="w-full h-screen flex flex-col justify-center px-12">
      <div className="text-center mb-12">
        <h2 className="font-bold uppercase text-2xl">Latest Models</h2>
        <span className="text-sm text-gray-300 border-b-2 border-dashed border-gray-300 pb-6">
          Please select a Vespa Model
        </span>
      </div>

      <Suspense fallback={<CardWrapperSkeleton />}>
        <Motorcycles />
      </Suspense>
    </main>
  );
}
