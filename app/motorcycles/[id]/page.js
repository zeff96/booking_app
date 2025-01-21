import { motorcycles } from "@/app/lib/data";
import { formatCurrency } from "@/app/lib/utils";
import Image from "next/image";

export async function generateStaticParams() {
  return motorcycles.map((item) => ({ id: item.id }));
}

export default async function Page({ params }) {
  const id = (await params).id;

  const motorcycle = motorcycles.find((item) => item.id === id);

  return (
    <div className="flex flex-col xl:flex-row p-6">
      <div className="w-full h-[300px] xl:h-[600px] xl:basis-2/3">
        <div className="relative w-full h-full">
          <Image
            src={motorcycle.image}
            alt={motorcycle.name}
            style={{ objectFit: "contain" }}
            fill={true}
          />
        </div>
      </div>
      <div className="xl:basis-1/3">
        <div className="flex flex-col xl:items-end mb-8">
          <span className="uppercase text-2xl font-bold">
            {motorcycle.name}
          </span>
          <span>- {formatCurrency(35000)} Upon any Vespa purchase</span>
        </div>
        <div>
          <ul>
            <li className="flex items-center justify-between odd:bg-gray-300 p-2">
              <span>Finance Fee</span>
              <span>{formatCurrency(motorcycle.financeFee)}</span>
            </li>
            <li className="flex items-center justify-between odd:bg-gray-300 p-2">
              <span>Option to purchase fee</span>
              <span>{formatCurrency(motorcycle.optionToPurchase)}</span>
            </li>
            <li className="flex items-center justify-between odd:bg-gray-300 p-2">
              <span>Total amount payable</span>
              <span>{formatCurrency(motorcycle.totalAmountPayable)}</span>
            </li>
            <li className="flex items-center justify-between odd:bg-gray-300 p-2">
              <span>Duration</span>
              <span>{motorcycle.duration} Months</span>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">5.9% APR</span> Representative
        </div>
      </div>
    </div>
  );
}
