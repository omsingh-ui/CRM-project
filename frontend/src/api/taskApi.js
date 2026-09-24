import api from "./axios";

/**
 * Get all tasks with query params (search, status, priority, page, limit)
 */
export const getTasks = async (params = {}) => {
  const response = await api.get("/tasks", {
    params,
  });
  return response.data;
};

/**
 * Get single task by ID
 */
export const getTask = async (id) => {
  const response = await api.get(`/tasks/${id}`);
  return response.data;
};

/**
 * Create new task
 */
export const createTask = async (taskData) => {
  const response = await api.post("/tasks", taskData);
  return response.data;
};

/**
 * Update task
 */
export const updateTask = async (id, taskData) => {
  const response = await api.put(`/tasks/${id}`, taskData);
  return response.data;
};

/**
 * Delete task
 */
export const deleteTask = async (id) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};
