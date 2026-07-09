import Lead from "../models/Lead.js";
import { buildQuery } from "../utils/apiFeatures.js";

// ==============================
// Create Lead
// ==============================

export const createLead = async (leadData) => {
  return await Lead.create(leadData);
};

// ==============================
// Get All Leads
// Search + Filter + Sort + Pagination
// ==============================

export const getLeads = async (
  ownerId,
  queryParams
) => {
  const { query, filter, page, limit } = buildQuery(
    Lead,
    ownerId,
    queryParams,
    ["source", "status"]
  );

  query.populate("customer");

  const leads = await query;

  const total = await Lead.countDocuments(filter);

  return {
    leads,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

// ==============================
// Get Single Lead
// ==============================

export const getLeadById = async (
  leadId,
  ownerId
) => {
  return await Lead.findOne({
    _id: leadId,
    owner: ownerId,
  }).populate("customer");
};

// ==============================
// Update Lead
// ==============================

export const updateLead = async (
  leadId,
  ownerId,
  updateData
) => {
  return await Lead.findOneAndUpdate(
    {
      _id: leadId,
      owner: ownerId,
    },
    updateData,
    {
      new: true,
      runValidators: true,
    }
  ).populate("customer");
};

// ==============================
// Delete Lead
// ==============================

export const deleteLead = async (
  leadId,
  ownerId
) => {
  return await Lead.findOneAndDelete({
    _id: leadId,
    owner: ownerId,
  });
};