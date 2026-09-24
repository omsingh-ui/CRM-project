import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import CustomerTable from "../components/CustomerTable";
import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../api/customerApi";
import {
  MdAdd,
  MdSearch,
  MdClose,
  MdChevronLeft,
  MdChevronRight,
  MdFilterList,
} from "react-icons/md";

export default function Customers() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Data states
  const [customers, setCustomers] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCustomers: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");

  // Filter states
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState("");

  // Delete dialog states
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    status: "Lead",
  });

  const fetchCustomersList = useCallback(
    async (currentPage = page, currentSearch = search, currentStatus = statusFilter) => {
      try {
        setLoading(true);
        setError("");

        const params = {
          page: currentPage,
          limit: 10,
        };
        if (currentSearch.trim()) params.search = currentSearch.trim();
        if (currentStatus) params.status = currentStatus;

        const response = await getCustomers(params);
        setCustomers(response.data?.customers || []);
        if (response.data?.pagination) {
          setPagination(response.data.pagination);
        }
      } catch (err) {
        console.error("Error fetching customers:", err);
        setError(
          err.response?.data?.message || "Failed to load customers from server."
        );
      } finally {
        setLoading(false);
      }
    },
    [page, search, statusFilter]
  );

  useEffect(() => {
    fetchCustomersList(page, search, statusFilter);
  }, [fetchCustomersList, page, search, statusFilter]);

  // Open modal if URL has ?create=true
  useEffect(() => {
    if (searchParams.get("create") === "true") {
      openCreateModal();
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  function openCreateModal() {
    setEditingCustomer(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      status: "Lead",
    });
    setModalError("");
    setIsModalOpen(true);
  }

  function openEditModal(customer) {
    setEditingCustomer(customer);
    setFormData({
      name: customer.name || "",
      email: customer.email || "",
      phone: customer.phone || "",
      company: customer.company || "",
      status: customer.status || "Lead",
    });
    setModalError("");
    setIsModalOpen(true);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setModalError("Please provide Name, Email, and Phone number.");
      return;
    }

    try {
      setModalLoading(true);
      setModalError("");

      if (editingCustomer) {
        await updateCustomer(editingCustomer._id, formData);
        setFeedback("Customer updated successfully!");
      } else {
        await createCustomer(formData);
        setFeedback("Customer created successfully!");
      }

      setIsModalOpen(false);
      fetchCustomersList(page, search, statusFilter);
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
      await deleteCustomer(deleteTarget._id);
      setFeedback(`Customer '${deleteTarget.name}' deleted.`);
      setDeleteTarget(null);
      fetchCustomersList(page, search, statusFilter);
      setTimeout(() => setFeedback(""), 3500);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete customer.");
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
            Customers
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage, search, and organize your client directory.
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
          Add Customer
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
            onClick={() => fetchCustomersList(page, search, statusFilter)}
            className="underline font-semibold ml-2 hover:text-red-900"
          >
            Retry
          </button>
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <MdSearch
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search customers by name, email, or company..."
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
              appearance-none w-full sm:w-44 rounded-2xl
              border border-slate-200 dark:border-zinc-700
              bg-white dark:bg-zinc-900 py-3 pl-4 pr-10
              text-sm font-medium text-slate-700 dark:text-slate-200
              outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
              transition
            "
          >
            <option value="">All Statuses</option>
            <option value="Lead">Lead</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <MdFilterList
            size={18}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>
      </div>

      {/* Customer Table */}
      <CustomerTable
        customers={customers}
        loading={loading}
        onEdit={openEditModal}
        onDelete={(customer) => setDeleteTarget(customer)}
      />

      {/* Pagination Controls */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Showing Page <strong>{pagination.currentPage}</strong> of{" "}
            <strong>{pagination.totalPages}</strong> (
            {pagination.totalCustomers} total)
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={page <= 1 || loading}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="
                p-2 rounded-xl border border-slate-200 dark:border-zinc-700
                bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-300
                disabled:opacity-40 disabled:cursor-not-allowed
                hover:bg-slate-50 dark:hover:bg-zinc-800 transition
              "
              aria-label="Previous page"
            >
              <MdChevronLeft size={20} />
            </button>

            <span className="text-xs font-semibold px-2 text-slate-700 dark:text-slate-300">
              {pagination.currentPage}
            </span>

            <button
              type="button"
              disabled={page >= pagination.totalPages || loading}
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, pagination.totalPages))
              }
              className="
                p-2 rounded-xl border border-slate-200 dark:border-zinc-700
                bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-300
                disabled:opacity-40 disabled:cursor-not-allowed
                hover:bg-slate-50 dark:hover:bg-zinc-800 transition
              "
              aria-label="Next page"
            >
              <MdChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Create / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-zinc-900 p-6 sm:p-8 border border-slate-100 dark:border-zinc-800 shadow-2xl animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {editingCustomer ? "Edit Customer" : "Add New Customer"}
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

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Status */}
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
                  <option value="Lead">Lead</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-zinc-800 transition"
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
                    : editingCustomer
                    ? "Update Customer"
                    : "Create Customer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-3xl bg-white dark:bg-zinc-900 p-6 border border-slate-100 dark:border-zinc-800 shadow-2xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-950/40 text-xl mb-4">
              ⚠️
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Delete Customer?
            </h3>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Are you sure you want to delete <strong>{deleteTarget.name}</strong>? This action cannot be undone.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-zinc-800 transition"
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