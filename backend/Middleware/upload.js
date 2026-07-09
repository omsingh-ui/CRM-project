import multer from "multer";
import fs from "fs";
import path from "path";

// =====================================
// Create Folder If Not Exists
// =====================================

const ensureDirectory = (folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
};

// =====================================
// Storage Factory
// =====================================

const createStorage = (folder) => {
  ensureDirectory(folder);

  return multer.diskStorage({
    destination(req, file, cb) {
      cb(null, folder);
    },

    filename(req, file, cb) {
      const unique =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9);

      cb(
        null,
        unique + path.extname(file.originalname)
      );
    },
  });
};

// =====================================
// Image Filter
// =====================================

const imageFilter = (req, file, cb) => {
  const allowed = [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
  ];

  const ext = path
    .extname(file.originalname)
    .toLowerCase();

  if (!allowed.includes(ext)) {
    return cb(
      new Error("Only image files are allowed.")
    );
  }

  cb(null, true);
};

// =====================================
// Document Filter
// =====================================

const documentFilter = (req, file, cb) => {
  const allowed = [
    ".jpg",
    ".jpeg",
    ".png",
    ".pdf",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
  ];

  const ext = path
    .extname(file.originalname)
    .toLowerCase();

  if (!allowed.includes(ext)) {
    return cb(
      new Error("Unsupported file type.")
    );
  }

  cb(null, true);
};

// =====================================
// Customer Upload
// =====================================

export const uploadCustomerImage =
  multer({
    storage: createStorage(
      "uploads/customers"
    ),
    limits: {
      fileSize: 5 * 1024 * 1024,
    },
    fileFilter: imageFilter,
  });

// =====================================
// Lead Upload
// =====================================

export const uploadLeadAttachments =
  multer({
    storage: createStorage(
      "uploads/leads"
    ),
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
    fileFilter: documentFilter,
  });

// =====================================
// Task Upload
// =====================================

export const uploadTaskAttachments =
  multer({
    storage: createStorage(
      "uploads/tasks"
    ),
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
    fileFilter: documentFilter,
  });