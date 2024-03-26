import React from "react";
import { getMotorcircleById } from "../../../lib/motorcircles/getMotorcircles";

const page = async ({ params }) => {
  const { id } = params;
  const motorcircle = await getMotorcircleById(id);
  return (
    <div>
      <img src={motorcircle.image} alt={motorcircle.name} />
      <div>
        <h2>{motorcircle.name}</h2>
        <p>Finance fee: ${motorcircle.finance_fee}</p>
        <p>Option to purchase: ${motorcircle.option_to_purchase}</p>
        <p>Total amount payable: ${motorcircle.total_amount_payable}</p>
        <p>Duration: {motorcircle.duration}</p>
      </div>
    </div>
  );
};

export default page;
