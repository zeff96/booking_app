import { Motorcycles } from "@/app/ui/motorcycles/motorcycles";

export default async function Page() {
  return (
    <main className="w-full h-screen flex flex-col justify-center">
      <div className="text-center mb-6">
        <h2 className="font-bold uppercase text-2xl">Latest Models</h2>
        <span className="text-sm text-gray-300">
          Please select a Vespa Model
        </span>
      </div>
      <div className="px-12">
        <Motorcycles />
      </div>
    </main>
  );
}
