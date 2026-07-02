import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // UI State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      // Save Logged-in User
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.data)
      );

      navigate("/dashboard", { replace: true });

    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex items-center justify-center
      bg-gradient-to-br
      from-slate-100
      to-white
      dark:from-zinc-950
      dark:to-zinc-900
      px-6
    "
    >
      <div
        className="
        bg-white
        dark:bg-zinc-900
        w-full
        max-w-[450px]
        rounded-3xl
        shadow-sm
        border
        border-slate-100
        dark:border-zinc-800
        p-10
      "
      >
        {/* Header */}

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Login
          </h1>

          <Link
            to="/"
            className="
            text-blue-700
            hover:text-blue-800
            font-medium
          "
          >
            ← Home
          </Link>
        </div>

        {/* Email */}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
          w-full
          border
          border-slate-200
          dark:border-zinc-700
          bg-white
          dark:bg-zinc-800
          text-slate-900
          dark:text-white
          p-4
          rounded-xl
          mb-5
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
        />

        {/* Password */}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
          w-full
          border
          border-slate-200
          dark:border-zinc-700
          bg-white
          dark:bg-zinc-800
          text-slate-900
          dark:text-white
          p-4
          rounded-xl
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
        />

        {/* Error */}

        {error && (
          <div
            className="
            mt-4
            p-3
            rounded-lg
            bg-red-100
            text-red-700
            text-sm
          "
          >
            {error}
          </div>
        )}

        {/* Button */}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="
          w-full
          mt-8
          bg-blue-700
          text-white
          p-4
          rounded-xl
          font-medium
          hover:bg-blue-800
          transition
          disabled:opacity-60
        "
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Footer */}

        <p className="mt-6 text-center text-gray-500 text-sm">
          Secure Login • MiniVel CRM
        </p>
      </div>
    </div>
  );
}