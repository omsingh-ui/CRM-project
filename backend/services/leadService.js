import Lead from "../models/Lead.js";

// ==============================
// Create Lead
// ==============================

export const createLead = async (leadData) => {
  const lead = await Lead.create(leadData);

  return lead;
};

// ==============================
// Get All Leads
// ==============================

export const getLeads = async (ownerId) => {
  const leads = await Lead.find({
    owner: ownerId,
  })
    .populate("customer")
    .sort({ createdAt: -1 });

  return leads;
};

// ==============================
// Get Single Lead
// ==============================

export const getLeadById = async (leadId, ownerId) => {
  const lead = await Lead.findOne({
    _id: leadId,
    owner: ownerId,
  }).populate("customer");

  return lead;
};

// ==============================
// Update Lead
// ==============================

export const updateLead = async (
  leadId,
  ownerId,
  updateData
) => {
  const lead = await Lead.findOneAndUpdate(
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

  return lead;
};

// ==============================
// Delete Lead
// ==============================

export const deleteLead = async (
  leadId,
  ownerId
) => {
  const lead = await Lead.findOneAndDelete({
    _id: leadId,
    owner: ownerId,
  });

  return lead;
};