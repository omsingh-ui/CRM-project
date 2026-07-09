import {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "../services/customerService.js";

import {
  successResponse,
  errorResponse,
} from "../utils/apiResponse.js";

// ==============================
// Create Customer
// ==============================

export const create = async (req, res) => {
  const {
    name,
    email,
    phone,
    company,
    status,
  } = req.body;

  // Validation
  if (!name || !email || !phone) {
    return errorResponse(
      res,
      "Name, email and phone are required.",
      400
    );
  }

  const customer = await createCustomer({
    name,
    email,
    phone,
    company,
    status,
    owner: req.user._id,
  });

  return successResponse(
    res,
    "Customer created successfully.",
    customer,
    201
  );
};

// ==============================
// Get All Customers
// Search + Pagination + Sorting
// ==============================

export const getAll = async (req, res) => {
  const result = await getCustomers(
    req.user._id,
    req.query
  );

  return successResponse(
    res,
    "Customers fetched successfully.",
    result
  );
};

// ==============================
// Get Single Customer
// ==============================

export const getOne = async (req, res) => {
  const customer = await getCustomerById(
    req.params.id,
    req.user._id
  );

  if (!customer) {
    return errorResponse(
      res,
      "Customer not found.",
      404
    );
  }

  return successResponse(
    res,
    "Customer fetched successfully.",
    customer
  );
};

// ==============================
// Update Customer
// ==============================

export const update = async (req, res) => {
  const customer = await updateCustomer(
    req.params.id,
    req.user._id,
    req.body
  );

  if (!customer) {
    return errorResponse(
      res,
      "Customer not found.",
      404
    );
  }

  return successResponse(
    res,
    "Customer updated successfully.",
    customer
  );
};

// ==============================
// Delete Customer
// ==============================

export const remove = async (req, res) => {
  const customer = await deleteCustomer(
    req.params.id,
    req.user._id
  );

  if (!customer) {
    return errorResponse(
      res,
      "Customer not found.",
      404
    );
  }

  return successResponse(
    res,
    "Customer deleted successfully.",
    customer
  );
};