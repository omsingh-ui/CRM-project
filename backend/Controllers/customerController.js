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

import { createActivity } from "../services/activityService.js";
import deleteFile from "../utils/deleteFile.js";

// ==============================
// Create Customer
// ==============================

export const create = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      status,
    } = req.body;

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
      profileImage: req.file ? req.file.path : null,
      owner: req.user._id,
    });

    await createActivity({
      action: "Created",
      module: "Customer",
      description: `Created customer '${customer.name}'`,
      user: req.user._id,
    });

    return successResponse(
      res,
      "Customer created successfully.",
      customer,
      201
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Get All Customers
// ==============================

export const getAll = async (req, res, next) => {
  try {
    const {
      search,
      status,
      page,
      limit,
      sort,
    } = req.query;

    const result = await getCustomers(
      req.user._id,
      {
        search,
        status,
        page,
        limit,
        sort,
      }
    );

    return successResponse(
      res,
      "Customers fetched successfully.",
      result
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Get Single Customer
// ==============================

export const getOne = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

// ==============================
// Update Customer
// ==============================

export const update = async (req, res, next) => {
  try {
    const existingCustomer = await getCustomerById(
      req.params.id,
      req.user._id
    );

    if (!existingCustomer) {
      return errorResponse(
        res,
        "Customer not found.",
        404
      );
    }

    const updateData = {
      ...req.body,
    };

    if (req.file) {
      if (existingCustomer.profileImage) {
        deleteFile(existingCustomer.profileImage);
      }

      updateData.profileImage = req.file.path;
    }

    const customer = await updateCustomer(
      req.params.id,
      req.user._id,
      updateData
    );

    await createActivity({
      action: "Updated",
      module: "Customer",
      description: `Updated customer '${customer.name}'`,
      user: req.user._id,
    });

    return successResponse(
      res,
      "Customer updated successfully.",
      customer
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Delete Customer
// ==============================

export const remove = async (req, res, next) => {
  try {
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

    if (customer.profileImage) {
      deleteFile(customer.profileImage);
    }

    await createActivity({
      action: "Deleted",
      module: "Customer",
      description: `Deleted customer '${customer.name}'`,
      user: req.user._id,
    });

    return successResponse(
      res,
      "Customer deleted successfully.",
      customer
    );
  } catch (error) {
    next(error);
  }
};