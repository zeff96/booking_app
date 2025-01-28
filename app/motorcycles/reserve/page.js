"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const Reserve = () => {
  const searchParams = useSearchParams();
  const motorcycleId = searchParams.get("motorcycleId");
  return (
    <div>
      <h2>Add reservation</h2>
    </div>
  );
};

export default Reserve;
