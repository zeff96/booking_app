import Link from "next/link";

const RegistrationForm = () => {
  return (
    <form
      action=""
      className="lg:w-1/4 border border-gray-300 rounded-md shadow-md p-3 bg-gray-200"
    >
      <h2 className="text-start mb-3">Register</h2>
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
      <div className="flex flex-col gap-1 mb-3">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password confirmation"
          className="block appearance-none border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-gray-300 py-2 px-4 placeholder:text-gray-400"
        />
      </div>
      <div className="flex flex-col justify-start gap-2 border-t border-gray-400 pt-3">
        <Link href="/login" className="text-blue-500 underline">
          have account already? Login
        </Link>
      </div>
    </form>
  );
};

export default RegistrationForm;
