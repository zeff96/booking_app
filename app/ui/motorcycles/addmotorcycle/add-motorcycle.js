"use client";

import { useEffect, useRef, useState } from "react";

export function AddMotorcycleForm() {
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
    <form action="">
      <div className="mb-3">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          className="block w-full p-3 rounded-md appearance:none border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 placeholder:text-gray-500"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="sr-only">
          Image
        </label>
        <input
          type="file"
          name="image"
          id="image"
          required
          className="block w-full p-3 rounded-md appearance:none border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 placeholder:text-gray-500"
        />
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
          required
          className="block w-full p-3 rounded-md appearance:none border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 placeholder:text-gray-500"
        />
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
          required
          className="block w-full p-3 rounded-md appearance:none border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 placeholder:text-gray-500"
        />
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
          required
          className="block w-full p-3 rounded-md appearance:none border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 placeholder:text-gray-500"
        />
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
          required
          className="block w-full p-3 rounded-md appearance:none border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 placeholder:text-gray-500 resize-none overflow-hidden"
          ref={textareaRef}
          style={{ height }}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="grid mb-3">
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Create
        </button>
      </div>
    </form>
  );
}
