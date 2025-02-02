"use client";

import { createMotorcycle } from "@/app/actions/motorcycles/motorcles";
import { useActionState, useEffect, useRef, useState } from "react";

export function AddMotorcycleForm() {
  const [state, formAction, pending] = useActionState(
    createMotorcycle,
    undefined
  );
  const [height, setHeight] = useState("auto");
  const [content, setContent] = useState("");
  const textareaRef = useRef();

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  useEffect(() => {
    const element = textareaRef.current;
    if (element) {
      setHeight("auto");
      setHeight(`${element.scrollHeight}px`);
    }
  }, [content]);

  return (
    <form action={formAction}>
      <div className="mb-3">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="block w-full p-3 rounded-md appearance:none border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 placeholder:text-gray-500"
        />
        {state?.errors?.name && (
          <p className="text-red-500">{state.errors.name}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="image" className="sr-only">
          Image
        </label>
        <input
          type="file"
          name="image"
          id="image"
          className="block w-full p-3 rounded-md appearance:none border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 placeholder:text-gray-500"
        />
        {state?.errors?.image && (
          <p className="text-red-500">{state.errors.image}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="financeFee" className="sr-only">
          Finance Fee
        </label>
        <input
          type="number"
          name="financeFee"
          id="financeFee"
          placeholder="Finance Fee"
          className="block w-full p-3 rounded-md appearance:none border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 placeholder:text-gray-500"
        />
        {state?.errors?.financeFee && (
          <p className="text-red-500">{state.errors.financeFee}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="optionToPurchase" className="sr-only">
          Option To Purchase
        </label>
        <input
          type="number"
          name="optionToPurchase"
          id="optionToPurchase"
          placeholder="Option to purchase"
          className="block w-full p-3 rounded-md appearance:none border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 placeholder:text-gray-500"
        />
        {state?.errors?.optionToPurchase && (
          <p className="text-red-500">{state.errors.optionToPurchase}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="totalAmountPayable" className="sr-only">
          Total Amount Payable
        </label>
        <input
          type="number"
          name="totalAmountPayable"
          id="totalAmountPayable"
          placeholder="Total amount payable"
          className="block w-full p-3 rounded-md appearance:none border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 placeholder:text-gray-500"
        />
        {state?.errors?.totalAmountPayable && (
          <p className="text-red-500">{state.errors.totalAmountPayable}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="duration" className="sr-only">
          Duration
        </label>
        <input
          type="number"
          name="duration"
          id="duration"
          placeholder="duration"
          className="block w-full p-3 rounded-md appearance:none border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 placeholder:text-gray-500"
        />
        {state?.errors?.duration && (
          <p className="text-red-500">{state.errors.duration}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="bio" className="sr-only">
          Description
        </label>
        <textarea
          name="bio"
          id="bio"
          placeholder="Description"
          value={content}
          className="block w-full p-3 rounded-md appearance:none border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 placeholder:text-gray-500 resize-none overflow-hidden"
          ref={textareaRef}
          style={{ height }}
          onChange={handleChange}
        ></textarea>
        {state?.errors?.bio && (
          <p className="text-red-500">{state.errors.bio}</p>
        )}
      </div>

      <div className="grid mb-3">
        <button
          disabled={pending}
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Create
        </button>
      </div>
      {state?.message && <div className="text-red-500">{state.message}</div>}
    </form>
  );
}
