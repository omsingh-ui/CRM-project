import Customer from "../models/Customer.js";

// ==============================
// Create Customer
// ==============================

export const createCustomer = async (customerData) => {
  return await Customer.create(customerData);
};

// ==============================
// Get Customers
// Search + Filter + Pagination + Sorting
// ==============================

export const getCustomers = async (
  ownerId,
  {
    search = "",
    status,
    page = 1,
    limit = 10,
    sort = "newest",
  }
) => {
  // Base query
  const query = {
    owner: ownerId,
  };

  // Search
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ];
  }

  // Status Filter
  if (status) {
    query.status = status;
  }

  // Sorting
  const sortOption =
    sort === "oldest"
      ? { createdAt: 1 }
      : { createdAt: -1 };

  // Pagination
  const skip = (page - 1) * limit;

  // Fetch data
  const customers = await Customer.find(query)
    .sort(sortOption)
    .skip(skip)
    .limit(Number(limit));

  // Total count
  const totalCustomers = await Customer.countDocuments(query);

  return {
    customers,
    pagination: {
      currentPage: Number(page),
      totalPages: Math.ceil(totalCustomers / limit),
      totalCustomers,
      limit: Number(limit),
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