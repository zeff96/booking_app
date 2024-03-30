"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { deleteMotorcircle } from "../../../lib/motorcircles/deleteMotorcircle";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending}>
      Delete
    </button>
  );
};

const DeleteForm = ({ itemId }) => {
  const [errorMessage, formAction] = useFormState(deleteMotorcircle, undefined);
  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={itemId} />
      <SubmitButton />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
    </form>
  );
};

export default DeleteForm;
