import { useEffect, useState } from "react";

import CustomerTable from "../components/CustomerTable";

import { getCustomers } from "../api/customerApi";

export default function Customers() {
  // ==============================
  // State
  // ==============================

  const [customers, setCustomers] = useState([]);

  const [pagination, setPagination] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  // ==============================
  // Fetch Customers
  // ==============================

  useEffect(() => {
    fetchCustomers();
  }, []);

  async function fetchCustomers() {
    try {
      setLoading(true);
      setError("");

      const response =
        await getCustomers();

      setCustomers(
        response.data?.customers || []
      );

      setPagination(
        response.data?.pagination || null
      );
    } catch (err) {
      console.error(err);

      setError(
        "Failed to load customers."
      );
    } finally {
      setLoading(false);
    }
  }

  // ==============================
  // UI
  // ==============================

  return (
    <div
      className="
      min-h-screen
      bg-slate-50
      dark:bg-zinc-950
      transition
      p-6
      md:p-8
      xl:p-10
    "
    >
      {/* Header */}

      <div
        className="
        flex
        justify-between
        items-center
        mb-8
      "
      >
        <div>
          <h1
            className="
            text-4xl
            font-bold
            text-slate-900
            dark:text-white
          "
          >
            Customers
          </h1>

          <p
            className="
            mt-2
            text-slate-500
            dark:text-slate-400
          "
          >
            Manage all your customers.
          </p>
        </div>

        <button
          className="
          bg-blue-600
          hover:bg-blue-700
          transition
          text-white
          px-6
          py-3
          rounded-xl
          font-medium
        "
        >
          + Add Customer
        </button>
      </div>

      {/* Error */}

      {error && (
        <div
          className="
          bg-red-100
          text-red-700
          rounded-xl
          p-4
          mb-6
        "
        >
          {error}
        </div>
      )}

      {/* Customer Table */}

      <CustomerTable
        customers={customers}
        loading={loading}
      />
    </div>
  );
}