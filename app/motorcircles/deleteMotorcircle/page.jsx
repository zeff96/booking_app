import React from "react";
import { getMotorcircles } from "../../../lib/motorcircles/getMotorcircles";
import DeleteForm from "./DeleteForm";

async function DeleteMotorcircle() {
  const listMotorcircles = await getMotorcircles();
  return (
    <div>
      <h2>Choose a motorcircle to delete by clicking delete button</h2>
      {listMotorcircles.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <DeleteForm itemId={item.id} />
        </div>
      ))}
    </div>
  );
}

export default DeleteMotorcircle;
