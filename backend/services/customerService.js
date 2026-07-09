import Customer from "../models/Customer.js";
import { buildQuery } from "../utils/apiFeatures.js";

// ==============================
// Create Customer
// ==============================

export const createCustomer = async (customerData) => {
  return await Customer.create(customerData);
};

// ==============================
// Get All Customers
// Search + Filter + Sort + Pagination
// ==============================

export const getCustomers = async (
  ownerId,
  queryParams
) => {
  const { query, filter, page, limit } = buildQuery(
    Customer,
    ownerId,
    queryParams,
    ["name", "email", "company"]
  );

  const customers = await query;

  const total = await Customer.countDocuments(filter);

  return {
    customers,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

// ==============================
// Get Single Customer
// ==============================

export const getCustomerById = async (
  customerId,
  ownerId
) => {
  return await Customer.findOne({
    _id: customerId,
    owner: ownerId,
  });
};

// ==============================
// Update Customer
// ==============================

export const updateCustomer = async (
  customerId,
  ownerId,
  updateData
) => {
  return await Customer.findOneAndUpdate(
    {
      _id: customerId,
      owner: ownerId,
    },
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );
};

// ==============================
// Delete Customer
// ==============================

export const deleteCustomer = async (
  customerId,
  ownerId
) => {
  return await Customer.findOneAndDelete({
    _id: customerId,
    owner: ownerId,
  });
};