import Activity from "../models/Activity.js";

// ==============================
// Create Activity
// ==============================

export const createActivity = async ({
  action,
  module,
  description,
  user,
}) => {
  return await Activity.create({
    action,
    module,
    description,
    user,
  });
};

// ==============================
// Get Recent Activities
// ==============================

export const getActivities = async (
  ownerId,
  limit = 20
) => {
  return await Activity.find({
    user: ownerId,
  })
    .sort({ createdAt: -1 })
    .limit(Number(limit))
    .populate("user", "name email");
};

// ==============================
// Delete Activities
// ==============================

export const deleteActivities = async (
  ownerId
) => {
  return await Activity.deleteMany({
    user: ownerId,
  });
};