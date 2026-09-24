import api from "./axios";

/**
 * Get all leads with optional query parameters
 */
export const getLeads = async (params = {}) => {
  const response = await api.get("/leads", {
    params,
  });

  return response.data;
};

/**
 * Get single lead by ID
 */
export const getLead = async (id) => {
  const response = await api.get(`/leads/${id}`);
  return response.data;
};

/**
 * Create new lead
 */
export const createLead = async (leadData) => {
  const response = await api.post("/leads", leadData);
  return response.data;
};

/**
 * Update lead by ID
 */
export const updateLead = async (id, leadData) => {
  const response = await api.put(`/leads/${id}`, leadData);
  return response.data;
};

/**
 * Delete lead by ID
 */
export const deleteLead = async (id) => {
  const response = await api.delete(`/leads/${id}`);
  return response.data;
};