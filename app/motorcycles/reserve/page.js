"use client";

import { ReserveForm } from "@/app/ui/reserve/reserve-form";
import { useSearchParams } from "next/navigation";
import React from "react";

const Reserve = () => {
  const searchParams = useSearchParams();
  const motorcycleId = searchParams.get("motorcycleId");
  return (
    <div className="w-full h-screen flex flex-col gap-y-4">
      <h2 className="text-center text-2xl font-semibold">Add reservation</h2>
      <ReserveForm username="john" motorcycleId={motorcycleId} />
    </div>
  );
};

export default Reserve;
