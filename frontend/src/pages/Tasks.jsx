import { useEffect, useState, useCallback } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../api/taskApi";
import { getCustomers } from "../api/customerApi";
import {
  MdAdd,
  MdSearch,
  MdClose,
  MdEdit,
  MdDelete,
  MdCheckCircle,
  MdRadioButtonUnchecked,
  MdCalendarToday,
  MdFilterList,
  MdChevronLeft,
  MdChevronRight,
  MdPerson,
} from "react-icons/md";

const statusBadges = {
  Pending:
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/50",
  "In Progress":
    "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/50",
  Completed:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50",
};

const priorityBadges = {
  High: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  Medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Low: "bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-slate-300",
};

export default function Tasks() {
  // Data states
  const [tasks, setTasks] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    total: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");

  // Filters
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [page, setPage] = useState(1);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState("");

  // Delete
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Form
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: new Date().toISOString().split("T")[0],
    priority: "Medium",
    status: "Pending",
    customer: "",
  });

  const fetchTasksList = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const params = {
        page,
        limit: 10,
      };
      if (search.trim()) params.search = search.trim();
      if (statusFilter) params.status = statusFilter;
      if (priorityFilter) params.priority = priorityFilter;

      const response = await getTasks(params);
      setTasks(response.data?.tasks || []);
      if (response.data?.pagination) {
        setPagination(response.data.pagination);
      }
    } catch (err) {
      console.error("Error loading tasks:", err);
      setError(
        err.response?.data?.message || "Failed to load tasks from server."
      );
    } finally {
      setLoading(false);
    }
  }, [page, search, statusFilter, priorityFilter]);

  useEffect(() => {
    fetchTasksList();
  }, [fetchTasksList]);

  // Load customer options for task dropdown
  useEffect(() => {
    async function loadCustomers() {
      try {
        const res = await getCustomers({ limit: 100 });
        setCustomers(res.data?.customers || []);
      } catch (err) {
        console.error("Failed to load customers for tasks", err);
      }
    }
    loadCustomers();
  }, []);

  function openCreateModal() {
    setEditingTask(null);
    setFormData({
      title: "",
      description: "",
      dueDate: new Date().toISOString().split("T")[0],
      priority: "Medium",
      status: "Pending",
      customer: "",
    });
    setModalError("");
    setIsModalOpen(true);
  }

  function openEditModal(task) {
    setEditingTask(task);
    const dateFormatted = task.dueDate
      ? new Date(task.dueDate).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0];

    setFormData({
      title: task.title || "",
      description: task.description || "",
      dueDate: dateFormatted,
      priority: task.priority || "Medium",
      status: task.status || "Pending",
      customer: task.customer?._id || task.customer || "",
    });
    setModalError("");
    setIsModalOpen(true);
  }

  async function handleToggleStatus(task) {
    try {
      const nextStatus =
        task.status === "Completed" ? "Pending" : "Completed";
      await updateTask(task._id, { status: nextStatus });
      fetchTasksList();
    } catch (err) {
      alert("Failed to update task status.");
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!formData.title || !formData.dueDate) {
      setModalError("Please provide both Task Title and Due Date.");
      return;
    }

    try {
      setModalLoading(true);
      setModalError("");

      const payload = {
        title: formData.title,
        description: formData.description,
        dueDate: formData.dueDate,
        priority: formData.priority,
        status: formData.status,
      };
      if (formData.customer) {
        payload.customer = formData.customer;
      }

      if (editingTask) {
        await updateTask(editingTask._id, payload);
        setFeedback("Task updated successfully!");
      } else {
        await createTask(payload);
        setFeedback("Task created successfully!");
      }

      setIsModalOpen(false);
      fetchTasksList();
      setTimeout(() => setFeedback(""), 3500);
    } catch (err) {
      setModalError(
        err.response?.data?.message || "Operation failed. Please try again."
      );
    } finally {
      setModalLoading(false);
    }
  }

  async function handleDeleteConfirm() {
    if (!deleteTarget) return;

    try {
      setDeleteLoading(true);
      await deleteTask(deleteTarget._id);
      setFeedback("Task deleted successfully.");
      setDeleteTarget(null);
      fetchTasksList();
      setTimeout(() => setFeedback(""), 3500);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete task.");
    } finally {
      setDeleteLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            Tasks & Action Items
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Keep track of deliverables, follow-ups, and customer commitments.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          className="
            inline-flex items-center justify-center gap-2
            rounded-xl bg-blue-600 px-5 py-3
            font-semibold text-white text-sm
            shadow-sm transition hover:bg-blue-700
            active:translate-y-0.5
          "
        >
          <MdAdd size={20} />
          Add Task
        </button>
      </div>

      {/* Alerts */}
      {feedback && (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800/40 p-4 text-emerald-800 dark:text-emerald-300 text-sm font-semibold flex items-center justify-between">
          <span>✓ {feedback}</span>
          <button
            type="button"
            onClick={() => setFeedback("")}
            className="text-emerald-700 hover:text-emerald-900"
          >
            ×
          </button>
        </div>
      )}

      {error && (
        <div className="rounded-2xl bg-red-50 border border-red-200 dark:bg-red-950/40 dark:border-red-800/40 p-4 text-red-700 dark:text-red-300 text-sm flex items-center justify-between">
          <span>{error}</span>
          <button
            type="button"
            onClick={fetchTasksList}
            className="underline font-semibold ml-2 hover:text-red-900"
          >
            Retry
          </button>
        </div>
      )}

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <MdSearch
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search tasks by title..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="
              w-full rounded-2xl border border-slate-200 dark:border-zinc-700
              bg-white dark:bg-zinc-900 py-3 pl-11 pr-4
              text-sm text-slate-900 dark:text-white
              outline-none placeholder:text-slate-400
              focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
              transition
            "
          />
        </div>

        {/* Status Dropdown */}
        <div className="relative shrink-0">
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            className="
              appearance-none w-full sm:w-40 rounded-2xl
              border border-slate-200 dark:border-zinc-700
              bg-white dark:bg-zinc-900 py-3 pl-4 pr-10
              text-sm font-medium text-slate-700 dark:text-slate-200
              outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
              transition
            "
          >
            <option value="">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <MdFilterList
            size={18}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>

        {/* Priority Dropdown */}
        <div className="relative shrink-0">
          <select
            value={priorityFilter}
            onChange={(e) => {
              setPriorityFilter(e.target.value);
              setPage(1);
            }}
            className="
              appearance-none w-full sm:w-36 rounded-2xl
              border border-slate-200 dark:border-zinc-700
              bg-white dark:bg-zinc-900 py-3 pl-4 pr-10
              text-sm font-medium text-slate-700 dark:text-slate-200
              outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
              transition
            "
          >
            <option value="">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <MdFilterList
            size={18}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>
      </div>

      {/* Task List Content */}
      {loading ? (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-slate-100 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="h-6 w-44 bg-slate-200 dark:bg-zinc-800 rounded animate-pulse" />
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="h-16 bg-slate-100 dark:bg-zinc-800/60 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      ) : tasks.length === 0 ? (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-12 border border-slate-100 dark:border-zinc-800 shadow-sm text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 dark:bg-zinc-800 dark:text-amber-400 text-2xl">
            📋
          </div>
          <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
            No Tasks Found
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            You are all caught up! Create a new task to stay organized.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => {
            const isCompleted = task.status === "Completed";
            const dueDateObj = task.dueDate ? new Date(task.dueDate) : null;
            const isOverdue =
              dueDateObj &&
              dueDateObj < new Date() &&
              task.status !== "Completed";

            const formattedDate = dueDateObj
              ? dueDateObj.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "No date";

            const badgeClass =
              statusBadges[task.status] || statusBadges.Pending;
            const priorityClass =
              priorityBadges[task.priority] || priorityBadges.Medium;

            return (
              <div
                key={task._id}
                className={`
                  flex flex-col sm:flex-row sm:items-center justify-between gap-4
                  p-5 rounded-2xl border transition-all duration-200
                  ${
                    isCompleted
                      ? "bg-slate-50/70 border-slate-200/60 dark:bg-zinc-900/40 dark:border-zinc-800/50 opacity-75"
                      : "bg-white border-slate-100 shadow-sm hover:border-slate-200 dark:bg-zinc-900 dark:border-zinc-800"
                  }
                `}
              >
                {/* Left: Checkbox + Title + Info */}
                <div className="flex items-start gap-3.5 min-w-0 flex-1">
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(task)}
                    className="mt-0.5 text-slate-400 hover:text-emerald-600 transition shrink-0"
                    title={
                      isCompleted
                        ? "Mark as Pending"
                        : "Mark as Completed"
                    }
                  >
                    {isCompleted ? (
                      <MdCheckCircle
                        size={22}
                        className="text-emerald-600 dark:text-emerald-400"
                      />
                    ) : (
                      <MdRadioButtonUnchecked size={22} />
                    )}
                  </button>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={`font-semibold text-sm sm:text-base break-words ${
                        isCompleted
                          ? "line-through text-slate-400 dark:text-zinc-500"
                          : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {task.title}
                    </h3>

                    {task.description && (
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                        {task.description}
                      </p>
                    )}

                    {/* Metadata tags */}
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      {/* Due date */}
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-md ${
                          isOverdue
                            ? "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400 font-semibold"
                            : "bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-slate-300"
                        }`}
                      >
                        <MdCalendarToday size={12} />
                        {formattedDate} {isOverdue && "(Overdue)"}
                      </span>

                      {/* Customer relation */}
                      {task.customer && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">
                          <MdPerson size={12} />
                          {task.customer.name || "Customer"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Badges & Action Buttons */}
                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-0 border-slate-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    {/* Status Badge */}
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${badgeClass}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
                      {task.status}
                    </span>

                    {/* Priority Badge */}
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-semibold ${priorityClass}`}
                    >
                      {task.priority || "Medium"}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => openEditModal(task)}
                      className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition"
                      title="Edit Task"
                    >
                      <MdEdit size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeleteTarget(task)}
                      className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition"
                      title="Delete Task"
                    >
                      <MdDelete size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Page <strong>{pagination.page}</strong> of{" "}
            <strong>{pagination.totalPages}</strong> ({pagination.total} tasks)
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={page <= 1 || loading}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="p-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-300 disabled:opacity-40 hover:bg-slate-50 transition"
            >
              <MdChevronLeft size={20} />
            </button>
            <span className="text-xs font-semibold px-2 text-slate-700 dark:text-slate-300">
              {pagination.page}
            </span>
            <button
              type="button"
              disabled={page >= pagination.totalPages || loading}
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, pagination.totalPages))
              }
              className="p-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-300 disabled:opacity-40 hover:bg-slate-50 transition"
            >
              <MdChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Create / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-zinc-900 p-6 sm:p-8 border border-slate-100 dark:border-zinc-800 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {editingTask ? "Edit Task" : "Create New Task"}
              </h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-zinc-800 transition"
              >
                <MdClose size={20} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="mt-5 space-y-4">
              {modalError && (
                <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                  {modalError}
                </div>
              )}

              {/* Title */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Task Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Follow up on proposal contract"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Additional context or notes..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Due Date & Priority */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Due Date *
                  </label>
                  <input
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) =>
                      setFormData({ ...formData, dueDate: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Priority
                  </label>
                  <select
                    value={formData.priority}
                    onChange={(e) =>
                      setFormData({ ...formData, priority: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              {/* Status & Customer Assignment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Related Customer (Optional)
                  </label>
                  <select
                    value={formData.customer}
                    onChange={(e) =>
                      setFormData({ ...formData, customer: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">None / Internal</option>
                    {customers.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={modalLoading}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition disabled:opacity-60 shadow-sm"
                >
                  {modalLoading
                    ? "Saving..."
                    : editingTask
                    ? "Update Task"
                    : "Create Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-3xl bg-white dark:bg-zinc-900 p-6 border border-slate-100 dark:border-zinc-800 shadow-2xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-950/40 text-xl mb-4">
              ⚠️
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Delete Task?
            </h3>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Are you sure you want to delete <strong>{deleteTarget.title}</strong>?
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={deleteLoading}
                onClick={handleDeleteConfirm}
                className="px-4 py-2.5 rounded-xl bg-red-600 text-xs font-semibold text-white hover:bg-red-700 transition disabled:opacity-60 shadow-sm"
              >
                {deleteLoading ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}