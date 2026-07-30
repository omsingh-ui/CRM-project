import api from "./axios";

export const getLeads = async (params = {}) => {
  const response = await api.get("/leads", {
    params,
  });

  return response.data;
};