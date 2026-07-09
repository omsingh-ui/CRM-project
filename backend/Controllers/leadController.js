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

import { createActivity } from "../services/activityService.js";
import deleteFile from "../utils/deleteFile.js";

// ==============================
// Create Lead
// ==============================

export const create = async (req, res, next) => {
  try {
    const {
      customer,
      source,
      status,
      notes,
    } = req.body;

    if (!customer) {
      return errorResponse(
        res,
        "Customer is required.",
        400
      );
    }

    const attachments = req.files
      ? req.files.map((file) => file.path)
      : [];

    const lead = await createLead({
      customer,
      source,
      status,
      notes,
      attachments,
      owner: req.user._id,
    });

    await createActivity({
      action: "Created",
      module: "Lead",
      description: `Created lead for customer '${customer}'`,
      user: req.user._id,
    });

    return successResponse(
      res,
      "Lead created successfully.",
      lead,
      201
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Get All Leads
// ==============================

export const getAll = async (req, res, next) => {
  try {
    const result = await getLeads(
      req.user._id,
      req.query
    );

    return successResponse(
      res,
      "Leads fetched successfully.",
      result
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Get Single Lead
// ==============================

export const getOne = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

// ==============================
// Update Lead
// ==============================

export const update = async (req, res, next) => {
  try {
    const existingLead = await getLeadById(
      req.params.id,
      req.user._id
    );

    if (!existingLead) {
      return errorResponse(
        res,
        "Lead not found.",
        404
      );
    }

    const updateData = {
      ...req.body,
    };

    if (req.files && req.files.length > 0) {
      if (
        existingLead.attachments &&
        existingLead.attachments.length
      ) {
        existingLead.attachments.forEach((file) =>
          deleteFile(file)
        );
      }

      updateData.attachments = req.files.map(
        (file) => file.path
      );
    }

    const lead = await updateLead(
      req.params.id,
      req.user._id,
      updateData
    );

    await createActivity({
      action: "Updated",
      module: "Lead",
      description: `Updated lead '${lead._id}'`,
      user: req.user._id,
    });

    return successResponse(
      res,
      "Lead updated successfully.",
      lead
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Delete Lead
// ==============================

export const remove = async (req, res, next) => {
  try {
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

    if (
      lead.attachments &&
      lead.attachments.length
    ) {
      lead.attachments.forEach((file) =>
        deleteFile(file)
      );
    }

    await createActivity({
      action: "Deleted",
      module: "Lead",
      description: `Deleted lead '${lead._id}'`,
      user: req.user._id,
    });

    return successResponse(
      res,
      "Lead deleted successfully.",
      lead
    );
  } catch (error) {
    next(error);
  }
};