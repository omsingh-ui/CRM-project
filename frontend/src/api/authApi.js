import api from "./axios";


/**
 * Register User
 */
export const register = async (userData) => {
  const response = await api.post(
    "/auth/register",
    userData
  );

  return response.data;
};



/**
 * Login User
 */
export const login = async (credentials) => {
  const response = await api.post(
    "/auth/login",
    credentials
  );

  return response.data;
};



/**
 * Get Logged-in User Profile
 */
export const getProfile = async () => {
  const response = await api.get(
    "/auth/profile"
  );

  return response.data;
};

/**
 * Request Password Reset Token
 */
export const forgotPassword = async (email) => {
  const response = await api.post("/auth/forgot-password", { email });
  return response.data;
};

/**
 * Reset Password with Token
 */
export const resetPassword = async ({ token, password }) => {
  const response = await api.post("/auth/reset-password", {
    token,
    password,
  });
  return response.data;
};