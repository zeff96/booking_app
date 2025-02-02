"use client";

import { signup } from "@/app/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

const SignupForm = () => {
  const [state, action, pending] = useActionState(signup, undefined);
  return (
    <form
      action={action}
      className="lg:w-1/4 border border-gray-300 rounded-md shadow-md p-3 bg-gray-200"
    >
      <h2 className="mb-3 text-center">Register</h2>
      <div className="flex flex-col gap-1 mb-3">
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="block appearance-none border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-gray-300 py-2 px-4 placeholder:text-gray-400"
        />
      </div>
      {state?.errors?.username && (
        <p className="text-red-500">{state.errors.username}</p>
      )}

      <div className="flex flex-col gap-1 mb-3">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="block appearance-none border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-gray-300 py-2 px-4 placeholder:text-gray-400"
        />
      </div>
      {state?.errors?.email && (
        <p className="text-red-500">{state.errors.email}</p>
      )}

      <div className="flex flex-col gap-1 mb-3">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="block appearance-none border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-gray-300 py-2 px-4 placeholder:text-gray-400"
        />
      </div>
      {state?.errors?.password && (
        <div>
          <p className="text-red-500">Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li className="text-red-500" key={error}>
                - {error}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col gap-1 mb-3">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          placeholder="Password confirmation"
          className="block appearance-none border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-gray-300 py-2 px-4 placeholder:text-gray-400"
        />
      </div>
      {state?.errors?.password && (
        <div>
          <p className="text-red-500">Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li className="text-red-500" key={error}>
                - {error}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-3 grid">
        <button
          type="submit"
          aria-disabled={pending}
          className="bg-blue-500 p-3 text-white rounded-md hover:bg-blue-700"
        >
          Sign up
        </button>
      </div>
      <div className="flex flex-col justify-start gap-2 border-t border-gray-400 pt-3">
        <Link href="/auth/login" className="text-blue-500 underline">
          have account already? Login
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
