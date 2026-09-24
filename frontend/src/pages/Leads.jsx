import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getLeads,
  createLead,
  updateLead,
  deleteLead,
} from "../api/leadApi";
import { getCustomers } from "../api/customerApi";
import {
  MdAdd,
  MdSearch,
  MdClose,
  MdEdit,
  MdDelete,
  MdFilterList,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

const statusBadges = {
  New: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/50",
  Contacted:
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/50",
  Qualified:
    "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/50",
  Won: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50",
  Lost: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/50",
};

const priorityBadges = {
  High: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  Medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Low: "bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-slate-300",
};

export default function Leads() {
   const [searchParams, setSearchParams] = useSearchParams();
  // Data states
  const [leads, setLeads] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    total: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");

  // Filter states
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [page, setPage] = useState(1);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState("");

  // Delete dialog states
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    customer: "",
    source: "Website",
    status: "New",
    priority: "Medium",
    notes: "",
  });

  const fetchLeadsList = useCallback(async () => {
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

      const response = await getLeads(params);
      setLeads(response.data?.leads || []);
      if (response.data?.pagination) {
        setPagination(response.data.pagination);
      }
    } catch (err) {
      console.error("Error loading leads:", err);
      setError(
        err.response?.data?.message || "Failed to load leads from server."
      );
    } finally {
      setLoading(false);
    }
  }, [page, search, statusFilter, priorityFilter]);

  useEffect(() => {
    fetchLeadsList();
  }, [fetchLeadsList]);

  // Load customer options for create/edit lead modal
  useEffect(() => {
    async function loadCustomers() {
      try {
        const res = await getCustomers({ limit: 100 });
        setCustomers(res.data?.customers || []);
      } catch (err) {
        console.error("Failed to load customer dropdown items", err);
      }
    }
    loadCustomers();
  }, []);
 useEffect(() => {
  if (searchParams.get("action") === "create") {
    openCreateModal();
    setSearchParams({});
  }
}, [searchParams, customers, setSearchParams]);

  function openCreateModal() {
    setEditingLead(null);
    setFormData({
      customer: customers[0]?._id || "",
      source: "Website",
      status: "New",
      priority: "Medium",
      notes: "",
    });
    setModalError("");
    setIsModalOpen(true);
  }

  function openEditModal(lead) {
    setEditingLead(lead);
    setFormData({
      customer: lead.customer?._id || lead.customer || "",
      source: lead.source || "Website",
      status: lead.status || "New",
      priority: lead.priority || "Medium",
      notes: lead.notes || "",
    });
    setModalError("");
    setIsModalOpen(true);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!formData.customer) {
      setModalError("Please select an associated customer.");
      return;
    }

    try {
      setModalLoading(true);
      setModalError("");

      if (editingLead) {
        await updateLead(editingLead._id, formData);
        setFeedback("Lead updated successfully!");
      } else {
        await createLead(formData);
        setFeedback("Lead created successfully!");
      }

      setIsModalOpen(false);
      fetchLeadsList();
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
      await deleteLead(deleteTarget._id);
      setFeedback("Lead deleted successfully.");
      setDeleteTarget(null);
      fetchLeadsList();
      setTimeout(() => setFeedback(""), 3500);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete lead.");
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
            Leads Pipeline
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Track and qualify potential sales opportunities across all channels.
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
          Add Lead
        </button>
      </div>

      {/* Feedback Messages */}
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
            onClick={fetchLeadsList}
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
            placeholder="Search leads by customer, source, or notes..."
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

        {/* Status Filter */}
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
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
          </select>
          <MdFilterList
            size={18}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>

        {/* Priority Filter */}
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

      {/* Leads Table Content */}
      {loading ? (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-slate-100 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="h-6 w-44 bg-slate-200 dark:bg-zinc-800 rounded animate-pulse" />
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="h-14 bg-slate-100 dark:bg-zinc-800/60 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      ) : leads.length === 0 ? (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-12 border border-slate-100 dark:border-zinc-800 shadow-sm text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 dark:bg-zinc-800 dark:text-purple-400 text-2xl">
            🎯
          </div>
          <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
            No Leads Found
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Create a new lead or adjust your active filters to see opportunities.
          </p>
        </div>
      ) : (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200/80 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-950/40 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-6">Customer / Opportunity</th>
                  <th className="py-4 px-6">Source</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6">Priority</th>
                  <th className="py-4 px-6">Notes</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/80 text-sm">
                {leads.map((lead) => {
                  const customerName = lead.customer?.name || "Unassigned Customer";
                  const customerEmail = lead.customer?.email || "";
                  const badgeClass =
                    statusBadges[lead.status] || statusBadges.New;
                  const priorityClass =
                    priorityBadges[lead.priority] || priorityBadges.Medium;

                  return (
                    <tr
                      key={lead._id}
                      className="hover:bg-slate-50/80 dark:hover:bg-zinc-800/50 transition-colors"
                    >
                      {/* Customer Info */}
                      <td className="py-4 px-6">
                        <div className="font-semibold text-slate-900 dark:text-white">
                          {customerName}
                        </div>
                        {customerEmail && (
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {customerEmail}
                          </div>
                        )}
                      </td>

                      {/* Source */}
                      <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300">
                          {lead.source}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badgeClass}`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
                          {lead.status}
                        </span>
                      </td>

                      {/* Priority */}
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold ${priorityClass}`}
                        >
                          {lead.priority || "Medium"}
                        </span>
                      </td>

                      {/* Notes */}
                      <td className="py-4 px-6 text-slate-500 dark:text-slate-400 max-w-xs truncate text-xs">
                        {lead.notes || "—"}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => openEditModal(lead)}
                            className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition"
                            title="Edit Lead"
                          >
                            <MdEdit size={18} />
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeleteTarget(lead)}
                            className="p-2 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition"
                            title="Delete Lead"
                          >
                            <MdDelete size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Page <strong>{pagination.page}</strong> of{" "}
            <strong>{pagination.totalPages}</strong> ({pagination.total} leads)
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
                {editingLead ? "Edit Lead Opportunity" : "Create New Lead"}
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

              {/* Customer selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Customer / Contact *
                </label>
                {customers.length === 0 ? (
                  <p className="text-xs text-amber-600">
                    No customers available. Please create a customer first in the Customers section.
                  </p>
                ) : (
                  <select
                    value={formData.customer}
                    onChange={(e) =>
                      setFormData({ ...formData, customer: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select customer...</option>
                    {customers.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.name} {c.company ? `(${c.company})` : ""} - {c.email}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Source & Priority */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Source
                  </label>
                  <select
                    value={formData.source}
                    onChange={(e) =>
                      setFormData({ ...formData, source: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Website">Website</option>
                    <option value="Referral">Referral</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Other">Other</option>
                  </select>
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

              {/* Status */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Lead Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Won">Won</option>
                  <option value="Lost">Lost</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Notes & Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Requirement details, budget, timeline..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
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
                  disabled={modalLoading || customers.length === 0}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition disabled:opacity-60 shadow-sm"
                >
                  {modalLoading
                    ? "Saving..."
                    : editingLead
                    ? "Update Lead"
                    : "Create Lead"}
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
              Delete Lead?
            </h3>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Are you sure you want to delete this lead for{" "}
              <strong>{deleteTarget.customer?.name || "this customer"}</strong>?
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