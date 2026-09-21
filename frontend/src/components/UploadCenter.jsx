import { useEffect, useState } from "react";
import {
  FaCloudUploadAlt,
  FaFile,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

export default function UploadCenter() {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("minivel_uploads");

    if (saved) {
      try {
        setFiles(JSON.parse(saved));
      } catch {
        setFiles([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "minivel_uploads",
      JSON.stringify(files)
    );
  }, [files]);

  function createItems(selected) {
    return Array.from(selected).map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      preview: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : null,
      progress: 0,
    }));
  }

  function handleFiles(selected) {
    if (!selected?.length) return;

    setFiles((prev) => [
      ...prev,
      ...createItems(selected),
    ]);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);

    handleFiles(e.dataTransfer.files);
  }

  function removeFile(id) {
    setFiles((prev) =>
      prev.filter((file) => file.id !== id)
    );
  }

  function simulateUpload(id) {
    const interval = setInterval(() => {
      setFiles((prev) =>
        prev.map((file) => {
          if (file.id !== id) return file;

          const next = Math.min(
            file.progress + 10,
            100
          );

          return {
            ...file,
            progress: next,
          };
        })
      );
    }, 200);

    setTimeout(() => clearInterval(interval), 2200);
  }

  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-200/80
      bg-white
      p-6
      shadow-sm
      dark:border-zinc-800
      dark:bg-zinc-900
      "
    >
      {/* Header */}

      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-indigo-100
          text-indigo-600
          dark:bg-indigo-900/30
          dark:text-indigo-400
          "
        >
          <FaCloudUploadAlt />
        </div>

        <div>
          <h2
            className="
            text-xl
            font-black
            tracking-tight
            text-slate-900
            dark:text-white
            "
          >
            Upload Center
          </h2>

          <p
            className="
            mt-1
            text-sm
            leading-5
            text-slate-500
            dark:text-slate-400
            "
          >
            Upload and manage your CRM documents.
          </p>
        </div>
      </div>

      {/* Drop Area */}

      <label
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`
          mt-5
          block
          cursor-pointer
          rounded-2xl
          border-2
          border-dashed
          p-6
          text-center
          transition-all
          duration-200
          sm:mt-6
          sm:p-8
          ${
            dragging
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/10"
              : "border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50/50 dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
          }
        `}
      >
        <div
          className="
          mx-auto
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-2xl
          bg-white
          text-blue-600
          shadow-sm
          dark:bg-zinc-900
          dark:text-blue-400
          sm:h-12
          sm:w-12
          "
        >
          <FaCloudUploadAlt size={20} />
        </div>

        <p
          className="
          mt-4
          font-semibold
          text-slate-700
          dark:text-slate-200
          "
        >
          {dragging
            ? "Drop your files here"
            : "Drag files here or click to browse"}
        </p>

        <p
          className="
          mt-1
          text-xs
          text-slate-400
          "
        >
          Upload documents and images
        </p>

        <input
          type="file"
          multiple
          onChange={(e) =>
            handleFiles(e.target.files)
          }
          className="hidden"
        />
      </label>

      {/* Empty State */}

      {files.length === 0 && (
        <div
          className="
          mt-5
          rounded-2xl
          border
          border-dashed
          border-slate-200
          px-5
          py-6
          text-center
          dark:border-zinc-800
          "
        >
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            No files uploaded yet
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Your uploaded files will appear here.
          </p>
        </div>
      )}

      {/* File List */}

      {files.length > 0 && (
        <div className="mt-5 space-y-3 sm:mt-6">
          {files.map((file) => (
            <div
              key={file.id}
              className="
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-3.5
              dark:border-zinc-800
              dark:bg-zinc-800/60
              sm:p-4
              "
            >
              {/* File Info */}

              <div className="flex items-center gap-3">

                {/* Preview / Icon */}

                {file.preview ? (
                  <img
                    src={file.preview}
                    alt={file.name}
                    className="
                    h-10
                    w-10
                    shrink-0
                    rounded-xl
                    object-cover
                    sm:h-11
                    sm:w-11
                    "
                  />
                ) : (
                  <div
                    className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-100
                    text-blue-600
                    dark:bg-blue-900/30
                    dark:text-blue-400
                    sm:h-11
                    sm:w-11
                    "
                  >
                    <FaFile />
                  </div>
                )}

                {/* Name */}

                <div className="min-w-0 flex-1">
                  <p
                    className="
                    truncate
                    text-sm
                    font-semibold
                    text-slate-800
                    dark:text-slate-200
                    "
                  >
                    {file.name}
                  </p>

                  <p
                    className="
                    mt-0.5
                    text-xs
                    text-slate-400
                    "
                  >
                    {Math.round(file.size / 1024)} KB
                  </p>
                </div>

                {/* Completed */}

                {file.progress === 100 && (
                  <FaCheckCircle
                    className="shrink-0 text-emerald-500"
                    size={17}
                  />
                )}
              </div>

              {/* Actions */}

              <div className="mt-3 flex items-center gap-2 sm:mt-4">
                {file.progress < 100 && (
                  <button
                    type="button"
                    onClick={() =>
                      simulateUpload(file.id)
                    }
                    className="
                    flex-1
                    rounded-xl
                    bg-blue-600
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                    "
                  >
                    Upload
                  </button>
                )}

                <button
                  type="button"
                  onClick={() =>
                    removeFile(file.id)
                  }
                  className="
                  rounded-xl
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-red-500
                  transition
                  hover:bg-red-50
                  hover:text-red-600
                  dark:hover:bg-red-900/20
                  "
                >
                  <FaTimes />
                </button>
              </div>

              {/* Progress */}

              {file.progress > 0 && (
                <div className="mt-4">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Uploading
                    </span>

                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      {file.progress}%
                    </span>
                  </div>

                  <div
                    className="
                    h-2
                    overflow-hidden
                    rounded-full
                    bg-slate-200
                    dark:bg-zinc-700
                    "
                  >
                    <div
                      className="
                      h-full
                      rounded-full
                      bg-blue-600
                      transition-all
                      duration-200
                      "
                      style={{
                        width: `${file.progress}%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}