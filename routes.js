/**
 * An array of public routes
 * These routes does not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of authentication routes
 * These routes are used for authentication purposes
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/registration",
  "/auth/account_confirmation",
];

/**
 * This is the default redirect route after user authentication
 * @type {string}
 */

export const DEFAULT_REDIRECT_ROUTE = "/motorcircles";
