import Customer from "../models/Customer.js";

// ==============================
// Create Customer
// ==============================

export const createCustomer = async (customerData) => {
  const customer = await Customer.create(customerData);

  return customer;
};

// ==============================
// Get All Customers
// ==============================

export const getCustomers = async (ownerId) => {
  const customers = await Customer.find({
    owner: ownerId,
  }).sort({ createdAt: -1 });

  return customers;
};

// ==============================
// Get Single Customer
// ==============================

export const getCustomerById = async (customerId, ownerId) => {
  const customer = await Customer.findOne({
    _id: customerId,
    owner: ownerId,
  });

  return customer;
};

// ==============================
// Update Customer
// ==============================

export const updateCustomer = async (
  customerId,
  ownerId,
  updateData
) => {
  const customer = await Customer.findOneAndUpdate(
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

  return customer;
};

// ==============================
// Delete Customer
// ==============================

export const deleteCustomer = async (
  customerId,
  ownerId
) => {
  const customer = await Customer.findOneAndDelete({
    _id: customerId,
    owner: ownerId,
  });

  return customer;
};