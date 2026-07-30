import api from "./axios";

/**
 * Login User
 */
export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

/**
 * Get Logged-in User Profile
 */
export const getProfile = async () => {
  const response = await api.get("/auth/profile");
  return response.data;
};