// ==============================
// API Features Utility
// Search + Filter + Sort + Pagination
// ==============================

export const buildQuery = (
  Model,
  ownerId,
  queryParams,
  searchableFields = []
) => {
  const {
    search = "",
    page = 1,
    limit = 10,
    sort = "-createdAt",
    ...filters
  } = queryParams;

  const filter = {
    owner: ownerId,
  };

  // Search
  if (search && searchableFields.length > 0) {
    filter.$or = searchableFields.map((field) => ({
      [field]: {
        $regex: search,
        $options: "i",
      },
    }));
  }

  // Dynamic Filters
  Object.keys(filters).forEach((key) => {
    if (filters[key] !== "") {
      filter[key] = filters[key];
    }
  });

  const query = Model.find(filter)
    .sort(sort)
    .skip((Number(page) - 1) * Number(limit))
    .limit(Number(limit));

  return {
    query,
    filter,
    page: Number(page),
    limit: Number(limit),
  };
};