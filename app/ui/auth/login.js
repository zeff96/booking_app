import Link from "next/link";

const LoginForm = () => {
  return (
    <form
      action=""
      className="lg:w-1/4 border border-gray-300 rounded-md shadow-md p-3 bg-gray-200"
    >
      <div className="mb-3 bg-orange-700 p-4 flex items-center">
        <h2 className="text-sm text-gray-100">
          Welcome Back, Please login to continue
        </h2>
      </div>

      <div className="flex flex-col gap-1 mb-3">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
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
          placeholder="******"
          className="block appearance-none border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-gray-300 py-2 px-4 placeholder:text-gray-400"
        />
      </div>
      <div className="flex flex-col justify-start gap-2 border-t border-gray-400 pt-3">
        <Link href="/reset-password" className="text-blue-500 underline">
          Forgot password
        </Link>
        <Link href="/register" className="text-blue-500 underline">
          Don't have account yet? Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
