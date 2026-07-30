/**
 * Save authentication data
 */
export function saveAuth(token, user) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

/**
 * Get JWT Token
 */
export function getToken() {
  return localStorage.getItem("token");
}

/**
 * Get Logged-in User
 */
export function getUser() {
  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : null;
}

/**
 * Check Authentication
 */
export function isLoggedIn() {
  return !!getToken();
}

/**
 * Logout User
 */
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}