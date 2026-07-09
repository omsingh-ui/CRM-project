import {
  createLead,
  getLeads,
  getLeadById,
  updateLead,
  deleteLead,
} from "../services/leadService.js";

import {
  successResponse,
  errorResponse,
} from "../utils/apiResponse.js";

// ==============================
// Create Lead
// ==============================

export const create = async (req, res) => {
  const { customer, source, status, notes } = req.body;

  // Validation
  if (!customer) {
    return errorResponse(
      res,
      "Customer is required.",
      400
    );
  }

  const lead = await createLead({
    customer,
    source,
    status,
    notes,
    owner: req.user._id,
  });

  return successResponse(
    res,
    "Lead created successfully.",
    lead,
    201
  );
};

// ==============================
// Get All Leads
// ==============================

export const getAll = async (req, res) => {
  const result = await getLeads(
    req.user._id,
    req.query
  );

  return successResponse(
    res,
    "Leads fetched successfully.",
    result
  );
};

// ==============================
// Get Single Lead
// ==============================

export const getOne = async (req, res) => {
  const lead = await getLeadById(
    req.params.id,
    req.user._id
  );

  if (!lead) {
    return errorResponse(
      res,
      "Lead not found.",
      404
    );
  }

  return successResponse(
    res,
    "Lead fetched successfully.",
    lead
  );
};

// ==============================
// Update Lead
// ==============================

export const update = async (req, res) => {
  const lead = await updateLead(
    req.params.id,
    req.user._id,
    req.body
  );

  if (!lead) {
    return errorResponse(
      res,
      "Lead not found.",
      404
    );
  }

  return successResponse(
    res,
    "Lead updated successfully.",
    lead
  );
};

// ==============================
// Delete Lead
// ==============================

export const remove = async (req, res) => {
  const lead = await deleteLead(
    req.params.id,
    req.user._id
  );

  if (!lead) {
    return errorResponse(
      res,
      "Lead not found.",
      404
    );
  }

  return successResponse(
    res,
    "Lead deleted successfully.",
    lead
  );
};